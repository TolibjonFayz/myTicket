import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { UpdateAdminDto } from './dto/updateAdmin.dto';
import { Response } from 'express';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginAdminDto } from './dto/login-admin.dto';

@Injectable()
export class AddminService {
  constructor(
    @InjectModel(Admin) private AdminRepository: typeof Admin,
    private readonly jwtService: JwtService,
  ) {}

  //Create admin
  async createAdmin(createAdminDto: CreateAdminDto): Promise<Admin> {
    const admin = await this.AdminRepository.create(createAdminDto);
    return admin;
  }

  //Get all bookings
  async getAllAdmins() {
    const admins = await this.AdminRepository.findAll();
    return admins;
  }

  //Get admin by id
  async getAdminById(id: number) {
    const admin = await this.AdminRepository.findOne({ where: { id } });
    return admin;
  }

  //Update admin by id
  async updateAdmin(
    id: number,
    updateAdminDto: UpdateAdminDto,
  ): Promise<Admin> {
    const admin = await this.AdminRepository.update(updateAdminDto, {
      where: { id },
      returning: true,
    });
    return admin[1][0].dataValues;
  }

  //Delete admin by id
  async deleteAdmin(id: number): Promise<number> {
    const admin = await this.AdminRepository.destroy({ where: { id } });
    return admin;
  }

  //Register admin
  async registerAdmin(createadminDto: CreateAdminDto, res: Response) {
    const admin = await this.AdminRepository.findOne({
      where: { login: createadminDto.login },
    });
    if (admin) {
      throw new BadRequestException('Admin already exists');
    }
    if (createadminDto.password !== createadminDto.confirm_password) {
      throw new BadRequestException('Password does not match');
    }

    const hashed_password = await bcrypt.hash(createadminDto.password, 7);
    const newAdmin = await this.AdminRepository.create({
      ...createadminDto,
      hashed_password: hashed_password,
    });

    const tokens = await this.getTokens(newAdmin);

    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updateAdmin = await this.AdminRepository.update(
      {
        hashed_refresh_token: hashed_refresh_token,
      },
      { where: { id: newAdmin.id }, returning: true },
    );

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
    });

    const reponse = {
      message: 'Admin registered',
      admin: updateAdmin[1][0],
      tokens,
    };
    return reponse;
  }

  //Token genereatsiya qilish
  async getTokens(admin: Admin) {
    const JwtPayload = {
      id: admin.id,
      is_active: admin.is_active,
      is_creator: admin.is_creator,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(JwtPayload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(JwtPayload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  //login admin
  async loginAdmin(loginAdminDto: LoginAdminDto, res: Response) {
    const { login, password } = loginAdminDto;
    const admin = await this.AdminRepository.findOne({
      where: { login },
    });
    if (!admin) {
      throw new UnauthorizedException('Admin not authorized');
    }
    const isMatches = await bcrypt.compare(password, admin.hashed_password);
    if (!isMatches) {
      throw new UnauthorizedException('Admin not registered(pass)');
    }

    const tokens = await this.getTokens(admin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const updateAdmin = await this.AdminRepository.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: admin.id }, returning: true },
    );

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'Admin login successfully',
      admin: updateAdmin[1][0],
      tokens,
    };
    return response;
  }

  //logout admin
  async logoutAdmin(refresh_token: string, res: Response) {
    const adminData = await this.jwtService.verify(refresh_token, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!adminData) {
      throw new ForbiddenException('Admin not found');
    }
    const updateAdmin = await this.AdminRepository.update(
      { hashed_refresh_token: null },
      { where: { id: adminData.id }, returning: true },
    );

    res.clearCookie('refresh_token');
    const response = {
      message: 'Admin logged out successfully',
      user: updateAdmin[1][0],
    };
    return response;
  }

  //refresh-token admin
  async refreshToken(admin_id: number, refreshToken: string, res: Response) {
    const decodedToken = this.jwtService.decode(refreshToken);

    if (admin_id != decodedToken['id']) {
      throw new BadRequestException('admin not found(you cant do this...)');
    }

    const admin = await this.AdminRepository.findOne({
      where: { id: admin_id },
    });
    if (!admin || !admin.hashed_refresh_token) {
      throw new BadRequestException('admin not found');
    }

    const tokenMatch = await bcrypt.compare(
      refreshToken,
      admin.hashed_refresh_token,
    );

    if (!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    }
    const token = await this.getTokens(admin);
    const hashed_refresh_token = await bcrypt.hash(token.refresh_token, 7);
    const updateAdmin = await this.AdminRepository.update(
      { hashed_refresh_token: hashed_refresh_token },
      { where: { id: admin.id }, returning: true },
    );

    res.cookie('refresh_token', token.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 10000,
      httpOnly: true,
    });

    const response = {
      message: 'Admin token refreshed',
      admin: updateAdmin[1][0],
      token,
    };

    return response;
  }
}

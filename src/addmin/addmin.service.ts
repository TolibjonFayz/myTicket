import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './models/admin.model';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { UpdateAdminDto } from './dto/updateAdmin.dto';

@Injectable()
export class AddminService {
  constructor(@InjectModel(Admin) private AdminRepository: typeof Admin) {}

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

  // //Update admin by id
  // async updateAdmin(
  //   id: number,
  //   updateAdminDto: UpdateAdminDto,
  // ): Promise<Admin> {
  //   const admin = await this.AdminRepository.update(updateAdminDto, {
  //     where: { id },
  //     returning: true,
  //   });
  //   return admin[1][0].dataValues;
  // }

  //Delete admin by id
  async deleteAdmin(id: number): Promise<number> {
    const admin = await this.AdminRepository.destroy({ where: { id } });
    return admin;
  }
}

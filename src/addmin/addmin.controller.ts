import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { AddminService } from './addmin.service';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { Admin } from './models/admin.model';
import { UpdateAdminDto } from './dto/updateAdmin.dto';
import { Response } from 'express';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginAdminDto } from './dto/login-admin.dto';
import { CookieGetter } from '../decorators/cookieGetter.decorator';

@ApiTags('Admins')
@Controller('addmin')
export class AddminController {
  constructor(private readonly adminService: AddminService) {}

  //Get all admin
  @ApiOperation({ summary: 'get all admins' })
  @Get('all')
  async getAllAdmins(): Promise<Admin[]> {
    return this.adminService.getAllAdmins();
  }

  //Get admin by id
  @ApiOperation({ summary: 'get admin by id' })
  @Get(':id')
  async getAdminById(@Param('id') id: number): Promise<Admin> {
    return this.adminService.getAdminById(id);
  }

  //Update admin by id
  @ApiOperation({ summary: 'update admin by id' })
  @Put(':id')
  async updateAdminById(
    @Param('id') id: number,
    @Body() updateAdminDto: UpdateAdminDto,
  ): Promise<Admin> {
    return this.adminService.updateAdmin(+id, updateAdminDto);
  }

  //Delete admin by id
  @ApiOperation({ summary: 'delete admin by id' })
  @Delete(':id')
  async deleteAdminById(@Param('id') id: number): Promise<number> {
    return this.adminService.deleteAdmin(id);
  }

  //Register admin
  @ApiOperation({ summary: 'Register admin' })
  @Post('register')
  async registerAdmin(
    @Body() createAdminDto: CreateAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.registerAdmin(createAdminDto, res);
  }

  //Login admin
  @ApiOperation({ summary: 'Login admin' })
  @Post('login')
  async login(
    @Body() loginAdminDto: LoginAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.loginAdmin(loginAdminDto, res);
  }

  //Logout admin
  @ApiOperation({ summary: 'Logout admin' })
  @Post('logout')
  async logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.logoutAdmin(refreshToken, res);
  }

  //refresh token admin
  @ApiOperation({ summary: 'Refresh admin' })
  @Post(':id/refresh')
  refresh(
    @Param('id') id: string,
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.refreshToken(+id, refreshToken, res);
  }
}

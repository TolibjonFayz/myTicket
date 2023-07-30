import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AddminService } from './addmin.service';
import { CreateAdminDto } from './dto/createAdmin.dto';
import { Admin } from './models/admin.model';
import { UpdateAdminDto } from './dto/updateAdmin.dto';

@Controller('addmin')
export class AddminController {
  constructor(private readonly adminService: AddminService) {}

  //Create admin
  @Post('create')
  async createAdmin(@Body() createAdminDto: CreateAdminDto): Promise<Admin> {
    return this.adminService.createAdmin(createAdminDto);
  }

  //Get all admin
  @Get('all')
  async getAllAdmins(): Promise<Admin[]> {
    return this.adminService.getAllAdmins();
  }

  //Get admin by id
  @Get(':id')
  async getAdminById(@Param('id') id: number): Promise<Admin> {
    return this.adminService.getAdminById(id);
  }

  // //Update admin by id
  // @Put(':id')
  // async updateAdminById(
  //   @Param('id') id: number,
  //   @Body() updateAdminDto: UpdateAdminDto,
  // ): Promise<Admin> {
  //   return this.adminService.updateAdmin(+id, updateAdminDto);
  // }

  //Delete admin by id
  @Delete(':id')
  async deleteAdminById(@Param('id') id: number): Promise<number> {
    return this.adminService.deleteAdmin(id);
  }
}

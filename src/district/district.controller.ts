import {
  Body,
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { DistrictService } from './district.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateDistrictDto } from './dto/createDistrict.dto';
import { District } from './models/ditrict.model';
import { UpdateDistrictDto } from './dto/updateDistrickt.dto';

@Controller('district')
export class DistrictController {
  constructor(private readonly DistrictService: DistrictService) {}

  //Create district
  @ApiOperation({ summary: 'create district' })
  @Post('create')
  async createCart(
    @Body() createDistrictdto: CreateDistrictDto,
  ): Promise<District> {
    return this.DistrictService.createDistrict(createDistrictdto);
  }

  //Get all distrcit
  @ApiOperation({ summary: 'get all districts' })
  @Get('all')
  async getAllDistricts(): Promise<District[]> {
    return this.DistrictService.getAllDistricts();
  }

  //Get district by id
  @ApiOperation({ summary: 'get district by id' })
  @Get(':id')
  async getDistrcitById(@Param('id') id: number): Promise<District> {
    return this.DistrictService.getDistrictById(id);
  }

  //Update district by id
  @ApiOperation({ summary: 'update district by id' })
  @Put(':id')
  async updateDistrictById(
    @Param('id') id: number,
    @Body() updateDistrict: UpdateDistrictDto,
  ): Promise<District> {
    return this.DistrictService.updateDistrict(+id, updateDistrict);
  }

  //Delete district by id
  @ApiOperation({ summary: 'delete district by id' })
  @Delete(':id')
  async deleteDistrictById(@Param('id') id: number): Promise<number> {
    return this.DistrictService.deleteDistrict(id);
  }
}

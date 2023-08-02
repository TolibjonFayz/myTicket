import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RegionService } from './region.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateRegionDto } from './dto/createRegion.dto';
import { Region } from './models/region.model';
import { UpdateRegionDto } from './dto/updateRegion.dto';

@ApiTags('Region')
@Controller('region')
export class RegionController {
  constructor(private readonly regionService: RegionService) {}

  //Create region
  @ApiOperation({ summary: 'Create human region' })
  @Post('create')
  async createRegion(
    @Body() createRegionDto: CreateRegionDto,
  ): Promise<Region> {
    return this.regionService.createRegion(createRegionDto);
  }

  //Get all regions
  @ApiOperation({ summary: 'Get all regions' })
  @Get('all')
  async getAllRegions(): Promise<Region[]> {
    return this.regionService.getAllRegions();
  }

  //Get region by id
  @ApiOperation({ summary: 'Get region by id' })
  @Get(':id')
  async getRegionById(@Param('id') id: number): Promise<Region> {
    return this.regionService.getRegionById(id);
  }

  //Update region by id
  @ApiOperation({ summary: 'Update region by id' })
  @Put(':id')
  async updateRegionById(
    @Param('id') id: number,
    @Body() updateRegionDto: UpdateRegionDto,
  ): Promise<Region> {
    return this.regionService.updateRegion(+id, updateRegionDto);
  }

  //Delete region by id
  @ApiOperation({ summary: 'Delete region by id' })
  @Delete(':id')
  async deleteRegion(@Param('id') id: number): Promise<number> {
    return this.regionService.deleteRegion(+id);
  }
}

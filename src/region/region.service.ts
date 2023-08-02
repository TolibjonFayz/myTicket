import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './models/region.model';
import { CreateRegionDto } from './dto/createRegion.dto';
import { UpdateRegionDto } from './dto/updateRegion.dto';

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region)
    private RegionRepository: typeof Region,
  ) {}

  //Create region
  async createRegion(createRegionDto: CreateRegionDto): Promise<Region> {
    const region = await this.RegionRepository.create(createRegionDto);
    return region;
  }

  //Get all regions
  async getAllRegions() {
    const regions = await this.RegionRepository.findAll();
    return regions;
  }

  //Get region by id
  async getRegionById(id: number) {
    const region = await this.RegionRepository.findOne({
      where: { id },
    });
    return region;
  }

  //Update region by id
  async updateRegion(
    id: number,
    updateRegionDto: UpdateRegionDto,
  ): Promise<Region> {
    const region = await this.RegionRepository.update(updateRegionDto, {
      where: { id },
      returning: true,
    });
    return region[1][0].dataValues;
  }

  //Delete region by id
  async deleteRegion(id: number): Promise<number> {
    const region = await this.RegionRepository.destroy({
      where: { id },
    });
    return region;
  }
}

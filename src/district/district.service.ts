import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { District } from './models/ditrict.model';
import { CreateDistrictDto } from './dto/createDistrict.dto';
import { UpdateDistrictDto } from './dto/updateDistrickt.dto';

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District) private DistrictRepository: typeof District,
  ) {}

  //Create district
  async createDistrict(
    createDistrictDto: CreateDistrictDto,
  ): Promise<District> {
    const district = await this.DistrictRepository.create(createDistrictDto);
    return district;
  }

  //Get all district
  async getAllDistricts() {
    const districts = await this.DistrictRepository.findAll();
    return districts;
  }

  //Get district by id
  async getDistrictById(id: number) {
    const district = await this.DistrictRepository.findOne({ where: { id } });
    return district;
  }

  //Update district by id
  async updateDistrict(
    id: number,
    updateDistrictDto: UpdateDistrictDto,
  ): Promise<District> {
    const district = await this.DistrictRepository.update(updateDistrictDto, {
      where: { id },
      returning: true,
    });
    return district[1][0].dataValues;
  }

  //Delete district by id
  async deleteDistrict(id: number): Promise<number> {
    const district = await this.DistrictRepository.destroy({ where: { id } });
    return district;
  }
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Country } from './models/country.model';
import { CreateCounryDto } from './dto/createCountry.dto';
import { UpdateCounryDto } from './dto/updateCountry.dto';

@Injectable()
export class CountryService {
  constructor(
    @InjectModel(Country) private CountryRepository: typeof Country,
  ) {}

  //Create country
  async createCart(createCountryDto: CreateCounryDto): Promise<Country> {
    const country = await this.CountryRepository.create(createCountryDto);
    return country;
  }

  //Get all countrys
  async getAllCountries() {
    const country = await this.CountryRepository.findAll();
    return country;
  }

  //Get country by id
  async getCountryById(id: number) {
    const country = await this.CountryRepository.findOne({ where: { id } });
    return country;
  }

  //Update country by id
  async updateCountry(
    id: number,
    updateCountryDto: UpdateCounryDto,
  ): Promise<Country> {
    const country = await this.CountryRepository.update(updateCountryDto, {
      where: { id },
      returning: true,
    });
    return country[1][0].dataValues;
  }

  //Delete country by id
  async deleteCountry(id: number): Promise<number> {
    const country = await this.CountryRepository.destroy({ where: { id } });
    return country;
  }
}

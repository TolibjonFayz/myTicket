import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CountryService } from './country.service';
import { ApiOperation } from '@nestjs/swagger';
import { CreateCounryDto } from './dto/createCountry.dto';
import { Country } from './models/country.model';
import { UpdateCounryDto } from './dto/updateCountry.dto';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  //Create country
  @ApiOperation({ summary: 'create country' })
  @Post('create')
  async createCart(
    @Body() createCountrydto: CreateCounryDto,
  ): Promise<Country> {
    return this.countryService.createCart(createCountrydto);
  }

  //Get all countries
  @ApiOperation({ summary: 'get all country' })
  @Get('all')
  async getAllCountries(): Promise<Country[]> {
    return this.countryService.getAllCountries();
  }

  //Get country by id
  @ApiOperation({ summary: 'get country by id' })
  @Get(':id')
  async getCountryById(@Param('id') id: number): Promise<Country> {
    return this.countryService.getCountryById(id);
  }

  //Update country by id
  @ApiOperation({ summary: 'update country by id' })
  @Put(':id')
  async updateCountryById(
    @Param('id') id: number,
    @Body() updateCountryDto: UpdateCounryDto,
  ): Promise<Country> {
    return this.countryService.updateCountry(+id, updateCountryDto);
  }

  //Delete country by id
  @ApiOperation({ summary: 'delete country by id' })
  @Delete(':id')
  async deleteCountryById(@Param('id') id: number): Promise<number> {
    return this.countryService.deleteCountry(id);
  }
}

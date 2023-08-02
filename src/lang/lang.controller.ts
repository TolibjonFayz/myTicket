import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LangService } from './lang.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateLangDto } from './dto/createLang.dto';
import { Lang } from './models/lang.model';
import { UpdateLangDto } from './dto/updateLang.dto';

@ApiTags('Lang')
@Controller('lang')
export class LangController {
  constructor(private readonly langService: LangService) {}

  //Create lang
  @ApiOperation({ summary: 'Create lang' })
  @Post('create')
  async createLang(@Body() createLangDto: CreateLangDto): Promise<Lang> {
    return this.langService.createLang(createLangDto);
  }

  //Get all langs
  @ApiOperation({ summary: 'Get all langs' })
  @Get('all')
  async getAllLangss(): Promise<Lang[]> {
    return this.langService.getAllLangs();
  }

  //Get lang by id
  @ApiOperation({ summary: 'Get lang by id' })
  @Get(':id')
  async getLangById(@Param('id') id: number): Promise<Lang> {
    return this.langService.getLangById(id);
  }

  //Update lang by id
  @ApiOperation({ summary: 'Update lang by id' })
  @Put(':id')
  async updateLangById(
    @Param('id') id: number,
    @Body() updateLangDto: UpdateLangDto,
  ): Promise<Lang> {
    return this.langService.updateLang(+id, updateLangDto);
  }

  //Delete lang by id
  @ApiOperation({ summary: 'Delete lang by id' })
  @Delete(':id')
  async deleteLang(@Param('id') id: number): Promise<number> {
    return this.langService.deleteLang(+id);
  }
}

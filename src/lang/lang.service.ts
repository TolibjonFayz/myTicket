import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Lang } from './models/lang.model';
import { CreateLangDto } from './dto/createLang.dto';
import { UpdateLangDto } from './dto/updateLang.dto';

@Injectable()
export class LangService {
  constructor(
    @InjectModel(Lang)
    private LangRepository: typeof Lang,
  ) {}

  //Create lang
  async createLang(createLangDto: CreateLangDto): Promise<Lang> {
    const lang = await this.LangRepository.create(createLangDto);
    return lang;
  }

  //Get all langs
  async getAllLangs() {
    const langs = await this.LangRepository.findAll();
    return langs;
  }

  //Get lang by id
  async getLangById(id: number) {
    const lang = await this.LangRepository.findOne({
      where: { id },
    });
    return lang;
  }

  //Update lang by id
  async updateLang(id: number, updatelangDto: UpdateLangDto): Promise<Lang> {
    const lang = await this.LangRepository.update(updatelangDto, {
      where: { id },
      returning: true,
    });
    return lang[1][0].dataValues;
  }

  //Delete lang by id
  async deleteLang(id: number): Promise<number> {
    const lang = await this.LangRepository.destroy({
      where: { id },
    });
    return lang;
  }
}

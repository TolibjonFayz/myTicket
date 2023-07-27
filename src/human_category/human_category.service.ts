import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Human_category } from './models/human_category.model';
import { createHumanCategoryDto } from './dto/createHumanCategory.dto';
import { UpdateHumanCategoryDto } from './dto/updateHumanCategory.dto';

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel(Human_category)
    private Human_categoryRepository: typeof Human_category,
  ) {}

  //Create human_category
  async createHumanCategory(
    createHumanCategoryDto: createHumanCategoryDto,
  ): Promise<Human_category> {
    const human_cagtegory = await this.Human_categoryRepository.create(
      createHumanCategoryDto,
    );
    return human_cagtegory;
  }

  //Get all human_category
  async getAllHuman_categories() {
    const human_cagtegories = await this.Human_categoryRepository.findAll();
    return human_cagtegories;
  }

  //Get humanCategory by id
  async getHumanCategoryById(id: number) {
    const human_cagtegory = await this.Human_categoryRepository.findOne({
      where: { id },
    });
    return human_cagtegory;
  }

  //Update human_category by id
  async updateHumanCategory(
    id: number,
    updateHumanCategoryDto: UpdateHumanCategoryDto,
  ): Promise<Human_category> {
    const human_cagtegory = await this.Human_categoryRepository.update(
      updateHumanCategoryDto,
      {
        where: { id },
        returning: true,
      },
    );
    return human_cagtegory[1][0].dataValues;
  }

  //Delete human_category by id
  async deleteHumanCategory(id: number): Promise<number> {
    const human_cagtegory = await this.Human_categoryRepository.destroy({
      where: { id },
    });
    return human_cagtegory;
  }
}

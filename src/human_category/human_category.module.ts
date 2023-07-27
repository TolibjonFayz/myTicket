import { Module } from '@nestjs/common';
import { HumanCategoryController } from './human_category.controller';
import { HumanCategoryService } from './human_category.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Human_category } from './models/human_category.model';

@Module({
  imports: [SequelizeModule.forFeature([Human_category])],
  controllers: [HumanCategoryController],
  providers: [HumanCategoryService],
  exports: [HumanCategoryService],
})
export class HumanCategoryModule {}

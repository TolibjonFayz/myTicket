import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { HumanCategoryService } from './human_category.service';
import { createHumanCategoryDto } from './dto/createHumanCategory.dto';
import { Human_category } from './models/human_category.model';
import { UpdateHumanCategoryDto } from './dto/updateHumanCategory.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Human category')
@Controller('human-category')
export class HumanCategoryController {
  constructor(private readonly humanCategoryService: HumanCategoryService) {}

  //Create human_category
  @ApiOperation({ summary: 'Create human category' })
  @Post('create')
  async createHumanCategory(
    @Body() createHumanCategoryDto: createHumanCategoryDto,
  ): Promise<Human_category> {
    return this.humanCategoryService.createHumanCategory(
      createHumanCategoryDto,
    );
  }

  //Get all human_category
  @ApiOperation({ summary: 'Get all human category' })
  @Get('all')
  async getAllHumanCategory(): Promise<Human_category[]> {
    return this.humanCategoryService.getAllHuman_categories();
  }

  //Get human_category by id
  @ApiOperation({ summary: 'Get human category by id' })
  @Get(':id')
  async getSeatById(@Param('id') id: number): Promise<Human_category> {
    return this.humanCategoryService.getHumanCategoryById(id);
  }

  //Update human_category by id

  @ApiOperation({ summary: 'Update human category by id' })
  @Put(':id')
  async updateHumanCategoryById(
    @Param('id') id: number,
    @Body() updateHumanCategoryDto: UpdateHumanCategoryDto,
  ): Promise<Human_category> {
    return this.humanCategoryService.updateHumanCategory(
      +id,
      updateHumanCategoryDto,
    );
  }

  //Delete human category by id
  @ApiOperation({ summary: 'Delete human category by id' })
  @Delete(':id')
  async deleteHumanCategory(@Param('id') id: number): Promise<number> {
    return this.humanCategoryService.deleteHumanCategory(+id);
  }
}

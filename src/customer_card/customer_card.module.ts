import { Module } from '@nestjs/common';
import { CustomerCardController } from './customer_card.controller';
import { CustomerCardService } from './customer_card.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CustomerCard } from './models/customerCard.model';

@Module({
  imports: [SequelizeModule.forFeature([CustomerCard])],
  controllers: [CustomerCardController],
  providers: [CustomerCardService],
  exports: [CustomerCardService],
})
export class CustomerCardModule {}

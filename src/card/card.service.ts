import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Card } from './entities/card.entity';
import { CreateCardDto } from './dto/create-card.dto';
import { UpdateCardDto } from './dto/update-card.dto';

@Injectable()
export class CardService {
  constructor(@InjectModel('Card') private readonly cardModel: Model<Card>) {}

  async create(createCardDto: CreateCardDto) {
    const createdCard = await new this.cardModel(createCardDto).save();
    return createdCard.id;
  }

  async findAll() {
    return await this.cardModel.find().exec();
  }

  async findOne(id: string) {
    return await this.cardModel.findById(id).exec();
  }

  async update(id: string, updateCardDto: UpdateCardDto) {
    const updatedCard = await this.cardModel.findByIdAndUpdate(id, updateCardDto);
    return updatedCard;
  }

  async remove(id: string) {
    return await this.cardModel.findByIdAndDelete(id);
  }
}

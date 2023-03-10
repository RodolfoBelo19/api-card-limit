import * as mongoose from 'mongoose';

export const CardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  limit: { type: Number, required: true },
  used: { type: Number, required: true },
  type: { type: String, required: true },
  idUser: { type: String, required: true },
});

export interface Card {
  id: string;
  name: string;
  limit: number;
  used: number;
  type: string;
  idUser: string;
}

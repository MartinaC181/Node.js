import { Schema, model, Document } from 'mongoose';
import { ICategory } from './types';

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Category = model<ICategory & Document>('Category', categorySchema);
export default Category;
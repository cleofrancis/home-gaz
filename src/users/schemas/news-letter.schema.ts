import * as mongoose from 'mongoose';

export const NewsLetterSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Please add you are email address.'],
    },
  },
  {
    timestamps: true,
  },
);

import { UUID } from 'crypto';
import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
export interface Meat extends Document {
  type: 'cow' | 'goat'; // The type of meat
  meatId: {type: String};
  fullPrice: number; // Full price of the animal
  sharingOptions: {
    people: number; // Number of people sharing
    pricePerPerson: number; // Price per person
  }[];
  status: 'available' | 'unavailable'; // Availability of the meat
  currentParticipants: { userId: string; sharingOption: number }[]; // Tracks participants and their chosen sharing options
  updates: string[]; // Step-by-step status updates (e.g., "killed", "divided")
}

export const MeatSchema = new Schema<Meat>({
  type: {
    type: String,
    enum: ['cow', 'goat'],
    required: true,
  },
  fullPrice: {
    type: Number,
    required: true,
  },
  meatId:{type: String,default: uuidv4},
  sharingOptions: [
    {
      people: { type: Number, required: true },
      pricePerPerson: { type: Number, required: true },
    },
  ],
  status: {
    type: String,
    enum: ['available', 'unavailable'],
    default: 'available',
  },
  currentParticipants: [
    {
      userId: { type: String, required: true },
      sharingOption: { type: Number, required: true },
    },
  ],
  updates: [
    {
      type: String,
    },
  ],
});

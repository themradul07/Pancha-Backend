
import mongoose, { Schema, Document } from 'mongoose';

export interface IBooking extends Document {
  user: mongoose.Types.ObjectId;
  therapist: mongoose.Types.ObjectId;
  therapy: mongoose.Types.ObjectId;
  date: Date;
  status: string;
}

const BookingSchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  therapist: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  therapy: { type: Schema.Types.ObjectId, ref: 'Therapy', required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
}, { timestamps: true });

export default mongoose.model<IBooking>('Booking', BookingSchema);

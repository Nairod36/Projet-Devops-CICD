import mongoose, { Document, Schema } from 'mongoose';

export interface IStats extends Document {
  date: Date;
  visitors: number;
  hour: number;
  spaceId: string;
}

const StatsSchema: Schema = new Schema({
  date: { type: Date, required: true },
  visitors: { type: Number, required: true },
  hour: { type: Number, required: true },
  spaceId: { type: String, required: true }
});

export default mongoose.model<IStats>('Stats', StatsSchema);

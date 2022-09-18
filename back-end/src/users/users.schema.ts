import { Schema as MongooseSchema, Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ExcludeProperty } from 'nestjs-mongoose-exclude';

@Schema()
export class User extends Document {
  @Prop({ type: String, required: false })
  id: MongooseSchema.Types.ObjectId;

  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ unique: true, type: String, lowercase: true })
  email: string;

  @ExcludeProperty(User.name)
  @Prop({ type: String, nullable: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

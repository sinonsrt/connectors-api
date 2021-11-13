import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ default: null })
  deleted_at: Date;

  constructor(user?: Partial<User>) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.deleted_at = user.deleted_at;
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

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

  constructor(user?: Partial<User>) {
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
  }
}

export const UserSchema = SchemaFactory.createForClass(User);

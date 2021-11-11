import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConnectorDocument = Connector & Document;

@Schema()
export class Connector {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  privacy: string;

  @Prop()
  base_url: string;

  @Prop()
  logo_url: string;

  @Prop()
  category: string;

  @Prop()
  description: string;

  @Prop()
  status: string;
}

export const ConnectorSchema = SchemaFactory.createForClass(Connector);

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

  @Prop({ default: null })
  deleted_at: Date;

  constructor(connector?: Partial<Connector>) {
    this.name = connector.name;
    this.type = connector.type;
    this.privacy = connector.privacy;
    this.base_url = connector.base_url;
    this.logo_url = connector.logo_url;
    this.category = connector.category;
    this.description = connector.description;
    this.status = connector.status;
    this.deleted_at = connector.deleted_at;
  }
}

export const ConnectorSchema = SchemaFactory.createForClass(Connector);

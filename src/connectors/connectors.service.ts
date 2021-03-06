import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateConnectorDto } from './dto/create-connector.dto';
import { UpdateConnectorDto } from './dto/update-connector.dto';
import { Connector, ConnectorDocument } from './entities/connector.entity';

@Injectable()
export class ConnectorsService {
  constructor(
    @InjectModel(Connector.name)
    private connectorModel: Model<ConnectorDocument>,
  ) {}

  create(createConnectorDto: CreateConnectorDto) {
    const connector = new this.connectorModel(createConnectorDto);
    return connector.save();
  }

  findAll(name: string, category: string, type: string, privacy: string) {
    const connectors = this.connectorModel.find().where('deleted_at', null);
    if (name) connectors.where('name', name);
    if (category) connectors.where('category', category);
    if (type) connectors.where('type', type);
    if (privacy) connectors.where('privacy', privacy);
    return connectors;
  }

  findOne(id: string) {
    return this.connectorModel.findById(id);
  }

  update(id: string, updateConnectorDto: UpdateConnectorDto) {
    return this.connectorModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateConnectorDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.connectorModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }

  //seed
  async add(data: any) {
    console.log('Connectors added:', data);
    await this.connectorModel.insertMany(data);
  }
}

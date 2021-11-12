import { Module } from '@nestjs/common';
import { ConnectorsService } from './connectors.service';
import { ConnectorsController } from './connectors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Connector, ConnectorSchema } from './entities/connector.entity';
import { ConnectorsSeed } from './seeds/connectors.seed';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Connector.name, schema: ConnectorSchema },
    ]),
  ],
  controllers: [ConnectorsController],
  providers: [ConnectorsService, ConnectorsSeed],
})
export class ConnectorsModule {}

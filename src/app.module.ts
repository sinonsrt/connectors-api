import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConnectorsModule } from './connectors/connectors.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { CommandModule } from 'nestjs-command';
import { ConfigModule } from '@nestjs/config';

ConfigModule.forRoot();
@Module({
  imports: [
    CommandModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@gocrud.copqq.mongodb.net/test`,
    ),
    UsersModule,
    ConnectorsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

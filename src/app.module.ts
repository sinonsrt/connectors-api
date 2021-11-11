import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ConnectorsModule } from './connectors/connectors.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user1:zKaCf9rvH5WSGeLQ@gocrud.copqq.mongodb.net/test',
    ),
    UsersModule,
    ConnectorsModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

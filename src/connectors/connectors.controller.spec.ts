import { Test, TestingModule } from '@nestjs/testing';
import { ConnectorsController } from './connectors.controller';
import { ConnectorsService } from './connectors.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

describe('ConnectorsController', () => {
  let controller: ConnectorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [JwtAuthGuard],
      controllers: [ConnectorsController],
      providers: [ConnectorsService],
    }).compile();

    controller = module.get<ConnectorsController>(ConnectorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

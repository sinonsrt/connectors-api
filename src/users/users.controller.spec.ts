import { Test } from '@nestjs/testing';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const usersList: User[] = [
  {
    name: 'Lucas Marchiori',
    email: 'sinonsrt@hotmail.com',
    password: '1234567',
  },
  {
    name: 'Lucas Marchiori',
    email: 'sinonsrt@hotmail.com',
    password: '1234567',
  },
  {
    name: 'Lucas Marchiori',
    email: 'sinonsrt@hotmail.com',
    password: '1234567',
  },
];

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersService = moduleRef.get<UsersService>(UsersService);
    usersController = moduleRef.get<UsersController>(UsersController);
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = await usersController.findAll();
      expect(result).toEqual(usersList);
      expect(typeof result).toBe('object');
    });
  });
});

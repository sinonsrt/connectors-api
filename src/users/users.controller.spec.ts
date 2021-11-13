import { Test } from '@nestjs/testing';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const usersList: User[] = [
  new User({
    name: 'Go DevApi',
    email: 'godevapi1@devapi.com',
    password: '1234567',
  }),
  new User({
    name: 'Go DevApi 2',
    email: 'godevapi2@devapi.com',
    password: '1234567',
  }),
  new User({
    name: 'Go DevApi 3',
    email: 'godevapi3@devapi.com',
    password: '1234567',
  }),
];

const newUser = new User({
  name: 'Go DevApi',
  email: 'godevapi1@devapi.com',
  password: '1234567',
});

const updatedUser = new User({
  name: 'Go DevApi 2',
  email: 'godevapi2@devapi.com',
  password: '1234567',
});

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: {
            create: jest.fn().mockResolvedValue(newUser),
            findAll: jest.fn().mockResolvedValue(usersList),
            findOne: jest.fn().mockResolvedValue(usersList[0]),
            update: jest.fn().mockResolvedValue(updatedUser),
            remove: jest.fn().mockResolvedValue(undefined),
          },
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    usersController = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(usersController).toBeDefined();
    expect(usersService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      // Act
      const result = await usersController.findAll();
      // Assert
      expect(result).toEqual(usersList);
      expect(usersService.findAll).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      // Arrange
      jest.spyOn(usersService, 'findAll').mockRejectedValueOnce(new Error());

      // Assert
      expect(usersController.findAll()).rejects.toThrowError();
    });
  });

  describe('create', () => {
    it('should create a new user successfully', async () => {
      // Arrange
      const body: CreateUserDto = {
        name: 'Lucas Marchiori',
        email: 'sinonsrt3@hotmail.com',
        password: '1234567',
      };
      // Act
      const result = await usersController.create(body);

      // Assert
      expect(result).toEqual(newUser);
      expect(usersService.create).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      // Arrange
      const body: CreateUserDto = {
        name: 'Lucas Marchiori',
        email: 'sinonsrt3@hotmail.com',
        password: '1234567',
      };
      jest.spyOn(usersService, 'create').mockRejectedValueOnce(new Error());

      //Assert
      expect(usersController.create(body)).rejects.toThrowError();
    });
  });

  describe('findOne', () => {
    it('should find a user successfully', async () => {
      // Act
      const result = await usersController.findOne('1');

      // Assert
      expect(result).toEqual(usersList[0]);
      expect(usersService.findOne).toHaveBeenCalledTimes(1);
      expect(usersService.findOne).toHaveBeenCalledWith('1');
    });

    it('should throw an exception', () => {
      // Arrange
      jest.spyOn(usersService, 'findOne').mockRejectedValueOnce(new Error());

      // Assert
      expect(usersController.findOne('1')).rejects.toThrowError();
    });
  });

  describe('update', () => {
    it('should update a user successfully', async () => {
      // Arrange
      const body: UpdateUserDto = {
        name: 'Lucas Marchiori 2',
        email: 'sinonsrt2@hotmail.com',
        password: '12345678',
      };

      // Act
      const result = await usersController.update('1', body);

      // Assert
      expect(result).toEqual(updatedUser);
      expect(usersService.update).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      // Arrange
      const body: UpdateUserDto = {
        name: 'Lucas Marchiori 2',
        email: 'sinonsrt2@hotmail.com',
        password: '12345678',
      };
      jest.spyOn(usersService, 'update').mockRejectedValueOnce(new Error());

      // Assert
      expect(usersController.update('1', body)).rejects.toThrowError();
    });
  });

  describe('remove', () => {
    it('should remove a user successfully', async () => {
      // Act
      const result = await usersController.remove('1');

      // Assert
      expect(result).toBeUndefined();
      expect(usersService.remove).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      // Arrange
      jest.spyOn(usersService, 'remove').mockRejectedValueOnce(new Error());

      // Assert
      expect(usersController.remove('1')).rejects.toThrowError();
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { MeatController } from './meat.controller';
import { MeatService } from './meat.service';

describe('MeatController', () => {
  let controller: MeatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeatController],
      providers: [MeatService],
    }).compile();

    controller = module.get<MeatController>(MeatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

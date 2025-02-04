import { Test, TestingModule } from '@nestjs/testing';
import { MeatService } from './meat.service';

describe('MeatService', () => {
  let service: MeatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeatService],
    }).compile();

    service = module.get<MeatService>(MeatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

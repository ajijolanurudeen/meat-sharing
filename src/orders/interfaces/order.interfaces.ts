import { IsArray, IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class OrderInterface {
  @IsMongoId()
  @IsNotEmpty()
  userId: string;

  @IsMongoId()
  @IsNotEmpty()
  meatItemId: string;

  @IsNumber()
  @IsNotEmpty()
  sharingOption: number;

  @IsNotEmpty()
  @IsUUID()
  orderId: string

  @IsArray()
  @IsOptional()
  @IsMongoId({ each: true })
  participants: string[];

  @IsEnum(['pending', 'processing', 'completed'])
  @IsOptional()
  status: 'pending' | 'processing' | 'completed';

  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  updates: string[];
}

import { IsArray, IsEnum, IsMongoId, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsMongoId()
  @IsNotEmpty()
  userId: string;

  @IsMongoId()
  @IsNotEmpty()
  meatItemId: string;

  @IsNotEmpty()
  @IsUUID()
  orderId: string;

  @IsNumber()
  @IsNotEmpty()
  sharingOption: number;

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

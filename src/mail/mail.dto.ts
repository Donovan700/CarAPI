import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class EmailDTO {
  @IsNotEmpty()
  @IsEmail()
  from: string;

  @IsNotEmpty()
  @IsEmail()
  to: string;

  @IsNotEmpty()
  @IsString()
  subject: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsString()
  @IsEmail()
  cc?: string;
}

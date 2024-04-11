import { Controller, Get, Param } from '@nestjs/common';
import { MailService } from './mail.service';
import { ClientService } from 'src/client/client.service';
import { Client } from 'src/client/client.entity';

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
    private readonly clientService: ClientService,
  ) {}

  @Get('send/:numPermis')
  async sendMail(@Param('numPermis') numPermis: number) {
    try {
      const client: Client = await this.clientService.findOne(numPermis);
      if (!client) {
        return { success: false, message: 'Client non trouvé' };
      }
      const provider : string = 'bryanrakotosedson@gmail.com';
      const subject : string = 'Car Rent Enterprise confirmation bill';
      const content : string = 'Dear '+ client.nomClient +',\n You are receiving this email as a confirmation of renting our cars.Please attend to pay the amount of $50,000 thank you';
      await this.mailService.sendMail(provider, client.email, subject, content);

      return { success: true, message: 'Success', error: 'No error' };
    } catch (error) {
      return { success: false, message: 'Error', error: error };
    }
  }
}

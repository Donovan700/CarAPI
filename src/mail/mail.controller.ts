import { Controller, Get, Param } from '@nestjs/common';
import { MailService } from './mail.service';
import { ClientService } from 'src/client/client.service';
import { Client } from 'src/client/client.entity';
import { LocationService } from 'src/location/location.service';

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
    private readonly clientService: ClientService,
    private readonly locationService: LocationService
  ) {}

  @Get('send/:numPermis/:dateLocation')
  async sendMail(
    @Param('numPermis') numPermis: number,
    @Param('dateLocation') dateLocationString: string) {
    try {
      const client: Client = await this.clientService.findOne(numPermis);
      if (!client) {
        return { success: false, message: 'Client non trouvé' };
      }
      const dateLocation: Date = new Date(dateLocationString);
      const totalPrice: number = await this.locationService.totalPrice(numPermis, dateLocation);
      const allCars : string[] = await this.locationService.allRentedCar(numPermis, dateLocation);
      const provider : string = 'bryanrakotosedson@gmail.com';
      const subject : string = 'Car Rent Enterprise confirmation bill';
      const content: string = `Dear ${client.nomClient},\nYou are receiving this email as a confirmation of renting our cars(${allCars}). Please attend to pay the amount of ${totalPrice} Ar. Thank you.`;
      await this.mailService.sendMail(provider, client.email, subject, content);

      return { success: true, message: 'Success', error: 'No error' };
    } catch (error) {
      console.error(error);
      return { success: false, message: 'Error', error: error };
    }
  }
}

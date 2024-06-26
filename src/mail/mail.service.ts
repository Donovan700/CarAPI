import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter : any;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'yourmail@gmail.com',
        pass: 'yourPassword',
      },
    });
  }

  async sendMail(from: string, to: string, subject: string, text: string) {
    try {
      await this.transporter.sendMail({
        from,
        to,
        subject,
        text,
      });
      console.log('Success mail');
    } catch (error) {
      console.error('Error: ', error);
    }
  }
}

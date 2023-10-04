import { getTemplate } from './get-template';
import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';

@Injectable()
export class GmailService {
  email = process.env['AE_EMAIL'];
  appName = process.env['AE_APP_NAME'];
  domain = process.env['AE_DOMAIN'];

  transporter() {
    return createTransport({
      service: 'gmail',
      secure: true,
      auth: {
        user: process.env['AE_EMAIL_ADDRESS'],
        pass: process.env['AE_EMAIL_PASSWORD'],
      },
    });
  }

  async info(options?: MailOptions) {
    return await this.send({
      ...options,
      from: 'info@aemrebas.com',
      subject: 'Info | ' + options?.subject,
    });
  }

  async security(options?: MailOptions & { code: string }) {
    return await this.send({
      ...options,
      from: 'security@aemrebas.com',
      subject: 'Security | ' + options?.subject,
    });
  }

  async send({
    from,
    to,
    subject,
    text,
    code,
  }: MailOptions & { code?: string }) {
    return await this.transporter().sendMail({
      from,
      to,
      subject,
      text: `${text}\n${code ? `[ ${code}]` : ''}`,
      html: getTemplate({
        appName: this.appName,
        domain: this.domain,
        subject,
        text,
        code,
      }),
    });
  }
}

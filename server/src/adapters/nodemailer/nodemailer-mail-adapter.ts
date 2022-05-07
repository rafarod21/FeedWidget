import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from '../../adapters/mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '5dd965931bc3ae',
    pass: 'edcabef9c9405e',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Rafael Rodrigues <rafael-rafa2.1@hotmail.com>',
      subject,
      html: body,
    });
  }
}

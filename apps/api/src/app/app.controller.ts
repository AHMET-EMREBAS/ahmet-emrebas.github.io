import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { OAuth2Client } from 'google-auth-library';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }
  async getDecodedOAuthJwtGoogle(token: string) {
    const CLIENT_ID_GOOGLE = process.env.GOOGLE_CLIENT_ID;

    try {
      const client = new OAuth2Client(CLIENT_ID_GOOGLE);

      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID_GOOGLE,
      });

      return ticket;
    } catch (error) {
      return { status: 500, data: error };
    }
  }
  @Post('login')
  async login(@Body('credential') credential: string, @Res() res: any) {
    console.log(await this.getDecodedOAuthJwtGoogle(credential));

    res.redirect('/');
    res.end();
  }
}

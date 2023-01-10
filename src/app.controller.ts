import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateTeamMenberBodyDto } from './dtos/create-team-menber-body';
import { RockeatMenberRepository } from './repositories/rockeat-menbers-repository';

@Controller('app')
export class AppController {

  constructor(private rockeatMenberRepository: RockeatMenberRepository){}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMenberBodyDto) {

    const { name, function: menberFunction } = body;

    // const menber = await this.prisma.rockeatMenber.create({
    //   data: {
    //     id: randomUUID(),
    //     name,
    //     function: menberFunction,
    //   }
    // });

    await this.rockeatMenberRepository.create(name, menberFunction);
  }
}

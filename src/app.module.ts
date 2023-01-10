import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { PrismaRockeatMenbersRepository } from './repositories/prisma/prisma-rockeat-menbers-repository';
import { RockeatMenberRepository } from './repositories/rockeat-menbers-repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: RockeatMenberRepository,
      useClass: PrismaRockeatMenbersRepository
    }
  ],
})
export class AppModule {}
 
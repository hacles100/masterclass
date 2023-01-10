import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  
    // forca a conexao com a Base de Dados
    async onModuleInit() {
    await this.$connect();
  }

// Quando perco conexao com a BD fecha a Aplicacao
  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
import { Injectable } from "@nestjs/common";
import { randomUUID } from "node:crypto";
import { PrismaService } from "src/database/prisma.service";
import { RockeatMenberRepository } from "../rockeat-menbers-repository";

@Injectable()
export class PrismaRockeatMenbersRepository implements RockeatMenberRepository {

    constructor(private prisma: PrismaService){}

    async create(name: string, menberFunction: string): Promise<void> {
        await this.prisma.rockeatMenber.create({
            data: {
                id: randomUUID(),
                name,
                function: menberFunction,
            },
        });
    }

}
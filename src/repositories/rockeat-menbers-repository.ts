export abstract class RockeatMenberRepository{

    abstract create(name: string, menberFunction: string): Promise<void>
}
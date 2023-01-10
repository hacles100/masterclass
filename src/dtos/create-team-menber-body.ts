import { IsNotEmpty } from "class-validator";


export class CreateTeamMenberBodyDto{

    @IsNotEmpty()
    name: string;

    @IsNotEmpty({
        message: 'The menber function should not be empty'
    })
    function: string;
}
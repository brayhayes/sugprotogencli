/*
    V1.0
*/
import { Type } from 'class-transformer';
import { IsDefined } from 'class-validator';
import { User } from '../../../models';
import { IsDefined, IsEmail, IsOptional, ValidateNested } from 'class-validator';
import { INVALID_EMAIL } from '../../../constants/members';


export class UpdateProfileRequestDto {
        user!: sug.User;
        data!: UpdateProfileRequestDto.UpdateProfileRequestBodyDto;
}

export namespace UpdateProfileRequestDto {
    export class UpdateProfileRequestBodyDto {
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            postalcode?: string;
            countryid?: number;
    }
    
}










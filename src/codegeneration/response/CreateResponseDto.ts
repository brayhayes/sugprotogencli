/*
    V1.0
*/
import { Type } from 'class-transformer';
import { IsDefined } from 'class-validator';
import { User } from '../../../models';
import { IsDefined, IsEmail, IsOptional, ValidateNested } from 'class-validator';


export class CreateResponseDto {
        id?: number;
        email?: string;
        firstname?: string;
        lastname?: string;
        parentid?: number;
        reminders?: string;
        contactInfo?: CreateResponseDto.CreateMemberContactInfoResponseDto;
}

export namespace CreateResponseDto {
    export class CreateMemberContactInfoResponseDto {
            id?: number;
            memberid?: number;
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            zipcode?: string;
            country?: number;
            mobilephone?: string;
            homephone?: string;
            workphone?: string;
            preferredphone?: string;
    }
    
}










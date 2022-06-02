/*
    V1.0
*/
import { Type } from 'class-transformer';
import { IsDefined } from 'class-validator';
import { User } from '../../../models';
import { IsDefined, IsEmail, IsOptional, ValidateNested } from 'class-validator';
import { INVALID_EMAIL } from '../../../constants/members';


export class CreateRequestDto {
        data!: CreateRequestDto.CreateRequestMemberDto;
}

export namespace CreateRequestDto {
    export class CreateRequestMemberDto {
            email!: string;
            firstname?: string;
            lastname?: string;
            parentid?: number;
            reminders?: string;
            contactInfo?: CreateRequestMemberDto.CreateMemberContactInfoDto;
            emaildomainid?: number;
            isgroupemail?: boolean;
    }
    
    export namespace CreateRequestMemberDto {
        export class CreateMemberContactInfoDto {
                address1!: string;
                address2!: string;
                city!: string;
                state!: string;
                zipcode!: string;
                country!: number;
                mobilephone!: string;
                homephone!: string;
                workphone!: string;
                preferredphone!: string;
        }
        
    }
    
}










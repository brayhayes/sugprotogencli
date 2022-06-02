/*
    V1.0
*/
import { Type } from 'class-transformer';
import { IsDefined } from 'class-validator';
import { User } from '../../../models';
import { IsDefined, IsEmail, IsOptional, ValidateNested } from 'class-validator';
import { INVALID_EMAIL } from '../../../constants/members';


export class UpdateNewsletterSubscriptionRequestDto {
        user!: sug.User;
        data!: sug.UpdateNewsletterSubscriptionRequestDto;
}

export namespace UpdateNewsletterSubscriptionRequestDto {
    export class UpdateNewsletterSubscriptionRequestBodyDto {
            id!: number;
            newslettersubscriptionid!: number;
            status!: boolean;
            type!: string;
    }
    
}










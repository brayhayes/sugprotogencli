/*
    V1.0
*/
import { Type } from 'class-transformer';
import { IsDefined } from 'class-validator';
import { User } from '../../../models';
import { IsDefined, IsEmail, IsOptional, ValidateNested } from 'class-validator';


export class GetNewsletterSubscriptionsResponseDto {
        data?: GetNewsletterSubscriptionsResponseDto.GetNewsletterSubscriptionsResponseBodyDto[];
}

export namespace GetNewsletterSubscriptionsResponseDto {
    export class GetNewsletterSubscriptionsResponseBodyDto {
            name?: string;
            description?: string;
            frequency?: string;
            id?: number;
            newslettersubscriptionid?: number;
            status?: boolean;
            title?: string;
            type?: string;
    }
    
}










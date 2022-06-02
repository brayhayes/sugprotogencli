/*
    V1.0
*/
import { Type } from 'class-transformer';
import { IsDefined } from 'class-validator';
import { User } from '../../../models';
import { IsDefined, IsEmail, IsOptional, ValidateNested } from 'class-validator';


export class GetProfileResponseDto {
        id?: number;
        firstName?: string;
        lastName?: string;
        email?: string;
        address?: GetProfileResponseDto.GetProfileResponseAddressDto;
        phone?: GetProfileResponseDto.GetProfileResponsePhoneDto[];
        organization?: GetProfileResponseDto.GetProfileResponseOrganizationDto;
        profilePicture?: GetProfileResponseDto.GetProfileResponseProfilePictureDto;
}

export namespace GetProfileResponseDto {
    export class GetProfileResponseAddressDto {
            address1?: string;
            address2?: string;
            city?: string;
            state?: string;
            zipCode?: string;
            country?: string;
    }
    
    export class GetProfileResponsePhoneDto {
            type?: string;
            value?: string;
            preferred?: boolean;
            carrierId?: number;
            carrier?: string;
    }
    
    export class GetProfileResponseOrganizationDto {
            name?: string;
            title?: string;
            size?: string;
            type?: string;
            subtype?: string;
            orgsizeid?: number;
            orgtypeid?: number;
            orgsubtypeid?: number;
    }
    
    export class GetProfileResponseProfilePictureDto {
            type?: string;
            small?: string;
            large?: string;
            medium?: string;
            xlarge?: string;
            text?: string;
    }
    
}










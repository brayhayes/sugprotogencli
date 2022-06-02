/*
    V1.0
*/
import { Type } from 'class-transformer';
import { IsDefined } from 'class-validator';
import { User } from '../../../models';
import { IsDefined, IsEmail, IsOptional, ValidateNested } from 'class-validator';


export class SignupSettingsResponseDto {
        data?: sug.SignupSettingsResponseDto[];
}

export namespace SignupSettingsResponseDto {
    export class SignupSettingsResponseBodyDto {
            id?: number;
            type?: string;
            code?: string;
            setting?: string;
            fieldtype?: string;
            value?: string;
            validvalues?: string;
            parentid?: number;
            forced?: boolean;
    }
    
}










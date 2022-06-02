/*
    V1.0
*/
import { Type } from 'class-transformer';
import { IsDefined } from 'class-validator';
import { User } from '../../../models';
import { IsDefined, IsEmail, IsOptional, ValidateNested } from 'class-validator';
import { INVALID_EMAIL } from '../../../constants/members';


export class FindOneUserByEmailRequestDto {
        memberemail!: string;
        additionalData!: string[];
        parentid?: number;
        roleid?: number;
}










/*
    V1.0
*/
import { Type } from 'class-transformer';
import { IsDefined } from 'class-validator';
import { User } from '../../../models';
import { IsDefined, IsEmail, IsOptional, ValidateNested } from 'class-validator';


export class GetSubscribedGroupsResponseDto {
        data?: GetSubscribedGroupsResponseDto.GetSubscribedGroupsResponseBodyDto[];
}

export namespace GetSubscribedGroupsResponseDto {
    export class GetSubscribedGroupsResponseBodyDto {
            groupId?: number;
            groupName?: string;
            firstName?: string;
            lastName?: string;
            memberId?: number;
    }
    
}










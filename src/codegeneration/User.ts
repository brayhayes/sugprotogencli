/*
    V1.0
*/
import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';



export class User {
        pId!: number;
        pEmail!: string;
        pFirstname!: string;
        pLastname!: string;
        pVerified!: boolean;
        pFeatures!: string;
        pParent!: sug.User;
        pSubscription!: sug.MemberSubscription;
        pDateFormat!: sug.IDateFormat;
        pTimezone!: sug.ITimezone;
        pPayments!: sug.IPayments;
        pPermissions!: sug.UserPermissions;
        pIsAdmin!: boolean;
        pIsFullMember!: boolean;
        pIpAddress!: string;
        pFaUserId!: string;
}











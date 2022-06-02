/*
    V1.0
*/
import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';



export class MemberSubscription {
        pProductCode!: string;
        pProductName!: string;
        pDurationMonths!: number;
        pOrderid!: number;
        pSubscriptionid!: number;
        pIsAutoRenew!: boolean;
        pExpiration!: google.protobuf.Timestamp;
}











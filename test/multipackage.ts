/**
* This file is auto-generated by nestjs-proto-gen-ts
*/

import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export namespace multipackage {
    export namespace proto {
        // Test comment
        export interface Multipackage {
            // Test comment
        // Test comment
            multipackageRpc(data: MultipackageRequest, metadata?: Metadata): Observable<MultipackageResponse>;
        }
        // Test comment
        export interface MultipackageRequest {
            // Test comment
            field1?: string[];
            // Test comment
        // Test comment
            field2?: multipackageenum.MultipackageEnum;
            // Test comment
            field3?: google.protobuf.Timestamp;
        }
        // tslint:disable-next-line:no-empty-interface
        // Test comment
        export interface MultipackageResponse {
        }
    }
}
export namespace google {
    export namespace protobuf {
        export interface Timestamp {
            seconds?: number;
            nanos?: number;
        }
    }
}
export namespace multipackageenum {
    // ResolutionType
    // Test enum
    export enum MultipackageEnum {
        // Default value
        DEFAULT = 0,
        // 1 minute
        M1 = 10,
        // 2 minutes
        M2 = 20,
        // 5 minutes
        M5 = 30,
        // 10 minutes
        M10 = 40,
        // 15 minutes
        M15 = 50,
        // 30 minutes
        M30 = 60,
        // 1 hour
        H1 = 70,
        // 2 hours
        H2 = 80,
        // 4 hours
        H4 = 90,
        // 1 day
        D = 100,
        // 1 week
        W = 110,
        // 1 month
        MN = 120,
    }
}

/**
* This file is auto-generated by nestjs-proto-gen-ts
*/

import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export namespace google {
    export namespace protobuf {
        export interface Api {
            name?: string;
            methods?: protobuf.Method[];
            options?: protobuf.Option[];
            version?: string;
            sourceContext?: protobuf.SourceContext;
            mixins?: protobuf.Mixin[];
            syntax?: protobuf.Syntax;
        }
        export interface Method {
            name?: string;
            requestTypeUrl?: string;
            requestStreaming?: boolean;
            responseTypeUrl?: string;
            responseStreaming?: boolean;
            options?: protobuf.Option[];
            syntax?: protobuf.Syntax;
        }
        export interface Mixin {
            name?: string;
            root?: string;
        }
        export interface SourceContext {
            fileName?: string;
        }
        export interface Type {
            name?: string;
            fields?: protobuf.Field[];
            oneofs?: string[];
            options?: protobuf.Option[];
            sourceContext?: protobuf.SourceContext;
            syntax?: protobuf.Syntax;
        }
        export interface Field {
            kind?: Field.Kind;
            cardinality?: Field.Cardinality;
            number?: number;
            name?: string;
            typeUrl?: string;
            oneofIndex?: number;
            packed?: boolean;
            options?: protobuf.Option[];
            jsonName?: string;
            defaultValue?: string;
        }
        export namespace Field {
            export enum Kind {
                TYPE_UNKNOWN = 0,
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18,
            }
            export enum Cardinality {
                CARDINALITY_UNKNOWN = 0,
                CARDINALITY_OPTIONAL = 1,
                CARDINALITY_REQUIRED = 2,
                CARDINALITY_REPEATED = 3,
            }
        }
        export interface Enum {
            name?: string;
            enumvalue?: protobuf.EnumValue[];
            options?: protobuf.Option[];
            sourceContext?: protobuf.SourceContext;
            syntax?: protobuf.Syntax;
        }
        export interface EnumValue {
            name?: string;
            number?: number;
            options?: protobuf.Option[];
        }
        export interface Option {
            name?: string;
            value?: google.protobuf.Any;
        }
        export enum Syntax {
            SYNTAX_PROTO2 = 0,
            SYNTAX_PROTO3 = 1,
        }
        export interface Any {
            type_url?: string;
            value?: Uint8Array;
        }
    }
}


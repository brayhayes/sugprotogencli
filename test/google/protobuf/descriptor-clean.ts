/**
* This file is auto-generated by nestjs-proto-gen-ts
*/

import { Observable } from 'rxjs';
import { Metadata } from '@grpc/grpc-js';

export namespace google {
    export namespace protobuf {
        export interface FileDescriptorSet {
            file?: protobuf.FileDescriptorProto[];
        }
        export interface FileDescriptorProto {
            name?: string;
            package?: string;
            dependency?: string[];
            publicDependency?: number[];
            weakDependency?: number[];
            messageType?: protobuf.DescriptorProto[];
            enumType?: protobuf.EnumDescriptorProto[];
            service?: protobuf.ServiceDescriptorProto[];
            extension?: protobuf.FieldDescriptorProto[];
            options?: protobuf.FileOptions;
            sourceCodeInfo?: protobuf.SourceCodeInfo;
            syntax?: string;
        }
        export interface DescriptorProto {
            name?: string;
            field?: protobuf.FieldDescriptorProto[];
            extension?: protobuf.FieldDescriptorProto[];
            nestedType?: protobuf.DescriptorProto[];
            enumType?: protobuf.EnumDescriptorProto[];
            extensionRange?: DescriptorProto.ExtensionRange[];
            oneofDecl?: protobuf.OneofDescriptorProto[];
            options?: protobuf.MessageOptions;
            reservedRange?: DescriptorProto.ReservedRange[];
            reservedName?: string[];
        }
        export namespace DescriptorProto {
            export interface ExtensionRange {
                start?: number;
                end?: number;
            }
            export interface ReservedRange {
                start?: number;
                end?: number;
            }
        }
        export interface FieldDescriptorProto {
            name?: string;
            number?: number;
            label?: FieldDescriptorProto.Label;
            type?: FieldDescriptorProto.Type;
            typeName?: string;
            extendee?: string;
            defaultValue?: string;
            oneofIndex?: number;
            jsonName?: string;
            options?: protobuf.FieldOptions;
        }
        export namespace FieldDescriptorProto {
            export enum Type {
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
            export enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3,
            }
        }
        export interface OneofDescriptorProto {
            name?: string;
            options?: protobuf.OneofOptions;
        }
        export interface EnumDescriptorProto {
            name?: string;
            value?: protobuf.EnumValueDescriptorProto[];
            options?: protobuf.EnumOptions;
        }
        export interface EnumValueDescriptorProto {
            name?: string;
            number?: number;
            options?: protobuf.EnumValueOptions;
        }
        export interface ServiceDescriptorProto {
            name?: string;
            method?: protobuf.MethodDescriptorProto[];
            options?: protobuf.ServiceOptions;
        }
        export interface MethodDescriptorProto {
            name?: string;
            inputType?: string;
            outputType?: string;
            options?: protobuf.MethodOptions;
            clientStreaming?: boolean;
            serverStreaming?: boolean;
        }
        export interface FileOptions {
            javaPackage?: string;
            javaOuterClassname?: string;
            javaMultipleFiles?: boolean;
            javaGenerateEqualsAndHash?: boolean;
            javaStringCheckUtf8?: boolean;
            optimizeFor?: FileOptions.OptimizeMode;
            goPackage?: string;
            ccGenericServices?: boolean;
            javaGenericServices?: boolean;
            pyGenericServices?: boolean;
            deprecated?: boolean;
            ccEnableArenas?: boolean;
            objcClassPrefix?: string;
            csharpNamespace?: string;
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export namespace FileOptions {
            export enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3,
            }
        }
        export interface MessageOptions {
            messageSetWireFormat?: boolean;
            noStandardDescriptorAccessor?: boolean;
            deprecated?: boolean;
            mapEntry?: boolean;
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export interface FieldOptions {
            ctype?: FieldOptions.CType;
            packed?: boolean;
            jstype?: FieldOptions.JSType;
            lazy?: boolean;
            deprecated?: boolean;
            weak?: boolean;
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export namespace FieldOptions {
            export enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2,
            }
            export enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2,
            }
        }
        export interface OneofOptions {
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export interface EnumOptions {
            allowAlias?: boolean;
            deprecated?: boolean;
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export interface EnumValueOptions {
            deprecated?: boolean;
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export interface ServiceOptions {
            deprecated?: boolean;
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export interface MethodOptions {
            deprecated?: boolean;
            uninterpretedOption?: protobuf.UninterpretedOption[];
        }
        export interface UninterpretedOption {
            name?: UninterpretedOption.NamePart[];
            identifierValue?: string;
            positiveIntValue?: number;
            negativeIntValue?: number;
            doubleValue?: number;
            stringValue?: Uint8Array;
            aggregateValue?: string;
        }
        export namespace UninterpretedOption {
            export interface NamePart {
                namePart?: string;
                isExtension?: boolean;
            }
        }
        export interface SourceCodeInfo {
            location?: SourceCodeInfo.Location[];
        }
        export namespace SourceCodeInfo {
            export interface Location {
                path?: number[];
                span?: number[];
                leadingComments?: string;
                trailingComments?: string;
                leadingDetachedComments?: string[];
            }
        }
        export interface GeneratedCodeInfo {
            annotation?: GeneratedCodeInfo.Annotation[];
        }
        export namespace GeneratedCodeInfo {
            export interface Annotation {
                path?: number[];
                sourceFile?: string;
                begin?: number;
                end?: number;
            }
        }
    }
}

export interface IGenOptions {
    path: string[];
    output: string;
    target: string[];
    ignore: string[];
    template?: string;
    keepCase?: boolean;
    comments?: boolean;
    verbose?: boolean;
}
export declare enum ENumberTypes {
    'double' = 0,
    'float' = 1,
    'int32' = 2,
    'int64' = 3,
    'uint32' = 4,
    'uint64' = 5,
    'sint32' = 6,
    'sint64' = 7,
    'fixed32' = 8,
    'fixed64' = 9,
    'sfixed32' = 10,
    'sfixed64' = 11
}
export declare enum EScalarTypes {
    string = 0,
    'bool' = 1,
    'bytes' = 2,
    'double' = 3,
    'float' = 4,
    'int32' = 5,
    'int64' = 6,
    'uint32' = 7,
    'uint64' = 8,
    'sint32' = 9,
    'sint64' = 10,
    'fixed32' = 11,
    'fixed64' = 12,
    'sfixed32' = 13,
    'sfixed64' = 14
}
export declare enum EGoogleTypes {
    'Any' = 0,
    'Timestamp' = 1,
    'Duration' = 2,
    'Struct' = 3,
    'Wrapper' = 4,
    'FieldMask' = 5,
    'ListValue' = 6,
    'Value' = 7,
    'NullValue' = 8
}

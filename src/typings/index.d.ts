/**
 * Path String Type
 * Checks for a path starting with /{path} 
 * Examples: /pets
 */
export type PathString = `/${string| ""}`;

 /**
  * Ref String Type
  * Checks for a ref starting with /#/definitions/{schema} 
  * Examples: /p
  */
export type RefString = `/#/definitions/${string}`;
 

/**
 * 
 */
export type TSchemaProp = Record<string, TSwaggerSchemaObject>;


/**
 * TS Class Property Type
 */
export type TClassProp = {
    prop: string
    type: "string" | "boolean" | "object" | "number" | "date" | "bigint"
};


/**
 * TS Class Property[] Type
 */
export type TClassProps = Array<TClassProp>;


/**
 * TS Class Definition Type
 */
export type TClassDef = {
    name: string;
    props: TClassProps;
};


/**
 * Swagger Components/Definitions Type
 */
export type TSwaggerType = {
    type: "object";
    properties: Record<string, TSchemaProp>
};

/**
 * Swagger Schema Object Type
 */
export type TSwaggerSchemaObject = {
    type: "integer" | "number" | "string" | "boolean" | "file";
    format?: any;
    // format?: typeof TOSAType extends "integer" ? TOSAType :  TOSAType extends "number" ? TNumberFormat : TOSAType extends "string" ? TStringFormat : string;
    $ref?: RefString;
    title?: string;
    description?: string;
    default?: any;
    multipleOf?: any;
    maximum?: any;
    exclusiveMaximum?: any;
    minimum?: any;
    exclusiveMinimum?: any;
    maxLength?: any;
    minLength?: any;
    pattern?: any;
    maxItems?: any;
    minItems?: any;
    uniqueItems?: any;
    maxProperties?: any;
    minProperties?: any;
    required?: boolean;
    enum?: boolean
};


/**
 * Swagger Schema Object Type
 */
export type TSwaggerSchema = {
    [type: string]: TSwaggerType
};

/**
 * Swagger Components/Definitions Record<Type>
 */
export type TSwaggerSchemaDef = Record<string, TSwaggerType>;




/**
 * The OpenAPI specification definition
 */
export interface SwaggerSpecification {
    swagger: "2.0" | "3.0";
    info: SwaggerInfo;
    host?: string;
    basePath?: string;
    schemes?: Array<ESchemes>;
    consumes?: Array<EMimeTypes>;
    produces?: Array<EMimeTypes>;
    paths: PathObject;
    definitions?: TSwaggerSchemaDef;
    parameters?: APIParameters;
    responses?: any;
    securityDefinitions?: any;
    security?: any;
    tags: Array<TagObject>;    
}


enum ESchemes {
    http="http", https="https", ws="ws", wss="wss"
}

enum EMimeTypes {
    "text/plain; charset=utf-8"="text/plain; charset=utf-8",
    "application/json"="application/json",
    "application/vnd.github+json","application/vnd.github+json",
    "application/vnd.github.v3+json"="application/vnd.github.v3+json",
    "application/vnd.github.v3.raw+json"="application/vnd.github.v3.raw+json",
    "application/vnd.github.v3.text+json"="application/vnd.github.v3.text+json",
    "application/vnd.github.v3.html+json"="application/vnd.github.v3.html+json",
    "application/vnd.github.v3.full+json"="application/vnd.github.v3.full+json",
    "application/vnd.github.v3.diff"="application/vnd.github.v3.diff",
    "application/vnd.github.v3.patch"="application/vnd.github.v3.patch"
}

/**
 * Swagger Info Object
 */
type SwaggerInfo = {
    readonly title: string;
    readonly description?: string
    readonly termsOfService?: string
    readonly contact?: {
        name?: string
        url?: string
        email?: string
    }
    readonly license?: {
        name: string,
        url?: string
    }
    readonly version: string
};   


type PathObject = {
    [path: PathString]:  PathItemObject
};

type APIOperation = {
    tags?: Array<string>;
    summary?: string;
    description?: string;
    externalDocs?: string;
    operationId?: string;
    consumes?: string;
    produces?: string;
    parameters?: any;
    responses?: any;
    schemes?: Array<Schema>;
    deprecated?: boolean;
    security?: any;
};


type TagObject = {
    name: string,
    description?: string
};

/**
 * API Parameters for APIOperation
 */
type APIParameters = {
    in: "query" | "header" | "path" | "formData" | "body";
    name: string;
    description?: string;
    required?: boolean;
};


/**
 * API Parameters when in prop is 'body'
 */
type APIParametersInBody = APIParameters & {schema: TSwaggerSchemaObject | refString};


type PathItemObject = {
    $ref?: RefString
};


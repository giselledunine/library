
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Authors
 * 
 */
export type Authors = $Result.DefaultSelection<Prisma.$AuthorsPayload>
/**
 * Model Books
 * 
 */
export type Books = $Result.DefaultSelection<Prisma.$BooksPayload>
/**
 * Model Comments
 * 
 */
export type Comments = $Result.DefaultSelection<Prisma.$CommentsPayload>
/**
 * Model Deliveries
 * 
 */
export type Deliveries = $Result.DefaultSelection<Prisma.$DeliveriesPayload>
/**
 * Model Libraries
 * 
 */
export type Libraries = $Result.DefaultSelection<Prisma.$LibrariesPayload>
/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Authors
 * const authors = await prisma.authors.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Authors
   * const authors = await prisma.authors.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.authors`: Exposes CRUD operations for the **Authors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.authors.findMany()
    * ```
    */
  get authors(): Prisma.AuthorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.books`: Exposes CRUD operations for the **Books** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.books.findMany()
    * ```
    */
  get books(): Prisma.BooksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comments`: Exposes CRUD operations for the **Comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comments.findMany()
    * ```
    */
  get comments(): Prisma.CommentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveries`: Exposes CRUD operations for the **Deliveries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.deliveries.findMany()
    * ```
    */
  get deliveries(): Prisma.DeliveriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libraries`: Exposes CRUD operations for the **Libraries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Libraries
    * const libraries = await prisma.libraries.findMany()
    * ```
    */
  get libraries(): Prisma.LibrariesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Authors: 'Authors',
    Books: 'Books',
    Comments: 'Comments',
    Deliveries: 'Deliveries',
    Libraries: 'Libraries',
    Users: 'Users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "authors" | "books" | "comments" | "deliveries" | "libraries" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Authors: {
        payload: Prisma.$AuthorsPayload<ExtArgs>
        fields: Prisma.AuthorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>
          }
          findFirst: {
            args: Prisma.AuthorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>
          }
          findMany: {
            args: Prisma.AuthorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>[]
          }
          create: {
            args: Prisma.AuthorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>
          }
          createMany: {
            args: Prisma.AuthorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>[]
          }
          delete: {
            args: Prisma.AuthorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>
          }
          update: {
            args: Prisma.AuthorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>
          }
          deleteMany: {
            args: Prisma.AuthorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>[]
          }
          upsert: {
            args: Prisma.AuthorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorsPayload>
          }
          aggregate: {
            args: Prisma.AuthorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthors>
          }
          groupBy: {
            args: Prisma.AuthorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorsCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorsCountAggregateOutputType> | number
          }
        }
      }
      Books: {
        payload: Prisma.$BooksPayload<ExtArgs>
        fields: Prisma.BooksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BooksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BooksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          findFirst: {
            args: Prisma.BooksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BooksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          findMany: {
            args: Prisma.BooksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[]
          }
          create: {
            args: Prisma.BooksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          createMany: {
            args: Prisma.BooksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BooksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[]
          }
          delete: {
            args: Prisma.BooksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          update: {
            args: Prisma.BooksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          deleteMany: {
            args: Prisma.BooksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BooksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BooksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>[]
          }
          upsert: {
            args: Prisma.BooksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BooksPayload>
          }
          aggregate: {
            args: Prisma.BooksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooks>
          }
          groupBy: {
            args: Prisma.BooksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BooksGroupByOutputType>[]
          }
          count: {
            args: Prisma.BooksCountArgs<ExtArgs>
            result: $Utils.Optional<BooksCountAggregateOutputType> | number
          }
        }
      }
      Comments: {
        payload: Prisma.$CommentsPayload<ExtArgs>
        fields: Prisma.CommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findFirst: {
            args: Prisma.CommentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          findMany: {
            args: Prisma.CommentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          create: {
            args: Prisma.CommentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          createMany: {
            args: Prisma.CommentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          delete: {
            args: Prisma.CommentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          update: {
            args: Prisma.CommentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          deleteMany: {
            args: Prisma.CommentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>[]
          }
          upsert: {
            args: Prisma.CommentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentsPayload>
          }
          aggregate: {
            args: Prisma.CommentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComments>
          }
          groupBy: {
            args: Prisma.CommentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentsCountArgs<ExtArgs>
            result: $Utils.Optional<CommentsCountAggregateOutputType> | number
          }
        }
      }
      Deliveries: {
        payload: Prisma.$DeliveriesPayload<ExtArgs>
        fields: Prisma.DeliveriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          findFirst: {
            args: Prisma.DeliveriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          findMany: {
            args: Prisma.DeliveriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>[]
          }
          create: {
            args: Prisma.DeliveriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          createMany: {
            args: Prisma.DeliveriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>[]
          }
          delete: {
            args: Prisma.DeliveriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          update: {
            args: Prisma.DeliveriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          deleteMany: {
            args: Prisma.DeliveriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>[]
          }
          upsert: {
            args: Prisma.DeliveriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveriesPayload>
          }
          aggregate: {
            args: Prisma.DeliveriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveries>
          }
          groupBy: {
            args: Prisma.DeliveriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveriesCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveriesCountAggregateOutputType> | number
          }
        }
      }
      Libraries: {
        payload: Prisma.$LibrariesPayload<ExtArgs>
        fields: Prisma.LibrariesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibrariesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrariesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibrariesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrariesPayload>
          }
          findFirst: {
            args: Prisma.LibrariesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrariesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibrariesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrariesPayload>
          }
          findMany: {
            args: Prisma.LibrariesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrariesPayload>[]
          }
          create: {
            args: Prisma.LibrariesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrariesPayload>
          }
          createMany: {
            args: Prisma.LibrariesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibrariesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrariesPayload>[]
          }
          delete: {
            args: Prisma.LibrariesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrariesPayload>
          }
          update: {
            args: Prisma.LibrariesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrariesPayload>
          }
          deleteMany: {
            args: Prisma.LibrariesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibrariesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibrariesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrariesPayload>[]
          }
          upsert: {
            args: Prisma.LibrariesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibrariesPayload>
          }
          aggregate: {
            args: Prisma.LibrariesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibraries>
          }
          groupBy: {
            args: Prisma.LibrariesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibrariesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibrariesCountArgs<ExtArgs>
            result: $Utils.Optional<LibrariesCountAggregateOutputType> | number
          }
        }
      }
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    authors?: AuthorsOmit
    books?: BooksOmit
    comments?: CommentsOmit
    deliveries?: DeliveriesOmit
    libraries?: LibrariesOmit
    users?: UsersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AuthorsCountOutputType
   */

  export type AuthorsCountOutputType = {
    Books: number
  }

  export type AuthorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Books?: boolean | AuthorsCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes
  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorsCountOutputType
     */
    select?: AuthorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorsCountOutputType without action
   */
  export type AuthorsCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksWhereInput
  }


  /**
   * Count Type BooksCountOutputType
   */

  export type BooksCountOutputType = {
    Deliveries: number
  }

  export type BooksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Deliveries?: boolean | BooksCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCountOutputType
     */
    select?: BooksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveriesWhereInput
  }


  /**
   * Count Type LibrariesCountOutputType
   */

  export type LibrariesCountOutputType = {
    Deliveries: number
  }

  export type LibrariesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Deliveries?: boolean | LibrariesCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * LibrariesCountOutputType without action
   */
  export type LibrariesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibrariesCountOutputType
     */
    select?: LibrariesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LibrariesCountOutputType without action
   */
  export type LibrariesCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveriesWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    Comments: number
    Deliveries: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | UsersCountOutputTypeCountCommentsArgs
    Deliveries?: boolean | UsersCountOutputTypeCountDeliveriesArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountDeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveriesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Authors
   */

  export type AggregateAuthors = {
    _count: AuthorsCountAggregateOutputType | null
    _avg: AuthorsAvgAggregateOutputType | null
    _sum: AuthorsSumAggregateOutputType | null
    _min: AuthorsMinAggregateOutputType | null
    _max: AuthorsMaxAggregateOutputType | null
  }

  export type AuthorsAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorsSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorsMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AuthorsMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type AuthorsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type AuthorsAvgAggregateInputType = {
    id?: true
  }

  export type AuthorsSumAggregateInputType = {
    id?: true
  }

  export type AuthorsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type AuthorsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type AuthorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to aggregate.
     */
    where?: AuthorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorsOrderByWithRelationInput | AuthorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorsMaxAggregateInputType
  }

  export type GetAuthorsAggregateType<T extends AuthorsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthors[P]>
      : GetScalarType<T[P], AggregateAuthors[P]>
  }




  export type AuthorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorsWhereInput
    orderBy?: AuthorsOrderByWithAggregationInput | AuthorsOrderByWithAggregationInput[]
    by: AuthorsScalarFieldEnum[] | AuthorsScalarFieldEnum
    having?: AuthorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorsCountAggregateInputType | true
    _avg?: AuthorsAvgAggregateInputType
    _sum?: AuthorsSumAggregateInputType
    _min?: AuthorsMinAggregateInputType
    _max?: AuthorsMaxAggregateInputType
  }

  export type AuthorsGroupByOutputType = {
    id: number
    name: string
    _count: AuthorsCountAggregateOutputType | null
    _avg: AuthorsAvgAggregateOutputType | null
    _sum: AuthorsSumAggregateOutputType | null
    _min: AuthorsMinAggregateOutputType | null
    _max: AuthorsMaxAggregateOutputType | null
  }

  type GetAuthorsGroupByPayload<T extends AuthorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorsGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorsGroupByOutputType[P]>
        }
      >
    >


  export type AuthorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    Books?: boolean | Authors$BooksArgs<ExtArgs>
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authors"]>

  export type AuthorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["authors"]>

  export type AuthorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["authors"]>

  export type AuthorsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type AuthorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["authors"]>
  export type AuthorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Books?: boolean | Authors$BooksArgs<ExtArgs>
    _count?: boolean | AuthorsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthorsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Authors"
    objects: {
      Books: Prisma.$BooksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["authors"]>
    composites: {}
  }

  type AuthorsGetPayload<S extends boolean | null | undefined | AuthorsDefaultArgs> = $Result.GetResult<Prisma.$AuthorsPayload, S>

  type AuthorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorsCountAggregateInputType | true
    }

  export interface AuthorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Authors'], meta: { name: 'Authors' } }
    /**
     * Find zero or one Authors that matches the filter.
     * @param {AuthorsFindUniqueArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorsFindUniqueArgs>(args: SelectSubset<T, AuthorsFindUniqueArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Authors that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorsFindUniqueOrThrowArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorsFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsFindFirstArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorsFindFirstArgs>(args?: SelectSubset<T, AuthorsFindFirstArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Authors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsFindFirstOrThrowArgs} args - Arguments to find a Authors
     * @example
     * // Get one Authors
     * const authors = await prisma.authors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorsFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.authors.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.authors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorsWithIdOnly = await prisma.authors.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorsFindManyArgs>(args?: SelectSubset<T, AuthorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Authors.
     * @param {AuthorsCreateArgs} args - Arguments to create a Authors.
     * @example
     * // Create one Authors
     * const Authors = await prisma.authors.create({
     *   data: {
     *     // ... data to create a Authors
     *   }
     * })
     * 
     */
    create<T extends AuthorsCreateArgs>(args: SelectSubset<T, AuthorsCreateArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorsCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const authors = await prisma.authors.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorsCreateManyArgs>(args?: SelectSubset<T, AuthorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorsCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const authors = await prisma.authors.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorsWithIdOnly = await prisma.authors.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorsCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Authors.
     * @param {AuthorsDeleteArgs} args - Arguments to delete one Authors.
     * @example
     * // Delete one Authors
     * const Authors = await prisma.authors.delete({
     *   where: {
     *     // ... filter to delete one Authors
     *   }
     * })
     * 
     */
    delete<T extends AuthorsDeleteArgs>(args: SelectSubset<T, AuthorsDeleteArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Authors.
     * @param {AuthorsUpdateArgs} args - Arguments to update one Authors.
     * @example
     * // Update one Authors
     * const authors = await prisma.authors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorsUpdateArgs>(args: SelectSubset<T, AuthorsUpdateArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorsDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.authors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorsDeleteManyArgs>(args?: SelectSubset<T, AuthorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const authors = await prisma.authors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorsUpdateManyArgs>(args: SelectSubset<T, AuthorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorsUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const authors = await prisma.authors.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorsWithIdOnly = await prisma.authors.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorsUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Authors.
     * @param {AuthorsUpsertArgs} args - Arguments to update or create a Authors.
     * @example
     * // Update or create a Authors
     * const authors = await prisma.authors.upsert({
     *   create: {
     *     // ... data to create a Authors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Authors we want to update
     *   }
     * })
     */
    upsert<T extends AuthorsUpsertArgs>(args: SelectSubset<T, AuthorsUpsertArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.authors.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorsCountArgs>(
      args?: Subset<T, AuthorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorsAggregateArgs>(args: Subset<T, AuthorsAggregateArgs>): Prisma.PrismaPromise<GetAuthorsAggregateType<T>>

    /**
     * Group by Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorsGroupByArgs['orderBy'] }
        : { orderBy?: AuthorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Authors model
   */
  readonly fields: AuthorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Authors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Books<T extends Authors$BooksArgs<ExtArgs> = {}>(args?: Subset<T, Authors$BooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Authors model
   */
  interface AuthorsFieldRefs {
    readonly id: FieldRef<"Authors", 'Int'>
    readonly name: FieldRef<"Authors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Authors findUnique
   */
  export type AuthorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where: AuthorsWhereUniqueInput
  }

  /**
   * Authors findUniqueOrThrow
   */
  export type AuthorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where: AuthorsWhereUniqueInput
  }

  /**
   * Authors findFirst
   */
  export type AuthorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorsOrderByWithRelationInput | AuthorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * Authors findFirstOrThrow
   */
  export type AuthorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorsOrderByWithRelationInput | AuthorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * Authors findMany
   */
  export type AuthorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorsOrderByWithRelationInput | AuthorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorsScalarFieldEnum | AuthorsScalarFieldEnum[]
  }

  /**
   * Authors create
   */
  export type AuthorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Authors.
     */
    data: XOR<AuthorsCreateInput, AuthorsUncheckedCreateInput>
  }

  /**
   * Authors createMany
   */
  export type AuthorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorsCreateManyInput | AuthorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Authors createManyAndReturn
   */
  export type AuthorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorsCreateManyInput | AuthorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Authors update
   */
  export type AuthorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Authors.
     */
    data: XOR<AuthorsUpdateInput, AuthorsUncheckedUpdateInput>
    /**
     * Choose, which Authors to update.
     */
    where: AuthorsWhereUniqueInput
  }

  /**
   * Authors updateMany
   */
  export type AuthorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorsUpdateManyMutationInput, AuthorsUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorsWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Authors updateManyAndReturn
   */
  export type AuthorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorsUpdateManyMutationInput, AuthorsUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorsWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Authors upsert
   */
  export type AuthorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Authors to update in case it exists.
     */
    where: AuthorsWhereUniqueInput
    /**
     * In case the Authors found by the `where` argument doesn't exist, create a new Authors with this data.
     */
    create: XOR<AuthorsCreateInput, AuthorsUncheckedCreateInput>
    /**
     * In case the Authors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorsUpdateInput, AuthorsUncheckedUpdateInput>
  }

  /**
   * Authors delete
   */
  export type AuthorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
    /**
     * Filter which Authors to delete.
     */
    where: AuthorsWhereUniqueInput
  }

  /**
   * Authors deleteMany
   */
  export type AuthorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorsWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Authors.Books
   */
  export type Authors$BooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    where?: BooksWhereInput
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    cursor?: BooksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Authors without action
   */
  export type AuthorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Authors
     */
    select?: AuthorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Authors
     */
    omit?: AuthorsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorsInclude<ExtArgs> | null
  }


  /**
   * Model Books
   */

  export type AggregateBooks = {
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  export type BooksAvgAggregateOutputType = {
    id: number | null
    author: number | null
  }

  export type BooksSumAggregateOutputType = {
    id: number | null
    author: number | null
  }

  export type BooksMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    author: number | null
    note: string | null
  }

  export type BooksMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    author: number | null
    note: string | null
  }

  export type BooksCountAggregateOutputType = {
    id: number
    title: number
    description: number
    author: number
    note: number
    _all: number
  }


  export type BooksAvgAggregateInputType = {
    id?: true
    author?: true
  }

  export type BooksSumAggregateInputType = {
    id?: true
    author?: true
  }

  export type BooksMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    author?: true
    note?: true
  }

  export type BooksMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    author?: true
    note?: true
  }

  export type BooksCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    author?: true
    note?: true
    _all?: true
  }

  export type BooksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to aggregate.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksMaxAggregateInputType
  }

  export type GetBooksAggregateType<T extends BooksAggregateArgs> = {
        [P in keyof T & keyof AggregateBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks[P]>
      : GetScalarType<T[P], AggregateBooks[P]>
  }




  export type BooksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BooksWhereInput
    orderBy?: BooksOrderByWithAggregationInput | BooksOrderByWithAggregationInput[]
    by: BooksScalarFieldEnum[] | BooksScalarFieldEnum
    having?: BooksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksCountAggregateInputType | true
    _avg?: BooksAvgAggregateInputType
    _sum?: BooksSumAggregateInputType
    _min?: BooksMinAggregateInputType
    _max?: BooksMaxAggregateInputType
  }

  export type BooksGroupByOutputType = {
    id: number
    title: string
    description: string
    author: number
    note: string | null
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  type GetBooksGroupByPayload<T extends BooksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BooksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksGroupByOutputType[P]>
            : GetScalarType<T[P], BooksGroupByOutputType[P]>
        }
      >
    >


  export type BooksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    note?: boolean
    Authors?: boolean | AuthorsDefaultArgs<ExtArgs>
    Deliveries?: boolean | Books$DeliveriesArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type BooksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    note?: boolean
    Authors?: boolean | AuthorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type BooksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    note?: boolean
    Authors?: boolean | AuthorsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type BooksSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    note?: boolean
  }

  export type BooksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "author" | "note", ExtArgs["result"]["books"]>
  export type BooksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Authors?: boolean | AuthorsDefaultArgs<ExtArgs>
    Deliveries?: boolean | Books$DeliveriesArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BooksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Authors?: boolean | AuthorsDefaultArgs<ExtArgs>
  }
  export type BooksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Authors?: boolean | AuthorsDefaultArgs<ExtArgs>
  }

  export type $BooksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Books"
    objects: {
      Authors: Prisma.$AuthorsPayload<ExtArgs>
      Deliveries: Prisma.$DeliveriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      author: number
      note: string | null
    }, ExtArgs["result"]["books"]>
    composites: {}
  }

  type BooksGetPayload<S extends boolean | null | undefined | BooksDefaultArgs> = $Result.GetResult<Prisma.$BooksPayload, S>

  type BooksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BooksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BooksCountAggregateInputType | true
    }

  export interface BooksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Books'], meta: { name: 'Books' } }
    /**
     * Find zero or one Books that matches the filter.
     * @param {BooksFindUniqueArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BooksFindUniqueArgs>(args: SelectSubset<T, BooksFindUniqueArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Books that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BooksFindUniqueOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BooksFindUniqueOrThrowArgs>(args: SelectSubset<T, BooksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindFirstArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BooksFindFirstArgs>(args?: SelectSubset<T, BooksFindFirstArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindFirstOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BooksFindFirstOrThrowArgs>(args?: SelectSubset<T, BooksFindFirstOrThrowArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.books.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.books.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booksWithIdOnly = await prisma.books.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BooksFindManyArgs>(args?: SelectSubset<T, BooksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Books.
     * @param {BooksCreateArgs} args - Arguments to create a Books.
     * @example
     * // Create one Books
     * const Books = await prisma.books.create({
     *   data: {
     *     // ... data to create a Books
     *   }
     * })
     * 
     */
    create<T extends BooksCreateArgs>(args: SelectSubset<T, BooksCreateArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BooksCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BooksCreateManyArgs>(args?: SelectSubset<T, BooksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BooksCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const booksWithIdOnly = await prisma.books.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BooksCreateManyAndReturnArgs>(args?: SelectSubset<T, BooksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Books.
     * @param {BooksDeleteArgs} args - Arguments to delete one Books.
     * @example
     * // Delete one Books
     * const Books = await prisma.books.delete({
     *   where: {
     *     // ... filter to delete one Books
     *   }
     * })
     * 
     */
    delete<T extends BooksDeleteArgs>(args: SelectSubset<T, BooksDeleteArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Books.
     * @param {BooksUpdateArgs} args - Arguments to update one Books.
     * @example
     * // Update one Books
     * const books = await prisma.books.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BooksUpdateArgs>(args: SelectSubset<T, BooksUpdateArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BooksDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.books.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BooksDeleteManyArgs>(args?: SelectSubset<T, BooksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BooksUpdateManyArgs>(args: SelectSubset<T, BooksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BooksUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const booksWithIdOnly = await prisma.books.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BooksUpdateManyAndReturnArgs>(args: SelectSubset<T, BooksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Books.
     * @param {BooksUpsertArgs} args - Arguments to update or create a Books.
     * @example
     * // Update or create a Books
     * const books = await prisma.books.upsert({
     *   create: {
     *     // ... data to create a Books
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books we want to update
     *   }
     * })
     */
    upsert<T extends BooksUpsertArgs>(args: SelectSubset<T, BooksUpsertArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.books.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BooksCountArgs>(
      args?: Subset<T, BooksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BooksAggregateArgs>(args: Subset<T, BooksAggregateArgs>): Prisma.PrismaPromise<GetBooksAggregateType<T>>

    /**
     * Group by Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BooksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BooksGroupByArgs['orderBy'] }
        : { orderBy?: BooksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BooksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Books model
   */
  readonly fields: BooksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Books.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BooksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Authors<T extends AuthorsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorsDefaultArgs<ExtArgs>>): Prisma__AuthorsClient<$Result.GetResult<Prisma.$AuthorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Deliveries<T extends Books$DeliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Books$DeliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Books model
   */
  interface BooksFieldRefs {
    readonly id: FieldRef<"Books", 'Int'>
    readonly title: FieldRef<"Books", 'String'>
    readonly description: FieldRef<"Books", 'String'>
    readonly author: FieldRef<"Books", 'Int'>
    readonly note: FieldRef<"Books", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Books findUnique
   */
  export type BooksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books findUniqueOrThrow
   */
  export type BooksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books findFirst
   */
  export type BooksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Books findFirstOrThrow
   */
  export type BooksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Books findMany
   */
  export type BooksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BooksOrderByWithRelationInput | BooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * Books create
   */
  export type BooksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * The data needed to create a Books.
     */
    data: XOR<BooksCreateInput, BooksUncheckedCreateInput>
  }

  /**
   * Books createMany
   */
  export type BooksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BooksCreateManyInput | BooksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Books createManyAndReturn
   */
  export type BooksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BooksCreateManyInput | BooksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Books update
   */
  export type BooksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * The data needed to update a Books.
     */
    data: XOR<BooksUpdateInput, BooksUncheckedUpdateInput>
    /**
     * Choose, which Books to update.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books updateMany
   */
  export type BooksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BooksWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Books updateManyAndReturn
   */
  export type BooksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BooksWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Books upsert
   */
  export type BooksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * The filter to search for the Books to update in case it exists.
     */
    where: BooksWhereUniqueInput
    /**
     * In case the Books found by the `where` argument doesn't exist, create a new Books with this data.
     */
    create: XOR<BooksCreateInput, BooksUncheckedCreateInput>
    /**
     * In case the Books was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BooksUpdateInput, BooksUncheckedUpdateInput>
  }

  /**
   * Books delete
   */
  export type BooksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
    /**
     * Filter which Books to delete.
     */
    where: BooksWhereUniqueInput
  }

  /**
   * Books deleteMany
   */
  export type BooksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BooksWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Books.Deliveries
   */
  export type Books$DeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    where?: DeliveriesWhereInput
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    cursor?: DeliveriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Books without action
   */
  export type BooksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Books
     */
    select?: BooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Books
     */
    omit?: BooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BooksInclude<ExtArgs> | null
  }


  /**
   * Model Comments
   */

  export type AggregateComments = {
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  export type CommentsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    book_id: number | null
  }

  export type CommentsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    book_id: number | null
  }

  export type CommentsMinAggregateOutputType = {
    id: number | null
    comment: string | null
    user_id: number | null
    book_id: number | null
  }

  export type CommentsMaxAggregateOutputType = {
    id: number | null
    comment: string | null
    user_id: number | null
    book_id: number | null
  }

  export type CommentsCountAggregateOutputType = {
    id: number
    comment: number
    user_id: number
    book_id: number
    _all: number
  }


  export type CommentsAvgAggregateInputType = {
    id?: true
    user_id?: true
    book_id?: true
  }

  export type CommentsSumAggregateInputType = {
    id?: true
    user_id?: true
    book_id?: true
  }

  export type CommentsMinAggregateInputType = {
    id?: true
    comment?: true
    user_id?: true
    book_id?: true
  }

  export type CommentsMaxAggregateInputType = {
    id?: true
    comment?: true
    user_id?: true
    book_id?: true
  }

  export type CommentsCountAggregateInputType = {
    id?: true
    comment?: true
    user_id?: true
    book_id?: true
    _all?: true
  }

  export type CommentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to aggregate.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentsMaxAggregateInputType
  }

  export type GetCommentsAggregateType<T extends CommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComments[P]>
      : GetScalarType<T[P], AggregateComments[P]>
  }




  export type CommentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithAggregationInput | CommentsOrderByWithAggregationInput[]
    by: CommentsScalarFieldEnum[] | CommentsScalarFieldEnum
    having?: CommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentsCountAggregateInputType | true
    _avg?: CommentsAvgAggregateInputType
    _sum?: CommentsSumAggregateInputType
    _min?: CommentsMinAggregateInputType
    _max?: CommentsMaxAggregateInputType
  }

  export type CommentsGroupByOutputType = {
    id: number
    comment: string
    user_id: number
    book_id: number
    _count: CommentsCountAggregateOutputType | null
    _avg: CommentsAvgAggregateOutputType | null
    _sum: CommentsSumAggregateOutputType | null
    _min: CommentsMinAggregateOutputType | null
    _max: CommentsMaxAggregateOutputType | null
  }

  type GetCommentsGroupByPayload<T extends CommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentsGroupByOutputType[P]>
            : GetScalarType<T[P], CommentsGroupByOutputType[P]>
        }
      >
    >


  export type CommentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    user_id?: boolean
    book_id?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    user_id?: boolean
    book_id?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    user_id?: boolean
    book_id?: boolean
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comments"]>

  export type CommentsSelectScalar = {
    id?: boolean
    comment?: boolean
    user_id?: boolean
    book_id?: boolean
  }

  export type CommentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "comment" | "user_id" | "book_id", ExtArgs["result"]["comments"]>
  export type CommentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type CommentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $CommentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comments"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      comment: string
      user_id: number
      book_id: number
    }, ExtArgs["result"]["comments"]>
    composites: {}
  }

  type CommentsGetPayload<S extends boolean | null | undefined | CommentsDefaultArgs> = $Result.GetResult<Prisma.$CommentsPayload, S>

  type CommentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentsCountAggregateInputType | true
    }

  export interface CommentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comments'], meta: { name: 'Comments' } }
    /**
     * Find zero or one Comments that matches the filter.
     * @param {CommentsFindUniqueArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentsFindUniqueArgs>(args: SelectSubset<T, CommentsFindUniqueArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentsFindUniqueOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentsFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentsFindFirstArgs>(args?: SelectSubset<T, CommentsFindFirstArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindFirstOrThrowArgs} args - Arguments to find a Comments
     * @example
     * // Get one Comments
     * const comments = await prisma.comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentsFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comments.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentsWithIdOnly = await prisma.comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentsFindManyArgs>(args?: SelectSubset<T, CommentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comments.
     * @param {CommentsCreateArgs} args - Arguments to create a Comments.
     * @example
     * // Create one Comments
     * const Comments = await prisma.comments.create({
     *   data: {
     *     // ... data to create a Comments
     *   }
     * })
     * 
     */
    create<T extends CommentsCreateArgs>(args: SelectSubset<T, CommentsCreateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentsCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentsCreateManyArgs>(args?: SelectSubset<T, CommentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentsCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comments = await prisma.comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentsCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comments.
     * @param {CommentsDeleteArgs} args - Arguments to delete one Comments.
     * @example
     * // Delete one Comments
     * const Comments = await prisma.comments.delete({
     *   where: {
     *     // ... filter to delete one Comments
     *   }
     * })
     * 
     */
    delete<T extends CommentsDeleteArgs>(args: SelectSubset<T, CommentsDeleteArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comments.
     * @param {CommentsUpdateArgs} args - Arguments to update one Comments.
     * @example
     * // Update one Comments
     * const comments = await prisma.comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentsUpdateArgs>(args: SelectSubset<T, CommentsUpdateArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentsDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentsDeleteManyArgs>(args?: SelectSubset<T, CommentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentsUpdateManyArgs>(args: SelectSubset<T, CommentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentsUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comments = await prisma.comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentsWithIdOnly = await prisma.comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentsUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comments.
     * @param {CommentsUpsertArgs} args - Arguments to update or create a Comments.
     * @example
     * // Update or create a Comments
     * const comments = await prisma.comments.upsert({
     *   create: {
     *     // ... data to create a Comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comments we want to update
     *   }
     * })
     */
    upsert<T extends CommentsUpsertArgs>(args: SelectSubset<T, CommentsUpsertArgs<ExtArgs>>): Prisma__CommentsClient<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comments.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentsCountArgs>(
      args?: Subset<T, CommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentsAggregateArgs>(args: Subset<T, CommentsAggregateArgs>): Prisma.PrismaPromise<GetCommentsAggregateType<T>>

    /**
     * Group by Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentsGroupByArgs['orderBy'] }
        : { orderBy?: CommentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comments model
   */
  readonly fields: CommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comments model
   */
  interface CommentsFieldRefs {
    readonly id: FieldRef<"Comments", 'Int'>
    readonly comment: FieldRef<"Comments", 'String'>
    readonly user_id: FieldRef<"Comments", 'Int'>
    readonly book_id: FieldRef<"Comments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Comments findUnique
   */
  export type CommentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findUniqueOrThrow
   */
  export type CommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments findFirst
   */
  export type CommentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findFirstOrThrow
   */
  export type CommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments findMany
   */
  export type CommentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Comments create
   */
  export type CommentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Comments.
     */
    data: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
  }

  /**
   * Comments createMany
   */
  export type CommentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comments createManyAndReturn
   */
  export type CommentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentsCreateManyInput | CommentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments update
   */
  export type CommentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Comments.
     */
    data: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
    /**
     * Choose, which Comments to update.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments updateMany
   */
  export type CommentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comments updateManyAndReturn
   */
  export type CommentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comments upsert
   */
  export type CommentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Comments to update in case it exists.
     */
    where: CommentsWhereUniqueInput
    /**
     * In case the Comments found by the `where` argument doesn't exist, create a new Comments with this data.
     */
    create: XOR<CommentsCreateInput, CommentsUncheckedCreateInput>
    /**
     * In case the Comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentsUpdateInput, CommentsUncheckedUpdateInput>
  }

  /**
   * Comments delete
   */
  export type CommentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    /**
     * Filter which Comments to delete.
     */
    where: CommentsWhereUniqueInput
  }

  /**
   * Comments deleteMany
   */
  export type CommentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentsWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comments without action
   */
  export type CommentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
  }


  /**
   * Model Deliveries
   */

  export type AggregateDeliveries = {
    _count: DeliveriesCountAggregateOutputType | null
    _avg: DeliveriesAvgAggregateOutputType | null
    _sum: DeliveriesSumAggregateOutputType | null
    _min: DeliveriesMinAggregateOutputType | null
    _max: DeliveriesMaxAggregateOutputType | null
  }

  export type DeliveriesAvgAggregateOutputType = {
    id: number | null
    book_id: number | null
    library_id: number | null
    user_id: number | null
  }

  export type DeliveriesSumAggregateOutputType = {
    id: number | null
    book_id: number | null
    library_id: number | null
    user_id: number | null
  }

  export type DeliveriesMinAggregateOutputType = {
    id: number | null
    book_id: number | null
    library_id: number | null
    borrowed_at: Date | null
    due_date: Date | null
    returned_at: Date | null
    user_id: number | null
  }

  export type DeliveriesMaxAggregateOutputType = {
    id: number | null
    book_id: number | null
    library_id: number | null
    borrowed_at: Date | null
    due_date: Date | null
    returned_at: Date | null
    user_id: number | null
  }

  export type DeliveriesCountAggregateOutputType = {
    id: number
    book_id: number
    library_id: number
    borrowed_at: number
    due_date: number
    returned_at: number
    user_id: number
    _all: number
  }


  export type DeliveriesAvgAggregateInputType = {
    id?: true
    book_id?: true
    library_id?: true
    user_id?: true
  }

  export type DeliveriesSumAggregateInputType = {
    id?: true
    book_id?: true
    library_id?: true
    user_id?: true
  }

  export type DeliveriesMinAggregateInputType = {
    id?: true
    book_id?: true
    library_id?: true
    borrowed_at?: true
    due_date?: true
    returned_at?: true
    user_id?: true
  }

  export type DeliveriesMaxAggregateInputType = {
    id?: true
    book_id?: true
    library_id?: true
    borrowed_at?: true
    due_date?: true
    returned_at?: true
    user_id?: true
  }

  export type DeliveriesCountAggregateInputType = {
    id?: true
    book_id?: true
    library_id?: true
    borrowed_at?: true
    due_date?: true
    returned_at?: true
    user_id?: true
    _all?: true
  }

  export type DeliveriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to aggregate.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliveriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveriesMaxAggregateInputType
  }

  export type GetDeliveriesAggregateType<T extends DeliveriesAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveries[P]>
      : GetScalarType<T[P], AggregateDeliveries[P]>
  }




  export type DeliveriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveriesWhereInput
    orderBy?: DeliveriesOrderByWithAggregationInput | DeliveriesOrderByWithAggregationInput[]
    by: DeliveriesScalarFieldEnum[] | DeliveriesScalarFieldEnum
    having?: DeliveriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveriesCountAggregateInputType | true
    _avg?: DeliveriesAvgAggregateInputType
    _sum?: DeliveriesSumAggregateInputType
    _min?: DeliveriesMinAggregateInputType
    _max?: DeliveriesMaxAggregateInputType
  }

  export type DeliveriesGroupByOutputType = {
    id: number
    book_id: number
    library_id: number
    borrowed_at: Date
    due_date: Date
    returned_at: Date | null
    user_id: number
    _count: DeliveriesCountAggregateOutputType | null
    _avg: DeliveriesAvgAggregateOutputType | null
    _sum: DeliveriesSumAggregateOutputType | null
    _min: DeliveriesMinAggregateOutputType | null
    _max: DeliveriesMaxAggregateOutputType | null
  }

  type GetDeliveriesGroupByPayload<T extends DeliveriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveriesGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveriesGroupByOutputType[P]>
        }
      >
    >


  export type DeliveriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    library_id?: boolean
    borrowed_at?: boolean
    due_date?: boolean
    returned_at?: boolean
    user_id?: boolean
    Books?: boolean | BooksDefaultArgs<ExtArgs>
    Libraries?: boolean | LibrariesDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>

  export type DeliveriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    library_id?: boolean
    borrowed_at?: boolean
    due_date?: boolean
    returned_at?: boolean
    user_id?: boolean
    Books?: boolean | BooksDefaultArgs<ExtArgs>
    Libraries?: boolean | LibrariesDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>

  export type DeliveriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    library_id?: boolean
    borrowed_at?: boolean
    due_date?: boolean
    returned_at?: boolean
    user_id?: boolean
    Books?: boolean | BooksDefaultArgs<ExtArgs>
    Libraries?: boolean | LibrariesDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveries"]>

  export type DeliveriesSelectScalar = {
    id?: boolean
    book_id?: boolean
    library_id?: boolean
    borrowed_at?: boolean
    due_date?: boolean
    returned_at?: boolean
    user_id?: boolean
  }

  export type DeliveriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book_id" | "library_id" | "borrowed_at" | "due_date" | "returned_at" | "user_id", ExtArgs["result"]["deliveries"]>
  export type DeliveriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Books?: boolean | BooksDefaultArgs<ExtArgs>
    Libraries?: boolean | LibrariesDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type DeliveriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Books?: boolean | BooksDefaultArgs<ExtArgs>
    Libraries?: boolean | LibrariesDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }
  export type DeliveriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Books?: boolean | BooksDefaultArgs<ExtArgs>
    Libraries?: boolean | LibrariesDefaultArgs<ExtArgs>
    Users?: boolean | UsersDefaultArgs<ExtArgs>
  }

  export type $DeliveriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Deliveries"
    objects: {
      Books: Prisma.$BooksPayload<ExtArgs>
      Libraries: Prisma.$LibrariesPayload<ExtArgs>
      Users: Prisma.$UsersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      book_id: number
      library_id: number
      borrowed_at: Date
      due_date: Date
      returned_at: Date | null
      user_id: number
    }, ExtArgs["result"]["deliveries"]>
    composites: {}
  }

  type DeliveriesGetPayload<S extends boolean | null | undefined | DeliveriesDefaultArgs> = $Result.GetResult<Prisma.$DeliveriesPayload, S>

  type DeliveriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveriesCountAggregateInputType | true
    }

  export interface DeliveriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Deliveries'], meta: { name: 'Deliveries' } }
    /**
     * Find zero or one Deliveries that matches the filter.
     * @param {DeliveriesFindUniqueArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveriesFindUniqueArgs>(args: SelectSubset<T, DeliveriesFindUniqueArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Deliveries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveriesFindUniqueOrThrowArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveriesFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesFindFirstArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveriesFindFirstArgs>(args?: SelectSubset<T, DeliveriesFindFirstArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Deliveries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesFindFirstOrThrowArgs} args - Arguments to find a Deliveries
     * @example
     * // Get one Deliveries
     * const deliveries = await prisma.deliveries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveriesFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.deliveries.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.deliveries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveriesFindManyArgs>(args?: SelectSubset<T, DeliveriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Deliveries.
     * @param {DeliveriesCreateArgs} args - Arguments to create a Deliveries.
     * @example
     * // Create one Deliveries
     * const Deliveries = await prisma.deliveries.create({
     *   data: {
     *     // ... data to create a Deliveries
     *   }
     * })
     * 
     */
    create<T extends DeliveriesCreateArgs>(args: SelectSubset<T, DeliveriesCreateArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {DeliveriesCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const deliveries = await prisma.deliveries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveriesCreateManyArgs>(args?: SelectSubset<T, DeliveriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliveries and returns the data saved in the database.
     * @param {DeliveriesCreateManyAndReturnArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const deliveries = await prisma.deliveries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliveries and only return the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveriesCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Deliveries.
     * @param {DeliveriesDeleteArgs} args - Arguments to delete one Deliveries.
     * @example
     * // Delete one Deliveries
     * const Deliveries = await prisma.deliveries.delete({
     *   where: {
     *     // ... filter to delete one Deliveries
     *   }
     * })
     * 
     */
    delete<T extends DeliveriesDeleteArgs>(args: SelectSubset<T, DeliveriesDeleteArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Deliveries.
     * @param {DeliveriesUpdateArgs} args - Arguments to update one Deliveries.
     * @example
     * // Update one Deliveries
     * const deliveries = await prisma.deliveries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveriesUpdateArgs>(args: SelectSubset<T, DeliveriesUpdateArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveriesDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.deliveries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveriesDeleteManyArgs>(args?: SelectSubset<T, DeliveriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const deliveries = await prisma.deliveries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveriesUpdateManyArgs>(args: SelectSubset<T, DeliveriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries and returns the data updated in the database.
     * @param {DeliveriesUpdateManyAndReturnArgs} args - Arguments to update many Deliveries.
     * @example
     * // Update many Deliveries
     * const deliveries = await prisma.deliveries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliveries and only return the `id`
     * const deliveriesWithIdOnly = await prisma.deliveries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveriesUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Deliveries.
     * @param {DeliveriesUpsertArgs} args - Arguments to update or create a Deliveries.
     * @example
     * // Update or create a Deliveries
     * const deliveries = await prisma.deliveries.upsert({
     *   create: {
     *     // ... data to create a Deliveries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Deliveries we want to update
     *   }
     * })
     */
    upsert<T extends DeliveriesUpsertArgs>(args: SelectSubset<T, DeliveriesUpsertArgs<ExtArgs>>): Prisma__DeliveriesClient<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.deliveries.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveriesCountArgs>(
      args?: Subset<T, DeliveriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveriesAggregateArgs>(args: Subset<T, DeliveriesAggregateArgs>): Prisma.PrismaPromise<GetDeliveriesAggregateType<T>>

    /**
     * Group by Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveriesGroupByArgs['orderBy'] }
        : { orderBy?: DeliveriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Deliveries model
   */
  readonly fields: DeliveriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Deliveries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Books<T extends BooksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BooksDefaultArgs<ExtArgs>>): Prisma__BooksClient<$Result.GetResult<Prisma.$BooksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Libraries<T extends LibrariesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LibrariesDefaultArgs<ExtArgs>>): Prisma__LibrariesClient<$Result.GetResult<Prisma.$LibrariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Users<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Deliveries model
   */
  interface DeliveriesFieldRefs {
    readonly id: FieldRef<"Deliveries", 'Int'>
    readonly book_id: FieldRef<"Deliveries", 'Int'>
    readonly library_id: FieldRef<"Deliveries", 'Int'>
    readonly borrowed_at: FieldRef<"Deliveries", 'DateTime'>
    readonly due_date: FieldRef<"Deliveries", 'DateTime'>
    readonly returned_at: FieldRef<"Deliveries", 'DateTime'>
    readonly user_id: FieldRef<"Deliveries", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Deliveries findUnique
   */
  export type DeliveriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries findUniqueOrThrow
   */
  export type DeliveriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries findFirst
   */
  export type DeliveriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveries findFirstOrThrow
   */
  export type DeliveriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveries findMany
   */
  export type DeliveriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Deliveries create
   */
  export type DeliveriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Deliveries.
     */
    data: XOR<DeliveriesCreateInput, DeliveriesUncheckedCreateInput>
  }

  /**
   * Deliveries createMany
   */
  export type DeliveriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveriesCreateManyInput | DeliveriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Deliveries createManyAndReturn
   */
  export type DeliveriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveriesCreateManyInput | DeliveriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deliveries update
   */
  export type DeliveriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Deliveries.
     */
    data: XOR<DeliveriesUpdateInput, DeliveriesUncheckedUpdateInput>
    /**
     * Choose, which Deliveries to update.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries updateMany
   */
  export type DeliveriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveriesWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
  }

  /**
   * Deliveries updateManyAndReturn
   */
  export type DeliveriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveriesWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Deliveries upsert
   */
  export type DeliveriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Deliveries to update in case it exists.
     */
    where: DeliveriesWhereUniqueInput
    /**
     * In case the Deliveries found by the `where` argument doesn't exist, create a new Deliveries with this data.
     */
    create: XOR<DeliveriesCreateInput, DeliveriesUncheckedCreateInput>
    /**
     * In case the Deliveries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveriesUpdateInput, DeliveriesUncheckedUpdateInput>
  }

  /**
   * Deliveries delete
   */
  export type DeliveriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    /**
     * Filter which Deliveries to delete.
     */
    where: DeliveriesWhereUniqueInput
  }

  /**
   * Deliveries deleteMany
   */
  export type DeliveriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveriesWhereInput
    /**
     * Limit how many Deliveries to delete.
     */
    limit?: number
  }

  /**
   * Deliveries without action
   */
  export type DeliveriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
  }


  /**
   * Model Libraries
   */

  export type AggregateLibraries = {
    _count: LibrariesCountAggregateOutputType | null
    _avg: LibrariesAvgAggregateOutputType | null
    _sum: LibrariesSumAggregateOutputType | null
    _min: LibrariesMinAggregateOutputType | null
    _max: LibrariesMaxAggregateOutputType | null
  }

  export type LibrariesAvgAggregateOutputType = {
    id: number | null
  }

  export type LibrariesSumAggregateOutputType = {
    id: number | null
  }

  export type LibrariesMinAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
  }

  export type LibrariesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    location: string | null
  }

  export type LibrariesCountAggregateOutputType = {
    id: number
    name: number
    location: number
    _all: number
  }


  export type LibrariesAvgAggregateInputType = {
    id?: true
  }

  export type LibrariesSumAggregateInputType = {
    id?: true
  }

  export type LibrariesMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
  }

  export type LibrariesMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
  }

  export type LibrariesCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    _all?: true
  }

  export type LibrariesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libraries to aggregate.
     */
    where?: LibrariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibrariesOrderByWithRelationInput | LibrariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibrariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Libraries
    **/
    _count?: true | LibrariesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibrariesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibrariesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibrariesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibrariesMaxAggregateInputType
  }

  export type GetLibrariesAggregateType<T extends LibrariesAggregateArgs> = {
        [P in keyof T & keyof AggregateLibraries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibraries[P]>
      : GetScalarType<T[P], AggregateLibraries[P]>
  }




  export type LibrariesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibrariesWhereInput
    orderBy?: LibrariesOrderByWithAggregationInput | LibrariesOrderByWithAggregationInput[]
    by: LibrariesScalarFieldEnum[] | LibrariesScalarFieldEnum
    having?: LibrariesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibrariesCountAggregateInputType | true
    _avg?: LibrariesAvgAggregateInputType
    _sum?: LibrariesSumAggregateInputType
    _min?: LibrariesMinAggregateInputType
    _max?: LibrariesMaxAggregateInputType
  }

  export type LibrariesGroupByOutputType = {
    id: number
    name: string
    location: string | null
    _count: LibrariesCountAggregateOutputType | null
    _avg: LibrariesAvgAggregateOutputType | null
    _sum: LibrariesSumAggregateOutputType | null
    _min: LibrariesMinAggregateOutputType | null
    _max: LibrariesMaxAggregateOutputType | null
  }

  type GetLibrariesGroupByPayload<T extends LibrariesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibrariesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibrariesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibrariesGroupByOutputType[P]>
            : GetScalarType<T[P], LibrariesGroupByOutputType[P]>
        }
      >
    >


  export type LibrariesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    Deliveries?: boolean | Libraries$DeliveriesArgs<ExtArgs>
    _count?: boolean | LibrariesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraries"]>

  export type LibrariesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
  }, ExtArgs["result"]["libraries"]>

  export type LibrariesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
  }, ExtArgs["result"]["libraries"]>

  export type LibrariesSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
  }

  export type LibrariesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location", ExtArgs["result"]["libraries"]>
  export type LibrariesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Deliveries?: boolean | Libraries$DeliveriesArgs<ExtArgs>
    _count?: boolean | LibrariesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LibrariesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LibrariesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LibrariesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Libraries"
    objects: {
      Deliveries: Prisma.$DeliveriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      location: string | null
    }, ExtArgs["result"]["libraries"]>
    composites: {}
  }

  type LibrariesGetPayload<S extends boolean | null | undefined | LibrariesDefaultArgs> = $Result.GetResult<Prisma.$LibrariesPayload, S>

  type LibrariesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibrariesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibrariesCountAggregateInputType | true
    }

  export interface LibrariesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Libraries'], meta: { name: 'Libraries' } }
    /**
     * Find zero or one Libraries that matches the filter.
     * @param {LibrariesFindUniqueArgs} args - Arguments to find a Libraries
     * @example
     * // Get one Libraries
     * const libraries = await prisma.libraries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibrariesFindUniqueArgs>(args: SelectSubset<T, LibrariesFindUniqueArgs<ExtArgs>>): Prisma__LibrariesClient<$Result.GetResult<Prisma.$LibrariesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Libraries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibrariesFindUniqueOrThrowArgs} args - Arguments to find a Libraries
     * @example
     * // Get one Libraries
     * const libraries = await prisma.libraries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibrariesFindUniqueOrThrowArgs>(args: SelectSubset<T, LibrariesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibrariesClient<$Result.GetResult<Prisma.$LibrariesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrariesFindFirstArgs} args - Arguments to find a Libraries
     * @example
     * // Get one Libraries
     * const libraries = await prisma.libraries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibrariesFindFirstArgs>(args?: SelectSubset<T, LibrariesFindFirstArgs<ExtArgs>>): Prisma__LibrariesClient<$Result.GetResult<Prisma.$LibrariesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Libraries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrariesFindFirstOrThrowArgs} args - Arguments to find a Libraries
     * @example
     * // Get one Libraries
     * const libraries = await prisma.libraries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibrariesFindFirstOrThrowArgs>(args?: SelectSubset<T, LibrariesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibrariesClient<$Result.GetResult<Prisma.$LibrariesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Libraries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrariesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Libraries
     * const libraries = await prisma.libraries.findMany()
     * 
     * // Get first 10 Libraries
     * const libraries = await prisma.libraries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const librariesWithIdOnly = await prisma.libraries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibrariesFindManyArgs>(args?: SelectSubset<T, LibrariesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibrariesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Libraries.
     * @param {LibrariesCreateArgs} args - Arguments to create a Libraries.
     * @example
     * // Create one Libraries
     * const Libraries = await prisma.libraries.create({
     *   data: {
     *     // ... data to create a Libraries
     *   }
     * })
     * 
     */
    create<T extends LibrariesCreateArgs>(args: SelectSubset<T, LibrariesCreateArgs<ExtArgs>>): Prisma__LibrariesClient<$Result.GetResult<Prisma.$LibrariesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Libraries.
     * @param {LibrariesCreateManyArgs} args - Arguments to create many Libraries.
     * @example
     * // Create many Libraries
     * const libraries = await prisma.libraries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibrariesCreateManyArgs>(args?: SelectSubset<T, LibrariesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Libraries and returns the data saved in the database.
     * @param {LibrariesCreateManyAndReturnArgs} args - Arguments to create many Libraries.
     * @example
     * // Create many Libraries
     * const libraries = await prisma.libraries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Libraries and only return the `id`
     * const librariesWithIdOnly = await prisma.libraries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibrariesCreateManyAndReturnArgs>(args?: SelectSubset<T, LibrariesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibrariesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Libraries.
     * @param {LibrariesDeleteArgs} args - Arguments to delete one Libraries.
     * @example
     * // Delete one Libraries
     * const Libraries = await prisma.libraries.delete({
     *   where: {
     *     // ... filter to delete one Libraries
     *   }
     * })
     * 
     */
    delete<T extends LibrariesDeleteArgs>(args: SelectSubset<T, LibrariesDeleteArgs<ExtArgs>>): Prisma__LibrariesClient<$Result.GetResult<Prisma.$LibrariesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Libraries.
     * @param {LibrariesUpdateArgs} args - Arguments to update one Libraries.
     * @example
     * // Update one Libraries
     * const libraries = await prisma.libraries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibrariesUpdateArgs>(args: SelectSubset<T, LibrariesUpdateArgs<ExtArgs>>): Prisma__LibrariesClient<$Result.GetResult<Prisma.$LibrariesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Libraries.
     * @param {LibrariesDeleteManyArgs} args - Arguments to filter Libraries to delete.
     * @example
     * // Delete a few Libraries
     * const { count } = await prisma.libraries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibrariesDeleteManyArgs>(args?: SelectSubset<T, LibrariesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrariesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Libraries
     * const libraries = await prisma.libraries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibrariesUpdateManyArgs>(args: SelectSubset<T, LibrariesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Libraries and returns the data updated in the database.
     * @param {LibrariesUpdateManyAndReturnArgs} args - Arguments to update many Libraries.
     * @example
     * // Update many Libraries
     * const libraries = await prisma.libraries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Libraries and only return the `id`
     * const librariesWithIdOnly = await prisma.libraries.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LibrariesUpdateManyAndReturnArgs>(args: SelectSubset<T, LibrariesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibrariesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Libraries.
     * @param {LibrariesUpsertArgs} args - Arguments to update or create a Libraries.
     * @example
     * // Update or create a Libraries
     * const libraries = await prisma.libraries.upsert({
     *   create: {
     *     // ... data to create a Libraries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Libraries we want to update
     *   }
     * })
     */
    upsert<T extends LibrariesUpsertArgs>(args: SelectSubset<T, LibrariesUpsertArgs<ExtArgs>>): Prisma__LibrariesClient<$Result.GetResult<Prisma.$LibrariesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrariesCountArgs} args - Arguments to filter Libraries to count.
     * @example
     * // Count the number of Libraries
     * const count = await prisma.libraries.count({
     *   where: {
     *     // ... the filter for the Libraries we want to count
     *   }
     * })
    **/
    count<T extends LibrariesCountArgs>(
      args?: Subset<T, LibrariesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibrariesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrariesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibrariesAggregateArgs>(args: Subset<T, LibrariesAggregateArgs>): Prisma.PrismaPromise<GetLibrariesAggregateType<T>>

    /**
     * Group by Libraries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibrariesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LibrariesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibrariesGroupByArgs['orderBy'] }
        : { orderBy?: LibrariesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LibrariesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibrariesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Libraries model
   */
  readonly fields: LibrariesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Libraries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibrariesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Deliveries<T extends Libraries$DeliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Libraries$DeliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Libraries model
   */
  interface LibrariesFieldRefs {
    readonly id: FieldRef<"Libraries", 'Int'>
    readonly name: FieldRef<"Libraries", 'String'>
    readonly location: FieldRef<"Libraries", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Libraries findUnique
   */
  export type LibrariesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libraries
     */
    select?: LibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libraries
     */
    omit?: LibrariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibrariesInclude<ExtArgs> | null
    /**
     * Filter, which Libraries to fetch.
     */
    where: LibrariesWhereUniqueInput
  }

  /**
   * Libraries findUniqueOrThrow
   */
  export type LibrariesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libraries
     */
    select?: LibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libraries
     */
    omit?: LibrariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibrariesInclude<ExtArgs> | null
    /**
     * Filter, which Libraries to fetch.
     */
    where: LibrariesWhereUniqueInput
  }

  /**
   * Libraries findFirst
   */
  export type LibrariesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libraries
     */
    select?: LibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libraries
     */
    omit?: LibrariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibrariesInclude<ExtArgs> | null
    /**
     * Filter, which Libraries to fetch.
     */
    where?: LibrariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibrariesOrderByWithRelationInput | LibrariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libraries.
     */
    cursor?: LibrariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibrariesScalarFieldEnum | LibrariesScalarFieldEnum[]
  }

  /**
   * Libraries findFirstOrThrow
   */
  export type LibrariesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libraries
     */
    select?: LibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libraries
     */
    omit?: LibrariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibrariesInclude<ExtArgs> | null
    /**
     * Filter, which Libraries to fetch.
     */
    where?: LibrariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibrariesOrderByWithRelationInput | LibrariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Libraries.
     */
    cursor?: LibrariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Libraries.
     */
    distinct?: LibrariesScalarFieldEnum | LibrariesScalarFieldEnum[]
  }

  /**
   * Libraries findMany
   */
  export type LibrariesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libraries
     */
    select?: LibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libraries
     */
    omit?: LibrariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibrariesInclude<ExtArgs> | null
    /**
     * Filter, which Libraries to fetch.
     */
    where?: LibrariesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Libraries to fetch.
     */
    orderBy?: LibrariesOrderByWithRelationInput | LibrariesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Libraries.
     */
    cursor?: LibrariesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Libraries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Libraries.
     */
    skip?: number
    distinct?: LibrariesScalarFieldEnum | LibrariesScalarFieldEnum[]
  }

  /**
   * Libraries create
   */
  export type LibrariesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libraries
     */
    select?: LibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libraries
     */
    omit?: LibrariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibrariesInclude<ExtArgs> | null
    /**
     * The data needed to create a Libraries.
     */
    data: XOR<LibrariesCreateInput, LibrariesUncheckedCreateInput>
  }

  /**
   * Libraries createMany
   */
  export type LibrariesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Libraries.
     */
    data: LibrariesCreateManyInput | LibrariesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Libraries createManyAndReturn
   */
  export type LibrariesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libraries
     */
    select?: LibrariesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Libraries
     */
    omit?: LibrariesOmit<ExtArgs> | null
    /**
     * The data used to create many Libraries.
     */
    data: LibrariesCreateManyInput | LibrariesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Libraries update
   */
  export type LibrariesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libraries
     */
    select?: LibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libraries
     */
    omit?: LibrariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibrariesInclude<ExtArgs> | null
    /**
     * The data needed to update a Libraries.
     */
    data: XOR<LibrariesUpdateInput, LibrariesUncheckedUpdateInput>
    /**
     * Choose, which Libraries to update.
     */
    where: LibrariesWhereUniqueInput
  }

  /**
   * Libraries updateMany
   */
  export type LibrariesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Libraries.
     */
    data: XOR<LibrariesUpdateManyMutationInput, LibrariesUncheckedUpdateManyInput>
    /**
     * Filter which Libraries to update
     */
    where?: LibrariesWhereInput
    /**
     * Limit how many Libraries to update.
     */
    limit?: number
  }

  /**
   * Libraries updateManyAndReturn
   */
  export type LibrariesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libraries
     */
    select?: LibrariesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Libraries
     */
    omit?: LibrariesOmit<ExtArgs> | null
    /**
     * The data used to update Libraries.
     */
    data: XOR<LibrariesUpdateManyMutationInput, LibrariesUncheckedUpdateManyInput>
    /**
     * Filter which Libraries to update
     */
    where?: LibrariesWhereInput
    /**
     * Limit how many Libraries to update.
     */
    limit?: number
  }

  /**
   * Libraries upsert
   */
  export type LibrariesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libraries
     */
    select?: LibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libraries
     */
    omit?: LibrariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibrariesInclude<ExtArgs> | null
    /**
     * The filter to search for the Libraries to update in case it exists.
     */
    where: LibrariesWhereUniqueInput
    /**
     * In case the Libraries found by the `where` argument doesn't exist, create a new Libraries with this data.
     */
    create: XOR<LibrariesCreateInput, LibrariesUncheckedCreateInput>
    /**
     * In case the Libraries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibrariesUpdateInput, LibrariesUncheckedUpdateInput>
  }

  /**
   * Libraries delete
   */
  export type LibrariesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libraries
     */
    select?: LibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libraries
     */
    omit?: LibrariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibrariesInclude<ExtArgs> | null
    /**
     * Filter which Libraries to delete.
     */
    where: LibrariesWhereUniqueInput
  }

  /**
   * Libraries deleteMany
   */
  export type LibrariesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Libraries to delete
     */
    where?: LibrariesWhereInput
    /**
     * Limit how many Libraries to delete.
     */
    limit?: number
  }

  /**
   * Libraries.Deliveries
   */
  export type Libraries$DeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    where?: DeliveriesWhereInput
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    cursor?: DeliveriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Libraries without action
   */
  export type LibrariesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Libraries
     */
    select?: LibrariesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Libraries
     */
    omit?: LibrariesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibrariesInclude<ExtArgs> | null
  }


  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    firstname: string | null
    lastname: string | null
    email: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    firstname: string
    lastname: string
    email: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    Comments?: boolean | Users$CommentsArgs<ExtArgs>
    Deliveries?: boolean | Users$DeliveriesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Comments?: boolean | Users$CommentsArgs<ExtArgs>
    Deliveries?: boolean | Users$DeliveriesArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      Comments: Prisma.$CommentsPayload<ExtArgs>[]
      Deliveries: Prisma.$DeliveriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstname: string
      lastname: string
      email: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Comments<T extends Users$CommentsArgs<ExtArgs> = {}>(args?: Subset<T, Users$CommentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Deliveries<T extends Users$DeliveriesArgs<ExtArgs> = {}>(args?: Subset<T, Users$DeliveriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly firstname: FieldRef<"Users", 'String'>
    readonly lastname: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.Comments
   */
  export type Users$CommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comments
     */
    select?: CommentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comments
     */
    omit?: CommentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentsInclude<ExtArgs> | null
    where?: CommentsWhereInput
    orderBy?: CommentsOrderByWithRelationInput | CommentsOrderByWithRelationInput[]
    cursor?: CommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentsScalarFieldEnum | CommentsScalarFieldEnum[]
  }

  /**
   * Users.Deliveries
   */
  export type Users$DeliveriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Deliveries
     */
    select?: DeliveriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Deliveries
     */
    omit?: DeliveriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveriesInclude<ExtArgs> | null
    where?: DeliveriesWhereInput
    orderBy?: DeliveriesOrderByWithRelationInput | DeliveriesOrderByWithRelationInput[]
    cursor?: DeliveriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveriesScalarFieldEnum | DeliveriesScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AuthorsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type AuthorsScalarFieldEnum = (typeof AuthorsScalarFieldEnum)[keyof typeof AuthorsScalarFieldEnum]


  export const BooksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    author: 'author',
    note: 'note'
  };

  export type BooksScalarFieldEnum = (typeof BooksScalarFieldEnum)[keyof typeof BooksScalarFieldEnum]


  export const CommentsScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    user_id: 'user_id',
    book_id: 'book_id'
  };

  export type CommentsScalarFieldEnum = (typeof CommentsScalarFieldEnum)[keyof typeof CommentsScalarFieldEnum]


  export const DeliveriesScalarFieldEnum: {
    id: 'id',
    book_id: 'book_id',
    library_id: 'library_id',
    borrowed_at: 'borrowed_at',
    due_date: 'due_date',
    returned_at: 'returned_at',
    user_id: 'user_id'
  };

  export type DeliveriesScalarFieldEnum = (typeof DeliveriesScalarFieldEnum)[keyof typeof DeliveriesScalarFieldEnum]


  export const LibrariesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location'
  };

  export type LibrariesScalarFieldEnum = (typeof LibrariesScalarFieldEnum)[keyof typeof LibrariesScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AuthorsWhereInput = {
    AND?: AuthorsWhereInput | AuthorsWhereInput[]
    OR?: AuthorsWhereInput[]
    NOT?: AuthorsWhereInput | AuthorsWhereInput[]
    id?: IntFilter<"Authors"> | number
    name?: StringFilter<"Authors"> | string
    Books?: BooksListRelationFilter
  }

  export type AuthorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    Books?: BooksOrderByRelationAggregateInput
  }

  export type AuthorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: AuthorsWhereInput | AuthorsWhereInput[]
    OR?: AuthorsWhereInput[]
    NOT?: AuthorsWhereInput | AuthorsWhereInput[]
    Books?: BooksListRelationFilter
  }, "id" | "name">

  export type AuthorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: AuthorsCountOrderByAggregateInput
    _avg?: AuthorsAvgOrderByAggregateInput
    _max?: AuthorsMaxOrderByAggregateInput
    _min?: AuthorsMinOrderByAggregateInput
    _sum?: AuthorsSumOrderByAggregateInput
  }

  export type AuthorsScalarWhereWithAggregatesInput = {
    AND?: AuthorsScalarWhereWithAggregatesInput | AuthorsScalarWhereWithAggregatesInput[]
    OR?: AuthorsScalarWhereWithAggregatesInput[]
    NOT?: AuthorsScalarWhereWithAggregatesInput | AuthorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Authors"> | number
    name?: StringWithAggregatesFilter<"Authors"> | string
  }

  export type BooksWhereInput = {
    AND?: BooksWhereInput | BooksWhereInput[]
    OR?: BooksWhereInput[]
    NOT?: BooksWhereInput | BooksWhereInput[]
    id?: IntFilter<"Books"> | number
    title?: StringFilter<"Books"> | string
    description?: StringFilter<"Books"> | string
    author?: IntFilter<"Books"> | number
    note?: StringNullableFilter<"Books"> | string | null
    Authors?: XOR<AuthorsScalarRelationFilter, AuthorsWhereInput>
    Deliveries?: DeliveriesListRelationFilter
  }

  export type BooksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    note?: SortOrderInput | SortOrder
    Authors?: AuthorsOrderByWithRelationInput
    Deliveries?: DeliveriesOrderByRelationAggregateInput
  }

  export type BooksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BooksWhereInput | BooksWhereInput[]
    OR?: BooksWhereInput[]
    NOT?: BooksWhereInput | BooksWhereInput[]
    title?: StringFilter<"Books"> | string
    description?: StringFilter<"Books"> | string
    author?: IntFilter<"Books"> | number
    note?: StringNullableFilter<"Books"> | string | null
    Authors?: XOR<AuthorsScalarRelationFilter, AuthorsWhereInput>
    Deliveries?: DeliveriesListRelationFilter
  }, "id">

  export type BooksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: BooksCountOrderByAggregateInput
    _avg?: BooksAvgOrderByAggregateInput
    _max?: BooksMaxOrderByAggregateInput
    _min?: BooksMinOrderByAggregateInput
    _sum?: BooksSumOrderByAggregateInput
  }

  export type BooksScalarWhereWithAggregatesInput = {
    AND?: BooksScalarWhereWithAggregatesInput | BooksScalarWhereWithAggregatesInput[]
    OR?: BooksScalarWhereWithAggregatesInput[]
    NOT?: BooksScalarWhereWithAggregatesInput | BooksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Books"> | number
    title?: StringWithAggregatesFilter<"Books"> | string
    description?: StringWithAggregatesFilter<"Books"> | string
    author?: IntWithAggregatesFilter<"Books"> | number
    note?: StringNullableWithAggregatesFilter<"Books"> | string | null
  }

  export type CommentsWhereInput = {
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    id?: IntFilter<"Comments"> | number
    comment?: StringFilter<"Comments"> | string
    user_id?: IntFilter<"Comments"> | number
    book_id?: IntFilter<"Comments"> | number
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type CommentsOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    book_id?: SortOrder
    Users?: UsersOrderByWithRelationInput
  }

  export type CommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentsWhereInput | CommentsWhereInput[]
    OR?: CommentsWhereInput[]
    NOT?: CommentsWhereInput | CommentsWhereInput[]
    comment?: StringFilter<"Comments"> | string
    user_id?: IntFilter<"Comments"> | number
    book_id?: IntFilter<"Comments"> | number
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type CommentsOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    book_id?: SortOrder
    _count?: CommentsCountOrderByAggregateInput
    _avg?: CommentsAvgOrderByAggregateInput
    _max?: CommentsMaxOrderByAggregateInput
    _min?: CommentsMinOrderByAggregateInput
    _sum?: CommentsSumOrderByAggregateInput
  }

  export type CommentsScalarWhereWithAggregatesInput = {
    AND?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    OR?: CommentsScalarWhereWithAggregatesInput[]
    NOT?: CommentsScalarWhereWithAggregatesInput | CommentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comments"> | number
    comment?: StringWithAggregatesFilter<"Comments"> | string
    user_id?: IntWithAggregatesFilter<"Comments"> | number
    book_id?: IntWithAggregatesFilter<"Comments"> | number
  }

  export type DeliveriesWhereInput = {
    AND?: DeliveriesWhereInput | DeliveriesWhereInput[]
    OR?: DeliveriesWhereInput[]
    NOT?: DeliveriesWhereInput | DeliveriesWhereInput[]
    id?: IntFilter<"Deliveries"> | number
    book_id?: IntFilter<"Deliveries"> | number
    library_id?: IntFilter<"Deliveries"> | number
    borrowed_at?: DateTimeFilter<"Deliveries"> | Date | string
    due_date?: DateTimeFilter<"Deliveries"> | Date | string
    returned_at?: DateTimeNullableFilter<"Deliveries"> | Date | string | null
    user_id?: IntFilter<"Deliveries"> | number
    Books?: XOR<BooksScalarRelationFilter, BooksWhereInput>
    Libraries?: XOR<LibrariesScalarRelationFilter, LibrariesWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }

  export type DeliveriesOrderByWithRelationInput = {
    id?: SortOrder
    book_id?: SortOrder
    library_id?: SortOrder
    borrowed_at?: SortOrder
    due_date?: SortOrder
    returned_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    Books?: BooksOrderByWithRelationInput
    Libraries?: LibrariesOrderByWithRelationInput
    Users?: UsersOrderByWithRelationInput
  }

  export type DeliveriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DeliveriesWhereInput | DeliveriesWhereInput[]
    OR?: DeliveriesWhereInput[]
    NOT?: DeliveriesWhereInput | DeliveriesWhereInput[]
    book_id?: IntFilter<"Deliveries"> | number
    library_id?: IntFilter<"Deliveries"> | number
    borrowed_at?: DateTimeFilter<"Deliveries"> | Date | string
    due_date?: DateTimeFilter<"Deliveries"> | Date | string
    returned_at?: DateTimeNullableFilter<"Deliveries"> | Date | string | null
    user_id?: IntFilter<"Deliveries"> | number
    Books?: XOR<BooksScalarRelationFilter, BooksWhereInput>
    Libraries?: XOR<LibrariesScalarRelationFilter, LibrariesWhereInput>
    Users?: XOR<UsersScalarRelationFilter, UsersWhereInput>
  }, "id">

  export type DeliveriesOrderByWithAggregationInput = {
    id?: SortOrder
    book_id?: SortOrder
    library_id?: SortOrder
    borrowed_at?: SortOrder
    due_date?: SortOrder
    returned_at?: SortOrderInput | SortOrder
    user_id?: SortOrder
    _count?: DeliveriesCountOrderByAggregateInput
    _avg?: DeliveriesAvgOrderByAggregateInput
    _max?: DeliveriesMaxOrderByAggregateInput
    _min?: DeliveriesMinOrderByAggregateInput
    _sum?: DeliveriesSumOrderByAggregateInput
  }

  export type DeliveriesScalarWhereWithAggregatesInput = {
    AND?: DeliveriesScalarWhereWithAggregatesInput | DeliveriesScalarWhereWithAggregatesInput[]
    OR?: DeliveriesScalarWhereWithAggregatesInput[]
    NOT?: DeliveriesScalarWhereWithAggregatesInput | DeliveriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Deliveries"> | number
    book_id?: IntWithAggregatesFilter<"Deliveries"> | number
    library_id?: IntWithAggregatesFilter<"Deliveries"> | number
    borrowed_at?: DateTimeWithAggregatesFilter<"Deliveries"> | Date | string
    due_date?: DateTimeWithAggregatesFilter<"Deliveries"> | Date | string
    returned_at?: DateTimeNullableWithAggregatesFilter<"Deliveries"> | Date | string | null
    user_id?: IntWithAggregatesFilter<"Deliveries"> | number
  }

  export type LibrariesWhereInput = {
    AND?: LibrariesWhereInput | LibrariesWhereInput[]
    OR?: LibrariesWhereInput[]
    NOT?: LibrariesWhereInput | LibrariesWhereInput[]
    id?: IntFilter<"Libraries"> | number
    name?: StringFilter<"Libraries"> | string
    location?: StringNullableFilter<"Libraries"> | string | null
    Deliveries?: DeliveriesListRelationFilter
  }

  export type LibrariesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    Deliveries?: DeliveriesOrderByRelationAggregateInput
  }

  export type LibrariesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LibrariesWhereInput | LibrariesWhereInput[]
    OR?: LibrariesWhereInput[]
    NOT?: LibrariesWhereInput | LibrariesWhereInput[]
    name?: StringFilter<"Libraries"> | string
    location?: StringNullableFilter<"Libraries"> | string | null
    Deliveries?: DeliveriesListRelationFilter
  }, "id">

  export type LibrariesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    _count?: LibrariesCountOrderByAggregateInput
    _avg?: LibrariesAvgOrderByAggregateInput
    _max?: LibrariesMaxOrderByAggregateInput
    _min?: LibrariesMinOrderByAggregateInput
    _sum?: LibrariesSumOrderByAggregateInput
  }

  export type LibrariesScalarWhereWithAggregatesInput = {
    AND?: LibrariesScalarWhereWithAggregatesInput | LibrariesScalarWhereWithAggregatesInput[]
    OR?: LibrariesScalarWhereWithAggregatesInput[]
    NOT?: LibrariesScalarWhereWithAggregatesInput | LibrariesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Libraries"> | number
    name?: StringWithAggregatesFilter<"Libraries"> | string
    location?: StringNullableWithAggregatesFilter<"Libraries"> | string | null
  }

  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    firstname?: StringFilter<"Users"> | string
    lastname?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    Comments?: CommentsListRelationFilter
    Deliveries?: DeliveriesListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    Comments?: CommentsOrderByRelationAggregateInput
    Deliveries?: DeliveriesOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    firstname?: StringFilter<"Users"> | string
    lastname?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    Comments?: CommentsListRelationFilter
    Deliveries?: DeliveriesListRelationFilter
  }, "id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    firstname?: StringWithAggregatesFilter<"Users"> | string
    lastname?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
  }

  export type AuthorsCreateInput = {
    name: string
    Books?: BooksCreateNestedManyWithoutAuthorsInput
  }

  export type AuthorsUncheckedCreateInput = {
    id?: number
    name: string
    Books?: BooksUncheckedCreateNestedManyWithoutAuthorsInput
  }

  export type AuthorsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Books?: BooksUpdateManyWithoutAuthorsNestedInput
  }

  export type AuthorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Books?: BooksUncheckedUpdateManyWithoutAuthorsNestedInput
  }

  export type AuthorsCreateManyInput = {
    id?: number
    name: string
  }

  export type AuthorsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BooksCreateInput = {
    title: string
    description: string
    note?: string | null
    Authors?: AuthorsCreateNestedOneWithoutBooksInput
    Deliveries?: DeliveriesCreateNestedManyWithoutBooksInput
  }

  export type BooksUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    author?: number
    note?: string | null
    Deliveries?: DeliveriesUncheckedCreateNestedManyWithoutBooksInput
  }

  export type BooksUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    Authors?: AuthorsUpdateOneRequiredWithoutBooksNestedInput
    Deliveries?: DeliveriesUpdateManyWithoutBooksNestedInput
  }

  export type BooksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    Deliveries?: DeliveriesUncheckedUpdateManyWithoutBooksNestedInput
  }

  export type BooksCreateManyInput = {
    id?: number
    title: string
    description: string
    author?: number
    note?: string | null
  }

  export type BooksUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BooksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CommentsCreateInput = {
    comment: string
    book_id: number
    Users: UsersCreateNestedOneWithoutCommentsInput
  }

  export type CommentsUncheckedCreateInput = {
    id?: number
    comment: string
    user_id: number
    book_id: number
  }

  export type CommentsUpdateInput = {
    comment?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
    Users?: UsersUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsCreateManyInput = {
    id?: number
    comment: string
    user_id: number
    book_id: number
  }

  export type CommentsUpdateManyMutationInput = {
    comment?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    user_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type DeliveriesCreateInput = {
    borrowed_at: Date | string
    due_date: Date | string
    returned_at?: Date | string | null
    Books: BooksCreateNestedOneWithoutDeliveriesInput
    Libraries: LibrariesCreateNestedOneWithoutDeliveriesInput
    Users: UsersCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveriesUncheckedCreateInput = {
    id?: number
    book_id: number
    library_id: number
    borrowed_at: Date | string
    due_date: Date | string
    returned_at?: Date | string | null
    user_id: number
  }

  export type DeliveriesUpdateInput = {
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Books?: BooksUpdateOneRequiredWithoutDeliveriesNestedInput
    Libraries?: LibrariesUpdateOneRequiredWithoutDeliveriesNestedInput
    Users?: UsersUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    library_id?: IntFieldUpdateOperationsInput | number
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DeliveriesCreateManyInput = {
    id?: number
    book_id: number
    library_id: number
    borrowed_at: Date | string
    due_date: Date | string
    returned_at?: Date | string | null
    user_id: number
  }

  export type DeliveriesUpdateManyMutationInput = {
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    library_id?: IntFieldUpdateOperationsInput | number
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type LibrariesCreateInput = {
    name: string
    location?: string | null
    Deliveries?: DeliveriesCreateNestedManyWithoutLibrariesInput
  }

  export type LibrariesUncheckedCreateInput = {
    id?: number
    name: string
    location?: string | null
    Deliveries?: DeliveriesUncheckedCreateNestedManyWithoutLibrariesInput
  }

  export type LibrariesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Deliveries?: DeliveriesUpdateManyWithoutLibrariesNestedInput
  }

  export type LibrariesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    Deliveries?: DeliveriesUncheckedUpdateManyWithoutLibrariesNestedInput
  }

  export type LibrariesCreateManyInput = {
    id?: number
    name: string
    location?: string | null
  }

  export type LibrariesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LibrariesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateInput = {
    firstname: string
    lastname: string
    email: string
    Comments?: CommentsCreateNestedManyWithoutUsersInput
    Deliveries?: DeliveriesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
    Deliveries?: DeliveriesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
    Deliveries?: DeliveriesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
    Deliveries?: DeliveriesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
  }

  export type UsersUpdateManyMutationInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BooksListRelationFilter = {
    every?: BooksWhereInput
    some?: BooksWhereInput
    none?: BooksWhereInput
  }

  export type BooksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type AuthorsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type AuthorsScalarRelationFilter = {
    is?: AuthorsWhereInput
    isNot?: AuthorsWhereInput
  }

  export type DeliveriesListRelationFilter = {
    every?: DeliveriesWhereInput
    some?: DeliveriesWhereInput
    none?: DeliveriesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeliveriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BooksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    note?: SortOrder
  }

  export type BooksAvgOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
  }

  export type BooksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    note?: SortOrder
  }

  export type BooksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    note?: SortOrder
  }

  export type BooksSumOrderByAggregateInput = {
    id?: SortOrder
    author?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type CommentsCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    book_id?: SortOrder
  }

  export type CommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    book_id?: SortOrder
  }

  export type CommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    book_id?: SortOrder
  }

  export type CommentsMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    user_id?: SortOrder
    book_id?: SortOrder
  }

  export type CommentsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    book_id?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BooksScalarRelationFilter = {
    is?: BooksWhereInput
    isNot?: BooksWhereInput
  }

  export type LibrariesScalarRelationFilter = {
    is?: LibrariesWhereInput
    isNot?: LibrariesWhereInput
  }

  export type DeliveriesCountOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    library_id?: SortOrder
    borrowed_at?: SortOrder
    due_date?: SortOrder
    returned_at?: SortOrder
    user_id?: SortOrder
  }

  export type DeliveriesAvgOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    library_id?: SortOrder
    user_id?: SortOrder
  }

  export type DeliveriesMaxOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    library_id?: SortOrder
    borrowed_at?: SortOrder
    due_date?: SortOrder
    returned_at?: SortOrder
    user_id?: SortOrder
  }

  export type DeliveriesMinOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    library_id?: SortOrder
    borrowed_at?: SortOrder
    due_date?: SortOrder
    returned_at?: SortOrder
    user_id?: SortOrder
  }

  export type DeliveriesSumOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    library_id?: SortOrder
    user_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type LibrariesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type LibrariesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LibrariesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type LibrariesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
  }

  export type LibrariesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CommentsListRelationFilter = {
    every?: CommentsWhereInput
    some?: CommentsWhereInput
    none?: CommentsWhereInput
  }

  export type CommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BooksCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<BooksCreateWithoutAuthorsInput, BooksUncheckedCreateWithoutAuthorsInput> | BooksCreateWithoutAuthorsInput[] | BooksUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutAuthorsInput | BooksCreateOrConnectWithoutAuthorsInput[]
    createMany?: BooksCreateManyAuthorsInputEnvelope
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
  }

  export type BooksUncheckedCreateNestedManyWithoutAuthorsInput = {
    create?: XOR<BooksCreateWithoutAuthorsInput, BooksUncheckedCreateWithoutAuthorsInput> | BooksCreateWithoutAuthorsInput[] | BooksUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutAuthorsInput | BooksCreateOrConnectWithoutAuthorsInput[]
    createMany?: BooksCreateManyAuthorsInputEnvelope
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BooksUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<BooksCreateWithoutAuthorsInput, BooksUncheckedCreateWithoutAuthorsInput> | BooksCreateWithoutAuthorsInput[] | BooksUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutAuthorsInput | BooksCreateOrConnectWithoutAuthorsInput[]
    upsert?: BooksUpsertWithWhereUniqueWithoutAuthorsInput | BooksUpsertWithWhereUniqueWithoutAuthorsInput[]
    createMany?: BooksCreateManyAuthorsInputEnvelope
    set?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    disconnect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    delete?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    update?: BooksUpdateWithWhereUniqueWithoutAuthorsInput | BooksUpdateWithWhereUniqueWithoutAuthorsInput[]
    updateMany?: BooksUpdateManyWithWhereWithoutAuthorsInput | BooksUpdateManyWithWhereWithoutAuthorsInput[]
    deleteMany?: BooksScalarWhereInput | BooksScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BooksUncheckedUpdateManyWithoutAuthorsNestedInput = {
    create?: XOR<BooksCreateWithoutAuthorsInput, BooksUncheckedCreateWithoutAuthorsInput> | BooksCreateWithoutAuthorsInput[] | BooksUncheckedCreateWithoutAuthorsInput[]
    connectOrCreate?: BooksCreateOrConnectWithoutAuthorsInput | BooksCreateOrConnectWithoutAuthorsInput[]
    upsert?: BooksUpsertWithWhereUniqueWithoutAuthorsInput | BooksUpsertWithWhereUniqueWithoutAuthorsInput[]
    createMany?: BooksCreateManyAuthorsInputEnvelope
    set?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    disconnect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    delete?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    connect?: BooksWhereUniqueInput | BooksWhereUniqueInput[]
    update?: BooksUpdateWithWhereUniqueWithoutAuthorsInput | BooksUpdateWithWhereUniqueWithoutAuthorsInput[]
    updateMany?: BooksUpdateManyWithWhereWithoutAuthorsInput | BooksUpdateManyWithWhereWithoutAuthorsInput[]
    deleteMany?: BooksScalarWhereInput | BooksScalarWhereInput[]
  }

  export type AuthorsCreateNestedOneWithoutBooksInput = {
    create?: XOR<AuthorsCreateWithoutBooksInput, AuthorsUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorsCreateOrConnectWithoutBooksInput
    connect?: AuthorsWhereUniqueInput
  }

  export type DeliveriesCreateNestedManyWithoutBooksInput = {
    create?: XOR<DeliveriesCreateWithoutBooksInput, DeliveriesUncheckedCreateWithoutBooksInput> | DeliveriesCreateWithoutBooksInput[] | DeliveriesUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutBooksInput | DeliveriesCreateOrConnectWithoutBooksInput[]
    createMany?: DeliveriesCreateManyBooksInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type DeliveriesUncheckedCreateNestedManyWithoutBooksInput = {
    create?: XOR<DeliveriesCreateWithoutBooksInput, DeliveriesUncheckedCreateWithoutBooksInput> | DeliveriesCreateWithoutBooksInput[] | DeliveriesUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutBooksInput | DeliveriesCreateOrConnectWithoutBooksInput[]
    createMany?: DeliveriesCreateManyBooksInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type AuthorsUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<AuthorsCreateWithoutBooksInput, AuthorsUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AuthorsCreateOrConnectWithoutBooksInput
    upsert?: AuthorsUpsertWithoutBooksInput
    connect?: AuthorsWhereUniqueInput
    update?: XOR<XOR<AuthorsUpdateToOneWithWhereWithoutBooksInput, AuthorsUpdateWithoutBooksInput>, AuthorsUncheckedUpdateWithoutBooksInput>
  }

  export type DeliveriesUpdateManyWithoutBooksNestedInput = {
    create?: XOR<DeliveriesCreateWithoutBooksInput, DeliveriesUncheckedCreateWithoutBooksInput> | DeliveriesCreateWithoutBooksInput[] | DeliveriesUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutBooksInput | DeliveriesCreateOrConnectWithoutBooksInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutBooksInput | DeliveriesUpsertWithWhereUniqueWithoutBooksInput[]
    createMany?: DeliveriesCreateManyBooksInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutBooksInput | DeliveriesUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutBooksInput | DeliveriesUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type DeliveriesUncheckedUpdateManyWithoutBooksNestedInput = {
    create?: XOR<DeliveriesCreateWithoutBooksInput, DeliveriesUncheckedCreateWithoutBooksInput> | DeliveriesCreateWithoutBooksInput[] | DeliveriesUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutBooksInput | DeliveriesCreateOrConnectWithoutBooksInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutBooksInput | DeliveriesUpsertWithWhereUniqueWithoutBooksInput[]
    createMany?: DeliveriesCreateManyBooksInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutBooksInput | DeliveriesUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutBooksInput | DeliveriesUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    connect?: UsersWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutCommentsInput
    upsert?: UsersUpsertWithoutCommentsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutCommentsInput, UsersUpdateWithoutCommentsInput>, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type BooksCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<BooksCreateWithoutDeliveriesInput, BooksUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: BooksCreateOrConnectWithoutDeliveriesInput
    connect?: BooksWhereUniqueInput
  }

  export type LibrariesCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<LibrariesCreateWithoutDeliveriesInput, LibrariesUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: LibrariesCreateOrConnectWithoutDeliveriesInput
    connect?: LibrariesWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutDeliveriesInput = {
    create?: XOR<UsersCreateWithoutDeliveriesInput, UsersUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDeliveriesInput
    connect?: UsersWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BooksUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<BooksCreateWithoutDeliveriesInput, BooksUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: BooksCreateOrConnectWithoutDeliveriesInput
    upsert?: BooksUpsertWithoutDeliveriesInput
    connect?: BooksWhereUniqueInput
    update?: XOR<XOR<BooksUpdateToOneWithWhereWithoutDeliveriesInput, BooksUpdateWithoutDeliveriesInput>, BooksUncheckedUpdateWithoutDeliveriesInput>
  }

  export type LibrariesUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<LibrariesCreateWithoutDeliveriesInput, LibrariesUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: LibrariesCreateOrConnectWithoutDeliveriesInput
    upsert?: LibrariesUpsertWithoutDeliveriesInput
    connect?: LibrariesWhereUniqueInput
    update?: XOR<XOR<LibrariesUpdateToOneWithWhereWithoutDeliveriesInput, LibrariesUpdateWithoutDeliveriesInput>, LibrariesUncheckedUpdateWithoutDeliveriesInput>
  }

  export type UsersUpdateOneRequiredWithoutDeliveriesNestedInput = {
    create?: XOR<UsersCreateWithoutDeliveriesInput, UsersUncheckedCreateWithoutDeliveriesInput>
    connectOrCreate?: UsersCreateOrConnectWithoutDeliveriesInput
    upsert?: UsersUpsertWithoutDeliveriesInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutDeliveriesInput, UsersUpdateWithoutDeliveriesInput>, UsersUncheckedUpdateWithoutDeliveriesInput>
  }

  export type DeliveriesCreateNestedManyWithoutLibrariesInput = {
    create?: XOR<DeliveriesCreateWithoutLibrariesInput, DeliveriesUncheckedCreateWithoutLibrariesInput> | DeliveriesCreateWithoutLibrariesInput[] | DeliveriesUncheckedCreateWithoutLibrariesInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutLibrariesInput | DeliveriesCreateOrConnectWithoutLibrariesInput[]
    createMany?: DeliveriesCreateManyLibrariesInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type DeliveriesUncheckedCreateNestedManyWithoutLibrariesInput = {
    create?: XOR<DeliveriesCreateWithoutLibrariesInput, DeliveriesUncheckedCreateWithoutLibrariesInput> | DeliveriesCreateWithoutLibrariesInput[] | DeliveriesUncheckedCreateWithoutLibrariesInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutLibrariesInput | DeliveriesCreateOrConnectWithoutLibrariesInput[]
    createMany?: DeliveriesCreateManyLibrariesInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type DeliveriesUpdateManyWithoutLibrariesNestedInput = {
    create?: XOR<DeliveriesCreateWithoutLibrariesInput, DeliveriesUncheckedCreateWithoutLibrariesInput> | DeliveriesCreateWithoutLibrariesInput[] | DeliveriesUncheckedCreateWithoutLibrariesInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutLibrariesInput | DeliveriesCreateOrConnectWithoutLibrariesInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutLibrariesInput | DeliveriesUpsertWithWhereUniqueWithoutLibrariesInput[]
    createMany?: DeliveriesCreateManyLibrariesInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutLibrariesInput | DeliveriesUpdateWithWhereUniqueWithoutLibrariesInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutLibrariesInput | DeliveriesUpdateManyWithWhereWithoutLibrariesInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type DeliveriesUncheckedUpdateManyWithoutLibrariesNestedInput = {
    create?: XOR<DeliveriesCreateWithoutLibrariesInput, DeliveriesUncheckedCreateWithoutLibrariesInput> | DeliveriesCreateWithoutLibrariesInput[] | DeliveriesUncheckedCreateWithoutLibrariesInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutLibrariesInput | DeliveriesCreateOrConnectWithoutLibrariesInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutLibrariesInput | DeliveriesUpsertWithWhereUniqueWithoutLibrariesInput[]
    createMany?: DeliveriesCreateManyLibrariesInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutLibrariesInput | DeliveriesUpdateWithWhereUniqueWithoutLibrariesInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutLibrariesInput | DeliveriesUpdateManyWithWhereWithoutLibrariesInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type CommentsCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type DeliveriesCreateNestedManyWithoutUsersInput = {
    create?: XOR<DeliveriesCreateWithoutUsersInput, DeliveriesUncheckedCreateWithoutUsersInput> | DeliveriesCreateWithoutUsersInput[] | DeliveriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutUsersInput | DeliveriesCreateOrConnectWithoutUsersInput[]
    createMany?: DeliveriesCreateManyUsersInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type CommentsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
  }

  export type DeliveriesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<DeliveriesCreateWithoutUsersInput, DeliveriesUncheckedCreateWithoutUsersInput> | DeliveriesCreateWithoutUsersInput[] | DeliveriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutUsersInput | DeliveriesCreateOrConnectWithoutUsersInput[]
    createMany?: DeliveriesCreateManyUsersInputEnvelope
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
  }

  export type CommentsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUsersInput | CommentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUsersInput | CommentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUsersInput | CommentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type DeliveriesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<DeliveriesCreateWithoutUsersInput, DeliveriesUncheckedCreateWithoutUsersInput> | DeliveriesCreateWithoutUsersInput[] | DeliveriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutUsersInput | DeliveriesCreateOrConnectWithoutUsersInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutUsersInput | DeliveriesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: DeliveriesCreateManyUsersInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutUsersInput | DeliveriesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutUsersInput | DeliveriesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type CommentsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput> | CommentsCreateWithoutUsersInput[] | CommentsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: CommentsCreateOrConnectWithoutUsersInput | CommentsCreateOrConnectWithoutUsersInput[]
    upsert?: CommentsUpsertWithWhereUniqueWithoutUsersInput | CommentsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: CommentsCreateManyUsersInputEnvelope
    set?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    disconnect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    delete?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    connect?: CommentsWhereUniqueInput | CommentsWhereUniqueInput[]
    update?: CommentsUpdateWithWhereUniqueWithoutUsersInput | CommentsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: CommentsUpdateManyWithWhereWithoutUsersInput | CommentsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
  }

  export type DeliveriesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<DeliveriesCreateWithoutUsersInput, DeliveriesUncheckedCreateWithoutUsersInput> | DeliveriesCreateWithoutUsersInput[] | DeliveriesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: DeliveriesCreateOrConnectWithoutUsersInput | DeliveriesCreateOrConnectWithoutUsersInput[]
    upsert?: DeliveriesUpsertWithWhereUniqueWithoutUsersInput | DeliveriesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: DeliveriesCreateManyUsersInputEnvelope
    set?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    disconnect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    delete?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    connect?: DeliveriesWhereUniqueInput | DeliveriesWhereUniqueInput[]
    update?: DeliveriesUpdateWithWhereUniqueWithoutUsersInput | DeliveriesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: DeliveriesUpdateManyWithWhereWithoutUsersInput | DeliveriesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BooksCreateWithoutAuthorsInput = {
    title: string
    description: string
    note?: string | null
    Deliveries?: DeliveriesCreateNestedManyWithoutBooksInput
  }

  export type BooksUncheckedCreateWithoutAuthorsInput = {
    id?: number
    title: string
    description: string
    note?: string | null
    Deliveries?: DeliveriesUncheckedCreateNestedManyWithoutBooksInput
  }

  export type BooksCreateOrConnectWithoutAuthorsInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutAuthorsInput, BooksUncheckedCreateWithoutAuthorsInput>
  }

  export type BooksCreateManyAuthorsInputEnvelope = {
    data: BooksCreateManyAuthorsInput | BooksCreateManyAuthorsInput[]
    skipDuplicates?: boolean
  }

  export type BooksUpsertWithWhereUniqueWithoutAuthorsInput = {
    where: BooksWhereUniqueInput
    update: XOR<BooksUpdateWithoutAuthorsInput, BooksUncheckedUpdateWithoutAuthorsInput>
    create: XOR<BooksCreateWithoutAuthorsInput, BooksUncheckedCreateWithoutAuthorsInput>
  }

  export type BooksUpdateWithWhereUniqueWithoutAuthorsInput = {
    where: BooksWhereUniqueInput
    data: XOR<BooksUpdateWithoutAuthorsInput, BooksUncheckedUpdateWithoutAuthorsInput>
  }

  export type BooksUpdateManyWithWhereWithoutAuthorsInput = {
    where: BooksScalarWhereInput
    data: XOR<BooksUpdateManyMutationInput, BooksUncheckedUpdateManyWithoutAuthorsInput>
  }

  export type BooksScalarWhereInput = {
    AND?: BooksScalarWhereInput | BooksScalarWhereInput[]
    OR?: BooksScalarWhereInput[]
    NOT?: BooksScalarWhereInput | BooksScalarWhereInput[]
    id?: IntFilter<"Books"> | number
    title?: StringFilter<"Books"> | string
    description?: StringFilter<"Books"> | string
    author?: IntFilter<"Books"> | number
    note?: StringNullableFilter<"Books"> | string | null
  }

  export type AuthorsCreateWithoutBooksInput = {
    name: string
  }

  export type AuthorsUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
  }

  export type AuthorsCreateOrConnectWithoutBooksInput = {
    where: AuthorsWhereUniqueInput
    create: XOR<AuthorsCreateWithoutBooksInput, AuthorsUncheckedCreateWithoutBooksInput>
  }

  export type DeliveriesCreateWithoutBooksInput = {
    borrowed_at: Date | string
    due_date: Date | string
    returned_at?: Date | string | null
    Libraries: LibrariesCreateNestedOneWithoutDeliveriesInput
    Users: UsersCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveriesUncheckedCreateWithoutBooksInput = {
    id?: number
    library_id: number
    borrowed_at: Date | string
    due_date: Date | string
    returned_at?: Date | string | null
    user_id: number
  }

  export type DeliveriesCreateOrConnectWithoutBooksInput = {
    where: DeliveriesWhereUniqueInput
    create: XOR<DeliveriesCreateWithoutBooksInput, DeliveriesUncheckedCreateWithoutBooksInput>
  }

  export type DeliveriesCreateManyBooksInputEnvelope = {
    data: DeliveriesCreateManyBooksInput | DeliveriesCreateManyBooksInput[]
    skipDuplicates?: boolean
  }

  export type AuthorsUpsertWithoutBooksInput = {
    update: XOR<AuthorsUpdateWithoutBooksInput, AuthorsUncheckedUpdateWithoutBooksInput>
    create: XOR<AuthorsCreateWithoutBooksInput, AuthorsUncheckedCreateWithoutBooksInput>
    where?: AuthorsWhereInput
  }

  export type AuthorsUpdateToOneWithWhereWithoutBooksInput = {
    where?: AuthorsWhereInput
    data: XOR<AuthorsUpdateWithoutBooksInput, AuthorsUncheckedUpdateWithoutBooksInput>
  }

  export type AuthorsUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorsUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DeliveriesUpsertWithWhereUniqueWithoutBooksInput = {
    where: DeliveriesWhereUniqueInput
    update: XOR<DeliveriesUpdateWithoutBooksInput, DeliveriesUncheckedUpdateWithoutBooksInput>
    create: XOR<DeliveriesCreateWithoutBooksInput, DeliveriesUncheckedCreateWithoutBooksInput>
  }

  export type DeliveriesUpdateWithWhereUniqueWithoutBooksInput = {
    where: DeliveriesWhereUniqueInput
    data: XOR<DeliveriesUpdateWithoutBooksInput, DeliveriesUncheckedUpdateWithoutBooksInput>
  }

  export type DeliveriesUpdateManyWithWhereWithoutBooksInput = {
    where: DeliveriesScalarWhereInput
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyWithoutBooksInput>
  }

  export type DeliveriesScalarWhereInput = {
    AND?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
    OR?: DeliveriesScalarWhereInput[]
    NOT?: DeliveriesScalarWhereInput | DeliveriesScalarWhereInput[]
    id?: IntFilter<"Deliveries"> | number
    book_id?: IntFilter<"Deliveries"> | number
    library_id?: IntFilter<"Deliveries"> | number
    borrowed_at?: DateTimeFilter<"Deliveries"> | Date | string
    due_date?: DateTimeFilter<"Deliveries"> | Date | string
    returned_at?: DateTimeNullableFilter<"Deliveries"> | Date | string | null
    user_id?: IntFilter<"Deliveries"> | number
  }

  export type UsersCreateWithoutCommentsInput = {
    firstname: string
    lastname: string
    email: string
    Deliveries?: DeliveriesCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutCommentsInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    Deliveries?: DeliveriesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutCommentsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
  }

  export type UsersUpsertWithoutCommentsInput = {
    update: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
    create: XOR<UsersCreateWithoutCommentsInput, UsersUncheckedCreateWithoutCommentsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutCommentsInput, UsersUncheckedUpdateWithoutCommentsInput>
  }

  export type UsersUpdateWithoutCommentsInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Deliveries?: DeliveriesUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Deliveries?: DeliveriesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type BooksCreateWithoutDeliveriesInput = {
    title: string
    description: string
    note?: string | null
    Authors?: AuthorsCreateNestedOneWithoutBooksInput
  }

  export type BooksUncheckedCreateWithoutDeliveriesInput = {
    id?: number
    title: string
    description: string
    author?: number
    note?: string | null
  }

  export type BooksCreateOrConnectWithoutDeliveriesInput = {
    where: BooksWhereUniqueInput
    create: XOR<BooksCreateWithoutDeliveriesInput, BooksUncheckedCreateWithoutDeliveriesInput>
  }

  export type LibrariesCreateWithoutDeliveriesInput = {
    name: string
    location?: string | null
  }

  export type LibrariesUncheckedCreateWithoutDeliveriesInput = {
    id?: number
    name: string
    location?: string | null
  }

  export type LibrariesCreateOrConnectWithoutDeliveriesInput = {
    where: LibrariesWhereUniqueInput
    create: XOR<LibrariesCreateWithoutDeliveriesInput, LibrariesUncheckedCreateWithoutDeliveriesInput>
  }

  export type UsersCreateWithoutDeliveriesInput = {
    firstname: string
    lastname: string
    email: string
    Comments?: CommentsCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutDeliveriesInput = {
    id?: number
    firstname: string
    lastname: string
    email: string
    Comments?: CommentsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutDeliveriesInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutDeliveriesInput, UsersUncheckedCreateWithoutDeliveriesInput>
  }

  export type BooksUpsertWithoutDeliveriesInput = {
    update: XOR<BooksUpdateWithoutDeliveriesInput, BooksUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<BooksCreateWithoutDeliveriesInput, BooksUncheckedCreateWithoutDeliveriesInput>
    where?: BooksWhereInput
  }

  export type BooksUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: BooksWhereInput
    data: XOR<BooksUpdateWithoutDeliveriesInput, BooksUncheckedUpdateWithoutDeliveriesInput>
  }

  export type BooksUpdateWithoutDeliveriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    Authors?: AuthorsUpdateOneRequiredWithoutBooksNestedInput
  }

  export type BooksUncheckedUpdateWithoutDeliveriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LibrariesUpsertWithoutDeliveriesInput = {
    update: XOR<LibrariesUpdateWithoutDeliveriesInput, LibrariesUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<LibrariesCreateWithoutDeliveriesInput, LibrariesUncheckedCreateWithoutDeliveriesInput>
    where?: LibrariesWhereInput
  }

  export type LibrariesUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: LibrariesWhereInput
    data: XOR<LibrariesUpdateWithoutDeliveriesInput, LibrariesUncheckedUpdateWithoutDeliveriesInput>
  }

  export type LibrariesUpdateWithoutDeliveriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LibrariesUncheckedUpdateWithoutDeliveriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUpsertWithoutDeliveriesInput = {
    update: XOR<UsersUpdateWithoutDeliveriesInput, UsersUncheckedUpdateWithoutDeliveriesInput>
    create: XOR<UsersCreateWithoutDeliveriesInput, UsersUncheckedCreateWithoutDeliveriesInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutDeliveriesInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutDeliveriesInput, UsersUncheckedUpdateWithoutDeliveriesInput>
  }

  export type UsersUpdateWithoutDeliveriesInput = {
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Comments?: CommentsUpdateManyWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutDeliveriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Comments?: CommentsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type DeliveriesCreateWithoutLibrariesInput = {
    borrowed_at: Date | string
    due_date: Date | string
    returned_at?: Date | string | null
    Books: BooksCreateNestedOneWithoutDeliveriesInput
    Users: UsersCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveriesUncheckedCreateWithoutLibrariesInput = {
    id?: number
    book_id: number
    borrowed_at: Date | string
    due_date: Date | string
    returned_at?: Date | string | null
    user_id: number
  }

  export type DeliveriesCreateOrConnectWithoutLibrariesInput = {
    where: DeliveriesWhereUniqueInput
    create: XOR<DeliveriesCreateWithoutLibrariesInput, DeliveriesUncheckedCreateWithoutLibrariesInput>
  }

  export type DeliveriesCreateManyLibrariesInputEnvelope = {
    data: DeliveriesCreateManyLibrariesInput | DeliveriesCreateManyLibrariesInput[]
    skipDuplicates?: boolean
  }

  export type DeliveriesUpsertWithWhereUniqueWithoutLibrariesInput = {
    where: DeliveriesWhereUniqueInput
    update: XOR<DeliveriesUpdateWithoutLibrariesInput, DeliveriesUncheckedUpdateWithoutLibrariesInput>
    create: XOR<DeliveriesCreateWithoutLibrariesInput, DeliveriesUncheckedCreateWithoutLibrariesInput>
  }

  export type DeliveriesUpdateWithWhereUniqueWithoutLibrariesInput = {
    where: DeliveriesWhereUniqueInput
    data: XOR<DeliveriesUpdateWithoutLibrariesInput, DeliveriesUncheckedUpdateWithoutLibrariesInput>
  }

  export type DeliveriesUpdateManyWithWhereWithoutLibrariesInput = {
    where: DeliveriesScalarWhereInput
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyWithoutLibrariesInput>
  }

  export type CommentsCreateWithoutUsersInput = {
    comment: string
    book_id: number
  }

  export type CommentsUncheckedCreateWithoutUsersInput = {
    id?: number
    comment: string
    book_id: number
  }

  export type CommentsCreateOrConnectWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    create: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput>
  }

  export type CommentsCreateManyUsersInputEnvelope = {
    data: CommentsCreateManyUsersInput | CommentsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type DeliveriesCreateWithoutUsersInput = {
    borrowed_at: Date | string
    due_date: Date | string
    returned_at?: Date | string | null
    Books: BooksCreateNestedOneWithoutDeliveriesInput
    Libraries: LibrariesCreateNestedOneWithoutDeliveriesInput
  }

  export type DeliveriesUncheckedCreateWithoutUsersInput = {
    id?: number
    book_id: number
    library_id: number
    borrowed_at: Date | string
    due_date: Date | string
    returned_at?: Date | string | null
  }

  export type DeliveriesCreateOrConnectWithoutUsersInput = {
    where: DeliveriesWhereUniqueInput
    create: XOR<DeliveriesCreateWithoutUsersInput, DeliveriesUncheckedCreateWithoutUsersInput>
  }

  export type DeliveriesCreateManyUsersInputEnvelope = {
    data: DeliveriesCreateManyUsersInput | DeliveriesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type CommentsUpsertWithWhereUniqueWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    update: XOR<CommentsUpdateWithoutUsersInput, CommentsUncheckedUpdateWithoutUsersInput>
    create: XOR<CommentsCreateWithoutUsersInput, CommentsUncheckedCreateWithoutUsersInput>
  }

  export type CommentsUpdateWithWhereUniqueWithoutUsersInput = {
    where: CommentsWhereUniqueInput
    data: XOR<CommentsUpdateWithoutUsersInput, CommentsUncheckedUpdateWithoutUsersInput>
  }

  export type CommentsUpdateManyWithWhereWithoutUsersInput = {
    where: CommentsScalarWhereInput
    data: XOR<CommentsUpdateManyMutationInput, CommentsUncheckedUpdateManyWithoutUsersInput>
  }

  export type CommentsScalarWhereInput = {
    AND?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    OR?: CommentsScalarWhereInput[]
    NOT?: CommentsScalarWhereInput | CommentsScalarWhereInput[]
    id?: IntFilter<"Comments"> | number
    comment?: StringFilter<"Comments"> | string
    user_id?: IntFilter<"Comments"> | number
    book_id?: IntFilter<"Comments"> | number
  }

  export type DeliveriesUpsertWithWhereUniqueWithoutUsersInput = {
    where: DeliveriesWhereUniqueInput
    update: XOR<DeliveriesUpdateWithoutUsersInput, DeliveriesUncheckedUpdateWithoutUsersInput>
    create: XOR<DeliveriesCreateWithoutUsersInput, DeliveriesUncheckedCreateWithoutUsersInput>
  }

  export type DeliveriesUpdateWithWhereUniqueWithoutUsersInput = {
    where: DeliveriesWhereUniqueInput
    data: XOR<DeliveriesUpdateWithoutUsersInput, DeliveriesUncheckedUpdateWithoutUsersInput>
  }

  export type DeliveriesUpdateManyWithWhereWithoutUsersInput = {
    where: DeliveriesScalarWhereInput
    data: XOR<DeliveriesUpdateManyMutationInput, DeliveriesUncheckedUpdateManyWithoutUsersInput>
  }

  export type BooksCreateManyAuthorsInput = {
    id?: number
    title: string
    description: string
    note?: string | null
  }

  export type BooksUpdateWithoutAuthorsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    Deliveries?: DeliveriesUpdateManyWithoutBooksNestedInput
  }

  export type BooksUncheckedUpdateWithoutAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    Deliveries?: DeliveriesUncheckedUpdateManyWithoutBooksNestedInput
  }

  export type BooksUncheckedUpdateManyWithoutAuthorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveriesCreateManyBooksInput = {
    id?: number
    library_id: number
    borrowed_at: Date | string
    due_date: Date | string
    returned_at?: Date | string | null
    user_id: number
  }

  export type DeliveriesUpdateWithoutBooksInput = {
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Libraries?: LibrariesUpdateOneRequiredWithoutDeliveriesNestedInput
    Users?: UsersUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveriesUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    library_id?: IntFieldUpdateOperationsInput | number
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DeliveriesUncheckedUpdateManyWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    library_id?: IntFieldUpdateOperationsInput | number
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DeliveriesCreateManyLibrariesInput = {
    id?: number
    book_id: number
    borrowed_at: Date | string
    due_date: Date | string
    returned_at?: Date | string | null
    user_id: number
  }

  export type DeliveriesUpdateWithoutLibrariesInput = {
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Books?: BooksUpdateOneRequiredWithoutDeliveriesNestedInput
    Users?: UsersUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveriesUncheckedUpdateWithoutLibrariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type DeliveriesUncheckedUpdateManyWithoutLibrariesInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsCreateManyUsersInput = {
    id?: number
    comment: string
    book_id: number
  }

  export type DeliveriesCreateManyUsersInput = {
    id?: number
    book_id: number
    library_id: number
    borrowed_at: Date | string
    due_date: Date | string
    returned_at?: Date | string | null
  }

  export type CommentsUpdateWithoutUsersInput = {
    comment?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type CommentsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type DeliveriesUpdateWithoutUsersInput = {
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Books?: BooksUpdateOneRequiredWithoutDeliveriesNestedInput
    Libraries?: LibrariesUpdateOneRequiredWithoutDeliveriesNestedInput
  }

  export type DeliveriesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    library_id?: IntFieldUpdateOperationsInput | number
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveriesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
    library_id?: IntFieldUpdateOperationsInput | number
    borrowed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    due_date?: DateTimeFieldUpdateOperationsInput | Date | string
    returned_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
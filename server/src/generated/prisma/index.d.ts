
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
 * Model brands
 * 
 */
export type brands = $Result.DefaultSelection<Prisma.$brandsPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model stocks
 * 
 */
export type stocks = $Result.DefaultSelection<Prisma.$stocksPayload>
/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model order_items
 * 
 */
export type order_items = $Result.DefaultSelection<Prisma.$order_itemsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model staffs
 * 
 */
export type staffs = $Result.DefaultSelection<Prisma.$staffsPayload>
/**
 * Model stores
 * 
 */
export type stores = $Result.DefaultSelection<Prisma.$storesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Brands
 * const brands = await prisma.brands.findMany()
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
   * // Fetch zero or more Brands
   * const brands = await prisma.brands.findMany()
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
   * `prisma.brands`: Exposes CRUD operations for the **brands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brands.findMany()
    * ```
    */
  get brands(): Prisma.brandsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stocks`: Exposes CRUD operations for the **stocks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stocks.findMany()
    * ```
    */
  get stocks(): Prisma.stocksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.staffs`: Exposes CRUD operations for the **staffs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Staffs
    * const staffs = await prisma.staffs.findMany()
    * ```
    */
  get staffs(): Prisma.staffsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stores`: Exposes CRUD operations for the **stores** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.stores.findMany()
    * ```
    */
  get stores(): Prisma.storesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    brands: 'brands',
    categories: 'categories',
    products: 'products',
    stocks: 'stocks',
    customers: 'customers',
    order_items: 'order_items',
    orders: 'orders',
    staffs: 'staffs',
    stores: 'stores'
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
      modelProps: "brands" | "categories" | "products" | "stocks" | "customers" | "order_items" | "orders" | "staffs" | "stores"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      brands: {
        payload: Prisma.$brandsPayload<ExtArgs>
        fields: Prisma.brandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.brandsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.brandsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          findFirst: {
            args: Prisma.brandsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.brandsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          findMany: {
            args: Prisma.brandsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>[]
          }
          create: {
            args: Prisma.brandsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          createMany: {
            args: Prisma.brandsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.brandsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>[]
          }
          delete: {
            args: Prisma.brandsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          update: {
            args: Prisma.brandsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          deleteMany: {
            args: Prisma.brandsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.brandsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.brandsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>[]
          }
          upsert: {
            args: Prisma.brandsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$brandsPayload>
          }
          aggregate: {
            args: Prisma.BrandsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrands>
          }
          groupBy: {
            args: Prisma.brandsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandsGroupByOutputType>[]
          }
          count: {
            args: Prisma.brandsCountArgs<ExtArgs>
            result: $Utils.Optional<BrandsCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      stocks: {
        payload: Prisma.$stocksPayload<ExtArgs>
        fields: Prisma.stocksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stocksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stocksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          findFirst: {
            args: Prisma.stocksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stocksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          findMany: {
            args: Prisma.stocksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>[]
          }
          create: {
            args: Prisma.stocksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          createMany: {
            args: Prisma.stocksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stocksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>[]
          }
          delete: {
            args: Prisma.stocksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          update: {
            args: Prisma.stocksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          deleteMany: {
            args: Prisma.stocksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stocksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stocksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>[]
          }
          upsert: {
            args: Prisma.stocksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stocksPayload>
          }
          aggregate: {
            args: Prisma.StocksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStocks>
          }
          groupBy: {
            args: Prisma.stocksGroupByArgs<ExtArgs>
            result: $Utils.Optional<StocksGroupByOutputType>[]
          }
          count: {
            args: Prisma.stocksCountArgs<ExtArgs>
            result: $Utils.Optional<StocksCountAggregateOutputType> | number
          }
        }
      }
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      order_items: {
        payload: Prisma.$order_itemsPayload<ExtArgs>
        fields: Prisma.order_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findFirst: {
            args: Prisma.order_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findMany: {
            args: Prisma.order_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          create: {
            args: Prisma.order_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          createMany: {
            args: Prisma.order_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          delete: {
            args: Prisma.order_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          update: {
            args: Prisma.order_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          deleteMany: {
            args: Prisma.order_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          upsert: {
            args: Prisma.order_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          aggregate: {
            args: Prisma.Order_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_items>
          }
          groupBy: {
            args: Prisma.order_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      staffs: {
        payload: Prisma.$staffsPayload<ExtArgs>
        fields: Prisma.staffsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.staffsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.staffsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffsPayload>
          }
          findFirst: {
            args: Prisma.staffsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.staffsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffsPayload>
          }
          findMany: {
            args: Prisma.staffsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffsPayload>[]
          }
          create: {
            args: Prisma.staffsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffsPayload>
          }
          createMany: {
            args: Prisma.staffsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.staffsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffsPayload>[]
          }
          delete: {
            args: Prisma.staffsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffsPayload>
          }
          update: {
            args: Prisma.staffsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffsPayload>
          }
          deleteMany: {
            args: Prisma.staffsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.staffsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.staffsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffsPayload>[]
          }
          upsert: {
            args: Prisma.staffsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$staffsPayload>
          }
          aggregate: {
            args: Prisma.StaffsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStaffs>
          }
          groupBy: {
            args: Prisma.staffsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StaffsGroupByOutputType>[]
          }
          count: {
            args: Prisma.staffsCountArgs<ExtArgs>
            result: $Utils.Optional<StaffsCountAggregateOutputType> | number
          }
        }
      }
      stores: {
        payload: Prisma.$storesPayload<ExtArgs>
        fields: Prisma.storesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.storesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.storesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          findFirst: {
            args: Prisma.storesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.storesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          findMany: {
            args: Prisma.storesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          create: {
            args: Prisma.storesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          createMany: {
            args: Prisma.storesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.storesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          delete: {
            args: Prisma.storesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          update: {
            args: Prisma.storesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          deleteMany: {
            args: Prisma.storesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.storesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.storesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>[]
          }
          upsert: {
            args: Prisma.storesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$storesPayload>
          }
          aggregate: {
            args: Prisma.StoresAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStores>
          }
          groupBy: {
            args: Prisma.storesGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoresGroupByOutputType>[]
          }
          count: {
            args: Prisma.storesCountArgs<ExtArgs>
            result: $Utils.Optional<StoresCountAggregateOutputType> | number
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
    brands?: brandsOmit
    categories?: categoriesOmit
    products?: productsOmit
    stocks?: stocksOmit
    customers?: customersOmit
    order_items?: order_itemsOmit
    orders?: ordersOmit
    staffs?: staffsOmit
    stores?: storesOmit
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
   * Count Type BrandsCountOutputType
   */

  export type BrandsCountOutputType = {
    products: number
  }

  export type BrandsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | BrandsCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsCountOutputType
     */
    select?: BrandsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    stocks: number
    order_items: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stocks?: boolean | ProductsCountOutputTypeCountStocksArgs
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stocksWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    orders: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type StaffsCountOutputType
   */

  export type StaffsCountOutputType = {
    orders: number
    other_staffs: number
  }

  export type StaffsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | StaffsCountOutputTypeCountOrdersArgs
    other_staffs?: boolean | StaffsCountOutputTypeCountOther_staffsArgs
  }

  // Custom InputTypes
  /**
   * StaffsCountOutputType without action
   */
  export type StaffsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StaffsCountOutputType
     */
    select?: StaffsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StaffsCountOutputType without action
   */
  export type StaffsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * StaffsCountOutputType without action
   */
  export type StaffsCountOutputTypeCountOther_staffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffsWhereInput
  }


  /**
   * Count Type StoresCountOutputType
   */

  export type StoresCountOutputType = {
    stocks: number
    orders: number
    staffs: number
  }

  export type StoresCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stocks?: boolean | StoresCountOutputTypeCountStocksArgs
    orders?: boolean | StoresCountOutputTypeCountOrdersArgs
    staffs?: boolean | StoresCountOutputTypeCountStaffsArgs
  }

  // Custom InputTypes
  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoresCountOutputType
     */
    select?: StoresCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stocksWhereInput
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * StoresCountOutputType without action
   */
  export type StoresCountOutputTypeCountStaffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model brands
   */

  export type AggregateBrands = {
    _count: BrandsCountAggregateOutputType | null
    _avg: BrandsAvgAggregateOutputType | null
    _sum: BrandsSumAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  export type BrandsAvgAggregateOutputType = {
    brand_id: number | null
  }

  export type BrandsSumAggregateOutputType = {
    brand_id: number | null
  }

  export type BrandsMinAggregateOutputType = {
    brand_id: number | null
    brand_name: string | null
  }

  export type BrandsMaxAggregateOutputType = {
    brand_id: number | null
    brand_name: string | null
  }

  export type BrandsCountAggregateOutputType = {
    brand_id: number
    brand_name: number
    _all: number
  }


  export type BrandsAvgAggregateInputType = {
    brand_id?: true
  }

  export type BrandsSumAggregateInputType = {
    brand_id?: true
  }

  export type BrandsMinAggregateInputType = {
    brand_id?: true
    brand_name?: true
  }

  export type BrandsMaxAggregateInputType = {
    brand_id?: true
    brand_name?: true
  }

  export type BrandsCountAggregateInputType = {
    brand_id?: true
    brand_name?: true
    _all?: true
  }

  export type BrandsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which brands to aggregate.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned brands
    **/
    _count?: true | BrandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandsMaxAggregateInputType
  }

  export type GetBrandsAggregateType<T extends BrandsAggregateArgs> = {
        [P in keyof T & keyof AggregateBrands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrands[P]>
      : GetScalarType<T[P], AggregateBrands[P]>
  }




  export type brandsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: brandsWhereInput
    orderBy?: brandsOrderByWithAggregationInput | brandsOrderByWithAggregationInput[]
    by: BrandsScalarFieldEnum[] | BrandsScalarFieldEnum
    having?: brandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandsCountAggregateInputType | true
    _avg?: BrandsAvgAggregateInputType
    _sum?: BrandsSumAggregateInputType
    _min?: BrandsMinAggregateInputType
    _max?: BrandsMaxAggregateInputType
  }

  export type BrandsGroupByOutputType = {
    brand_id: number
    brand_name: string
    _count: BrandsCountAggregateOutputType | null
    _avg: BrandsAvgAggregateOutputType | null
    _sum: BrandsSumAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  type GetBrandsGroupByPayload<T extends brandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandsGroupByOutputType[P]>
            : GetScalarType<T[P], BrandsGroupByOutputType[P]>
        }
      >
    >


  export type brandsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    brand_id?: boolean
    brand_name?: boolean
    products?: boolean | brands$productsArgs<ExtArgs>
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brands"]>

  export type brandsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    brand_id?: boolean
    brand_name?: boolean
  }, ExtArgs["result"]["brands"]>

  export type brandsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    brand_id?: boolean
    brand_name?: boolean
  }, ExtArgs["result"]["brands"]>

  export type brandsSelectScalar = {
    brand_id?: boolean
    brand_name?: boolean
  }

  export type brandsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"brand_id" | "brand_name", ExtArgs["result"]["brands"]>
  export type brandsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | brands$productsArgs<ExtArgs>
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type brandsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type brandsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $brandsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "brands"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      brand_id: number
      brand_name: string
    }, ExtArgs["result"]["brands"]>
    composites: {}
  }

  type brandsGetPayload<S extends boolean | null | undefined | brandsDefaultArgs> = $Result.GetResult<Prisma.$brandsPayload, S>

  type brandsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<brandsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandsCountAggregateInputType | true
    }

  export interface brandsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['brands'], meta: { name: 'brands' } }
    /**
     * Find zero or one Brands that matches the filter.
     * @param {brandsFindUniqueArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends brandsFindUniqueArgs>(args: SelectSubset<T, brandsFindUniqueArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brands that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {brandsFindUniqueOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends brandsFindUniqueOrThrowArgs>(args: SelectSubset<T, brandsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsFindFirstArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends brandsFindFirstArgs>(args?: SelectSubset<T, brandsFindFirstArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsFindFirstOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends brandsFindFirstOrThrowArgs>(args?: SelectSubset<T, brandsFindFirstOrThrowArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brands.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brands.findMany({ take: 10 })
     * 
     * // Only select the `brand_id`
     * const brandsWithBrand_idOnly = await prisma.brands.findMany({ select: { brand_id: true } })
     * 
     */
    findMany<T extends brandsFindManyArgs>(args?: SelectSubset<T, brandsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brands.
     * @param {brandsCreateArgs} args - Arguments to create a Brands.
     * @example
     * // Create one Brands
     * const Brands = await prisma.brands.create({
     *   data: {
     *     // ... data to create a Brands
     *   }
     * })
     * 
     */
    create<T extends brandsCreateArgs>(args: SelectSubset<T, brandsCreateArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {brandsCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends brandsCreateManyArgs>(args?: SelectSubset<T, brandsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {brandsCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `brand_id`
     * const brandsWithBrand_idOnly = await prisma.brands.createManyAndReturn({
     *   select: { brand_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends brandsCreateManyAndReturnArgs>(args?: SelectSubset<T, brandsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brands.
     * @param {brandsDeleteArgs} args - Arguments to delete one Brands.
     * @example
     * // Delete one Brands
     * const Brands = await prisma.brands.delete({
     *   where: {
     *     // ... filter to delete one Brands
     *   }
     * })
     * 
     */
    delete<T extends brandsDeleteArgs>(args: SelectSubset<T, brandsDeleteArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brands.
     * @param {brandsUpdateArgs} args - Arguments to update one Brands.
     * @example
     * // Update one Brands
     * const brands = await prisma.brands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends brandsUpdateArgs>(args: SelectSubset<T, brandsUpdateArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {brandsDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends brandsDeleteManyArgs>(args?: SelectSubset<T, brandsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends brandsUpdateManyArgs>(args: SelectSubset<T, brandsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {brandsUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `brand_id`
     * const brandsWithBrand_idOnly = await prisma.brands.updateManyAndReturn({
     *   select: { brand_id: true },
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
    updateManyAndReturn<T extends brandsUpdateManyAndReturnArgs>(args: SelectSubset<T, brandsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brands.
     * @param {brandsUpsertArgs} args - Arguments to update or create a Brands.
     * @example
     * // Update or create a Brands
     * const brands = await prisma.brands.upsert({
     *   create: {
     *     // ... data to create a Brands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brands we want to update
     *   }
     * })
     */
    upsert<T extends brandsUpsertArgs>(args: SelectSubset<T, brandsUpsertArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brands.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends brandsCountArgs>(
      args?: Subset<T, brandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandsAggregateArgs>(args: Subset<T, BrandsAggregateArgs>): Prisma.PrismaPromise<GetBrandsAggregateType<T>>

    /**
     * Group by Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {brandsGroupByArgs} args - Group by arguments.
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
      T extends brandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: brandsGroupByArgs['orderBy'] }
        : { orderBy?: brandsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, brandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the brands model
   */
  readonly fields: brandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for brands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__brandsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends brands$productsArgs<ExtArgs> = {}>(args?: Subset<T, brands$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the brands model
   */
  interface brandsFieldRefs {
    readonly brand_id: FieldRef<"brands", 'Int'>
    readonly brand_name: FieldRef<"brands", 'String'>
  }
    

  // Custom InputTypes
  /**
   * brands findUnique
   */
  export type brandsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where: brandsWhereUniqueInput
  }

  /**
   * brands findUniqueOrThrow
   */
  export type brandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where: brandsWhereUniqueInput
  }

  /**
   * brands findFirst
   */
  export type brandsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for brands.
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * brands findFirstOrThrow
   */
  export type brandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for brands.
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * brands findMany
   */
  export type brandsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter, which brands to fetch.
     */
    where?: brandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of brands to fetch.
     */
    orderBy?: brandsOrderByWithRelationInput | brandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing brands.
     */
    cursor?: brandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` brands.
     */
    skip?: number
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * brands create
   */
  export type brandsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * The data needed to create a brands.
     */
    data: XOR<brandsCreateInput, brandsUncheckedCreateInput>
  }

  /**
   * brands createMany
   */
  export type brandsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many brands.
     */
    data: brandsCreateManyInput | brandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * brands createManyAndReturn
   */
  export type brandsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * The data used to create many brands.
     */
    data: brandsCreateManyInput | brandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * brands update
   */
  export type brandsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * The data needed to update a brands.
     */
    data: XOR<brandsUpdateInput, brandsUncheckedUpdateInput>
    /**
     * Choose, which brands to update.
     */
    where: brandsWhereUniqueInput
  }

  /**
   * brands updateMany
   */
  export type brandsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update brands.
     */
    data: XOR<brandsUpdateManyMutationInput, brandsUncheckedUpdateManyInput>
    /**
     * Filter which brands to update
     */
    where?: brandsWhereInput
    /**
     * Limit how many brands to update.
     */
    limit?: number
  }

  /**
   * brands updateManyAndReturn
   */
  export type brandsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * The data used to update brands.
     */
    data: XOR<brandsUpdateManyMutationInput, brandsUncheckedUpdateManyInput>
    /**
     * Filter which brands to update
     */
    where?: brandsWhereInput
    /**
     * Limit how many brands to update.
     */
    limit?: number
  }

  /**
   * brands upsert
   */
  export type brandsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * The filter to search for the brands to update in case it exists.
     */
    where: brandsWhereUniqueInput
    /**
     * In case the brands found by the `where` argument doesn't exist, create a new brands with this data.
     */
    create: XOR<brandsCreateInput, brandsUncheckedCreateInput>
    /**
     * In case the brands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<brandsUpdateInput, brandsUncheckedUpdateInput>
  }

  /**
   * brands delete
   */
  export type brandsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
    /**
     * Filter which brands to delete.
     */
    where: brandsWhereUniqueInput
  }

  /**
   * brands deleteMany
   */
  export type brandsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which brands to delete
     */
    where?: brandsWhereInput
    /**
     * Limit how many brands to delete.
     */
    limit?: number
  }

  /**
   * brands.products
   */
  export type brands$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * brands without action
   */
  export type brandsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the brands
     */
    select?: brandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the brands
     */
    omit?: brandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: brandsInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    category_id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    category_id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    category_id: number | null
    category_name: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    category_id: number | null
    category_name: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    category_id: number
    category_name: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    category_id?: true
  }

  export type CategoriesSumAggregateInputType = {
    category_id?: true
  }

  export type CategoriesMinAggregateInputType = {
    category_id?: true
    category_name?: true
  }

  export type CategoriesMaxAggregateInputType = {
    category_id?: true
    category_name?: true
  }

  export type CategoriesCountAggregateInputType = {
    category_id?: true
    category_name?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    category_id: number
    category_name: string
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    category_id?: boolean
    category_name?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "category_name", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      category_name: string
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.updateManyAndReturn({
     *   select: { category_id: true },
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
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly category_id: FieldRef<"categories", 'Int'>
    readonly category_name: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    product_id: number | null
    brand_id: number | null
    category_id: number | null
    model_year: number | null
    list_price: Decimal | null
  }

  export type ProductsSumAggregateOutputType = {
    product_id: number | null
    brand_id: number | null
    category_id: number | null
    model_year: number | null
    list_price: Decimal | null
  }

  export type ProductsMinAggregateOutputType = {
    product_id: number | null
    product_name: string | null
    brand_id: number | null
    category_id: number | null
    model_year: number | null
    list_price: Decimal | null
  }

  export type ProductsMaxAggregateOutputType = {
    product_id: number | null
    product_name: string | null
    brand_id: number | null
    category_id: number | null
    model_year: number | null
    list_price: Decimal | null
  }

  export type ProductsCountAggregateOutputType = {
    product_id: number
    product_name: number
    brand_id: number
    category_id: number
    model_year: number
    list_price: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    product_id?: true
    brand_id?: true
    category_id?: true
    model_year?: true
    list_price?: true
  }

  export type ProductsSumAggregateInputType = {
    product_id?: true
    brand_id?: true
    category_id?: true
    model_year?: true
    list_price?: true
  }

  export type ProductsMinAggregateInputType = {
    product_id?: true
    product_name?: true
    brand_id?: true
    category_id?: true
    model_year?: true
    list_price?: true
  }

  export type ProductsMaxAggregateInputType = {
    product_id?: true
    product_name?: true
    brand_id?: true
    category_id?: true
    model_year?: true
    list_price?: true
  }

  export type ProductsCountAggregateInputType = {
    product_id?: true
    product_name?: true
    brand_id?: true
    category_id?: true
    model_year?: true
    list_price?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    product_id: number
    product_name: string
    brand_id: number
    category_id: number
    model_year: number
    list_price: Decimal
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    brand_id?: boolean
    category_id?: boolean
    model_year?: boolean
    list_price?: boolean
    brands?: boolean | brandsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    stocks?: boolean | products$stocksArgs<ExtArgs>
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    brand_id?: boolean
    category_id?: boolean
    model_year?: boolean
    list_price?: boolean
    brands?: boolean | brandsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    brand_id?: boolean
    category_id?: boolean
    model_year?: boolean
    list_price?: boolean
    brands?: boolean | brandsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    product_id?: boolean
    product_name?: boolean
    brand_id?: boolean
    category_id?: boolean
    model_year?: boolean
    list_price?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "product_name" | "brand_id" | "category_id" | "model_year" | "list_price", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brands?: boolean | brandsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
    stocks?: boolean | products$stocksArgs<ExtArgs>
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brands?: boolean | brandsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brands?: boolean | brandsDefaultArgs<ExtArgs>
    categories?: boolean | categoriesDefaultArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      brands: Prisma.$brandsPayload<ExtArgs>
      categories: Prisma.$categoriesPayload<ExtArgs>
      stocks: Prisma.$stocksPayload<ExtArgs>[]
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      product_name: string
      brand_id: number
      category_id: number
      model_year: number
      list_price: Prisma.Decimal
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.updateManyAndReturn({
     *   select: { product_id: true },
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
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    brands<T extends brandsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, brandsDefaultArgs<ExtArgs>>): Prisma__brandsClient<$Result.GetResult<Prisma.$brandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoriesDefaultArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stocks<T extends products$stocksArgs<ExtArgs> = {}>(args?: Subset<T, products$stocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends products$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly product_id: FieldRef<"products", 'Int'>
    readonly product_name: FieldRef<"products", 'String'>
    readonly brand_id: FieldRef<"products", 'Int'>
    readonly category_id: FieldRef<"products", 'Int'>
    readonly model_year: FieldRef<"products", 'Int'>
    readonly list_price: FieldRef<"products", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.stocks
   */
  export type products$stocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksInclude<ExtArgs> | null
    where?: stocksWhereInput
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    cursor?: stocksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * products.order_items
   */
  export type products$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model stocks
   */

  export type AggregateStocks = {
    _count: StocksCountAggregateOutputType | null
    _avg: StocksAvgAggregateOutputType | null
    _sum: StocksSumAggregateOutputType | null
    _min: StocksMinAggregateOutputType | null
    _max: StocksMaxAggregateOutputType | null
  }

  export type StocksAvgAggregateOutputType = {
    store_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type StocksSumAggregateOutputType = {
    store_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type StocksMinAggregateOutputType = {
    store_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type StocksMaxAggregateOutputType = {
    store_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type StocksCountAggregateOutputType = {
    store_id: number
    product_id: number
    quantity: number
    _all: number
  }


  export type StocksAvgAggregateInputType = {
    store_id?: true
    product_id?: true
    quantity?: true
  }

  export type StocksSumAggregateInputType = {
    store_id?: true
    product_id?: true
    quantity?: true
  }

  export type StocksMinAggregateInputType = {
    store_id?: true
    product_id?: true
    quantity?: true
  }

  export type StocksMaxAggregateInputType = {
    store_id?: true
    product_id?: true
    quantity?: true
  }

  export type StocksCountAggregateInputType = {
    store_id?: true
    product_id?: true
    quantity?: true
    _all?: true
  }

  export type StocksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks to aggregate.
     */
    where?: stocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stocks
    **/
    _count?: true | StocksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StocksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StocksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StocksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StocksMaxAggregateInputType
  }

  export type GetStocksAggregateType<T extends StocksAggregateArgs> = {
        [P in keyof T & keyof AggregateStocks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStocks[P]>
      : GetScalarType<T[P], AggregateStocks[P]>
  }




  export type stocksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stocksWhereInput
    orderBy?: stocksOrderByWithAggregationInput | stocksOrderByWithAggregationInput[]
    by: StocksScalarFieldEnum[] | StocksScalarFieldEnum
    having?: stocksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StocksCountAggregateInputType | true
    _avg?: StocksAvgAggregateInputType
    _sum?: StocksSumAggregateInputType
    _min?: StocksMinAggregateInputType
    _max?: StocksMaxAggregateInputType
  }

  export type StocksGroupByOutputType = {
    store_id: number
    product_id: number
    quantity: number | null
    _count: StocksCountAggregateOutputType | null
    _avg: StocksAvgAggregateOutputType | null
    _sum: StocksSumAggregateOutputType | null
    _min: StocksMinAggregateOutputType | null
    _max: StocksMaxAggregateOutputType | null
  }

  type GetStocksGroupByPayload<T extends stocksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StocksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StocksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StocksGroupByOutputType[P]>
            : GetScalarType<T[P], StocksGroupByOutputType[P]>
        }
      >
    >


  export type stocksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    product_id?: boolean
    quantity?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stocks"]>

  export type stocksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    product_id?: boolean
    quantity?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stocks"]>

  export type stocksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    product_id?: boolean
    quantity?: boolean
    products?: boolean | productsDefaultArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stocks"]>

  export type stocksSelectScalar = {
    store_id?: boolean
    product_id?: boolean
    quantity?: boolean
  }

  export type stocksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"store_id" | "product_id" | "quantity", ExtArgs["result"]["stocks"]>
  export type stocksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }
  export type stocksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }
  export type stocksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | productsDefaultArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }

  export type $stocksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stocks"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>
      stores: Prisma.$storesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      store_id: number
      product_id: number
      quantity: number | null
    }, ExtArgs["result"]["stocks"]>
    composites: {}
  }

  type stocksGetPayload<S extends boolean | null | undefined | stocksDefaultArgs> = $Result.GetResult<Prisma.$stocksPayload, S>

  type stocksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stocksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StocksCountAggregateInputType | true
    }

  export interface stocksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stocks'], meta: { name: 'stocks' } }
    /**
     * Find zero or one Stocks that matches the filter.
     * @param {stocksFindUniqueArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stocksFindUniqueArgs>(args: SelectSubset<T, stocksFindUniqueArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stocks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stocksFindUniqueOrThrowArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stocksFindUniqueOrThrowArgs>(args: SelectSubset<T, stocksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksFindFirstArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stocksFindFirstArgs>(args?: SelectSubset<T, stocksFindFirstArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stocks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksFindFirstOrThrowArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stocksFindFirstOrThrowArgs>(args?: SelectSubset<T, stocksFindFirstOrThrowArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stocks.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stocks.findMany({ take: 10 })
     * 
     * // Only select the `store_id`
     * const stocksWithStore_idOnly = await prisma.stocks.findMany({ select: { store_id: true } })
     * 
     */
    findMany<T extends stocksFindManyArgs>(args?: SelectSubset<T, stocksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stocks.
     * @param {stocksCreateArgs} args - Arguments to create a Stocks.
     * @example
     * // Create one Stocks
     * const Stocks = await prisma.stocks.create({
     *   data: {
     *     // ... data to create a Stocks
     *   }
     * })
     * 
     */
    create<T extends stocksCreateArgs>(args: SelectSubset<T, stocksCreateArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {stocksCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stocks = await prisma.stocks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stocksCreateManyArgs>(args?: SelectSubset<T, stocksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {stocksCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stocks = await prisma.stocks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `store_id`
     * const stocksWithStore_idOnly = await prisma.stocks.createManyAndReturn({
     *   select: { store_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stocksCreateManyAndReturnArgs>(args?: SelectSubset<T, stocksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stocks.
     * @param {stocksDeleteArgs} args - Arguments to delete one Stocks.
     * @example
     * // Delete one Stocks
     * const Stocks = await prisma.stocks.delete({
     *   where: {
     *     // ... filter to delete one Stocks
     *   }
     * })
     * 
     */
    delete<T extends stocksDeleteArgs>(args: SelectSubset<T, stocksDeleteArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stocks.
     * @param {stocksUpdateArgs} args - Arguments to update one Stocks.
     * @example
     * // Update one Stocks
     * const stocks = await prisma.stocks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stocksUpdateArgs>(args: SelectSubset<T, stocksUpdateArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {stocksDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stocks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stocksDeleteManyArgs>(args?: SelectSubset<T, stocksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stocks = await prisma.stocks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stocksUpdateManyArgs>(args: SelectSubset<T, stocksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {stocksUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stocks = await prisma.stocks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks and only return the `store_id`
     * const stocksWithStore_idOnly = await prisma.stocks.updateManyAndReturn({
     *   select: { store_id: true },
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
    updateManyAndReturn<T extends stocksUpdateManyAndReturnArgs>(args: SelectSubset<T, stocksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stocks.
     * @param {stocksUpsertArgs} args - Arguments to update or create a Stocks.
     * @example
     * // Update or create a Stocks
     * const stocks = await prisma.stocks.upsert({
     *   create: {
     *     // ... data to create a Stocks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stocks we want to update
     *   }
     * })
     */
    upsert<T extends stocksUpsertArgs>(args: SelectSubset<T, stocksUpsertArgs<ExtArgs>>): Prisma__stocksClient<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stocks.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends stocksCountArgs>(
      args?: Subset<T, stocksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StocksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StocksAggregateArgs>(args: Subset<T, StocksAggregateArgs>): Prisma.PrismaPromise<GetStocksAggregateType<T>>

    /**
     * Group by Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stocksGroupByArgs} args - Group by arguments.
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
      T extends stocksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stocksGroupByArgs['orderBy'] }
        : { orderBy?: stocksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stocksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStocksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stocks model
   */
  readonly fields: stocksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stocks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stocksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stores<T extends storesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, storesDefaultArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the stocks model
   */
  interface stocksFieldRefs {
    readonly store_id: FieldRef<"stocks", 'Int'>
    readonly product_id: FieldRef<"stocks", 'Int'>
    readonly quantity: FieldRef<"stocks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * stocks findUnique
   */
  export type stocksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksInclude<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where: stocksWhereUniqueInput
  }

  /**
   * stocks findUniqueOrThrow
   */
  export type stocksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksInclude<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where: stocksWhereUniqueInput
  }

  /**
   * stocks findFirst
   */
  export type stocksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksInclude<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * stocks findFirstOrThrow
   */
  export type stocksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksInclude<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stocks.
     */
    cursor?: stocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stocks.
     */
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * stocks findMany
   */
  export type stocksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksInclude<ExtArgs> | null
    /**
     * Filter, which stocks to fetch.
     */
    where?: stocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stocks to fetch.
     */
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stocks.
     */
    cursor?: stocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stocks.
     */
    skip?: number
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * stocks create
   */
  export type stocksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksInclude<ExtArgs> | null
    /**
     * The data needed to create a stocks.
     */
    data: XOR<stocksCreateInput, stocksUncheckedCreateInput>
  }

  /**
   * stocks createMany
   */
  export type stocksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stocks.
     */
    data: stocksCreateManyInput | stocksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stocks createManyAndReturn
   */
  export type stocksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * The data used to create many stocks.
     */
    data: stocksCreateManyInput | stocksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stocks update
   */
  export type stocksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksInclude<ExtArgs> | null
    /**
     * The data needed to update a stocks.
     */
    data: XOR<stocksUpdateInput, stocksUncheckedUpdateInput>
    /**
     * Choose, which stocks to update.
     */
    where: stocksWhereUniqueInput
  }

  /**
   * stocks updateMany
   */
  export type stocksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stocks.
     */
    data: XOR<stocksUpdateManyMutationInput, stocksUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stocksWhereInput
    /**
     * Limit how many stocks to update.
     */
    limit?: number
  }

  /**
   * stocks updateManyAndReturn
   */
  export type stocksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * The data used to update stocks.
     */
    data: XOR<stocksUpdateManyMutationInput, stocksUncheckedUpdateManyInput>
    /**
     * Filter which stocks to update
     */
    where?: stocksWhereInput
    /**
     * Limit how many stocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stocks upsert
   */
  export type stocksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksInclude<ExtArgs> | null
    /**
     * The filter to search for the stocks to update in case it exists.
     */
    where: stocksWhereUniqueInput
    /**
     * In case the stocks found by the `where` argument doesn't exist, create a new stocks with this data.
     */
    create: XOR<stocksCreateInput, stocksUncheckedCreateInput>
    /**
     * In case the stocks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stocksUpdateInput, stocksUncheckedUpdateInput>
  }

  /**
   * stocks delete
   */
  export type stocksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksInclude<ExtArgs> | null
    /**
     * Filter which stocks to delete.
     */
    where: stocksWhereUniqueInput
  }

  /**
   * stocks deleteMany
   */
  export type stocksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stocks to delete
     */
    where?: stocksWhereInput
    /**
     * Limit how many stocks to delete.
     */
    limit?: number
  }

  /**
   * stocks without action
   */
  export type stocksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksInclude<ExtArgs> | null
  }


  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomersSumAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomersMinAggregateOutputType = {
    customer_id: number | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    email: string | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
  }

  export type CustomersMaxAggregateOutputType = {
    customer_id: number | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    email: string | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
  }

  export type CustomersCountAggregateOutputType = {
    customer_id: number
    first_name: number
    last_name: number
    phone: number
    email: number
    street: number
    city: number
    state: number
    zip_code: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    customer_id?: true
  }

  export type CustomersSumAggregateInputType = {
    customer_id?: true
  }

  export type CustomersMinAggregateInputType = {
    customer_id?: true
    first_name?: true
    last_name?: true
    phone?: true
    email?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
  }

  export type CustomersMaxAggregateInputType = {
    customer_id?: true
    first_name?: true
    last_name?: true
    phone?: true
    email?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
  }

  export type CustomersCountAggregateInputType = {
    customer_id?: true
    first_name?: true
    last_name?: true
    phone?: true
    email?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    customer_id: number
    first_name: string
    last_name: string
    phone: string | null
    email: string
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    orders?: boolean | customers$ordersArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    customer_id?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    email?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customer_id" | "first_name" | "last_name" | "phone" | "email" | "street" | "city" | "state" | "zip_code", ExtArgs["result"]["customers"]>
  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | customers$ordersArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customer_id: number
      first_name: string
      last_name: string
      phone: string | null
      email: string
      street: string | null
      city: string | null
      state: string | null
      zip_code: string | null
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.findMany({ select: { customer_id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.createManyAndReturn({
     *   select: { customer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.updateManyAndReturn({
     *   select: { customer_id: true },
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
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
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
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends customers$ordersArgs<ExtArgs> = {}>(args?: Subset<T, customers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly customer_id: FieldRef<"customers", 'Int'>
    readonly first_name: FieldRef<"customers", 'String'>
    readonly last_name: FieldRef<"customers", 'String'>
    readonly phone: FieldRef<"customers", 'String'>
    readonly email: FieldRef<"customers", 'String'>
    readonly street: FieldRef<"customers", 'String'>
    readonly city: FieldRef<"customers", 'String'>
    readonly state: FieldRef<"customers", 'String'>
    readonly zip_code: FieldRef<"customers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers updateManyAndReturn
   */
  export type customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers.orders
   */
  export type customers$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model order_items
   */

  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    order_id: number | null
    item_id: number | null
    product_id: number | null
    quantity: number | null
    list_price: Decimal | null
    discount: Decimal | null
  }

  export type Order_itemsSumAggregateOutputType = {
    order_id: number | null
    item_id: number | null
    product_id: number | null
    quantity: number | null
    list_price: Decimal | null
    discount: Decimal | null
  }

  export type Order_itemsMinAggregateOutputType = {
    order_id: number | null
    item_id: number | null
    product_id: number | null
    quantity: number | null
    list_price: Decimal | null
    discount: Decimal | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    order_id: number | null
    item_id: number | null
    product_id: number | null
    quantity: number | null
    list_price: Decimal | null
    discount: Decimal | null
  }

  export type Order_itemsCountAggregateOutputType = {
    order_id: number
    item_id: number
    product_id: number
    quantity: number
    list_price: number
    discount: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    order_id?: true
    item_id?: true
    product_id?: true
    quantity?: true
    list_price?: true
    discount?: true
  }

  export type Order_itemsSumAggregateInputType = {
    order_id?: true
    item_id?: true
    product_id?: true
    quantity?: true
    list_price?: true
    discount?: true
  }

  export type Order_itemsMinAggregateInputType = {
    order_id?: true
    item_id?: true
    product_id?: true
    quantity?: true
    list_price?: true
    discount?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    order_id?: true
    item_id?: true
    product_id?: true
    quantity?: true
    list_price?: true
    discount?: true
  }

  export type Order_itemsCountAggregateInputType = {
    order_id?: true
    item_id?: true
    product_id?: true
    quantity?: true
    list_price?: true
    discount?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type order_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithAggregationInput | order_itemsOrderByWithAggregationInput[]
    by: Order_itemsScalarFieldEnum[] | Order_itemsScalarFieldEnum
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }

  export type Order_itemsGroupByOutputType = {
    order_id: number
    item_id: number
    product_id: number
    quantity: number
    list_price: Decimal
    discount: Decimal
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    item_id?: boolean
    product_id?: boolean
    quantity?: boolean
    list_price?: boolean
    discount?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    item_id?: boolean
    product_id?: boolean
    quantity?: boolean
    list_price?: boolean
    discount?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    item_id?: boolean
    product_id?: boolean
    quantity?: boolean
    list_price?: boolean
    discount?: boolean
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectScalar = {
    order_id?: boolean
    item_id?: boolean
    product_id?: boolean
    quantity?: boolean
    list_price?: boolean
    discount?: boolean
  }

  export type order_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "item_id" | "product_id" | "quantity" | "list_price" | "discount", ExtArgs["result"]["order_items"]>
  export type order_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type order_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }
  export type order_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | ordersDefaultArgs<ExtArgs>
    products?: boolean | productsDefaultArgs<ExtArgs>
  }

  export type $order_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>
      products: Prisma.$productsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      item_id: number
      product_id: number
      quantity: number
      list_price: Prisma.Decimal
      discount: Prisma.Decimal
    }, ExtArgs["result"]["order_items"]>
    composites: {}
  }

  type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = $Result.GetResult<Prisma.$order_itemsPayload, S>

  type order_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items'], meta: { name: 'order_items' } }
    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemsFindUniqueArgs>(args: SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemsFindFirstArgs>(args?: SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const order_itemsWithOrder_idOnly = await prisma.order_items.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends order_itemsFindManyArgs>(args?: SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
     */
    create<T extends order_itemsCreateArgs>(args: SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemsCreateManyArgs>(args?: SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_items and returns the data saved in the database.
     * @param {order_itemsCreateManyAndReturnArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_items and only return the `order_id`
     * const order_itemsWithOrder_idOnly = await prisma.order_items.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, order_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
     */
    delete<T extends order_itemsDeleteArgs>(args: SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemsUpdateArgs>(args: SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemsUpdateManyArgs>(args: SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items and returns the data updated in the database.
     * @param {order_itemsUpdateManyAndReturnArgs} args - Arguments to update many Order_items.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_items and only return the `order_id`
     * const order_itemsWithOrder_idOnly = await prisma.order_items.updateManyAndReturn({
     *   select: { order_id: true },
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
    updateManyAndReturn<T extends order_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, order_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
     */
    upsert<T extends order_itemsUpsertArgs>(args: SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsGroupByArgs} args - Group by arguments.
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
      T extends order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: order_itemsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items model
   */
  readonly fields: order_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends ordersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ordersDefaultArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends productsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, productsDefaultArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the order_items model
   */
  interface order_itemsFieldRefs {
    readonly order_id: FieldRef<"order_items", 'Int'>
    readonly item_id: FieldRef<"order_items", 'Int'>
    readonly product_id: FieldRef<"order_items", 'Int'>
    readonly quantity: FieldRef<"order_items", 'Int'>
    readonly list_price: FieldRef<"order_items", 'Decimal'>
    readonly discount: FieldRef<"order_items", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * order_items findUnique
   */
  export type order_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findFirst
   */
  export type order_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items create
   */
  export type order_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_items.
     */
    data: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }

  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_items createManyAndReturn
   */
  export type order_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items update
   */
  export type order_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_items updateManyAndReturn
   */
  export type order_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }

  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_items without action
   */
  export type order_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
    order_status: number | null
    store_id: number | null
    staff_id: number | null
  }

  export type OrdersSumAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
    order_status: number | null
    store_id: number | null
    staff_id: number | null
  }

  export type OrdersMinAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
    order_status: number | null
    order_date: Date | null
    required_date: Date | null
    shipped_date: Date | null
    store_id: number | null
    staff_id: number | null
  }

  export type OrdersMaxAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
    order_status: number | null
    order_date: Date | null
    required_date: Date | null
    shipped_date: Date | null
    store_id: number | null
    staff_id: number | null
  }

  export type OrdersCountAggregateOutputType = {
    order_id: number
    customer_id: number
    order_status: number
    order_date: number
    required_date: number
    shipped_date: number
    store_id: number
    staff_id: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    order_id?: true
    customer_id?: true
    order_status?: true
    store_id?: true
    staff_id?: true
  }

  export type OrdersSumAggregateInputType = {
    order_id?: true
    customer_id?: true
    order_status?: true
    store_id?: true
    staff_id?: true
  }

  export type OrdersMinAggregateInputType = {
    order_id?: true
    customer_id?: true
    order_status?: true
    order_date?: true
    required_date?: true
    shipped_date?: true
    store_id?: true
    staff_id?: true
  }

  export type OrdersMaxAggregateInputType = {
    order_id?: true
    customer_id?: true
    order_status?: true
    order_date?: true
    required_date?: true
    shipped_date?: true
    store_id?: true
    staff_id?: true
  }

  export type OrdersCountAggregateInputType = {
    order_id?: true
    customer_id?: true
    order_status?: true
    order_date?: true
    required_date?: true
    shipped_date?: true
    store_id?: true
    staff_id?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    order_id: number
    customer_id: number | null
    order_status: number
    order_date: Date
    required_date: Date
    shipped_date: Date | null
    store_id: number
    staff_id: number
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_id?: boolean
    order_status?: boolean
    order_date?: boolean
    required_date?: boolean
    shipped_date?: boolean
    store_id?: boolean
    staff_id?: boolean
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    customers?: boolean | orders$customersArgs<ExtArgs>
    staffs?: boolean | staffsDefaultArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_id?: boolean
    order_status?: boolean
    order_date?: boolean
    required_date?: boolean
    shipped_date?: boolean
    store_id?: boolean
    staff_id?: boolean
    customers?: boolean | orders$customersArgs<ExtArgs>
    staffs?: boolean | staffsDefaultArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_id?: boolean
    order_status?: boolean
    order_date?: boolean
    required_date?: boolean
    shipped_date?: boolean
    store_id?: boolean
    staff_id?: boolean
    customers?: boolean | orders$customersArgs<ExtArgs>
    staffs?: boolean | staffsDefaultArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    order_id?: boolean
    customer_id?: boolean
    order_status?: boolean
    order_date?: boolean
    required_date?: boolean
    shipped_date?: boolean
    store_id?: boolean
    staff_id?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "customer_id" | "order_status" | "order_date" | "required_date" | "shipped_date" | "store_id" | "staff_id", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    customers?: boolean | orders$customersArgs<ExtArgs>
    staffs?: boolean | staffsDefaultArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | orders$customersArgs<ExtArgs>
    staffs?: boolean | staffsDefaultArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | orders$customersArgs<ExtArgs>
    staffs?: boolean | staffsDefaultArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      customers: Prisma.$customersPayload<ExtArgs> | null
      staffs: Prisma.$staffsPayload<ExtArgs>
      stores: Prisma.$storesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      customer_id: number | null
      order_status: number
      order_date: Date
      required_date: Date
      shipped_date: Date | null
      store_id: number
      staff_id: number
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.updateManyAndReturn({
     *   select: { order_id: true },
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
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_items<T extends orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customers<T extends orders$customersArgs<ExtArgs> = {}>(args?: Subset<T, orders$customersArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    staffs<T extends staffsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, staffsDefaultArgs<ExtArgs>>): Prisma__staffsClient<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stores<T extends storesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, storesDefaultArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly order_id: FieldRef<"orders", 'Int'>
    readonly customer_id: FieldRef<"orders", 'Int'>
    readonly order_status: FieldRef<"orders", 'Int'>
    readonly order_date: FieldRef<"orders", 'DateTime'>
    readonly required_date: FieldRef<"orders", 'DateTime'>
    readonly shipped_date: FieldRef<"orders", 'DateTime'>
    readonly store_id: FieldRef<"orders", 'Int'>
    readonly staff_id: FieldRef<"orders", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * orders.customers
   */
  export type orders$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    where?: customersWhereInput
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model staffs
   */

  export type AggregateStaffs = {
    _count: StaffsCountAggregateOutputType | null
    _avg: StaffsAvgAggregateOutputType | null
    _sum: StaffsSumAggregateOutputType | null
    _min: StaffsMinAggregateOutputType | null
    _max: StaffsMaxAggregateOutputType | null
  }

  export type StaffsAvgAggregateOutputType = {
    staff_id: number | null
    store_id: number | null
    manager_id: number | null
  }

  export type StaffsSumAggregateOutputType = {
    staff_id: number | null
    store_id: number | null
    manager_id: number | null
  }

  export type StaffsMinAggregateOutputType = {
    staff_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    active: boolean | null
    store_id: number | null
    manager_id: number | null
  }

  export type StaffsMaxAggregateOutputType = {
    staff_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    phone: string | null
    active: boolean | null
    store_id: number | null
    manager_id: number | null
  }

  export type StaffsCountAggregateOutputType = {
    staff_id: number
    first_name: number
    last_name: number
    email: number
    phone: number
    active: number
    store_id: number
    manager_id: number
    _all: number
  }


  export type StaffsAvgAggregateInputType = {
    staff_id?: true
    store_id?: true
    manager_id?: true
  }

  export type StaffsSumAggregateInputType = {
    staff_id?: true
    store_id?: true
    manager_id?: true
  }

  export type StaffsMinAggregateInputType = {
    staff_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    active?: true
    store_id?: true
    manager_id?: true
  }

  export type StaffsMaxAggregateInputType = {
    staff_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    active?: true
    store_id?: true
    manager_id?: true
  }

  export type StaffsCountAggregateInputType = {
    staff_id?: true
    first_name?: true
    last_name?: true
    email?: true
    phone?: true
    active?: true
    store_id?: true
    manager_id?: true
    _all?: true
  }

  export type StaffsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staffs to aggregate.
     */
    where?: staffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staffs to fetch.
     */
    orderBy?: staffsOrderByWithRelationInput | staffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: staffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned staffs
    **/
    _count?: true | StaffsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StaffsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StaffsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StaffsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StaffsMaxAggregateInputType
  }

  export type GetStaffsAggregateType<T extends StaffsAggregateArgs> = {
        [P in keyof T & keyof AggregateStaffs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStaffs[P]>
      : GetScalarType<T[P], AggregateStaffs[P]>
  }




  export type staffsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: staffsWhereInput
    orderBy?: staffsOrderByWithAggregationInput | staffsOrderByWithAggregationInput[]
    by: StaffsScalarFieldEnum[] | StaffsScalarFieldEnum
    having?: staffsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StaffsCountAggregateInputType | true
    _avg?: StaffsAvgAggregateInputType
    _sum?: StaffsSumAggregateInputType
    _min?: StaffsMinAggregateInputType
    _max?: StaffsMaxAggregateInputType
  }

  export type StaffsGroupByOutputType = {
    staff_id: number
    first_name: string
    last_name: string
    email: string
    phone: string | null
    active: boolean
    store_id: number
    manager_id: number | null
    _count: StaffsCountAggregateOutputType | null
    _avg: StaffsAvgAggregateOutputType | null
    _sum: StaffsSumAggregateOutputType | null
    _min: StaffsMinAggregateOutputType | null
    _max: StaffsMaxAggregateOutputType | null
  }

  type GetStaffsGroupByPayload<T extends staffsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StaffsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StaffsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StaffsGroupByOutputType[P]>
            : GetScalarType<T[P], StaffsGroupByOutputType[P]>
        }
      >
    >


  export type staffsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staff_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    store_id?: boolean
    manager_id?: boolean
    orders?: boolean | staffs$ordersArgs<ExtArgs>
    staffs?: boolean | staffs$staffsArgs<ExtArgs>
    other_staffs?: boolean | staffs$other_staffsArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
    _count?: boolean | StaffsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffs"]>

  export type staffsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staff_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    store_id?: boolean
    manager_id?: boolean
    staffs?: boolean | staffs$staffsArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffs"]>

  export type staffsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    staff_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    store_id?: boolean
    manager_id?: boolean
    staffs?: boolean | staffs$staffsArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["staffs"]>

  export type staffsSelectScalar = {
    staff_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    phone?: boolean
    active?: boolean
    store_id?: boolean
    manager_id?: boolean
  }

  export type staffsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"staff_id" | "first_name" | "last_name" | "email" | "phone" | "active" | "store_id" | "manager_id", ExtArgs["result"]["staffs"]>
  export type staffsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | staffs$ordersArgs<ExtArgs>
    staffs?: boolean | staffs$staffsArgs<ExtArgs>
    other_staffs?: boolean | staffs$other_staffsArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
    _count?: boolean | StaffsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type staffsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffs?: boolean | staffs$staffsArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }
  export type staffsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffs?: boolean | staffs$staffsArgs<ExtArgs>
    stores?: boolean | storesDefaultArgs<ExtArgs>
  }

  export type $staffsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "staffs"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
      staffs: Prisma.$staffsPayload<ExtArgs> | null
      other_staffs: Prisma.$staffsPayload<ExtArgs>[]
      stores: Prisma.$storesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      staff_id: number
      first_name: string
      last_name: string
      email: string
      phone: string | null
      active: boolean
      store_id: number
      manager_id: number | null
    }, ExtArgs["result"]["staffs"]>
    composites: {}
  }

  type staffsGetPayload<S extends boolean | null | undefined | staffsDefaultArgs> = $Result.GetResult<Prisma.$staffsPayload, S>

  type staffsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<staffsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StaffsCountAggregateInputType | true
    }

  export interface staffsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['staffs'], meta: { name: 'staffs' } }
    /**
     * Find zero or one Staffs that matches the filter.
     * @param {staffsFindUniqueArgs} args - Arguments to find a Staffs
     * @example
     * // Get one Staffs
     * const staffs = await prisma.staffs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends staffsFindUniqueArgs>(args: SelectSubset<T, staffsFindUniqueArgs<ExtArgs>>): Prisma__staffsClient<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Staffs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {staffsFindUniqueOrThrowArgs} args - Arguments to find a Staffs
     * @example
     * // Get one Staffs
     * const staffs = await prisma.staffs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends staffsFindUniqueOrThrowArgs>(args: SelectSubset<T, staffsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__staffsClient<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffsFindFirstArgs} args - Arguments to find a Staffs
     * @example
     * // Get one Staffs
     * const staffs = await prisma.staffs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends staffsFindFirstArgs>(args?: SelectSubset<T, staffsFindFirstArgs<ExtArgs>>): Prisma__staffsClient<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Staffs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffsFindFirstOrThrowArgs} args - Arguments to find a Staffs
     * @example
     * // Get one Staffs
     * const staffs = await prisma.staffs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends staffsFindFirstOrThrowArgs>(args?: SelectSubset<T, staffsFindFirstOrThrowArgs<ExtArgs>>): Prisma__staffsClient<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Staffs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Staffs
     * const staffs = await prisma.staffs.findMany()
     * 
     * // Get first 10 Staffs
     * const staffs = await prisma.staffs.findMany({ take: 10 })
     * 
     * // Only select the `staff_id`
     * const staffsWithStaff_idOnly = await prisma.staffs.findMany({ select: { staff_id: true } })
     * 
     */
    findMany<T extends staffsFindManyArgs>(args?: SelectSubset<T, staffsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Staffs.
     * @param {staffsCreateArgs} args - Arguments to create a Staffs.
     * @example
     * // Create one Staffs
     * const Staffs = await prisma.staffs.create({
     *   data: {
     *     // ... data to create a Staffs
     *   }
     * })
     * 
     */
    create<T extends staffsCreateArgs>(args: SelectSubset<T, staffsCreateArgs<ExtArgs>>): Prisma__staffsClient<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Staffs.
     * @param {staffsCreateManyArgs} args - Arguments to create many Staffs.
     * @example
     * // Create many Staffs
     * const staffs = await prisma.staffs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends staffsCreateManyArgs>(args?: SelectSubset<T, staffsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Staffs and returns the data saved in the database.
     * @param {staffsCreateManyAndReturnArgs} args - Arguments to create many Staffs.
     * @example
     * // Create many Staffs
     * const staffs = await prisma.staffs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Staffs and only return the `staff_id`
     * const staffsWithStaff_idOnly = await prisma.staffs.createManyAndReturn({
     *   select: { staff_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends staffsCreateManyAndReturnArgs>(args?: SelectSubset<T, staffsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Staffs.
     * @param {staffsDeleteArgs} args - Arguments to delete one Staffs.
     * @example
     * // Delete one Staffs
     * const Staffs = await prisma.staffs.delete({
     *   where: {
     *     // ... filter to delete one Staffs
     *   }
     * })
     * 
     */
    delete<T extends staffsDeleteArgs>(args: SelectSubset<T, staffsDeleteArgs<ExtArgs>>): Prisma__staffsClient<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Staffs.
     * @param {staffsUpdateArgs} args - Arguments to update one Staffs.
     * @example
     * // Update one Staffs
     * const staffs = await prisma.staffs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends staffsUpdateArgs>(args: SelectSubset<T, staffsUpdateArgs<ExtArgs>>): Prisma__staffsClient<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Staffs.
     * @param {staffsDeleteManyArgs} args - Arguments to filter Staffs to delete.
     * @example
     * // Delete a few Staffs
     * const { count } = await prisma.staffs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends staffsDeleteManyArgs>(args?: SelectSubset<T, staffsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Staffs
     * const staffs = await prisma.staffs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends staffsUpdateManyArgs>(args: SelectSubset<T, staffsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Staffs and returns the data updated in the database.
     * @param {staffsUpdateManyAndReturnArgs} args - Arguments to update many Staffs.
     * @example
     * // Update many Staffs
     * const staffs = await prisma.staffs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Staffs and only return the `staff_id`
     * const staffsWithStaff_idOnly = await prisma.staffs.updateManyAndReturn({
     *   select: { staff_id: true },
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
    updateManyAndReturn<T extends staffsUpdateManyAndReturnArgs>(args: SelectSubset<T, staffsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Staffs.
     * @param {staffsUpsertArgs} args - Arguments to update or create a Staffs.
     * @example
     * // Update or create a Staffs
     * const staffs = await prisma.staffs.upsert({
     *   create: {
     *     // ... data to create a Staffs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Staffs we want to update
     *   }
     * })
     */
    upsert<T extends staffsUpsertArgs>(args: SelectSubset<T, staffsUpsertArgs<ExtArgs>>): Prisma__staffsClient<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffsCountArgs} args - Arguments to filter Staffs to count.
     * @example
     * // Count the number of Staffs
     * const count = await prisma.staffs.count({
     *   where: {
     *     // ... the filter for the Staffs we want to count
     *   }
     * })
    **/
    count<T extends staffsCountArgs>(
      args?: Subset<T, staffsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StaffsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StaffsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StaffsAggregateArgs>(args: Subset<T, StaffsAggregateArgs>): Prisma.PrismaPromise<GetStaffsAggregateType<T>>

    /**
     * Group by Staffs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {staffsGroupByArgs} args - Group by arguments.
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
      T extends staffsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: staffsGroupByArgs['orderBy'] }
        : { orderBy?: staffsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, staffsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStaffsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the staffs model
   */
  readonly fields: staffsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for staffs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__staffsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends staffs$ordersArgs<ExtArgs> = {}>(args?: Subset<T, staffs$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staffs<T extends staffs$staffsArgs<ExtArgs> = {}>(args?: Subset<T, staffs$staffsArgs<ExtArgs>>): Prisma__staffsClient<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_staffs<T extends staffs$other_staffsArgs<ExtArgs> = {}>(args?: Subset<T, staffs$other_staffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stores<T extends storesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, storesDefaultArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the staffs model
   */
  interface staffsFieldRefs {
    readonly staff_id: FieldRef<"staffs", 'Int'>
    readonly first_name: FieldRef<"staffs", 'String'>
    readonly last_name: FieldRef<"staffs", 'String'>
    readonly email: FieldRef<"staffs", 'String'>
    readonly phone: FieldRef<"staffs", 'String'>
    readonly active: FieldRef<"staffs", 'Boolean'>
    readonly store_id: FieldRef<"staffs", 'Int'>
    readonly manager_id: FieldRef<"staffs", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * staffs findUnique
   */
  export type staffsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
    /**
     * Filter, which staffs to fetch.
     */
    where: staffsWhereUniqueInput
  }

  /**
   * staffs findUniqueOrThrow
   */
  export type staffsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
    /**
     * Filter, which staffs to fetch.
     */
    where: staffsWhereUniqueInput
  }

  /**
   * staffs findFirst
   */
  export type staffsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
    /**
     * Filter, which staffs to fetch.
     */
    where?: staffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staffs to fetch.
     */
    orderBy?: staffsOrderByWithRelationInput | staffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staffs.
     */
    cursor?: staffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staffs.
     */
    distinct?: StaffsScalarFieldEnum | StaffsScalarFieldEnum[]
  }

  /**
   * staffs findFirstOrThrow
   */
  export type staffsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
    /**
     * Filter, which staffs to fetch.
     */
    where?: staffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staffs to fetch.
     */
    orderBy?: staffsOrderByWithRelationInput | staffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for staffs.
     */
    cursor?: staffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staffs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of staffs.
     */
    distinct?: StaffsScalarFieldEnum | StaffsScalarFieldEnum[]
  }

  /**
   * staffs findMany
   */
  export type staffsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
    /**
     * Filter, which staffs to fetch.
     */
    where?: staffsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of staffs to fetch.
     */
    orderBy?: staffsOrderByWithRelationInput | staffsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing staffs.
     */
    cursor?: staffsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` staffs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` staffs.
     */
    skip?: number
    distinct?: StaffsScalarFieldEnum | StaffsScalarFieldEnum[]
  }

  /**
   * staffs create
   */
  export type staffsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
    /**
     * The data needed to create a staffs.
     */
    data: XOR<staffsCreateInput, staffsUncheckedCreateInput>
  }

  /**
   * staffs createMany
   */
  export type staffsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many staffs.
     */
    data: staffsCreateManyInput | staffsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * staffs createManyAndReturn
   */
  export type staffsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * The data used to create many staffs.
     */
    data: staffsCreateManyInput | staffsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * staffs update
   */
  export type staffsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
    /**
     * The data needed to update a staffs.
     */
    data: XOR<staffsUpdateInput, staffsUncheckedUpdateInput>
    /**
     * Choose, which staffs to update.
     */
    where: staffsWhereUniqueInput
  }

  /**
   * staffs updateMany
   */
  export type staffsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update staffs.
     */
    data: XOR<staffsUpdateManyMutationInput, staffsUncheckedUpdateManyInput>
    /**
     * Filter which staffs to update
     */
    where?: staffsWhereInput
    /**
     * Limit how many staffs to update.
     */
    limit?: number
  }

  /**
   * staffs updateManyAndReturn
   */
  export type staffsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * The data used to update staffs.
     */
    data: XOR<staffsUpdateManyMutationInput, staffsUncheckedUpdateManyInput>
    /**
     * Filter which staffs to update
     */
    where?: staffsWhereInput
    /**
     * Limit how many staffs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * staffs upsert
   */
  export type staffsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
    /**
     * The filter to search for the staffs to update in case it exists.
     */
    where: staffsWhereUniqueInput
    /**
     * In case the staffs found by the `where` argument doesn't exist, create a new staffs with this data.
     */
    create: XOR<staffsCreateInput, staffsUncheckedCreateInput>
    /**
     * In case the staffs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<staffsUpdateInput, staffsUncheckedUpdateInput>
  }

  /**
   * staffs delete
   */
  export type staffsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
    /**
     * Filter which staffs to delete.
     */
    where: staffsWhereUniqueInput
  }

  /**
   * staffs deleteMany
   */
  export type staffsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which staffs to delete
     */
    where?: staffsWhereInput
    /**
     * Limit how many staffs to delete.
     */
    limit?: number
  }

  /**
   * staffs.orders
   */
  export type staffs$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * staffs.staffs
   */
  export type staffs$staffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
    where?: staffsWhereInput
  }

  /**
   * staffs.other_staffs
   */
  export type staffs$other_staffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
    where?: staffsWhereInput
    orderBy?: staffsOrderByWithRelationInput | staffsOrderByWithRelationInput[]
    cursor?: staffsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffsScalarFieldEnum | StaffsScalarFieldEnum[]
  }

  /**
   * staffs without action
   */
  export type staffsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
  }


  /**
   * Model stores
   */

  export type AggregateStores = {
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  export type StoresAvgAggregateOutputType = {
    store_id: number | null
  }

  export type StoresSumAggregateOutputType = {
    store_id: number | null
  }

  export type StoresMinAggregateOutputType = {
    store_id: number | null
    store_name: string | null
    phone: string | null
    email: string | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
  }

  export type StoresMaxAggregateOutputType = {
    store_id: number | null
    store_name: string | null
    phone: string | null
    email: string | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
  }

  export type StoresCountAggregateOutputType = {
    store_id: number
    store_name: number
    phone: number
    email: number
    street: number
    city: number
    state: number
    zip_code: number
    _all: number
  }


  export type StoresAvgAggregateInputType = {
    store_id?: true
  }

  export type StoresSumAggregateInputType = {
    store_id?: true
  }

  export type StoresMinAggregateInputType = {
    store_id?: true
    store_name?: true
    phone?: true
    email?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
  }

  export type StoresMaxAggregateInputType = {
    store_id?: true
    store_name?: true
    phone?: true
    email?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
  }

  export type StoresCountAggregateInputType = {
    store_id?: true
    store_name?: true
    phone?: true
    email?: true
    street?: true
    city?: true
    state?: true
    zip_code?: true
    _all?: true
  }

  export type StoresAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to aggregate.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stores
    **/
    _count?: true | StoresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoresMaxAggregateInputType
  }

  export type GetStoresAggregateType<T extends StoresAggregateArgs> = {
        [P in keyof T & keyof AggregateStores]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStores[P]>
      : GetScalarType<T[P], AggregateStores[P]>
  }




  export type storesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: storesWhereInput
    orderBy?: storesOrderByWithAggregationInput | storesOrderByWithAggregationInput[]
    by: StoresScalarFieldEnum[] | StoresScalarFieldEnum
    having?: storesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoresCountAggregateInputType | true
    _avg?: StoresAvgAggregateInputType
    _sum?: StoresSumAggregateInputType
    _min?: StoresMinAggregateInputType
    _max?: StoresMaxAggregateInputType
  }

  export type StoresGroupByOutputType = {
    store_id: number
    store_name: string
    phone: string | null
    email: string | null
    street: string | null
    city: string | null
    state: string | null
    zip_code: string | null
    _count: StoresCountAggregateOutputType | null
    _avg: StoresAvgAggregateOutputType | null
    _sum: StoresSumAggregateOutputType | null
    _min: StoresMinAggregateOutputType | null
    _max: StoresMaxAggregateOutputType | null
  }

  type GetStoresGroupByPayload<T extends storesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoresGroupByOutputType[P]>
            : GetScalarType<T[P], StoresGroupByOutputType[P]>
        }
      >
    >


  export type storesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    store_name?: boolean
    phone?: boolean
    email?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
    stocks?: boolean | stores$stocksArgs<ExtArgs>
    orders?: boolean | stores$ordersArgs<ExtArgs>
    staffs?: boolean | stores$staffsArgs<ExtArgs>
    _count?: boolean | StoresCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stores"]>

  export type storesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    store_name?: boolean
    phone?: boolean
    email?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
  }, ExtArgs["result"]["stores"]>

  export type storesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    store_id?: boolean
    store_name?: boolean
    phone?: boolean
    email?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
  }, ExtArgs["result"]["stores"]>

  export type storesSelectScalar = {
    store_id?: boolean
    store_name?: boolean
    phone?: boolean
    email?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    zip_code?: boolean
  }

  export type storesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"store_id" | "store_name" | "phone" | "email" | "street" | "city" | "state" | "zip_code", ExtArgs["result"]["stores"]>
  export type storesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stocks?: boolean | stores$stocksArgs<ExtArgs>
    orders?: boolean | stores$ordersArgs<ExtArgs>
    staffs?: boolean | stores$staffsArgs<ExtArgs>
    _count?: boolean | StoresCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type storesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type storesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $storesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stores"
    objects: {
      stocks: Prisma.$stocksPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
      staffs: Prisma.$staffsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      store_id: number
      store_name: string
      phone: string | null
      email: string | null
      street: string | null
      city: string | null
      state: string | null
      zip_code: string | null
    }, ExtArgs["result"]["stores"]>
    composites: {}
  }

  type storesGetPayload<S extends boolean | null | undefined | storesDefaultArgs> = $Result.GetResult<Prisma.$storesPayload, S>

  type storesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<storesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoresCountAggregateInputType | true
    }

  export interface storesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stores'], meta: { name: 'stores' } }
    /**
     * Find zero or one Stores that matches the filter.
     * @param {storesFindUniqueArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends storesFindUniqueArgs>(args: SelectSubset<T, storesFindUniqueArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stores that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {storesFindUniqueOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends storesFindUniqueOrThrowArgs>(args: SelectSubset<T, storesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends storesFindFirstArgs>(args?: SelectSubset<T, storesFindFirstArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stores that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindFirstOrThrowArgs} args - Arguments to find a Stores
     * @example
     * // Get one Stores
     * const stores = await prisma.stores.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends storesFindFirstOrThrowArgs>(args?: SelectSubset<T, storesFindFirstOrThrowArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.stores.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.stores.findMany({ take: 10 })
     * 
     * // Only select the `store_id`
     * const storesWithStore_idOnly = await prisma.stores.findMany({ select: { store_id: true } })
     * 
     */
    findMany<T extends storesFindManyArgs>(args?: SelectSubset<T, storesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stores.
     * @param {storesCreateArgs} args - Arguments to create a Stores.
     * @example
     * // Create one Stores
     * const Stores = await prisma.stores.create({
     *   data: {
     *     // ... data to create a Stores
     *   }
     * })
     * 
     */
    create<T extends storesCreateArgs>(args: SelectSubset<T, storesCreateArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {storesCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends storesCreateManyArgs>(args?: SelectSubset<T, storesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stores and returns the data saved in the database.
     * @param {storesCreateManyAndReturnArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const stores = await prisma.stores.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stores and only return the `store_id`
     * const storesWithStore_idOnly = await prisma.stores.createManyAndReturn({
     *   select: { store_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends storesCreateManyAndReturnArgs>(args?: SelectSubset<T, storesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stores.
     * @param {storesDeleteArgs} args - Arguments to delete one Stores.
     * @example
     * // Delete one Stores
     * const Stores = await prisma.stores.delete({
     *   where: {
     *     // ... filter to delete one Stores
     *   }
     * })
     * 
     */
    delete<T extends storesDeleteArgs>(args: SelectSubset<T, storesDeleteArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stores.
     * @param {storesUpdateArgs} args - Arguments to update one Stores.
     * @example
     * // Update one Stores
     * const stores = await prisma.stores.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends storesUpdateArgs>(args: SelectSubset<T, storesUpdateArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {storesDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.stores.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends storesDeleteManyArgs>(args?: SelectSubset<T, storesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends storesUpdateManyArgs>(args: SelectSubset<T, storesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores and returns the data updated in the database.
     * @param {storesUpdateManyAndReturnArgs} args - Arguments to update many Stores.
     * @example
     * // Update many Stores
     * const stores = await prisma.stores.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stores and only return the `store_id`
     * const storesWithStore_idOnly = await prisma.stores.updateManyAndReturn({
     *   select: { store_id: true },
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
    updateManyAndReturn<T extends storesUpdateManyAndReturnArgs>(args: SelectSubset<T, storesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stores.
     * @param {storesUpsertArgs} args - Arguments to update or create a Stores.
     * @example
     * // Update or create a Stores
     * const stores = await prisma.stores.upsert({
     *   create: {
     *     // ... data to create a Stores
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stores we want to update
     *   }
     * })
     */
    upsert<T extends storesUpsertArgs>(args: SelectSubset<T, storesUpsertArgs<ExtArgs>>): Prisma__storesClient<$Result.GetResult<Prisma.$storesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.stores.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends storesCountArgs>(
      args?: Subset<T, storesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StoresAggregateArgs>(args: Subset<T, StoresAggregateArgs>): Prisma.PrismaPromise<GetStoresAggregateType<T>>

    /**
     * Group by Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {storesGroupByArgs} args - Group by arguments.
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
      T extends storesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: storesGroupByArgs['orderBy'] }
        : { orderBy?: storesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, storesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stores model
   */
  readonly fields: storesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stores.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__storesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stocks<T extends stores$stocksArgs<ExtArgs> = {}>(args?: Subset<T, stores$stocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends stores$ordersArgs<ExtArgs> = {}>(args?: Subset<T, stores$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    staffs<T extends stores$staffsArgs<ExtArgs> = {}>(args?: Subset<T, stores$staffsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$staffsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the stores model
   */
  interface storesFieldRefs {
    readonly store_id: FieldRef<"stores", 'Int'>
    readonly store_name: FieldRef<"stores", 'String'>
    readonly phone: FieldRef<"stores", 'String'>
    readonly email: FieldRef<"stores", 'String'>
    readonly street: FieldRef<"stores", 'String'>
    readonly city: FieldRef<"stores", 'String'>
    readonly state: FieldRef<"stores", 'String'>
    readonly zip_code: FieldRef<"stores", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stores findUnique
   */
  export type storesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores findUniqueOrThrow
   */
  export type storesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores findFirst
   */
  export type storesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores findFirstOrThrow
   */
  export type storesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stores.
     */
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores findMany
   */
  export type storesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter, which stores to fetch.
     */
    where?: storesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stores to fetch.
     */
    orderBy?: storesOrderByWithRelationInput | storesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stores.
     */
    cursor?: storesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stores.
     */
    skip?: number
    distinct?: StoresScalarFieldEnum | StoresScalarFieldEnum[]
  }

  /**
   * stores create
   */
  export type storesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The data needed to create a stores.
     */
    data: XOR<storesCreateInput, storesUncheckedCreateInput>
  }

  /**
   * stores createMany
   */
  export type storesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stores.
     */
    data: storesCreateManyInput | storesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stores createManyAndReturn
   */
  export type storesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * The data used to create many stores.
     */
    data: storesCreateManyInput | storesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stores update
   */
  export type storesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The data needed to update a stores.
     */
    data: XOR<storesUpdateInput, storesUncheckedUpdateInput>
    /**
     * Choose, which stores to update.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores updateMany
   */
  export type storesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stores.
     */
    data: XOR<storesUpdateManyMutationInput, storesUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * stores updateManyAndReturn
   */
  export type storesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * The data used to update stores.
     */
    data: XOR<storesUpdateManyMutationInput, storesUncheckedUpdateManyInput>
    /**
     * Filter which stores to update
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to update.
     */
    limit?: number
  }

  /**
   * stores upsert
   */
  export type storesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * The filter to search for the stores to update in case it exists.
     */
    where: storesWhereUniqueInput
    /**
     * In case the stores found by the `where` argument doesn't exist, create a new stores with this data.
     */
    create: XOR<storesCreateInput, storesUncheckedCreateInput>
    /**
     * In case the stores was found with the provided `where` argument, update it with this data.
     */
    update: XOR<storesUpdateInput, storesUncheckedUpdateInput>
  }

  /**
   * stores delete
   */
  export type storesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
    /**
     * Filter which stores to delete.
     */
    where: storesWhereUniqueInput
  }

  /**
   * stores deleteMany
   */
  export type storesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stores to delete
     */
    where?: storesWhereInput
    /**
     * Limit how many stores to delete.
     */
    limit?: number
  }

  /**
   * stores.stocks
   */
  export type stores$stocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stocks
     */
    select?: stocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stocks
     */
    omit?: stocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stocksInclude<ExtArgs> | null
    where?: stocksWhereInput
    orderBy?: stocksOrderByWithRelationInput | stocksOrderByWithRelationInput[]
    cursor?: stocksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * stores.orders
   */
  export type stores$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * stores.staffs
   */
  export type stores$staffsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the staffs
     */
    select?: staffsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the staffs
     */
    omit?: staffsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: staffsInclude<ExtArgs> | null
    where?: staffsWhereInput
    orderBy?: staffsOrderByWithRelationInput | staffsOrderByWithRelationInput[]
    cursor?: staffsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StaffsScalarFieldEnum | StaffsScalarFieldEnum[]
  }

  /**
   * stores without action
   */
  export type storesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stores
     */
    select?: storesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stores
     */
    omit?: storesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: storesInclude<ExtArgs> | null
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


  export const BrandsScalarFieldEnum: {
    brand_id: 'brand_id',
    brand_name: 'brand_name'
  };

  export type BrandsScalarFieldEnum = (typeof BrandsScalarFieldEnum)[keyof typeof BrandsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    product_id: 'product_id',
    product_name: 'product_name',
    brand_id: 'brand_id',
    category_id: 'category_id',
    model_year: 'model_year',
    list_price: 'list_price'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const StocksScalarFieldEnum: {
    store_id: 'store_id',
    product_id: 'product_id',
    quantity: 'quantity'
  };

  export type StocksScalarFieldEnum = (typeof StocksScalarFieldEnum)[keyof typeof StocksScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    customer_id: 'customer_id',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    email: 'email',
    street: 'street',
    city: 'city',
    state: 'state',
    zip_code: 'zip_code'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    order_id: 'order_id',
    item_id: 'item_id',
    product_id: 'product_id',
    quantity: 'quantity',
    list_price: 'list_price',
    discount: 'discount'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    order_id: 'order_id',
    customer_id: 'customer_id',
    order_status: 'order_status',
    order_date: 'order_date',
    required_date: 'required_date',
    shipped_date: 'shipped_date',
    store_id: 'store_id',
    staff_id: 'staff_id'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const StaffsScalarFieldEnum: {
    staff_id: 'staff_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    phone: 'phone',
    active: 'active',
    store_id: 'store_id',
    manager_id: 'manager_id'
  };

  export type StaffsScalarFieldEnum = (typeof StaffsScalarFieldEnum)[keyof typeof StaffsScalarFieldEnum]


  export const StoresScalarFieldEnum: {
    store_id: 'store_id',
    store_name: 'store_name',
    phone: 'phone',
    email: 'email',
    street: 'street',
    city: 'city',
    state: 'state',
    zip_code: 'zip_code'
  };

  export type StoresScalarFieldEnum = (typeof StoresScalarFieldEnum)[keyof typeof StoresScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type brandsWhereInput = {
    AND?: brandsWhereInput | brandsWhereInput[]
    OR?: brandsWhereInput[]
    NOT?: brandsWhereInput | brandsWhereInput[]
    brand_id?: IntFilter<"brands"> | number
    brand_name?: StringFilter<"brands"> | string
    products?: ProductsListRelationFilter
  }

  export type brandsOrderByWithRelationInput = {
    brand_id?: SortOrder
    brand_name?: SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type brandsWhereUniqueInput = Prisma.AtLeast<{
    brand_id?: number
    AND?: brandsWhereInput | brandsWhereInput[]
    OR?: brandsWhereInput[]
    NOT?: brandsWhereInput | brandsWhereInput[]
    brand_name?: StringFilter<"brands"> | string
    products?: ProductsListRelationFilter
  }, "brand_id">

  export type brandsOrderByWithAggregationInput = {
    brand_id?: SortOrder
    brand_name?: SortOrder
    _count?: brandsCountOrderByAggregateInput
    _avg?: brandsAvgOrderByAggregateInput
    _max?: brandsMaxOrderByAggregateInput
    _min?: brandsMinOrderByAggregateInput
    _sum?: brandsSumOrderByAggregateInput
  }

  export type brandsScalarWhereWithAggregatesInput = {
    AND?: brandsScalarWhereWithAggregatesInput | brandsScalarWhereWithAggregatesInput[]
    OR?: brandsScalarWhereWithAggregatesInput[]
    NOT?: brandsScalarWhereWithAggregatesInput | brandsScalarWhereWithAggregatesInput[]
    brand_id?: IntWithAggregatesFilter<"brands"> | number
    brand_name?: StringWithAggregatesFilter<"brands"> | string
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    category_id?: IntFilter<"categories"> | number
    category_name?: StringFilter<"categories"> | string
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    category_name?: StringFilter<"categories"> | string
    products?: ProductsListRelationFilter
  }, "category_id">

  export type categoriesOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"categories"> | number
    category_name?: StringWithAggregatesFilter<"categories"> | string
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    product_id?: IntFilter<"products"> | number
    product_name?: StringFilter<"products"> | string
    brand_id?: IntFilter<"products"> | number
    category_id?: IntFilter<"products"> | number
    model_year?: IntFilter<"products"> | number
    list_price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    brands?: XOR<BrandsScalarRelationFilter, brandsWhereInput>
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    stocks?: StocksListRelationFilter
    order_items?: Order_itemsListRelationFilter
  }

  export type productsOrderByWithRelationInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    brand_id?: SortOrder
    category_id?: SortOrder
    model_year?: SortOrder
    list_price?: SortOrder
    brands?: brandsOrderByWithRelationInput
    categories?: categoriesOrderByWithRelationInput
    stocks?: stocksOrderByRelationAggregateInput
    order_items?: order_itemsOrderByRelationAggregateInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    product_name?: StringFilter<"products"> | string
    brand_id?: IntFilter<"products"> | number
    category_id?: IntFilter<"products"> | number
    model_year?: IntFilter<"products"> | number
    list_price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    brands?: XOR<BrandsScalarRelationFilter, brandsWhereInput>
    categories?: XOR<CategoriesScalarRelationFilter, categoriesWhereInput>
    stocks?: StocksListRelationFilter
    order_items?: Order_itemsListRelationFilter
  }, "product_id">

  export type productsOrderByWithAggregationInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    brand_id?: SortOrder
    category_id?: SortOrder
    model_year?: SortOrder
    list_price?: SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"products"> | number
    product_name?: StringWithAggregatesFilter<"products"> | string
    brand_id?: IntWithAggregatesFilter<"products"> | number
    category_id?: IntWithAggregatesFilter<"products"> | number
    model_year?: IntWithAggregatesFilter<"products"> | number
    list_price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
  }

  export type stocksWhereInput = {
    AND?: stocksWhereInput | stocksWhereInput[]
    OR?: stocksWhereInput[]
    NOT?: stocksWhereInput | stocksWhereInput[]
    store_id?: IntFilter<"stocks"> | number
    product_id?: IntFilter<"stocks"> | number
    quantity?: IntNullableFilter<"stocks"> | number | null
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
  }

  export type stocksOrderByWithRelationInput = {
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrderInput | SortOrder
    products?: productsOrderByWithRelationInput
    stores?: storesOrderByWithRelationInput
  }

  export type stocksWhereUniqueInput = Prisma.AtLeast<{
    store_id_product_id?: stocksStore_idProduct_idCompoundUniqueInput
    AND?: stocksWhereInput | stocksWhereInput[]
    OR?: stocksWhereInput[]
    NOT?: stocksWhereInput | stocksWhereInput[]
    store_id?: IntFilter<"stocks"> | number
    product_id?: IntFilter<"stocks"> | number
    quantity?: IntNullableFilter<"stocks"> | number | null
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
  }, "store_id_product_id">

  export type stocksOrderByWithAggregationInput = {
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrderInput | SortOrder
    _count?: stocksCountOrderByAggregateInput
    _avg?: stocksAvgOrderByAggregateInput
    _max?: stocksMaxOrderByAggregateInput
    _min?: stocksMinOrderByAggregateInput
    _sum?: stocksSumOrderByAggregateInput
  }

  export type stocksScalarWhereWithAggregatesInput = {
    AND?: stocksScalarWhereWithAggregatesInput | stocksScalarWhereWithAggregatesInput[]
    OR?: stocksScalarWhereWithAggregatesInput[]
    NOT?: stocksScalarWhereWithAggregatesInput | stocksScalarWhereWithAggregatesInput[]
    store_id?: IntWithAggregatesFilter<"stocks"> | number
    product_id?: IntWithAggregatesFilter<"stocks"> | number
    quantity?: IntNullableWithAggregatesFilter<"stocks"> | number | null
  }

  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    customer_id?: IntFilter<"customers"> | number
    first_name?: StringFilter<"customers"> | string
    last_name?: StringFilter<"customers"> | string
    phone?: StringNullableFilter<"customers"> | string | null
    email?: StringFilter<"customers"> | string
    street?: StringNullableFilter<"customers"> | string | null
    city?: StringNullableFilter<"customers"> | string | null
    state?: StringNullableFilter<"customers"> | string | null
    zip_code?: StringNullableFilter<"customers"> | string | null
    orders?: OrdersListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    customer_id?: number
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    first_name?: StringFilter<"customers"> | string
    last_name?: StringFilter<"customers"> | string
    phone?: StringNullableFilter<"customers"> | string | null
    email?: StringFilter<"customers"> | string
    street?: StringNullableFilter<"customers"> | string | null
    city?: StringNullableFilter<"customers"> | string | null
    state?: StringNullableFilter<"customers"> | string | null
    zip_code?: StringNullableFilter<"customers"> | string | null
    orders?: OrdersListRelationFilter
  }, "customer_id">

  export type customersOrderByWithAggregationInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    customer_id?: IntWithAggregatesFilter<"customers"> | number
    first_name?: StringWithAggregatesFilter<"customers"> | string
    last_name?: StringWithAggregatesFilter<"customers"> | string
    phone?: StringNullableWithAggregatesFilter<"customers"> | string | null
    email?: StringWithAggregatesFilter<"customers"> | string
    street?: StringNullableWithAggregatesFilter<"customers"> | string | null
    city?: StringNullableWithAggregatesFilter<"customers"> | string | null
    state?: StringNullableWithAggregatesFilter<"customers"> | string | null
    zip_code?: StringNullableWithAggregatesFilter<"customers"> | string | null
  }

  export type order_itemsWhereInput = {
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    order_id?: IntFilter<"order_items"> | number
    item_id?: IntFilter<"order_items"> | number
    product_id?: IntFilter<"order_items"> | number
    quantity?: IntFilter<"order_items"> | number
    list_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }

  export type order_itemsOrderByWithRelationInput = {
    order_id?: SortOrder
    item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    list_price?: SortOrder
    discount?: SortOrder
    orders?: ordersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    order_id_item_id?: order_itemsOrder_idItem_idCompoundUniqueInput
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    order_id?: IntFilter<"order_items"> | number
    item_id?: IntFilter<"order_items"> | number
    product_id?: IntFilter<"order_items"> | number
    quantity?: IntFilter<"order_items"> | number
    list_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    orders?: XOR<OrdersScalarRelationFilter, ordersWhereInput>
    products?: XOR<ProductsScalarRelationFilter, productsWhereInput>
  }, "order_id_item_id">

  export type order_itemsOrderByWithAggregationInput = {
    order_id?: SortOrder
    item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    list_price?: SortOrder
    discount?: SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    OR?: order_itemsScalarWhereWithAggregatesInput[]
    NOT?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"order_items"> | number
    item_id?: IntWithAggregatesFilter<"order_items"> | number
    product_id?: IntWithAggregatesFilter<"order_items"> | number
    quantity?: IntWithAggregatesFilter<"order_items"> | number
    list_price?: DecimalWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    order_id?: IntFilter<"orders"> | number
    customer_id?: IntNullableFilter<"orders"> | number | null
    order_status?: IntFilter<"orders"> | number
    order_date?: DateTimeFilter<"orders"> | Date | string
    required_date?: DateTimeFilter<"orders"> | Date | string
    shipped_date?: DateTimeNullableFilter<"orders"> | Date | string | null
    store_id?: IntFilter<"orders"> | number
    staff_id?: IntFilter<"orders"> | number
    order_items?: Order_itemsListRelationFilter
    customers?: XOR<CustomersNullableScalarRelationFilter, customersWhereInput> | null
    staffs?: XOR<StaffsScalarRelationFilter, staffsWhereInput>
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
  }

  export type ordersOrderByWithRelationInput = {
    order_id?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    order_status?: SortOrder
    order_date?: SortOrder
    required_date?: SortOrder
    shipped_date?: SortOrderInput | SortOrder
    store_id?: SortOrder
    staff_id?: SortOrder
    order_items?: order_itemsOrderByRelationAggregateInput
    customers?: customersOrderByWithRelationInput
    staffs?: staffsOrderByWithRelationInput
    stores?: storesOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    customer_id?: IntNullableFilter<"orders"> | number | null
    order_status?: IntFilter<"orders"> | number
    order_date?: DateTimeFilter<"orders"> | Date | string
    required_date?: DateTimeFilter<"orders"> | Date | string
    shipped_date?: DateTimeNullableFilter<"orders"> | Date | string | null
    store_id?: IntFilter<"orders"> | number
    staff_id?: IntFilter<"orders"> | number
    order_items?: Order_itemsListRelationFilter
    customers?: XOR<CustomersNullableScalarRelationFilter, customersWhereInput> | null
    staffs?: XOR<StaffsScalarRelationFilter, staffsWhereInput>
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
  }, "order_id">

  export type ordersOrderByWithAggregationInput = {
    order_id?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    order_status?: SortOrder
    order_date?: SortOrder
    required_date?: SortOrder
    shipped_date?: SortOrderInput | SortOrder
    store_id?: SortOrder
    staff_id?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"orders"> | number
    customer_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    order_status?: IntWithAggregatesFilter<"orders"> | number
    order_date?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    required_date?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    shipped_date?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
    store_id?: IntWithAggregatesFilter<"orders"> | number
    staff_id?: IntWithAggregatesFilter<"orders"> | number
  }

  export type staffsWhereInput = {
    AND?: staffsWhereInput | staffsWhereInput[]
    OR?: staffsWhereInput[]
    NOT?: staffsWhereInput | staffsWhereInput[]
    staff_id?: IntFilter<"staffs"> | number
    first_name?: StringFilter<"staffs"> | string
    last_name?: StringFilter<"staffs"> | string
    email?: StringFilter<"staffs"> | string
    phone?: StringNullableFilter<"staffs"> | string | null
    active?: BoolFilter<"staffs"> | boolean
    store_id?: IntFilter<"staffs"> | number
    manager_id?: IntNullableFilter<"staffs"> | number | null
    orders?: OrdersListRelationFilter
    staffs?: XOR<StaffsNullableScalarRelationFilter, staffsWhereInput> | null
    other_staffs?: StaffsListRelationFilter
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
  }

  export type staffsOrderByWithRelationInput = {
    staff_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    active?: SortOrder
    store_id?: SortOrder
    manager_id?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
    staffs?: staffsOrderByWithRelationInput
    other_staffs?: staffsOrderByRelationAggregateInput
    stores?: storesOrderByWithRelationInput
  }

  export type staffsWhereUniqueInput = Prisma.AtLeast<{
    staff_id?: number
    email?: string
    AND?: staffsWhereInput | staffsWhereInput[]
    OR?: staffsWhereInput[]
    NOT?: staffsWhereInput | staffsWhereInput[]
    first_name?: StringFilter<"staffs"> | string
    last_name?: StringFilter<"staffs"> | string
    phone?: StringNullableFilter<"staffs"> | string | null
    active?: BoolFilter<"staffs"> | boolean
    store_id?: IntFilter<"staffs"> | number
    manager_id?: IntNullableFilter<"staffs"> | number | null
    orders?: OrdersListRelationFilter
    staffs?: XOR<StaffsNullableScalarRelationFilter, staffsWhereInput> | null
    other_staffs?: StaffsListRelationFilter
    stores?: XOR<StoresScalarRelationFilter, storesWhereInput>
  }, "staff_id" | "email">

  export type staffsOrderByWithAggregationInput = {
    staff_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    active?: SortOrder
    store_id?: SortOrder
    manager_id?: SortOrderInput | SortOrder
    _count?: staffsCountOrderByAggregateInput
    _avg?: staffsAvgOrderByAggregateInput
    _max?: staffsMaxOrderByAggregateInput
    _min?: staffsMinOrderByAggregateInput
    _sum?: staffsSumOrderByAggregateInput
  }

  export type staffsScalarWhereWithAggregatesInput = {
    AND?: staffsScalarWhereWithAggregatesInput | staffsScalarWhereWithAggregatesInput[]
    OR?: staffsScalarWhereWithAggregatesInput[]
    NOT?: staffsScalarWhereWithAggregatesInput | staffsScalarWhereWithAggregatesInput[]
    staff_id?: IntWithAggregatesFilter<"staffs"> | number
    first_name?: StringWithAggregatesFilter<"staffs"> | string
    last_name?: StringWithAggregatesFilter<"staffs"> | string
    email?: StringWithAggregatesFilter<"staffs"> | string
    phone?: StringNullableWithAggregatesFilter<"staffs"> | string | null
    active?: BoolWithAggregatesFilter<"staffs"> | boolean
    store_id?: IntWithAggregatesFilter<"staffs"> | number
    manager_id?: IntNullableWithAggregatesFilter<"staffs"> | number | null
  }

  export type storesWhereInput = {
    AND?: storesWhereInput | storesWhereInput[]
    OR?: storesWhereInput[]
    NOT?: storesWhereInput | storesWhereInput[]
    store_id?: IntFilter<"stores"> | number
    store_name?: StringFilter<"stores"> | string
    phone?: StringNullableFilter<"stores"> | string | null
    email?: StringNullableFilter<"stores"> | string | null
    street?: StringNullableFilter<"stores"> | string | null
    city?: StringNullableFilter<"stores"> | string | null
    state?: StringNullableFilter<"stores"> | string | null
    zip_code?: StringNullableFilter<"stores"> | string | null
    stocks?: StocksListRelationFilter
    orders?: OrdersListRelationFilter
    staffs?: StaffsListRelationFilter
  }

  export type storesOrderByWithRelationInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    stocks?: stocksOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    staffs?: staffsOrderByRelationAggregateInput
  }

  export type storesWhereUniqueInput = Prisma.AtLeast<{
    store_id?: number
    AND?: storesWhereInput | storesWhereInput[]
    OR?: storesWhereInput[]
    NOT?: storesWhereInput | storesWhereInput[]
    store_name?: StringFilter<"stores"> | string
    phone?: StringNullableFilter<"stores"> | string | null
    email?: StringNullableFilter<"stores"> | string | null
    street?: StringNullableFilter<"stores"> | string | null
    city?: StringNullableFilter<"stores"> | string | null
    state?: StringNullableFilter<"stores"> | string | null
    zip_code?: StringNullableFilter<"stores"> | string | null
    stocks?: StocksListRelationFilter
    orders?: OrdersListRelationFilter
    staffs?: StaffsListRelationFilter
  }, "store_id">

  export type storesOrderByWithAggregationInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    zip_code?: SortOrderInput | SortOrder
    _count?: storesCountOrderByAggregateInput
    _avg?: storesAvgOrderByAggregateInput
    _max?: storesMaxOrderByAggregateInput
    _min?: storesMinOrderByAggregateInput
    _sum?: storesSumOrderByAggregateInput
  }

  export type storesScalarWhereWithAggregatesInput = {
    AND?: storesScalarWhereWithAggregatesInput | storesScalarWhereWithAggregatesInput[]
    OR?: storesScalarWhereWithAggregatesInput[]
    NOT?: storesScalarWhereWithAggregatesInput | storesScalarWhereWithAggregatesInput[]
    store_id?: IntWithAggregatesFilter<"stores"> | number
    store_name?: StringWithAggregatesFilter<"stores"> | string
    phone?: StringNullableWithAggregatesFilter<"stores"> | string | null
    email?: StringNullableWithAggregatesFilter<"stores"> | string | null
    street?: StringNullableWithAggregatesFilter<"stores"> | string | null
    city?: StringNullableWithAggregatesFilter<"stores"> | string | null
    state?: StringNullableWithAggregatesFilter<"stores"> | string | null
    zip_code?: StringNullableWithAggregatesFilter<"stores"> | string | null
  }

  export type brandsCreateInput = {
    brand_name: string
    products?: productsCreateNestedManyWithoutBrandsInput
  }

  export type brandsUncheckedCreateInput = {
    brand_id?: number
    brand_name: string
    products?: productsUncheckedCreateNestedManyWithoutBrandsInput
  }

  export type brandsUpdateInput = {
    brand_name?: StringFieldUpdateOperationsInput | string
    products?: productsUpdateManyWithoutBrandsNestedInput
  }

  export type brandsUncheckedUpdateInput = {
    brand_id?: IntFieldUpdateOperationsInput | number
    brand_name?: StringFieldUpdateOperationsInput | string
    products?: productsUncheckedUpdateManyWithoutBrandsNestedInput
  }

  export type brandsCreateManyInput = {
    brand_id?: number
    brand_name: string
  }

  export type brandsUpdateManyMutationInput = {
    brand_name?: StringFieldUpdateOperationsInput | string
  }

  export type brandsUncheckedUpdateManyInput = {
    brand_id?: IntFieldUpdateOperationsInput | number
    brand_name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesCreateInput = {
    category_name: string
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    category_id?: number
    category_name: string
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    category_id?: number
    category_name: string
  }

  export type categoriesUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type productsCreateInput = {
    product_name: string
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
    brands: brandsCreateNestedOneWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    stocks?: stocksCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    product_id?: number
    product_name: string
    brand_id: number
    category_id: number
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
    stocks?: stocksUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    brands?: brandsUpdateOneRequiredWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    stocks?: stocksUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stocks?: stocksUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    product_id?: number
    product_name: string
    brand_id: number
    category_id: number
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
  }

  export type productsUpdateManyMutationInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type productsUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type stocksCreateInput = {
    quantity?: number | null
    products: productsCreateNestedOneWithoutStocksInput
    stores: storesCreateNestedOneWithoutStocksInput
  }

  export type stocksUncheckedCreateInput = {
    store_id: number
    product_id: number
    quantity?: number | null
  }

  export type stocksUpdateInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    products?: productsUpdateOneRequiredWithoutStocksNestedInput
    stores?: storesUpdateOneRequiredWithoutStocksNestedInput
  }

  export type stocksUncheckedUpdateInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stocksCreateManyInput = {
    store_id: number
    product_id: number
    quantity?: number | null
  }

  export type stocksUpdateManyMutationInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stocksUncheckedUpdateManyInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type customersCreateInput = {
    first_name: string
    last_name: string
    phone?: string | null
    email: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    orders?: ordersCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateInput = {
    customer_id?: number
    first_name: string
    last_name: string
    phone?: string | null
    email: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    orders?: ordersUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersCreateManyInput = {
    customer_id?: number
    first_name: string
    last_name: string
    phone?: string | null
    email: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
  }

  export type customersUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersUncheckedUpdateManyInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_itemsCreateInput = {
    item_id: number
    quantity: number
    list_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
    products: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateInput = {
    order_id: number
    item_id: number
    product_id: number
    quantity: number
    list_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
    products?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateManyInput = {
    order_id: number
    item_id: number
    product_id: number
    quantity: number
    list_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateManyMutationInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ordersCreateInput = {
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    customers?: customersCreateNestedOneWithoutOrdersInput
    staffs: staffsCreateNestedOneWithoutOrdersInput
    stores: storesCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    order_id?: number
    customer_id?: number | null
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    store_id: number
    staff_id: number
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    customers?: customersUpdateOneWithoutOrdersNestedInput
    staffs?: staffsUpdateOneRequiredWithoutOrdersNestedInput
    stores?: storesUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    order_id?: number
    customer_id?: number | null
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    store_id: number
    staff_id: number
  }

  export type ordersUpdateManyMutationInput = {
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
  }

  export type staffsCreateInput = {
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    orders?: ordersCreateNestedManyWithoutStaffsInput
    staffs?: staffsCreateNestedOneWithoutOther_staffsInput
    other_staffs?: staffsCreateNestedManyWithoutStaffsInput
    stores: storesCreateNestedOneWithoutStaffsInput
  }

  export type staffsUncheckedCreateInput = {
    staff_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    store_id: number
    manager_id?: number | null
    orders?: ordersUncheckedCreateNestedManyWithoutStaffsInput
    other_staffs?: staffsUncheckedCreateNestedManyWithoutStaffsInput
  }

  export type staffsUpdateInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    orders?: ordersUpdateManyWithoutStaffsNestedInput
    staffs?: staffsUpdateOneWithoutOther_staffsNestedInput
    other_staffs?: staffsUpdateManyWithoutStaffsNestedInput
    stores?: storesUpdateOneRequiredWithoutStaffsNestedInput
  }

  export type staffsUncheckedUpdateInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    store_id?: IntFieldUpdateOperationsInput | number
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: ordersUncheckedUpdateManyWithoutStaffsNestedInput
    other_staffs?: staffsUncheckedUpdateManyWithoutStaffsNestedInput
  }

  export type staffsCreateManyInput = {
    staff_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    store_id: number
    manager_id?: number | null
  }

  export type staffsUpdateManyMutationInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type staffsUncheckedUpdateManyInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    store_id?: IntFieldUpdateOperationsInput | number
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type storesCreateInput = {
    store_name: string
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    stocks?: stocksCreateNestedManyWithoutStoresInput
    orders?: ordersCreateNestedManyWithoutStoresInput
    staffs?: staffsCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateInput = {
    store_id?: number
    store_name: string
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    stocks?: stocksUncheckedCreateNestedManyWithoutStoresInput
    orders?: ordersUncheckedCreateNestedManyWithoutStoresInput
    staffs?: staffsUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesUpdateInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    stocks?: stocksUpdateManyWithoutStoresNestedInput
    orders?: ordersUpdateManyWithoutStoresNestedInput
    staffs?: staffsUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    stocks?: stocksUncheckedUpdateManyWithoutStoresNestedInput
    orders?: ordersUncheckedUpdateManyWithoutStoresNestedInput
    staffs?: staffsUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type storesCreateManyInput = {
    store_id?: number
    store_name: string
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
  }

  export type storesUpdateManyMutationInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type storesUncheckedUpdateManyInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type brandsCountOrderByAggregateInput = {
    brand_id?: SortOrder
    brand_name?: SortOrder
  }

  export type brandsAvgOrderByAggregateInput = {
    brand_id?: SortOrder
  }

  export type brandsMaxOrderByAggregateInput = {
    brand_id?: SortOrder
    brand_name?: SortOrder
  }

  export type brandsMinOrderByAggregateInput = {
    brand_id?: SortOrder
    brand_name?: SortOrder
  }

  export type brandsSumOrderByAggregateInput = {
    brand_id?: SortOrder
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

  export type categoriesCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BrandsScalarRelationFilter = {
    is?: brandsWhereInput
    isNot?: brandsWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: categoriesWhereInput
    isNot?: categoriesWhereInput
  }

  export type StocksListRelationFilter = {
    every?: stocksWhereInput
    some?: stocksWhereInput
    none?: stocksWhereInput
  }

  export type Order_itemsListRelationFilter = {
    every?: order_itemsWhereInput
    some?: order_itemsWhereInput
    none?: order_itemsWhereInput
  }

  export type stocksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type order_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    brand_id?: SortOrder
    category_id?: SortOrder
    model_year?: SortOrder
    list_price?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    product_id?: SortOrder
    brand_id?: SortOrder
    category_id?: SortOrder
    model_year?: SortOrder
    list_price?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    brand_id?: SortOrder
    category_id?: SortOrder
    model_year?: SortOrder
    list_price?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    brand_id?: SortOrder
    category_id?: SortOrder
    model_year?: SortOrder
    list_price?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    product_id?: SortOrder
    brand_id?: SortOrder
    category_id?: SortOrder
    model_year?: SortOrder
    list_price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ProductsScalarRelationFilter = {
    is?: productsWhereInput
    isNot?: productsWhereInput
  }

  export type StoresScalarRelationFilter = {
    is?: storesWhereInput
    isNot?: storesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type stocksStore_idProduct_idCompoundUniqueInput = {
    store_id: number
    product_id: number
  }

  export type stocksCountOrderByAggregateInput = {
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type stocksAvgOrderByAggregateInput = {
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type stocksMaxOrderByAggregateInput = {
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type stocksMinOrderByAggregateInput = {
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type stocksSumOrderByAggregateInput = {
    store_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    customer_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    customer_id?: SortOrder
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

  export type OrdersScalarRelationFilter = {
    is?: ordersWhereInput
    isNot?: ordersWhereInput
  }

  export type order_itemsOrder_idItem_idCompoundUniqueInput = {
    order_id: number
    item_id: number
  }

  export type order_itemsCountOrderByAggregateInput = {
    order_id?: SortOrder
    item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    list_price?: SortOrder
    discount?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    order_id?: SortOrder
    item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    list_price?: SortOrder
    discount?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    order_id?: SortOrder
    item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    list_price?: SortOrder
    discount?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    order_id?: SortOrder
    item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    list_price?: SortOrder
    discount?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    order_id?: SortOrder
    item_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    list_price?: SortOrder
    discount?: SortOrder
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

  export type CustomersNullableScalarRelationFilter = {
    is?: customersWhereInput | null
    isNot?: customersWhereInput | null
  }

  export type StaffsScalarRelationFilter = {
    is?: staffsWhereInput
    isNot?: staffsWhereInput
  }

  export type ordersCountOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    order_status?: SortOrder
    order_date?: SortOrder
    required_date?: SortOrder
    shipped_date?: SortOrder
    store_id?: SortOrder
    staff_id?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    order_status?: SortOrder
    store_id?: SortOrder
    staff_id?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    order_status?: SortOrder
    order_date?: SortOrder
    required_date?: SortOrder
    shipped_date?: SortOrder
    store_id?: SortOrder
    staff_id?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    order_status?: SortOrder
    order_date?: SortOrder
    required_date?: SortOrder
    shipped_date?: SortOrder
    store_id?: SortOrder
    staff_id?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    order_status?: SortOrder
    store_id?: SortOrder
    staff_id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StaffsNullableScalarRelationFilter = {
    is?: staffsWhereInput | null
    isNot?: staffsWhereInput | null
  }

  export type StaffsListRelationFilter = {
    every?: staffsWhereInput
    some?: staffsWhereInput
    none?: staffsWhereInput
  }

  export type staffsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type staffsCountOrderByAggregateInput = {
    staff_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    store_id?: SortOrder
    manager_id?: SortOrder
  }

  export type staffsAvgOrderByAggregateInput = {
    staff_id?: SortOrder
    store_id?: SortOrder
    manager_id?: SortOrder
  }

  export type staffsMaxOrderByAggregateInput = {
    staff_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    store_id?: SortOrder
    manager_id?: SortOrder
  }

  export type staffsMinOrderByAggregateInput = {
    staff_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    active?: SortOrder
    store_id?: SortOrder
    manager_id?: SortOrder
  }

  export type staffsSumOrderByAggregateInput = {
    staff_id?: SortOrder
    store_id?: SortOrder
    manager_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type storesCountOrderByAggregateInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
  }

  export type storesAvgOrderByAggregateInput = {
    store_id?: SortOrder
  }

  export type storesMaxOrderByAggregateInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
  }

  export type storesMinOrderByAggregateInput = {
    store_id?: SortOrder
    store_name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip_code?: SortOrder
  }

  export type storesSumOrderByAggregateInput = {
    store_id?: SortOrder
  }

  export type productsCreateNestedManyWithoutBrandsInput = {
    create?: XOR<productsCreateWithoutBrandsInput, productsUncheckedCreateWithoutBrandsInput> | productsCreateWithoutBrandsInput[] | productsUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: productsCreateOrConnectWithoutBrandsInput | productsCreateOrConnectWithoutBrandsInput[]
    createMany?: productsCreateManyBrandsInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutBrandsInput = {
    create?: XOR<productsCreateWithoutBrandsInput, productsUncheckedCreateWithoutBrandsInput> | productsCreateWithoutBrandsInput[] | productsUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: productsCreateOrConnectWithoutBrandsInput | productsCreateOrConnectWithoutBrandsInput[]
    createMany?: productsCreateManyBrandsInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type productsUpdateManyWithoutBrandsNestedInput = {
    create?: XOR<productsCreateWithoutBrandsInput, productsUncheckedCreateWithoutBrandsInput> | productsCreateWithoutBrandsInput[] | productsUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: productsCreateOrConnectWithoutBrandsInput | productsCreateOrConnectWithoutBrandsInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutBrandsInput | productsUpsertWithWhereUniqueWithoutBrandsInput[]
    createMany?: productsCreateManyBrandsInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutBrandsInput | productsUpdateWithWhereUniqueWithoutBrandsInput[]
    updateMany?: productsUpdateManyWithWhereWithoutBrandsInput | productsUpdateManyWithWhereWithoutBrandsInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsUncheckedUpdateManyWithoutBrandsNestedInput = {
    create?: XOR<productsCreateWithoutBrandsInput, productsUncheckedCreateWithoutBrandsInput> | productsCreateWithoutBrandsInput[] | productsUncheckedCreateWithoutBrandsInput[]
    connectOrCreate?: productsCreateOrConnectWithoutBrandsInput | productsCreateOrConnectWithoutBrandsInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutBrandsInput | productsUpsertWithWhereUniqueWithoutBrandsInput[]
    createMany?: productsCreateManyBrandsInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutBrandsInput | productsUpdateWithWhereUniqueWithoutBrandsInput[]
    updateMany?: productsUpdateManyWithWhereWithoutBrandsInput | productsUpdateManyWithWhereWithoutBrandsInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type brandsCreateNestedOneWithoutProductsInput = {
    create?: XOR<brandsCreateWithoutProductsInput, brandsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: brandsCreateOrConnectWithoutProductsInput
    connect?: brandsWhereUniqueInput
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type stocksCreateNestedManyWithoutProductsInput = {
    create?: XOR<stocksCreateWithoutProductsInput, stocksUncheckedCreateWithoutProductsInput> | stocksCreateWithoutProductsInput[] | stocksUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: stocksCreateOrConnectWithoutProductsInput | stocksCreateOrConnectWithoutProductsInput[]
    createMany?: stocksCreateManyProductsInputEnvelope
    connect?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
  }

  export type order_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type stocksUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<stocksCreateWithoutProductsInput, stocksUncheckedCreateWithoutProductsInput> | stocksCreateWithoutProductsInput[] | stocksUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: stocksCreateOrConnectWithoutProductsInput | stocksCreateOrConnectWithoutProductsInput[]
    createMany?: stocksCreateManyProductsInputEnvelope
    connect?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type brandsUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<brandsCreateWithoutProductsInput, brandsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: brandsCreateOrConnectWithoutProductsInput
    upsert?: brandsUpsertWithoutProductsInput
    connect?: brandsWhereUniqueInput
    update?: XOR<XOR<brandsUpdateToOneWithWhereWithoutProductsInput, brandsUpdateWithoutProductsInput>, brandsUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type stocksUpdateManyWithoutProductsNestedInput = {
    create?: XOR<stocksCreateWithoutProductsInput, stocksUncheckedCreateWithoutProductsInput> | stocksCreateWithoutProductsInput[] | stocksUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: stocksCreateOrConnectWithoutProductsInput | stocksCreateOrConnectWithoutProductsInput[]
    upsert?: stocksUpsertWithWhereUniqueWithoutProductsInput | stocksUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: stocksCreateManyProductsInputEnvelope
    set?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    disconnect?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    delete?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    connect?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    update?: stocksUpdateWithWhereUniqueWithoutProductsInput | stocksUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: stocksUpdateManyWithWhereWithoutProductsInput | stocksUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: stocksScalarWhereInput | stocksScalarWhereInput[]
  }

  export type order_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type stocksUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<stocksCreateWithoutProductsInput, stocksUncheckedCreateWithoutProductsInput> | stocksCreateWithoutProductsInput[] | stocksUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: stocksCreateOrConnectWithoutProductsInput | stocksCreateOrConnectWithoutProductsInput[]
    upsert?: stocksUpsertWithWhereUniqueWithoutProductsInput | stocksUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: stocksCreateManyProductsInputEnvelope
    set?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    disconnect?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    delete?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    connect?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    update?: stocksUpdateWithWhereUniqueWithoutProductsInput | stocksUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: stocksUpdateManyWithWhereWithoutProductsInput | stocksUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: stocksScalarWhereInput | stocksScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutStocksInput = {
    create?: XOR<productsCreateWithoutStocksInput, productsUncheckedCreateWithoutStocksInput>
    connectOrCreate?: productsCreateOrConnectWithoutStocksInput
    connect?: productsWhereUniqueInput
  }

  export type storesCreateNestedOneWithoutStocksInput = {
    create?: XOR<storesCreateWithoutStocksInput, storesUncheckedCreateWithoutStocksInput>
    connectOrCreate?: storesCreateOrConnectWithoutStocksInput
    connect?: storesWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type productsUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<productsCreateWithoutStocksInput, productsUncheckedCreateWithoutStocksInput>
    connectOrCreate?: productsCreateOrConnectWithoutStocksInput
    upsert?: productsUpsertWithoutStocksInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutStocksInput, productsUpdateWithoutStocksInput>, productsUncheckedUpdateWithoutStocksInput>
  }

  export type storesUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<storesCreateWithoutStocksInput, storesUncheckedCreateWithoutStocksInput>
    connectOrCreate?: storesCreateOrConnectWithoutStocksInput
    upsert?: storesUpsertWithoutStocksInput
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutStocksInput, storesUpdateWithoutStocksInput>, storesUncheckedUpdateWithoutStocksInput>
  }

  export type ordersCreateNestedManyWithoutCustomersInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ordersUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomersInput | ordersUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomersInput | ordersUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomersInput | ordersUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomersInput | ordersUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomersInput | ordersUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomersInput | ordersUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type ordersUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_itemsInput, ordersUpdateWithoutOrder_itemsInput>, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateOneRequiredWithoutOrder_itemsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    upsert?: productsUpsertWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_itemsInput, productsUpdateWithoutOrder_itemsInput>, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type customersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: customersCreateOrConnectWithoutOrdersInput
    connect?: customersWhereUniqueInput
  }

  export type staffsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<staffsCreateWithoutOrdersInput, staffsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: staffsCreateOrConnectWithoutOrdersInput
    connect?: staffsWhereUniqueInput
  }

  export type storesCreateNestedOneWithoutOrdersInput = {
    create?: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: storesCreateOrConnectWithoutOrdersInput
    connect?: storesWhereUniqueInput
  }

  export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type customersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: customersCreateOrConnectWithoutOrdersInput
    upsert?: customersUpsertWithoutOrdersInput
    disconnect?: customersWhereInput | boolean
    delete?: customersWhereInput | boolean
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutOrdersInput, customersUpdateWithoutOrdersInput>, customersUncheckedUpdateWithoutOrdersInput>
  }

  export type staffsUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<staffsCreateWithoutOrdersInput, staffsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: staffsCreateOrConnectWithoutOrdersInput
    upsert?: staffsUpsertWithoutOrdersInput
    connect?: staffsWhereUniqueInput
    update?: XOR<XOR<staffsUpdateToOneWithWhereWithoutOrdersInput, staffsUpdateWithoutOrdersInput>, staffsUncheckedUpdateWithoutOrdersInput>
  }

  export type storesUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: storesCreateOrConnectWithoutOrdersInput
    upsert?: storesUpsertWithoutOrdersInput
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutOrdersInput, storesUpdateWithoutOrdersInput>, storesUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type ordersCreateNestedManyWithoutStaffsInput = {
    create?: XOR<ordersCreateWithoutStaffsInput, ordersUncheckedCreateWithoutStaffsInput> | ordersCreateWithoutStaffsInput[] | ordersUncheckedCreateWithoutStaffsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStaffsInput | ordersCreateOrConnectWithoutStaffsInput[]
    createMany?: ordersCreateManyStaffsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type staffsCreateNestedOneWithoutOther_staffsInput = {
    create?: XOR<staffsCreateWithoutOther_staffsInput, staffsUncheckedCreateWithoutOther_staffsInput>
    connectOrCreate?: staffsCreateOrConnectWithoutOther_staffsInput
    connect?: staffsWhereUniqueInput
  }

  export type staffsCreateNestedManyWithoutStaffsInput = {
    create?: XOR<staffsCreateWithoutStaffsInput, staffsUncheckedCreateWithoutStaffsInput> | staffsCreateWithoutStaffsInput[] | staffsUncheckedCreateWithoutStaffsInput[]
    connectOrCreate?: staffsCreateOrConnectWithoutStaffsInput | staffsCreateOrConnectWithoutStaffsInput[]
    createMany?: staffsCreateManyStaffsInputEnvelope
    connect?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
  }

  export type storesCreateNestedOneWithoutStaffsInput = {
    create?: XOR<storesCreateWithoutStaffsInput, storesUncheckedCreateWithoutStaffsInput>
    connectOrCreate?: storesCreateOrConnectWithoutStaffsInput
    connect?: storesWhereUniqueInput
  }

  export type ordersUncheckedCreateNestedManyWithoutStaffsInput = {
    create?: XOR<ordersCreateWithoutStaffsInput, ordersUncheckedCreateWithoutStaffsInput> | ordersCreateWithoutStaffsInput[] | ordersUncheckedCreateWithoutStaffsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStaffsInput | ordersCreateOrConnectWithoutStaffsInput[]
    createMany?: ordersCreateManyStaffsInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type staffsUncheckedCreateNestedManyWithoutStaffsInput = {
    create?: XOR<staffsCreateWithoutStaffsInput, staffsUncheckedCreateWithoutStaffsInput> | staffsCreateWithoutStaffsInput[] | staffsUncheckedCreateWithoutStaffsInput[]
    connectOrCreate?: staffsCreateOrConnectWithoutStaffsInput | staffsCreateOrConnectWithoutStaffsInput[]
    createMany?: staffsCreateManyStaffsInputEnvelope
    connect?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ordersUpdateManyWithoutStaffsNestedInput = {
    create?: XOR<ordersCreateWithoutStaffsInput, ordersUncheckedCreateWithoutStaffsInput> | ordersCreateWithoutStaffsInput[] | ordersUncheckedCreateWithoutStaffsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStaffsInput | ordersCreateOrConnectWithoutStaffsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutStaffsInput | ordersUpsertWithWhereUniqueWithoutStaffsInput[]
    createMany?: ordersCreateManyStaffsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutStaffsInput | ordersUpdateWithWhereUniqueWithoutStaffsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutStaffsInput | ordersUpdateManyWithWhereWithoutStaffsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type staffsUpdateOneWithoutOther_staffsNestedInput = {
    create?: XOR<staffsCreateWithoutOther_staffsInput, staffsUncheckedCreateWithoutOther_staffsInput>
    connectOrCreate?: staffsCreateOrConnectWithoutOther_staffsInput
    upsert?: staffsUpsertWithoutOther_staffsInput
    disconnect?: staffsWhereInput | boolean
    delete?: staffsWhereInput | boolean
    connect?: staffsWhereUniqueInput
    update?: XOR<XOR<staffsUpdateToOneWithWhereWithoutOther_staffsInput, staffsUpdateWithoutOther_staffsInput>, staffsUncheckedUpdateWithoutOther_staffsInput>
  }

  export type staffsUpdateManyWithoutStaffsNestedInput = {
    create?: XOR<staffsCreateWithoutStaffsInput, staffsUncheckedCreateWithoutStaffsInput> | staffsCreateWithoutStaffsInput[] | staffsUncheckedCreateWithoutStaffsInput[]
    connectOrCreate?: staffsCreateOrConnectWithoutStaffsInput | staffsCreateOrConnectWithoutStaffsInput[]
    upsert?: staffsUpsertWithWhereUniqueWithoutStaffsInput | staffsUpsertWithWhereUniqueWithoutStaffsInput[]
    createMany?: staffsCreateManyStaffsInputEnvelope
    set?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    disconnect?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    delete?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    connect?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    update?: staffsUpdateWithWhereUniqueWithoutStaffsInput | staffsUpdateWithWhereUniqueWithoutStaffsInput[]
    updateMany?: staffsUpdateManyWithWhereWithoutStaffsInput | staffsUpdateManyWithWhereWithoutStaffsInput[]
    deleteMany?: staffsScalarWhereInput | staffsScalarWhereInput[]
  }

  export type storesUpdateOneRequiredWithoutStaffsNestedInput = {
    create?: XOR<storesCreateWithoutStaffsInput, storesUncheckedCreateWithoutStaffsInput>
    connectOrCreate?: storesCreateOrConnectWithoutStaffsInput
    upsert?: storesUpsertWithoutStaffsInput
    connect?: storesWhereUniqueInput
    update?: XOR<XOR<storesUpdateToOneWithWhereWithoutStaffsInput, storesUpdateWithoutStaffsInput>, storesUncheckedUpdateWithoutStaffsInput>
  }

  export type ordersUncheckedUpdateManyWithoutStaffsNestedInput = {
    create?: XOR<ordersCreateWithoutStaffsInput, ordersUncheckedCreateWithoutStaffsInput> | ordersCreateWithoutStaffsInput[] | ordersUncheckedCreateWithoutStaffsInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStaffsInput | ordersCreateOrConnectWithoutStaffsInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutStaffsInput | ordersUpsertWithWhereUniqueWithoutStaffsInput[]
    createMany?: ordersCreateManyStaffsInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutStaffsInput | ordersUpdateWithWhereUniqueWithoutStaffsInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutStaffsInput | ordersUpdateManyWithWhereWithoutStaffsInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type staffsUncheckedUpdateManyWithoutStaffsNestedInput = {
    create?: XOR<staffsCreateWithoutStaffsInput, staffsUncheckedCreateWithoutStaffsInput> | staffsCreateWithoutStaffsInput[] | staffsUncheckedCreateWithoutStaffsInput[]
    connectOrCreate?: staffsCreateOrConnectWithoutStaffsInput | staffsCreateOrConnectWithoutStaffsInput[]
    upsert?: staffsUpsertWithWhereUniqueWithoutStaffsInput | staffsUpsertWithWhereUniqueWithoutStaffsInput[]
    createMany?: staffsCreateManyStaffsInputEnvelope
    set?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    disconnect?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    delete?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    connect?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    update?: staffsUpdateWithWhereUniqueWithoutStaffsInput | staffsUpdateWithWhereUniqueWithoutStaffsInput[]
    updateMany?: staffsUpdateManyWithWhereWithoutStaffsInput | staffsUpdateManyWithWhereWithoutStaffsInput[]
    deleteMany?: staffsScalarWhereInput | staffsScalarWhereInput[]
  }

  export type stocksCreateNestedManyWithoutStoresInput = {
    create?: XOR<stocksCreateWithoutStoresInput, stocksUncheckedCreateWithoutStoresInput> | stocksCreateWithoutStoresInput[] | stocksUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: stocksCreateOrConnectWithoutStoresInput | stocksCreateOrConnectWithoutStoresInput[]
    createMany?: stocksCreateManyStoresInputEnvelope
    connect?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutStoresInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type staffsCreateNestedManyWithoutStoresInput = {
    create?: XOR<staffsCreateWithoutStoresInput, staffsUncheckedCreateWithoutStoresInput> | staffsCreateWithoutStoresInput[] | staffsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: staffsCreateOrConnectWithoutStoresInput | staffsCreateOrConnectWithoutStoresInput[]
    createMany?: staffsCreateManyStoresInputEnvelope
    connect?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
  }

  export type stocksUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<stocksCreateWithoutStoresInput, stocksUncheckedCreateWithoutStoresInput> | stocksCreateWithoutStoresInput[] | stocksUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: stocksCreateOrConnectWithoutStoresInput | stocksCreateOrConnectWithoutStoresInput[]
    createMany?: stocksCreateManyStoresInputEnvelope
    connect?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type staffsUncheckedCreateNestedManyWithoutStoresInput = {
    create?: XOR<staffsCreateWithoutStoresInput, staffsUncheckedCreateWithoutStoresInput> | staffsCreateWithoutStoresInput[] | staffsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: staffsCreateOrConnectWithoutStoresInput | staffsCreateOrConnectWithoutStoresInput[]
    createMany?: staffsCreateManyStoresInputEnvelope
    connect?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
  }

  export type stocksUpdateManyWithoutStoresNestedInput = {
    create?: XOR<stocksCreateWithoutStoresInput, stocksUncheckedCreateWithoutStoresInput> | stocksCreateWithoutStoresInput[] | stocksUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: stocksCreateOrConnectWithoutStoresInput | stocksCreateOrConnectWithoutStoresInput[]
    upsert?: stocksUpsertWithWhereUniqueWithoutStoresInput | stocksUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: stocksCreateManyStoresInputEnvelope
    set?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    disconnect?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    delete?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    connect?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    update?: stocksUpdateWithWhereUniqueWithoutStoresInput | stocksUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: stocksUpdateManyWithWhereWithoutStoresInput | stocksUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: stocksScalarWhereInput | stocksScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutStoresNestedInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutStoresInput | ordersUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutStoresInput | ordersUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutStoresInput | ordersUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type staffsUpdateManyWithoutStoresNestedInput = {
    create?: XOR<staffsCreateWithoutStoresInput, staffsUncheckedCreateWithoutStoresInput> | staffsCreateWithoutStoresInput[] | staffsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: staffsCreateOrConnectWithoutStoresInput | staffsCreateOrConnectWithoutStoresInput[]
    upsert?: staffsUpsertWithWhereUniqueWithoutStoresInput | staffsUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: staffsCreateManyStoresInputEnvelope
    set?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    disconnect?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    delete?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    connect?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    update?: staffsUpdateWithWhereUniqueWithoutStoresInput | staffsUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: staffsUpdateManyWithWhereWithoutStoresInput | staffsUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: staffsScalarWhereInput | staffsScalarWhereInput[]
  }

  export type stocksUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<stocksCreateWithoutStoresInput, stocksUncheckedCreateWithoutStoresInput> | stocksCreateWithoutStoresInput[] | stocksUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: stocksCreateOrConnectWithoutStoresInput | stocksCreateOrConnectWithoutStoresInput[]
    upsert?: stocksUpsertWithWhereUniqueWithoutStoresInput | stocksUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: stocksCreateManyStoresInputEnvelope
    set?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    disconnect?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    delete?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    connect?: stocksWhereUniqueInput | stocksWhereUniqueInput[]
    update?: stocksUpdateWithWhereUniqueWithoutStoresInput | stocksUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: stocksUpdateManyWithWhereWithoutStoresInput | stocksUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: stocksScalarWhereInput | stocksScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput> | ordersCreateWithoutStoresInput[] | ordersUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutStoresInput | ordersCreateOrConnectWithoutStoresInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutStoresInput | ordersUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: ordersCreateManyStoresInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutStoresInput | ordersUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutStoresInput | ordersUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type staffsUncheckedUpdateManyWithoutStoresNestedInput = {
    create?: XOR<staffsCreateWithoutStoresInput, staffsUncheckedCreateWithoutStoresInput> | staffsCreateWithoutStoresInput[] | staffsUncheckedCreateWithoutStoresInput[]
    connectOrCreate?: staffsCreateOrConnectWithoutStoresInput | staffsCreateOrConnectWithoutStoresInput[]
    upsert?: staffsUpsertWithWhereUniqueWithoutStoresInput | staffsUpsertWithWhereUniqueWithoutStoresInput[]
    createMany?: staffsCreateManyStoresInputEnvelope
    set?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    disconnect?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    delete?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    connect?: staffsWhereUniqueInput | staffsWhereUniqueInput[]
    update?: staffsUpdateWithWhereUniqueWithoutStoresInput | staffsUpdateWithWhereUniqueWithoutStoresInput[]
    updateMany?: staffsUpdateManyWithWhereWithoutStoresInput | staffsUpdateManyWithWhereWithoutStoresInput[]
    deleteMany?: staffsScalarWhereInput | staffsScalarWhereInput[]
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type productsCreateWithoutBrandsInput = {
    product_name: string
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
    categories: categoriesCreateNestedOneWithoutProductsInput
    stocks?: stocksCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutBrandsInput = {
    product_id?: number
    product_name: string
    category_id: number
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
    stocks?: stocksUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutBrandsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutBrandsInput, productsUncheckedCreateWithoutBrandsInput>
  }

  export type productsCreateManyBrandsInputEnvelope = {
    data: productsCreateManyBrandsInput | productsCreateManyBrandsInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutBrandsInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutBrandsInput, productsUncheckedUpdateWithoutBrandsInput>
    create: XOR<productsCreateWithoutBrandsInput, productsUncheckedCreateWithoutBrandsInput>
  }

  export type productsUpdateWithWhereUniqueWithoutBrandsInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutBrandsInput, productsUncheckedUpdateWithoutBrandsInput>
  }

  export type productsUpdateManyWithWhereWithoutBrandsInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutBrandsInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    product_id?: IntFilter<"products"> | number
    product_name?: StringFilter<"products"> | string
    brand_id?: IntFilter<"products"> | number
    category_id?: IntFilter<"products"> | number
    model_year?: IntFilter<"products"> | number
    list_price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
  }

  export type productsCreateWithoutCategoriesInput = {
    product_name: string
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
    brands: brandsCreateNestedOneWithoutProductsInput
    stocks?: stocksCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    product_id?: number
    product_name: string
    brand_id: number
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
    stocks?: stocksUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type brandsCreateWithoutProductsInput = {
    brand_name: string
  }

  export type brandsUncheckedCreateWithoutProductsInput = {
    brand_id?: number
    brand_name: string
  }

  export type brandsCreateOrConnectWithoutProductsInput = {
    where: brandsWhereUniqueInput
    create: XOR<brandsCreateWithoutProductsInput, brandsUncheckedCreateWithoutProductsInput>
  }

  export type categoriesCreateWithoutProductsInput = {
    category_name: string
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    category_id?: number
    category_name: string
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type stocksCreateWithoutProductsInput = {
    quantity?: number | null
    stores: storesCreateNestedOneWithoutStocksInput
  }

  export type stocksUncheckedCreateWithoutProductsInput = {
    store_id: number
    quantity?: number | null
  }

  export type stocksCreateOrConnectWithoutProductsInput = {
    where: stocksWhereUniqueInput
    create: XOR<stocksCreateWithoutProductsInput, stocksUncheckedCreateWithoutProductsInput>
  }

  export type stocksCreateManyProductsInputEnvelope = {
    data: stocksCreateManyProductsInput | stocksCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type order_itemsCreateWithoutProductsInput = {
    item_id: number
    quantity: number
    list_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    orders: ordersCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutProductsInput = {
    order_id: number
    item_id: number
    quantity: number
    list_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateOrConnectWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsCreateManyProductsInputEnvelope = {
    data: order_itemsCreateManyProductsInput | order_itemsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type brandsUpsertWithoutProductsInput = {
    update: XOR<brandsUpdateWithoutProductsInput, brandsUncheckedUpdateWithoutProductsInput>
    create: XOR<brandsCreateWithoutProductsInput, brandsUncheckedCreateWithoutProductsInput>
    where?: brandsWhereInput
  }

  export type brandsUpdateToOneWithWhereWithoutProductsInput = {
    where?: brandsWhereInput
    data: XOR<brandsUpdateWithoutProductsInput, brandsUncheckedUpdateWithoutProductsInput>
  }

  export type brandsUpdateWithoutProductsInput = {
    brand_name?: StringFieldUpdateOperationsInput | string
  }

  export type brandsUncheckedUpdateWithoutProductsInput = {
    brand_id?: IntFieldUpdateOperationsInput | number
    brand_name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
  }

  export type stocksUpsertWithWhereUniqueWithoutProductsInput = {
    where: stocksWhereUniqueInput
    update: XOR<stocksUpdateWithoutProductsInput, stocksUncheckedUpdateWithoutProductsInput>
    create: XOR<stocksCreateWithoutProductsInput, stocksUncheckedCreateWithoutProductsInput>
  }

  export type stocksUpdateWithWhereUniqueWithoutProductsInput = {
    where: stocksWhereUniqueInput
    data: XOR<stocksUpdateWithoutProductsInput, stocksUncheckedUpdateWithoutProductsInput>
  }

  export type stocksUpdateManyWithWhereWithoutProductsInput = {
    where: stocksScalarWhereInput
    data: XOR<stocksUpdateManyMutationInput, stocksUncheckedUpdateManyWithoutProductsInput>
  }

  export type stocksScalarWhereInput = {
    AND?: stocksScalarWhereInput | stocksScalarWhereInput[]
    OR?: stocksScalarWhereInput[]
    NOT?: stocksScalarWhereInput | stocksScalarWhereInput[]
    store_id?: IntFilter<"stocks"> | number
    product_id?: IntFilter<"stocks"> | number
    quantity?: IntNullableFilter<"stocks"> | number | null
  }

  export type order_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutProductsInput>
  }

  export type order_itemsScalarWhereInput = {
    AND?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    OR?: order_itemsScalarWhereInput[]
    NOT?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    order_id?: IntFilter<"order_items"> | number
    item_id?: IntFilter<"order_items"> | number
    product_id?: IntFilter<"order_items"> | number
    quantity?: IntFilter<"order_items"> | number
    list_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    discount?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
  }

  export type productsCreateWithoutStocksInput = {
    product_name: string
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
    brands: brandsCreateNestedOneWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutStocksInput = {
    product_id?: number
    product_name: string
    brand_id: number
    category_id: number
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutStocksInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutStocksInput, productsUncheckedCreateWithoutStocksInput>
  }

  export type storesCreateWithoutStocksInput = {
    store_name: string
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    orders?: ordersCreateNestedManyWithoutStoresInput
    staffs?: staffsCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateWithoutStocksInput = {
    store_id?: number
    store_name: string
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    orders?: ordersUncheckedCreateNestedManyWithoutStoresInput
    staffs?: staffsUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesCreateOrConnectWithoutStocksInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutStocksInput, storesUncheckedCreateWithoutStocksInput>
  }

  export type productsUpsertWithoutStocksInput = {
    update: XOR<productsUpdateWithoutStocksInput, productsUncheckedUpdateWithoutStocksInput>
    create: XOR<productsCreateWithoutStocksInput, productsUncheckedCreateWithoutStocksInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutStocksInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutStocksInput, productsUncheckedUpdateWithoutStocksInput>
  }

  export type productsUpdateWithoutStocksInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    brands?: brandsUpdateOneRequiredWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutStocksInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type storesUpsertWithoutStocksInput = {
    update: XOR<storesUpdateWithoutStocksInput, storesUncheckedUpdateWithoutStocksInput>
    create: XOR<storesCreateWithoutStocksInput, storesUncheckedCreateWithoutStocksInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutStocksInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutStocksInput, storesUncheckedUpdateWithoutStocksInput>
  }

  export type storesUpdateWithoutStocksInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateManyWithoutStoresNestedInput
    staffs?: staffsUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateWithoutStocksInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUncheckedUpdateManyWithoutStoresNestedInput
    staffs?: staffsUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type ordersCreateWithoutCustomersInput = {
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    staffs: staffsCreateNestedOneWithoutOrdersInput
    stores: storesCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutCustomersInput = {
    order_id?: number
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    store_id: number
    staff_id: number
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput>
  }

  export type ordersCreateManyCustomersInputEnvelope = {
    data: ordersCreateManyCustomersInput | ordersCreateManyCustomersInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutCustomersInput, ordersUncheckedUpdateWithoutCustomersInput>
    create: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutCustomersInput, ordersUncheckedUpdateWithoutCustomersInput>
  }

  export type ordersUpdateManyWithWhereWithoutCustomersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutCustomersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    order_id?: IntFilter<"orders"> | number
    customer_id?: IntNullableFilter<"orders"> | number | null
    order_status?: IntFilter<"orders"> | number
    order_date?: DateTimeFilter<"orders"> | Date | string
    required_date?: DateTimeFilter<"orders"> | Date | string
    shipped_date?: DateTimeNullableFilter<"orders"> | Date | string | null
    store_id?: IntFilter<"orders"> | number
    staff_id?: IntFilter<"orders"> | number
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    customers?: customersCreateNestedOneWithoutOrdersInput
    staffs: staffsCreateNestedOneWithoutOrdersInput
    stores: storesCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    order_id?: number
    customer_id?: number | null
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    store_id: number
    staff_id: number
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productsCreateWithoutOrder_itemsInput = {
    product_name: string
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
    brands: brandsCreateNestedOneWithoutProductsInput
    categories: categoriesCreateNestedOneWithoutProductsInput
    stocks?: stocksCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutOrder_itemsInput = {
    product_id?: number
    product_name: string
    brand_id: number
    category_id: number
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
    stocks?: stocksUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutOrder_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customers?: customersUpdateOneWithoutOrdersNestedInput
    staffs?: staffsUpdateOneRequiredWithoutOrdersNestedInput
    stores?: storesUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
  }

  export type productsUpsertWithoutOrder_itemsInput = {
    update: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateWithoutOrder_itemsInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    brands?: brandsUpdateOneRequiredWithoutProductsNestedInput
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    stocks?: stocksUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_itemsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    category_id?: IntFieldUpdateOperationsInput | number
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stocks?: stocksUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type order_itemsCreateWithoutOrdersInput = {
    item_id: number
    quantity: number
    list_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
    products: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutOrdersInput = {
    item_id: number
    product_id: number
    quantity: number
    list_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsCreateManyOrdersInputEnvelope = {
    data: order_itemsCreateManyOrdersInput | order_itemsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type customersCreateWithoutOrdersInput = {
    first_name: string
    last_name: string
    phone?: string | null
    email: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
  }

  export type customersUncheckedCreateWithoutOrdersInput = {
    customer_id?: number
    first_name: string
    last_name: string
    phone?: string | null
    email: string
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
  }

  export type customersCreateOrConnectWithoutOrdersInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
  }

  export type staffsCreateWithoutOrdersInput = {
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    staffs?: staffsCreateNestedOneWithoutOther_staffsInput
    other_staffs?: staffsCreateNestedManyWithoutStaffsInput
    stores: storesCreateNestedOneWithoutStaffsInput
  }

  export type staffsUncheckedCreateWithoutOrdersInput = {
    staff_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    store_id: number
    manager_id?: number | null
    other_staffs?: staffsUncheckedCreateNestedManyWithoutStaffsInput
  }

  export type staffsCreateOrConnectWithoutOrdersInput = {
    where: staffsWhereUniqueInput
    create: XOR<staffsCreateWithoutOrdersInput, staffsUncheckedCreateWithoutOrdersInput>
  }

  export type storesCreateWithoutOrdersInput = {
    store_name: string
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    stocks?: stocksCreateNestedManyWithoutStoresInput
    staffs?: staffsCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateWithoutOrdersInput = {
    store_id?: number
    store_name: string
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    stocks?: stocksUncheckedCreateNestedManyWithoutStoresInput
    staffs?: staffsUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesCreateOrConnectWithoutOrdersInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type customersUpsertWithoutOrdersInput = {
    update: XOR<customersUpdateWithoutOrdersInput, customersUncheckedUpdateWithoutOrdersInput>
    create: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutOrdersInput, customersUncheckedUpdateWithoutOrdersInput>
  }

  export type customersUpdateWithoutOrdersInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersUncheckedUpdateWithoutOrdersInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type staffsUpsertWithoutOrdersInput = {
    update: XOR<staffsUpdateWithoutOrdersInput, staffsUncheckedUpdateWithoutOrdersInput>
    create: XOR<staffsCreateWithoutOrdersInput, staffsUncheckedCreateWithoutOrdersInput>
    where?: staffsWhereInput
  }

  export type staffsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: staffsWhereInput
    data: XOR<staffsUpdateWithoutOrdersInput, staffsUncheckedUpdateWithoutOrdersInput>
  }

  export type staffsUpdateWithoutOrdersInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    staffs?: staffsUpdateOneWithoutOther_staffsNestedInput
    other_staffs?: staffsUpdateManyWithoutStaffsNestedInput
    stores?: storesUpdateOneRequiredWithoutStaffsNestedInput
  }

  export type staffsUncheckedUpdateWithoutOrdersInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    store_id?: IntFieldUpdateOperationsInput | number
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    other_staffs?: staffsUncheckedUpdateManyWithoutStaffsNestedInput
  }

  export type storesUpsertWithoutOrdersInput = {
    update: XOR<storesUpdateWithoutOrdersInput, storesUncheckedUpdateWithoutOrdersInput>
    create: XOR<storesCreateWithoutOrdersInput, storesUncheckedCreateWithoutOrdersInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutOrdersInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutOrdersInput, storesUncheckedUpdateWithoutOrdersInput>
  }

  export type storesUpdateWithoutOrdersInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    stocks?: stocksUpdateManyWithoutStoresNestedInput
    staffs?: staffsUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateWithoutOrdersInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    stocks?: stocksUncheckedUpdateManyWithoutStoresNestedInput
    staffs?: staffsUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type ordersCreateWithoutStaffsInput = {
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    customers?: customersCreateNestedOneWithoutOrdersInput
    stores: storesCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutStaffsInput = {
    order_id?: number
    customer_id?: number | null
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    store_id: number
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutStaffsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutStaffsInput, ordersUncheckedCreateWithoutStaffsInput>
  }

  export type ordersCreateManyStaffsInputEnvelope = {
    data: ordersCreateManyStaffsInput | ordersCreateManyStaffsInput[]
    skipDuplicates?: boolean
  }

  export type staffsCreateWithoutOther_staffsInput = {
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    orders?: ordersCreateNestedManyWithoutStaffsInput
    staffs?: staffsCreateNestedOneWithoutOther_staffsInput
    stores: storesCreateNestedOneWithoutStaffsInput
  }

  export type staffsUncheckedCreateWithoutOther_staffsInput = {
    staff_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    store_id: number
    manager_id?: number | null
    orders?: ordersUncheckedCreateNestedManyWithoutStaffsInput
  }

  export type staffsCreateOrConnectWithoutOther_staffsInput = {
    where: staffsWhereUniqueInput
    create: XOR<staffsCreateWithoutOther_staffsInput, staffsUncheckedCreateWithoutOther_staffsInput>
  }

  export type staffsCreateWithoutStaffsInput = {
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    orders?: ordersCreateNestedManyWithoutStaffsInput
    other_staffs?: staffsCreateNestedManyWithoutStaffsInput
    stores: storesCreateNestedOneWithoutStaffsInput
  }

  export type staffsUncheckedCreateWithoutStaffsInput = {
    staff_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    store_id: number
    orders?: ordersUncheckedCreateNestedManyWithoutStaffsInput
    other_staffs?: staffsUncheckedCreateNestedManyWithoutStaffsInput
  }

  export type staffsCreateOrConnectWithoutStaffsInput = {
    where: staffsWhereUniqueInput
    create: XOR<staffsCreateWithoutStaffsInput, staffsUncheckedCreateWithoutStaffsInput>
  }

  export type staffsCreateManyStaffsInputEnvelope = {
    data: staffsCreateManyStaffsInput | staffsCreateManyStaffsInput[]
    skipDuplicates?: boolean
  }

  export type storesCreateWithoutStaffsInput = {
    store_name: string
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    stocks?: stocksCreateNestedManyWithoutStoresInput
    orders?: ordersCreateNestedManyWithoutStoresInput
  }

  export type storesUncheckedCreateWithoutStaffsInput = {
    store_id?: number
    store_name: string
    phone?: string | null
    email?: string | null
    street?: string | null
    city?: string | null
    state?: string | null
    zip_code?: string | null
    stocks?: stocksUncheckedCreateNestedManyWithoutStoresInput
    orders?: ordersUncheckedCreateNestedManyWithoutStoresInput
  }

  export type storesCreateOrConnectWithoutStaffsInput = {
    where: storesWhereUniqueInput
    create: XOR<storesCreateWithoutStaffsInput, storesUncheckedCreateWithoutStaffsInput>
  }

  export type ordersUpsertWithWhereUniqueWithoutStaffsInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutStaffsInput, ordersUncheckedUpdateWithoutStaffsInput>
    create: XOR<ordersCreateWithoutStaffsInput, ordersUncheckedCreateWithoutStaffsInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutStaffsInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutStaffsInput, ordersUncheckedUpdateWithoutStaffsInput>
  }

  export type ordersUpdateManyWithWhereWithoutStaffsInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutStaffsInput>
  }

  export type staffsUpsertWithoutOther_staffsInput = {
    update: XOR<staffsUpdateWithoutOther_staffsInput, staffsUncheckedUpdateWithoutOther_staffsInput>
    create: XOR<staffsCreateWithoutOther_staffsInput, staffsUncheckedCreateWithoutOther_staffsInput>
    where?: staffsWhereInput
  }

  export type staffsUpdateToOneWithWhereWithoutOther_staffsInput = {
    where?: staffsWhereInput
    data: XOR<staffsUpdateWithoutOther_staffsInput, staffsUncheckedUpdateWithoutOther_staffsInput>
  }

  export type staffsUpdateWithoutOther_staffsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    orders?: ordersUpdateManyWithoutStaffsNestedInput
    staffs?: staffsUpdateOneWithoutOther_staffsNestedInput
    stores?: storesUpdateOneRequiredWithoutStaffsNestedInput
  }

  export type staffsUncheckedUpdateWithoutOther_staffsInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    store_id?: IntFieldUpdateOperationsInput | number
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: ordersUncheckedUpdateManyWithoutStaffsNestedInput
  }

  export type staffsUpsertWithWhereUniqueWithoutStaffsInput = {
    where: staffsWhereUniqueInput
    update: XOR<staffsUpdateWithoutStaffsInput, staffsUncheckedUpdateWithoutStaffsInput>
    create: XOR<staffsCreateWithoutStaffsInput, staffsUncheckedCreateWithoutStaffsInput>
  }

  export type staffsUpdateWithWhereUniqueWithoutStaffsInput = {
    where: staffsWhereUniqueInput
    data: XOR<staffsUpdateWithoutStaffsInput, staffsUncheckedUpdateWithoutStaffsInput>
  }

  export type staffsUpdateManyWithWhereWithoutStaffsInput = {
    where: staffsScalarWhereInput
    data: XOR<staffsUpdateManyMutationInput, staffsUncheckedUpdateManyWithoutStaffsInput>
  }

  export type staffsScalarWhereInput = {
    AND?: staffsScalarWhereInput | staffsScalarWhereInput[]
    OR?: staffsScalarWhereInput[]
    NOT?: staffsScalarWhereInput | staffsScalarWhereInput[]
    staff_id?: IntFilter<"staffs"> | number
    first_name?: StringFilter<"staffs"> | string
    last_name?: StringFilter<"staffs"> | string
    email?: StringFilter<"staffs"> | string
    phone?: StringNullableFilter<"staffs"> | string | null
    active?: BoolFilter<"staffs"> | boolean
    store_id?: IntFilter<"staffs"> | number
    manager_id?: IntNullableFilter<"staffs"> | number | null
  }

  export type storesUpsertWithoutStaffsInput = {
    update: XOR<storesUpdateWithoutStaffsInput, storesUncheckedUpdateWithoutStaffsInput>
    create: XOR<storesCreateWithoutStaffsInput, storesUncheckedCreateWithoutStaffsInput>
    where?: storesWhereInput
  }

  export type storesUpdateToOneWithWhereWithoutStaffsInput = {
    where?: storesWhereInput
    data: XOR<storesUpdateWithoutStaffsInput, storesUncheckedUpdateWithoutStaffsInput>
  }

  export type storesUpdateWithoutStaffsInput = {
    store_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    stocks?: stocksUpdateManyWithoutStoresNestedInput
    orders?: ordersUpdateManyWithoutStoresNestedInput
  }

  export type storesUncheckedUpdateWithoutStaffsInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    store_name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null
    stocks?: stocksUncheckedUpdateManyWithoutStoresNestedInput
    orders?: ordersUncheckedUpdateManyWithoutStoresNestedInput
  }

  export type stocksCreateWithoutStoresInput = {
    quantity?: number | null
    products: productsCreateNestedOneWithoutStocksInput
  }

  export type stocksUncheckedCreateWithoutStoresInput = {
    product_id: number
    quantity?: number | null
  }

  export type stocksCreateOrConnectWithoutStoresInput = {
    where: stocksWhereUniqueInput
    create: XOR<stocksCreateWithoutStoresInput, stocksUncheckedCreateWithoutStoresInput>
  }

  export type stocksCreateManyStoresInputEnvelope = {
    data: stocksCreateManyStoresInput | stocksCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutStoresInput = {
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    customers?: customersCreateNestedOneWithoutOrdersInput
    staffs: staffsCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutStoresInput = {
    order_id?: number
    customer_id?: number | null
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    staff_id: number
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutStoresInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput>
  }

  export type ordersCreateManyStoresInputEnvelope = {
    data: ordersCreateManyStoresInput | ordersCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type staffsCreateWithoutStoresInput = {
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    orders?: ordersCreateNestedManyWithoutStaffsInput
    staffs?: staffsCreateNestedOneWithoutOther_staffsInput
    other_staffs?: staffsCreateNestedManyWithoutStaffsInput
  }

  export type staffsUncheckedCreateWithoutStoresInput = {
    staff_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    manager_id?: number | null
    orders?: ordersUncheckedCreateNestedManyWithoutStaffsInput
    other_staffs?: staffsUncheckedCreateNestedManyWithoutStaffsInput
  }

  export type staffsCreateOrConnectWithoutStoresInput = {
    where: staffsWhereUniqueInput
    create: XOR<staffsCreateWithoutStoresInput, staffsUncheckedCreateWithoutStoresInput>
  }

  export type staffsCreateManyStoresInputEnvelope = {
    data: staffsCreateManyStoresInput | staffsCreateManyStoresInput[]
    skipDuplicates?: boolean
  }

  export type stocksUpsertWithWhereUniqueWithoutStoresInput = {
    where: stocksWhereUniqueInput
    update: XOR<stocksUpdateWithoutStoresInput, stocksUncheckedUpdateWithoutStoresInput>
    create: XOR<stocksCreateWithoutStoresInput, stocksUncheckedCreateWithoutStoresInput>
  }

  export type stocksUpdateWithWhereUniqueWithoutStoresInput = {
    where: stocksWhereUniqueInput
    data: XOR<stocksUpdateWithoutStoresInput, stocksUncheckedUpdateWithoutStoresInput>
  }

  export type stocksUpdateManyWithWhereWithoutStoresInput = {
    where: stocksScalarWhereInput
    data: XOR<stocksUpdateManyMutationInput, stocksUncheckedUpdateManyWithoutStoresInput>
  }

  export type ordersUpsertWithWhereUniqueWithoutStoresInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutStoresInput, ordersUncheckedUpdateWithoutStoresInput>
    create: XOR<ordersCreateWithoutStoresInput, ordersUncheckedCreateWithoutStoresInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutStoresInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutStoresInput, ordersUncheckedUpdateWithoutStoresInput>
  }

  export type ordersUpdateManyWithWhereWithoutStoresInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutStoresInput>
  }

  export type staffsUpsertWithWhereUniqueWithoutStoresInput = {
    where: staffsWhereUniqueInput
    update: XOR<staffsUpdateWithoutStoresInput, staffsUncheckedUpdateWithoutStoresInput>
    create: XOR<staffsCreateWithoutStoresInput, staffsUncheckedCreateWithoutStoresInput>
  }

  export type staffsUpdateWithWhereUniqueWithoutStoresInput = {
    where: staffsWhereUniqueInput
    data: XOR<staffsUpdateWithoutStoresInput, staffsUncheckedUpdateWithoutStoresInput>
  }

  export type staffsUpdateManyWithWhereWithoutStoresInput = {
    where: staffsScalarWhereInput
    data: XOR<staffsUpdateManyMutationInput, staffsUncheckedUpdateManyWithoutStoresInput>
  }

  export type productsCreateManyBrandsInput = {
    product_id?: number
    product_name: string
    category_id: number
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
  }

  export type productsUpdateWithoutBrandsInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    categories?: categoriesUpdateOneRequiredWithoutProductsNestedInput
    stocks?: stocksUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutBrandsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stocks?: stocksUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutBrandsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    category_id?: IntFieldUpdateOperationsInput | number
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type productsCreateManyCategoriesInput = {
    product_id?: number
    product_name: string
    brand_id: number
    model_year: number
    list_price: Decimal | DecimalJsLike | number | string
  }

  export type productsUpdateWithoutCategoriesInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    brands?: brandsUpdateOneRequiredWithoutProductsNestedInput
    stocks?: stocksUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stocks?: stocksUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: StringFieldUpdateOperationsInput | string
    brand_id?: IntFieldUpdateOperationsInput | number
    model_year?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type stocksCreateManyProductsInput = {
    store_id: number
    quantity?: number | null
  }

  export type order_itemsCreateManyProductsInput = {
    order_id: number
    item_id: number
    quantity: number
    list_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type stocksUpdateWithoutProductsInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    stores?: storesUpdateOneRequiredWithoutStocksNestedInput
  }

  export type stocksUncheckedUpdateWithoutProductsInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stocksUncheckedUpdateManyWithoutProductsInput = {
    store_id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type order_itemsUpdateWithoutProductsInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    orders?: ordersUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutProductsInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ordersCreateManyCustomersInput = {
    order_id?: number
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    store_id: number
    staff_id: number
  }

  export type ordersUpdateWithoutCustomersInput = {
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    staffs?: staffsUpdateOneRequiredWithoutOrdersNestedInput
    stores?: storesUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutCustomersInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutCustomersInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    staff_id?: IntFieldUpdateOperationsInput | number
  }

  export type order_itemsCreateManyOrdersInput = {
    item_id: number
    product_id: number
    quantity: number
    list_price: Decimal | DecimalJsLike | number | string
    discount?: Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUpdateWithoutOrdersInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    products?: productsUpdateOneRequiredWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersInput = {
    item_id?: IntFieldUpdateOperationsInput | number
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    list_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ordersCreateManyStaffsInput = {
    order_id?: number
    customer_id?: number | null
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    store_id: number
  }

  export type staffsCreateManyStaffsInput = {
    staff_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    store_id: number
  }

  export type ordersUpdateWithoutStaffsInput = {
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    customers?: customersUpdateOneWithoutOrdersNestedInput
    stores?: storesUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutStaffsInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    store_id?: IntFieldUpdateOperationsInput | number
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutStaffsInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    store_id?: IntFieldUpdateOperationsInput | number
  }

  export type staffsUpdateWithoutStaffsInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    orders?: ordersUpdateManyWithoutStaffsNestedInput
    other_staffs?: staffsUpdateManyWithoutStaffsNestedInput
    stores?: storesUpdateOneRequiredWithoutStaffsNestedInput
  }

  export type staffsUncheckedUpdateWithoutStaffsInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    store_id?: IntFieldUpdateOperationsInput | number
    orders?: ordersUncheckedUpdateManyWithoutStaffsNestedInput
    other_staffs?: staffsUncheckedUpdateManyWithoutStaffsNestedInput
  }

  export type staffsUncheckedUpdateManyWithoutStaffsInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    store_id?: IntFieldUpdateOperationsInput | number
  }

  export type stocksCreateManyStoresInput = {
    product_id: number
    quantity?: number | null
  }

  export type ordersCreateManyStoresInput = {
    order_id?: number
    customer_id?: number | null
    order_status: number
    order_date: Date | string
    required_date: Date | string
    shipped_date?: Date | string | null
    staff_id: number
  }

  export type staffsCreateManyStoresInput = {
    staff_id?: number
    first_name: string
    last_name: string
    email: string
    phone?: string | null
    active: boolean
    manager_id?: number | null
  }

  export type stocksUpdateWithoutStoresInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    products?: productsUpdateOneRequiredWithoutStocksNestedInput
  }

  export type stocksUncheckedUpdateWithoutStoresInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type stocksUncheckedUpdateManyWithoutStoresInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ordersUpdateWithoutStoresInput = {
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    customers?: customersUpdateOneWithoutOrdersNestedInput
    staffs?: staffsUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutStoresInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_id?: IntFieldUpdateOperationsInput | number
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutStoresInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_status?: IntFieldUpdateOperationsInput | number
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    required_date?: DateTimeFieldUpdateOperationsInput | Date | string
    shipped_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    staff_id?: IntFieldUpdateOperationsInput | number
  }

  export type staffsUpdateWithoutStoresInput = {
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    orders?: ordersUpdateManyWithoutStaffsNestedInput
    staffs?: staffsUpdateOneWithoutOther_staffsNestedInput
    other_staffs?: staffsUpdateManyWithoutStaffsNestedInput
  }

  export type staffsUncheckedUpdateWithoutStoresInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: ordersUncheckedUpdateManyWithoutStaffsNestedInput
    other_staffs?: staffsUncheckedUpdateManyWithoutStaffsNestedInput
  }

  export type staffsUncheckedUpdateManyWithoutStoresInput = {
    staff_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    active?: BoolFieldUpdateOperationsInput | boolean
    manager_id?: NullableIntFieldUpdateOperationsInput | number | null
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
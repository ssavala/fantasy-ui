/* eslint-disable @typescript-eslint/ban-types */
export type Primitive = string | number | boolean | bigint | symbol | undefined | null;

export type DeepPartial<T> = T extends Primitive
  ? T
  : T extends Function
  ? T
  : T extends Date
  ? T
  : T extends (infer U)[]
  ? DeepPartialArray<U>
  : T extends readonly (infer V)[]
  ? DeepPartialReadonlyArray<V>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

interface DeepPartialArray<ItemType> extends Array<DeepPartial<ItemType>> {}
interface DeepPartialReadonlyArray<ItemType> extends ReadonlyArray<DeepPartial<ItemType>> {}

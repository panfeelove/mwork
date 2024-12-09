import { LazyInputType } from "../types";
import lodash from 'lodash';

const getAfter = (limit: number | null, offset: number | null, totalCount: number) => {
  const convertedLimit = Number(limit);
  if (!convertedLimit) return;
  const result = convertedLimit + (offset || 0);
  if (result >= totalCount) {
    return totalCount;
  }
  return result;
}

export const getLazyLoadingParams = <TData extends { id: number }>({ limit, offset }: LazyInputType, collection: TData[]) => {
  const after = getAfter(limit, offset, collection.length);
  const part = collection.slice(offset, after);
  const hasNext = after ? after < collection.length : false;
  return {
    after: after || null,
    part,
    hasNext,
    totalCount: collection.length,
    collection,
  }
}
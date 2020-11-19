import { EntityTarget, getRepository } from 'typeorm';
import { connect } from './index';

export async function queryExecutor<T>(model: EntityTarget<T>, fName: string, params?: any) {
  await connect();
  const res = await getRepository(model)[fName](params ?? null);
  return res;
}
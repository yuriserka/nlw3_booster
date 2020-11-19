import { getRepository } from 'typeorm';
import { queryExecutor } from '../database/executor';
import { Orphanage } from '../entities/orphanage';

export const OrphanageService = {
  build: (attrs: Partial<Orphanage> = {}) => {
    return getRepository(Orphanage).create(attrs);
  },
  create: async (attrs: Partial<Orphanage> = {}) => {
    return await queryExecutor(Orphanage, 'save', OrphanageService.build(attrs));
  },
  list: async (where: Partial<Orphanage> = {}) => {
    return await queryExecutor(Orphanage, 'find', where);
  }
};
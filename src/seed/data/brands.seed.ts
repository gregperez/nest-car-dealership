import { v4 as uuid } from 'uuid';
import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Corolla',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Maserati',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Bugatti',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'CX-5',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Rav4',
    createdAt: new Date().getTime(),
    updatedAt: new Date().getTime(),
  },
];

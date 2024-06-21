import { Action } from './Action';
import { Possession } from './Possession';

export const actions: string[] = Object.keys(Action).map(
  (k: string) => Action[k as keyof typeof Action],
);
export const possessions: string[] = Object.keys(Possession).map(
  (k: string) => Possession[k as keyof typeof Possession],
);

export * from './Action';
export * from './Possession';

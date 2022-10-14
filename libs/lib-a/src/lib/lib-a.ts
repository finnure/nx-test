import { libB } from '@test/lib-b';

export function libA(): string {
  console.log('lib-a');
  return libB();
}

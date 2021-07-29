import { createBEM } from "./bem";

const prefix = 'van';

export function createNamespace(name: string) {
  const prefixedName = `${prefix}-${name}`;

  return [
    prefixedName,
    createBEM(prefixedName)
  ] as const
}

import * as React from 'react';

/**
 * A small utility function to assist in properly wrapping MUI components. The `muiName` property is required by MUI internals in some cases.
 * 
 * @param target The component that will receive the copied `muiName` property.
 * @param source The component from which the `muiName` property will be copied.
 * @returns The target component.
 */
export function muiNamify<P>(target: React.ComponentType<P>, source: React.ComponentType<P>): React.ComponentType<P> {
  const muiName = (source as any)?.muiName;
  if (muiName != null) {
    (target as any).muiName = muiName;
  }
  return target;
}

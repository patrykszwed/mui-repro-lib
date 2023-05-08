import * as React from 'react';
import { Autocomplete as MuiAutocomplete } from '@mui/material';

// A real use case might do something more complex, but we'll just wrap/re-export for the simple reproduction case
export const Autocomplete = React.forwardRef((props, ref) => {
  return <MuiAutocomplete ref={ref} {...props} />;
}) as typeof MuiAutocomplete;

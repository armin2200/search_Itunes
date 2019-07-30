import { createContext, useContext } from 'react';

export const ITunesContext = createContext();

export function useITunes() {
  return useContext(ITunesContext);
}

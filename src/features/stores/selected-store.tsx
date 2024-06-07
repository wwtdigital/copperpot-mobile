import { createContext, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';

import type { Store } from './store';
import { PILOT_STORES } from './stores-api';

interface SelectedStoreValue {
  store: Store | null;
  select: (store: Store) => void;
}

const SelectedStoreContext = createContext<SelectedStoreValue>({ store: null, select: () => {} });

export function SelectedStoreProvider({ children }: { children: ReactNode }) {
  const [store, setStore] = useState<Store | null>(PILOT_STORES[0] ?? null);
  const value = useMemo(() => ({ store, select: setStore }), [store]);
  return <SelectedStoreContext.Provider value={value}>{children}</SelectedStoreContext.Provider>;
}

export const useSelectedStore = () => useContext(SelectedStoreContext);

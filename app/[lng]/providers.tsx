'use client';

import { Provider } from 'react-redux';
import { makeStore } from '@/features/redux/store';
import { PropsWithChildren, useMemo } from 'react';

export default function Providers({ children }: PropsWithChildren) {
  const store = useMemo(() => makeStore(), []);
  return <Provider store={store}>{children}</Provider>;
}

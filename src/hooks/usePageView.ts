import { useEffect } from 'react';
import { useRouter } from 'next/router';

import * as gtag from 'framework/gtag';

export default function usePageView() {
  const router = useRouter();

  useEffect(() => {
    if (!gtag.existsGaId) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleRouteChange = (path: string, { shallow }: any) => {
      if (!shallow) {
        gtag.pageview(path);
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
}

import { toPng } from 'html-to-image';
import { FC, useEffect } from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { useOutlet } from 'react-router';
import { RouterProvider, useLocation } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { About } from './About/About';
import { Brand } from './Brand/Brand';
import { Child } from './Child/Child';
import { Home } from './Home/Home';
import { Sketch } from './Sketch/Sketch';
import { useSetScreenshot } from './states/screenshot';

const StickyOutlet: FC = () => {
  const o = useOutlet();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const outlet = useMemo(() => o, []);
  return <>{outlet}</>;
};

const Root: FC = () => {
  const { pathname } = useLocation();
  const [lazyPathname, setLazyPathname] = useState(pathname);
  const setScreenshot = useSetScreenshot();
  useEffect(() => {
    if (pathname === lazyPathname) return;

    let ignore = false;
    toPng(document.body, {
      width: window.innerWidth,
      height: window.innerHeight,
      backgroundColor: '#111',
    }).then((dataUrl) => {
      if (ignore) return;
      setScreenshot(dataUrl);
      setLazyPathname(pathname);
    });
    return () => {
      ignore = true;
    };
  }, [pathname, lazyPathname, setScreenshot]);

  return (
    <div>
      <StickyOutlet key={lazyPathname} />
      <Sketch />
    </div>
  );
};

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/brand',
        element: <Brand />,
      },
      {
        path: '/child',
        element: <Child />,
      },
    ],
  },
]);

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;

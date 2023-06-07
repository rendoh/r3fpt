import './App.css';

import { FC, useState } from 'react';
import { Outlet } from 'react-router';
import { Link, RouterProvider } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';

import viteLogo from '/vite.svg';

import reactLogo from './assets/react.svg';

const Root: FC = () => (
  <div>
    <header>
      <Link to="/">HOME</Link>
      <Link to="/b">B</Link>
    </header>
    <Outlet />
  </div>
);

const A: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

const B: FC = () => (
  <div>
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea iure quas
      natus facilis similique voluptates eveniet aperiam nostrum, quasi unde
      distinctio mollitia fugit. Veritatis saepe quasi maxime dicta aliquid
      nemo.
    </h1>
  </div>
);

const router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <A />,
      },
      {
        path: '/b',
        element: <B />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { FC } from 'react';

import { VisualPage } from '../VisualPage/VisualPage';
import image from './brand.jpg';

export const Brand: FC = () => (
  <VisualPage image={image}>
    <h1>Brand page</h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis illo
      quidem nam soluta laudantium doloremque, aliquid a pariatur sunt quis sit
      dignissimos eos atque velit nesciunt laboriosam aliquam harum! Minus.
    </p>
  </VisualPage>
);

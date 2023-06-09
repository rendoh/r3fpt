import { FC } from 'react';

import { VisualPage } from '../VisualPage/VisualPage';
import image from './child.jpg';

export const Child: FC = () => (
  <VisualPage image={image}>
    <h1>Child page</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
      natus atque. Cupiditate eum odio, perspiciatis libero voluptatum delectus
      ex id ut nesciunt numquam, ea magni animi voluptates vero praesentium
      dolor?
    </p>
  </VisualPage>
);

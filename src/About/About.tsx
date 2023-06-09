import { FC } from 'react';

import { VisualPage } from '../VisualPage/VisualPage';
import image from './about.jpg';

export const About: FC = () => (
  <VisualPage image={image}>
    <h1>About page</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ad
      quibusdam ipsum autem excepturi sequi maxime magnam error molestias eos!
      Ipsum dolores blanditiis debitis sed quod nihil repudiandae enim fugit!
    </p>
  </VisualPage>
);

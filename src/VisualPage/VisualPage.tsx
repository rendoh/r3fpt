import { FC, ReactNode } from 'react';

import { Layout } from '../Layout/Layout';
import * as styles from './VisualPage.css';

export type VisualPageProps = {
  image: string;
  children: ReactNode;
};

export const VisualPage: FC<VisualPageProps> = ({ image, children }) => (
  <Layout className={styles.wrapper}>
    <div className={styles.imageWrapper}>
      <img className={styles.image} src={image} alt="" />
    </div>
    <div className={styles.content}>
      <div>{children}</div>
    </div>
  </Layout>
);

import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from '../Layout/Layout';
// import { VisualCard } from '../VisualCard/VisualCard';
import * as styles from './Home.css';
// import horse from './horse.png';

export const Home: FC = () => (
  <Layout className={styles.wrapper}>
    <div className={styles.content}>
      <div className={styles.hgroup}>
        <h1 className={styles.heading}>LOREM IPSUM.</h1>
        <p className={styles.lead}>Lorem ipsum dolor, sit amet.</p>
      </div>
      <p className={styles.text}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
        animi aspernatur earum dolorum assumenda adipisci nostrum beatae unde
        exercitationem, quas alias temporibus laboriosam blanditiis sed.
        Accusamus non natus aperiam pariatur?
      </p>
      <ul className={styles.links}>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/brand">brand</Link>
        </li>
        <li>
          <Link to="/child">child</Link>
        </li>
      </ul>
    </div>
  </Layout>
);

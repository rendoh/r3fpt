import clsx from 'clsx';
import { ComponentPropsWithoutRef, FC, PropsWithChildren } from 'react';

import * as styles from './Layout.css';

export type LayoutProps = PropsWithChildren<ComponentPropsWithoutRef<'div'>>;

export const Layout: FC<LayoutProps> = ({ children, className, ...props }) => (
  <div {...props} className={clsx(styles.wrapper, className)}>
    {children}
  </div>
);

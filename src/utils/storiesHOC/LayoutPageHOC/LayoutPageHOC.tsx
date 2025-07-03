import type { FC } from 'react';
import Header from "../../../components/ui/header/header";
import Footer from "../../../components/footer/footer";
import type { TLayoutPageHOC } from './type';
import styles from './LayoutPAgeHOC.module.css';

export const LayoutPageHOC: FC<TLayoutPageHOC> = ({
    children,
}) => {
  return (
    <main className={styles.main}>
      <Header />
      { children }
      <Footer />
    </main>
  )
}
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import styles from './landingPage.module.css';

function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        <img
          src="/images/logo-horizontal.svg"
          alt="Happy logo-horizontal"
        />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className={styles.location}>
          <strong>Distrito Federal</strong>
          <span>Brasília</span>
        </div>

        <Link href="/app">
          <a className={styles.enterApp}>
            <FiArrowRight color="#000" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Landing;

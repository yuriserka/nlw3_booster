import 'leaflet/dist/leaflet.css';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';
import { FiArrowLeft, FiPlus } from 'react-icons/fi';
import styles from './app.module.css';

const Map = dynamic(
  () => import('../../components/Map'),
  { ssr: false }
);

const OrphanagesMap = () => {
  return (
    <div className={styles.pmContainer}>
      <aside>
        <header>
          <img src="/images/map-marker.svg" alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita {String.fromCodePoint(0x1F600)}</p>
          <Link href="/">
            <a>
              <FiArrowLeft color="#000" />
            </a>
          </Link>
        </header>

        <footer>
          <strong>Distrito Federal</strong>
          <span>Brasília</span>
        </footer>
      </aside>

      <Map />

      <Link href="#">
        <a className={styles.createOrphanage}>
          <FiPlus size="32" color="#FFF" />
        </a>
      </Link>

    </div>
  );
}

export default OrphanagesMap;
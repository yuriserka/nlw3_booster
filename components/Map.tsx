import { Icon } from 'leaflet';
import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import useSWR from 'swr';
import { Orphanage } from '../server/entities/orphanage';
import Spinner from './Spinner';

const fetcher = (url: string) => fetch(url).then(r => r.json())

const Map = () => {
  const { NEXT_PUBLIC_MAPBOX_TOKEN } = process.env;
  const { data, error } = useSWR('/api/orphanages', fetcher);

  if (error) return <div>Erro!</div>
  if (!data) return <Spinner />

  return (
    <MapContainer
      center={[-15.8054859, -48.0307621]}
      zoom={35}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer url=
        {`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${NEXT_PUBLIC_MAPBOX_TOKEN}`}
      />
      {
        data.map((p: Orphanage) => (
          <Marker key={p.id}
            position={[
              p.latitude,
              p.longitude
            ]}
            icon={new Icon({ iconUrl: '/images/map-marker.svg', iconSize: [50, 50] })}
          />
        ))
      }
    </MapContainer>
  );
};



export default Map;

import 'reflect-metadata';
import { Connection, createConnection, getConnectionManager, getConnectionOptions } from 'typeorm';
import { Orphanage } from '../entities/orphanage';

const DEFAULT_NAME = 'default';
const CONNECTION_ATTEMPT_INTERVAL = 100;
const CONNECTION_TIMEOUT_SECONDS = 3;

let _connected = false;
let _connection: Connection;

const initializeDatabase = async () => {
  if (_connected) return;
  _connected = true;

  const connections = getConnectionManager();

  if (connections.has(DEFAULT_NAME)) {
    await connections.get(DEFAULT_NAME).close();
  }

  _connection = await createConnection({
    ...await getConnectionOptions(),
    synchronize: true,
    entities: [Orphanage],
    migrations: [__dirname + '/migrations/*.ts'],
  });

  _connected = false;

  console.log(`Connection to database "${_connection.name}" initialized.`);
};

// run initialization on script execution.
// for prod this will only happen once, but for dev this will happen every time this module is hot reloaded
initializeDatabase();

export const connect = async () => {
  let waiting = 0;

  while (!_connection) {
    await new Promise((resolve) =>
      setTimeout(resolve, CONNECTION_ATTEMPT_INTERVAL)
    );
    waiting += CONNECTION_ATTEMPT_INTERVAL;
    if (waiting > CONNECTION_TIMEOUT_SECONDS) break;
  }

  if (!_connection) console.log('Database not intiialized');

  return _connection;
};

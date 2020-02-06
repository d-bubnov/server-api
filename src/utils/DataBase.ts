import { getEnvs } from './getEnvs';

// Trying to get environment variables of database connection string
const {
  databaseHost,
  databasePort,
  databaseName,
} = getEnvs([
  { name: 'DATABASE_HOST' },
  { name: 'DATABASE_PORT' },
  { name: 'DATABASE_NAME' },
]);

/**
 * Configuration of database connection
 *
 * For note:
 * Database configuration for DEBUG: 'mongodb://localhost:27017/ng8crud'
 * Database configuration for DOCKER: 'mongodb://mongo:27017/ng8crud'
 */
export default {
  Uri: `mongodb://${databaseHost}:${databasePort}/${databaseName}`,
};

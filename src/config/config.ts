import dotenv from 'dotenv';
import fs from 'fs';

interface ApplicationConfig {
  env: Env;
  port: number;
  amqConfig: AMQConfig;
}

interface AMQConfig {
  topic: string;
  brokerUrl: string;
}

export enum Env {
  Production = 'prod',
  Development = 'dev',
}
const DEFAULT_PORT = 3000;

if (fs.existsSync('.env')) {
  dotenv.config({path: '.env'});
}

const amqConfig: Partial<AMQConfig> = {
  topic: process.env.AMQ_TOPIC_NAME,
  brokerUrl: process.env.AMQ_BROKER_URL,
};
// Check if all client values are provided
if (!Object.values(amqConfig).every((value) => value)) {
  console.error('ActiveMQ is not setup fully');
  process.exit(1);
}

const config = {
  env: (process.env.NODE_ENV as Env) || Env.Development,
  port: process.env.PORT || DEFAULT_PORT,
  amqConfig,
} as ApplicationConfig;

export default config;

export interface ApplicationConfig {
  env: Env;
  port: number;
  amqConfig: AMQConfig;
}

export interface AMQConfig {
  topic: string;
  brokerUrl: string;
}

export enum Env {
  Production = 'prod',
  Development = 'dev',
}

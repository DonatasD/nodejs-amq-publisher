import {ApplicationConfig, Env} from "./configuration.types";
import {DEFAULT_PORT} from "./configuration.constants";

export default (): ApplicationConfig => {
  const amqConfig = {
    topic: process.env.AMQ_TOPIC_NAME,
    brokerUrl: process.env.AMQ_BROKER_URL,
  };
  return {
  env: (process.env.NODE_ENV as Env) || Env.Development,
  port: Number(process.env.PORT) || DEFAULT_PORT,
  amqConfig,
};
}

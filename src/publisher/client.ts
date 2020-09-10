import {Client} from '@stomp/stompjs';
import logger from '../utils/logger';
import config from '../config';

const client = new Client({
  brokerURL: config.amqConfig.brokerUrl,
  debug: (msg) => logger.debug(msg),
});
client.onConnect = (receipt) => logger.debug(receipt);
client.onStompError = (receipt) => logger.debug(receipt);
client.activate();

export default client;

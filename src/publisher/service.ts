import config from '../config';
import client from './client';

const publish = (value: string) => {
  client.publish({destination: config.amqConfig.topic, body: value});
};

const service = {
  publish,
};
export default service;

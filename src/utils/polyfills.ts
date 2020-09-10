import {w3cwebsocket} from 'websocket';

const applyWebsocketPolyfill = () => {
  Object.assign(global, {WebSocket: w3cwebsocket});
};

const apply = () => {
  applyWebsocketPolyfill();
};

export default apply;

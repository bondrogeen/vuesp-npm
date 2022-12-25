import { EventEmitter } from 'node:events';
import WebSocket from 'ws';
import Struct from './struct';

class Device extends EventEmitter {
  #ws;
  #time;
  #address;
  #options;
  #interval;
  #isConnect;
  #reconnectTime;
  #struct;

  constructor({ address = '', options = {}, reconnectTime = 15000 }) {
    super();
    this.#ws = null;
    this.#struct = new Struct();
    this.#struct.onInit = this.onInit.bind(this);
    this.#time = new Date();
    this.#address = address;
    this.#options = options;
    this.#interval = null;
    this.#reconnectTime = reconnectTime;
    this.#isConnect = false;
  }

  onInit() {
    this.send('INFO');
    this.emit('init');
  }

  #onPing() {
    const delta = new Date().getTime() - this.#time;
    this.emit('ping', delta);
    this.#isConnect = delta < this.#reconnectTime;
    console.log(delta);
    if (delta > this.#reconnectTime) this.#onReconnect();
  }

  #onOpen(e) {
    this.#isConnect = true;
    this.emit('open', e);
    this.send('INIT');
  }

  #onMessage(message) {
    this.#time = new Date().getTime();
    this.emit('raw', message);
    if (message instanceof ArrayBuffer) {
      const data = this.#struct.get(message);
      if (data) {
        const { object, key } = data;
        if (key === 'PING') return;
        this.emit('message', { object, key });
      }
    }
  }

  #onClose(e) {
    this.#isConnect = false;
    this.emit('close', e);
  }

  #onError() {
    this.#isConnect = false;
    this.#ws.terminate();
  }

  #onReconnect() {
    this.#time = new Date().getTime();
    console.log('onReconnect');
    this.disconnect();
    this.connect();
  }

  getSheme() {
    return this.#struct.keys;
  }

  connect() {
    try {
      this.#ws = new WebSocket(this.#address, this.#options);
      this.#ws.binaryType = 'arraybuffer';
      this.#ws.on('open', this.#onOpen.bind(this));
      this.#ws.on('message', this.#onMessage.bind(this));
      this.#ws.on('close', this.#onClose.bind(this));
      this.#ws.on('error', this.#onError.bind(this));
      if (!this.#interval) this.#interval = setInterval(this.#onPing.bind(this), 1000);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  disconnect() {
    this.#isConnect = false;
    if (this.#interval) clearInterval(this.#interval);
    this.#interval = null;
    this.#ws.close();
    this.#ws = null;
    return true;
  }

  send(comm, data) {
    if (this.#isConnect) {
      const buffer = this.#struct.set(comm, data);
      if (buffer) {
        console.log(this.#ws.send(buffer));
        return true;
      }
      return false;
    } else {
      return false;
    }
  }
}

export default Device;

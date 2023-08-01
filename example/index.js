const { Device, VuespDevices } = require('../build/index');

console.log(Device);
console.log(VuespDevices);

const devices = [
  {
    ip: '192.168.10.19',
    username: 'admin',
    password: 'admin',
  },
  {
    ip: '192.168.10.19',
    username: 'admin',
    password: 'admin',
  },
];

// one device

const device = devices[0];

const client = new Device(device);

client.on('open', e => {
  console.log(`open:`, e);
});
client.on('init', e => {
  client.send('SETTINGS');
  console.log(`init:`, e);
});
client.on('message', e => {
  console.log(`message:`, e);
});
client.on('close', e => {
  console.log(`close:`, e);
});
client.on('error', e => {
  console.log(`error:`, e);
});

client.connect();

// or all devices

const vuespDevices = new VuespDevices(devices);

vuespDevices.on('*', payload => {
  console.log(payload);
});

vuespDevices.connection();

import Device from './device';

const options = {
  ip: '192.168.10.29',
  username: 'admin',
  password: 'admin',
};

const client = new Device(options);

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

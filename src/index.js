import Device from './device';

const client = new Device({ address: 'ws://192.168.10.17/esp' });

client.on('open', e => {
  console.log(e);
  setTimeout(() => {
    client.send('SETTINGS');
    console.log(client.getSheme());
  }, 5000);
});
client.on('message', e => {
  console.log(e);
});
client.on('close', e => {
  console.log(e);
});
client.on('error', e => {
  console.log(e);
});

client.connect();

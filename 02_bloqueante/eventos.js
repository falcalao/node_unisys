const EventEmitter = require('events');
const emisor = new EventEmitter();

emisor.addListener('telefonear', (ev) => {
    console.log('Ring Ring');
});

emisor.once().on('telefonear', () => {
    console.log('Brr Brr');
});

emisor.emit('telefonear');
emisor.emit('telefonear');
emisor.emit('telefonear', { tipo: 'pro' });
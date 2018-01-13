const alfy = require('alfy');
const alfredNotifier = require('alfred-notifier');

alfredNotifier();

alfy.output([
  {
    subtitle: alfy.input,
    title: 'Unicorn',
  },
]);

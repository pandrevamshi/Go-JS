const Kafka = require('node-rdkafka');

const consumer = new Kafka.KafkaConsumer({
    'group.id': 'my-consumer-group',
    'metadata.broker.list': 'localhost:9092', // Comma-separated list of Kafka brokers
  });

consumer.connect();
consumer.on('ready', () => {
consumer.subscribe(['quickstart-events']);
consumer.consume();
});
consumer.on('data', (message) => {
// Handle the received message
console.log(`Received message: ${message.value.toString()}`);
});
  
consumer.on('event.error', (err) => {
    console.error('Kafka consumer error:', err);
  });
  
process.on('SIGINT', () => {
    consumer.disconnect();
  });
  
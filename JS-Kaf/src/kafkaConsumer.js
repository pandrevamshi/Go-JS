const Kafka = require('node-rdkafka');

const consumer = new Kafka.KafkaConsumer({
    'group.id': 'my-consumer-group',
    'metadata.broker.list': 'localhost:9092', // Comma-separated list of Kafka brokers
  });
console.log("I'm Alive");
consumer.connect();
consumer.on('ready', () => {
consumer.subscribe(['quickstart-events']);
consumer.consume();
});
consumer.on('data', (message) => {

const key = message.key && message.key.toString();
const value = message.value && message.value.toString();

// Process the message with the desired key
if (key === 'my-key') {
    console.log(`Received message with key '${key}': ${value}`);
    // Handle the message logic here

    // Manually commit the offset for the processed message
    consumer.commitMessage(message);
}

});
  
consumer.on('event.error', (err) => {
    console.error('Kafka consumer error:', err);
  });
  
process.on('SIGINT', () => {
    consumer.disconnect();
  });

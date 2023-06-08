# Go and Node js Kafka Implememtation

Setup a simple Kafka Cluster locally: https://kafka.apache.org/quickstart

<!-- Make sure you have go and node js installed -->
Prodcuer: Sends events to Kafka topic -> (key, value)
Consumer: Consumes events from the topic and filters based on key. 

Here for simplicity only 1 partition is used. 

Run consumer: node JS/src/kafkaConsumer.js
Run producer: go run kafkaProducer.go -> from go directory

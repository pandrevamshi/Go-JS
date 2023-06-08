package main

import (
    
    "log"
    "github.com/Shopify/sarama"
)

func main() {


config := sarama.NewConfig()
config.Producer.RequiredAcks = sarama.WaitForAll
config.Producer.Retry.Max = 5
config.Producer.Return.Successes = true
producer, err := sarama.NewSyncProducer([]string{"localhost:9092"}, config)
if err != nil {
    log.Fatal("Failed to create Kafka producer:", err)
}
defer producer.Close()

message := &sarama.ProducerMessage{
    Topic: "quickstart-events",
    Key:   sarama.StringEncoder("my-key"),
    Value: sarama.StringEncoder("Hello, Go Kafka!"),
}
partition, offset, err := producer.SendMessage(message)
if err != nil {
    log.Fatal("Failed to send message to Kafka:", err)
}
log.Printf("Message sent successfully. Partition: %d, Offset: %d\n", partition, offset)
}
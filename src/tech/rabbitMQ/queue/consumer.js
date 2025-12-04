import amqplib from "amqplib";

const RABBITMQ_URL = "amqp://localhost";

async function receiveQueue() {
  try {
    // 1. Create connection
    const connection = await amqplib.connect(RABBITMQ_URL);

    // 2. Create channel
    const channel = await connection.createChannel();

    // 3. Declare queue
    const QUEUE_NAME = "task_queue_1";
    await channel.assertQueue(QUEUE_NAME, {});

    // 4. Receive message from queue
    channel.consume(
      QUEUE_NAME,
      (msg) => {
        console.log(" [x] Received '%s'", msg.content.toString());
      },
      {
        noAck: true, // Tự động xác nhận đã nhận được message (true)
      }
    );
  } catch (error) {
    console.log("Error in receiveQueue:", error);
  }
}

receiveQueue();

import amqplib from "amqplib";

const RABBITMQ_URL = "amqp://localhost";

async function subscribe() {
  try {
    // 1. Create connection
    const connection = await amqplib.connect(RABBITMQ_URL);

    // 2. Create channel
    const channel = await connection.createChannel();

    // 3. Declare exchange
    const EXCHANGE_NAME = "notifications";
    await channel.assertExchange(EXCHANGE_NAME, "topic", {
      durable: true, // Mất exchange khi RabbitMQ khởi động lại (false)
    });

    // 4. Declare queue
    const { queue } = await channel.assertQueue("", {
      exclusive: true, // Xóa hàng đợi khi kết nối đóng
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    // 5. Bind queue to exchange (exchange -> queue)
    const argv = process.argv.slice(2);
    if (argv.length < 1) {
      console.log("Usage: node subscribe.js <topic>");
      process.exit(0);
    }

    console.log("argv", argv);
    argv.forEach(async (topic) => {
      await channel.bindQueue(queue, EXCHANGE_NAME, topic);
    });

    // 6. Receive message from queue
    channel.consume(
      queue,
      (msg) => {
        console.log(" [x] Received '%s'", msg.fields.routingKey);
        console.log(" [x] Received '%s'", msg.content.toString());
      },
      {
        noAck: true, // Tự động xác nhận đã nhận được message (true)
      }
    );
  } catch (error) {
    console.log("Error in subscribe:", error);
  }
}

subscribe();

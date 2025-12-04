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
    await channel.assertExchange(EXCHANGE_NAME, "fanout", {
      durable: true, // Mất exchange khi RabbitMQ khởi động lại (false)
    });

    // 4. Declare queue
    const q = await channel.assertQueue("", {
      exclusive: true, // Xóa hàng đợi khi kết nối đóng
    });

    console.log(
      " [*] Waiting for messages in %s. To exit press CTRL+C",
      q.queue
    );

    // 5. Bind queue to exchange (exchange -> queue)
    await channel.bindQueue(q.queue, EXCHANGE_NAME, "");

    // 6. Receive message from queue
    channel.consume(
      q.queue,
      (msg) => {
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

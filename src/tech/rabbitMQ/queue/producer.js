import amqplib from "amqplib";

const RABBITMQ_URL = "amqp://localhost";

async function sendQueue({ msg }) {
  try {
    // 1. Create connection
    const connection = await amqplib.connect(RABBITMQ_URL);

    // 2. Create channel
    const channel = await connection.createChannel();

    // 3. Declare queue
    const QUEUE_NAME = "task_queue_1";
    await channel.assertQueue(QUEUE_NAME, {
      durable: true, // Mất hàng đợi khi RabbitMQ khởi động lại (false)
    });

    // 4. Send message to queue
    channel.sendToQueue(QUEUE_NAME, Buffer.from(msg), {
      persistent: true, // Mất message khi RabbitMQ khởi động lại (false)
      // expiration: "10000", // Thời gian sống của message (ms) => "không có ai nhận trong 10s thì tự động xóa"
    });
    console.log(" [x] Sent '%s'", msg);
  } catch (error) {
    console.log("Error in sendQueue:", error);
  }
}

const msg = process.argv.slice(2).join(" ") || "Hello World!";
sendQueue({ msg });

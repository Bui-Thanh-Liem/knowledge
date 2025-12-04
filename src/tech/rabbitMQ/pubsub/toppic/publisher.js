import amqplib from "amqplib";

const RABBITMQ_URL = "amqp://localhost";

async function publish() {
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

    // 4. Publish message to exchange
    const argv = process.argv.slice(2);
    const msg = argv[1] || "Hello World!";
    const topic = argv[0] || "general.info";
    channel.publish(EXCHANGE_NAME, topic, Buffer.from(msg), {
      persistent: true, // Mất message khi RabbitMQ khởi động lại (false)
    });
    console.log(" [x] Published '%s'", msg);

    setTimeout(() => {
      connection.close();
      process.exit(0);
    }, 2000);
  } catch (error) {
    console.log("Error in publish:", error);
  }
}

/**
 * (*) : Khớp với 1 từ            => user.password.update - user.*.update
 * (.) : phân tách giữa các từ    => user.password.update - user.#
 * (#) : khớp 0 hoặc nhiều từ
 */

publish();

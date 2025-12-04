import amqplib from "amqplib";

const RABBITMQ_URL = "amqp://localhost";

async function publish({ msg }) {
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

    // 4. Publish message to exchange
    channel.publish(EXCHANGE_NAME, "", Buffer.from(msg), {
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

const msg = process.argv.slice(2).join(" ") || "Hello World!";
publish({ msg });

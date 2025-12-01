import { createClient } from "redis";

class PubSub {
  constructor() {
    // tạo client
    this.publisher = createClient();
    this.subscriber = createClient();

    // trạng thái connect
    this.connected = false;
    this.connecting = null; // dùng để tránh connect đồng thời
  }

  async connect() {
    if (this.connected) return;

    // Nếu đang connect, chờ connect xong
    if (this.connecting) {
      await this.connecting;
      return;
    }

    // tạo Promise connect
    this.connecting = Promise.all([
      this.publisher.connect(),
      this.subscriber.connect(),
    ]).then(() => {
      this.connected = true;
      this.connecting = null;
    });

    await this.connecting;
  }

  async publish({ channel, message }) {
    try {
      await this.connect();
      console.log(`Publishing message to channel ${channel}: ${message}`);
      return this.publisher.publish(channel, message);
    } catch (error) {
      console.log("publish :::", error);
    }
  }

  async subscribe(channel, callback) {
    try {
      await this.connect();
      await this.subscriber.subscribe(channel, callback);
    } catch (error) {
      console.log("subscribe :::", error);
    }
  }
}

// singleton
export default new PubSub();

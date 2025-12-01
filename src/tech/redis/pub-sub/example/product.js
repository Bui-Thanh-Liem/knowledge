import PubSub from "../index.js";

export async function purchaseProduct({ productId, userId, quantity }) {
  console.log(`User ${userId} purchased ${quantity} of product ${productId}.`);

  try {
    await PubSub.publish({
      channel: "purchase_events",
      message: JSON.stringify({ productId, userId, quantity }),
    });
  } catch (error) {
    console.error("Failed to publish purchase event:", error);
  }
}

import PubSub from "../index.js";

function updateInventory() {
  PubSub.subscribe("purchase_events", (message) => {
    const { productId, quantity } = JSON.parse(message);
    console.log(`Updating inventory for product ${productId} by ${quantity}.`);
  });
}

updateInventory();

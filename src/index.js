import { purchaseProduct } from "./tech/redis/pub-sub/example/product.js";

import "./tech/redis/pub-sub/example/inventory.js";

console.log("start");

purchaseProduct({ productId: "1", userId: "42", quantity: 3 });

console.log("end");

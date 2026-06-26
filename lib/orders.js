// Demo order history, stored client-side alongside the cart and account data.
const ORDERS_KEY = "nexora_orders_v1";

export function saveOrder(order) {
  const orders = readOrders();
  localStorage.setItem(ORDERS_KEY, JSON.stringify([order, ...orders]));
}

export function readOrders() {
  try {
    return JSON.parse(localStorage.getItem(ORDERS_KEY)) || [];
  } catch {
    return [];
  }
}

export function ordersForEmail(email) {
  if (!email) return [];
  return readOrders().filter((o) => o.email === email);
}

import { signal } from "@preact/signals-react";

const count = signal(0);

export const appCount = {
  get value() {
    return count.value;
  },
  increment() {
    count.value++;
  },
  amountAdded(amount: number) {
    count.value += amount;
  },
  decrement() {
    if (count.value > 0) {
      count.value--;
    }
  },
  reset() {
    count.value = 0;
  },
};

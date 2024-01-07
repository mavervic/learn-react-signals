import { Signal, effect, signal } from "@preact/signals-react";

interface Breed {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

const DOGS_API_KEY = "cbfb51a2-84b6-4025-a3e2-ed8616edf311";
const DOGS_API_URL = "https://api.thedogapi.com/v1";
const dogRes = signal<Array<Breed>>([]);

export const appDogsData = {
  get value() {
    return dogRes.value;
  },
  useFetchBreedsQuery(limit: Signal<number>) {
    effect(() => {
      fetch(`${DOGS_API_URL}/breeds?limit=${limit}`, {
        headers: {
          "x-api-key": DOGS_API_KEY,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dogRes.value = data;
        });
    });
  },
};

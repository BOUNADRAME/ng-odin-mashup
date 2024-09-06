import { Injectable } from '@angular/core';
import { ZustandBaseService } from 'ngx-zustand';
import { StateCreator } from 'zustand'; // Import from Zustand for typing

interface CounterState {
  counter: number;
  increment: () => void;
  decrement: () => void;
}

@Injectable({
  providedIn: 'root',
})
export class CounterService extends ZustandBaseService<CounterState> {
  initStore(): StateCreator<CounterState> {
    // Retrieve counter value from localStorage if available
    const savedCounter = localStorage.getItem('counter');
    const initialCounter = savedCounter ? parseInt(savedCounter, 10) : 0;

    return (set) => ({
      counter: initialCounter,
      increment: () =>
        set((state) => {
          const newCounter = state.counter + 1;
          localStorage.setItem('counter', newCounter.toString()); // Save to localStorage
          return { counter: newCounter };
        }),
      decrement: () =>
        set((state) => {
          const newCounter = state.counter - 1;
          localStorage.setItem('counter', newCounter.toString()); // Save to localStorage
          return { counter: newCounter };
        }),
    });
  }
}

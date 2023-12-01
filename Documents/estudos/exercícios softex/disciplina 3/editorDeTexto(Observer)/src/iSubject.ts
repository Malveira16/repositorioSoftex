import { iObserver } from "./iObserver";
export interface Subject {
    addObserver(observer: iObserver): void;
    removeObserver(observer: iObserver): void;
    notifyObservers(event: string): void;
  }
import { iObserver } from "./iObserver";
import { Subject } from "./iSubject";
export class Editor implements Subject {
    private observers: iObserver[] = [];
  
    addObserver(observer: iObserver): void {
      this.observers.push(observer);
    }
  
    removeObserver(observer: iObserver): void {
      const index = this.observers.indexOf(observer);
      if (index !== -1) {
        this.observers.splice(index, 1);
      }
    }
  
    notifyObservers(event: string): void {
      this.observers.forEach((observer) => {
        observer.update();
      });
    }
  }
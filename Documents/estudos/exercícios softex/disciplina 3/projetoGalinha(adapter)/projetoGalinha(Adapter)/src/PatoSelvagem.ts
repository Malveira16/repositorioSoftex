import {iPato} from './iPato'
export class PatoSelvagem implements iPato {
    grasnar(): void {
      console.log("Quack! Quack!");
    }
  
    voar(): void {
      console.log("Voando distâncias curtas.");
    }
  }
  
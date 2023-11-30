import { iPato } from "./iPato";

export class AdaptadorPato implements Galinha {
    private pato: iPato;
  
    constructor(pato: iPato) {
      this.pato = pato;
    }
  
    cacarejar(): void {
      this.pato.grasnar();
    }
  }
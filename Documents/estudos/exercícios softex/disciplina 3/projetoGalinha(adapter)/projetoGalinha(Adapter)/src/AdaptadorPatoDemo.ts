import { PatoSelvagem } from "./PatoSelvagem";
import { AdaptadorPato } from "./AdaptadorPato";
class AdaptadorPatoDemo {
    static mostrar() {
      // Criando um objeto PatoSelvagem
      const patoSelvagem = new PatoSelvagem();
  
      // Criando um adaptador para o PatoSelvagem agir como Galinha
      const adaptador = new AdaptadorPato(patoSelvagem);
  
      // Usando o adaptador como se fosse uma Galinha
      console.log("Interagindo com o PatoSelvagem através do adaptador:");
      adaptador.cacarejar();
    }
  }
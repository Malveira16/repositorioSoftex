import { SanduicheFrango } from "./SanduicheFrango";
import { SanduicheCarne } from "./SanduicheCarne";
import { Sanduiche } from "./Sanduiche";

var sc1 = new SanduicheCarne();
var sf1 = new SanduicheFrango();
sc1.adicionarIngrediente(sc1.getbacon(), sc1.getMussarelaRalado());
sc1.imprimirValor();
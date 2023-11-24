import { Carro } from './Carro';
import { Moto } from './Moto';
import { Veiculo } from './Veiculo';

export class Aplicacao {
    criarArrayVeiculos(): Veiculo[] {
        const veiculos: Veiculo[] = [];

        for (let i = 0; i < 6; i++) {
            if (i % 2 === 0) {
                veiculos.push(this.criarCarro());
            } else {
                veiculos.push(this.criarMoto());
            }
        }

        for (const veiculo of veiculos) {
            console.log(veiculo.represent());
        }

        return veiculos;
    }

    criarCarro(): Carro {
        const carroOriginal = new Carro(4, true, "Fox", "VolksWagen", "Preto");
        return carroOriginal.clone();
    }

    private criarMoto(): Moto {
        const motoOriginal = new Moto(350, 4, "CB-750", "Honda", "Azul");
        return motoOriginal.clone() as Moto;
    }
}

const app = new Aplicacao();
app.criarArrayVeiculos();






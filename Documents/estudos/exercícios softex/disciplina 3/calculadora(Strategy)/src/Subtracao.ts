import { iStrategy } from "./iStrategy";
export class Subtracao implements iStrategy{
    execute(num1: number, num2: number): number {
        return num1 - num2;
    }
}
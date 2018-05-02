import { Injectable } from '@angular/core';

@Injectable()
export class CalculatorService {

  constructor() { }

  numSquare(num: number): number {
    return Math.pow(num, 2);
  }
}

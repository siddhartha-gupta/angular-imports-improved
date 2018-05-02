import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CalculatorService } from '../services/calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculatorService]
})

export class AppComponent implements OnInit {
  form: FormGroup;
  title = 'app';
  output = 0;

  constructor(
    private formBuilder: FormBuilder,
    private calculatorService: CalculatorService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      num: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(8)]]
    });

    this.form.get('num').valueChanges.subscribe((value) => {
      this.output = this.calculatorService.numSquare(value);
    });
  }
}

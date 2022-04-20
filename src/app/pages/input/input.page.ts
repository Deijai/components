import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  public dataForm: FormGroup = this.fb.group({
    nome: ['', [Validators.required, Validators.min(3)]],
    email: ['', [Validators.required, Validators.email, Validators.min(3)]],
    password: ['', [Validators.required, Validators.min(3)]],
  });

  public title= 'Input';
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  public onSubmit() {
    console.log('clicou');
      console.log(this.dataForm);
  }

}

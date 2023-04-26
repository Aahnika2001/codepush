import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
    angForm: FormGroup;

constructor(private fb: FormBuilder) {
    this.createForm();
 }

ngOnInit() {}

createForm() {
    this.angForm = this.fb.group({
       email: ['', Validators.required ]
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  title = 'Angular Form Validation Tutorial';
  angForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.createForm();
  }

  ngOnInit(): void {
  }
  createForm() {
    this.angForm = this.fb.group({
       email: ['', Validators.required ],
       password: ['', Validators.required ]
    });
  }
}

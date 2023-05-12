/*import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    angForm: FormGroup;
  fb: any;
    

ngOnInit() {
}
createForm() {
    this.angForm = this.fb.group({
       name: ['', Validators.required ],
       email: ['', Validators.required ],
       password: ['', Validators.compose ([
        Validators.required,
      Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$')
       ])],
       password1: ['', Validators.compose ([
        Validators.required,
        Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$')
       ])
     ],
       date: ['', Validators.required ],
       phone: ['', Validators.required ],
    }, {
         validator: this.passwordMatchValidator
        
     });
    
  }
  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password');
    const confirmPassword = formGroup.get('password1');
  
    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mismatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
  }
}  
*/
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({

selector: 'app-signup',

 templateUrl: './signup.component.html',

styleUrls: ['./signup.component.scss']

})

export class SignupComponent implements OnInit {

angForm: FormGroup;




constructor(private fb: FormBuilder) {

 this.createForm();

}




ngOnInit() {

}

createForm() {

this.angForm = this.fb.group({
name: ['', Validators.required ],

email: ['', Validators.required ],

password: ['', Validators.required ],

password1: ['', Validators.required ],

date: ['', Validators.required ],
phone: ['', Validators.required ]

});

 }

onPrivacyPolicyClicked(){

 localStorage.setItem("dialog","true");
 }

 checkDialogDisplay(){
if(localStorage.getItem("dialog")==="true"){

 return true;

}

return false;

}
}
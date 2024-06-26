import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from './userservice.service';
import { User } from 'src/model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';


  objForm: FormGroup;

  constructor(private formBuilder: FormBuilder,private Userservice:UserserviceService) {
    this.objForm = this.formBuilder.group({
      panCard: ['', [Validators.required, Validators.pattern(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/)]],
      fullName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z\s]*$/)]],

      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@gmail\.com$/)]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      address: ['', Validators.required]
    });
  }



  submit() {
    if (this.objForm.valid) {
      console.log("PAN Card:", this.objForm.get('panCard').value);
      console.log("Full Name:", this.objForm.get('fullName').value);
      console.log("Email:", this.objForm.get('email').value);
      console.log("Mobile Number:", this.objForm.get('mobileNumber').value);
      console.log("Address:", this.objForm.get('address').value);
      
    } else {
      console.log('Form is invalid');
    }
  }
  
  

  

  
}





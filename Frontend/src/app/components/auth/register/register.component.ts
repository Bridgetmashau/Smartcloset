import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  //======================properties=======================
  registerForm:FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    ConfirmPassword: new FormControl()
  })

  user_data:any

  //======================methods==========================

  set_registerForm(){

     const user = {
       email:this.registerForm.value.email,
       password:this.registerForm.value.password,
       ConfirmPassword:this.registerForm.value.ConfirmPassword
     }


     console.table(user)

    
    this.auth.set_register(user).subscribe((my_data)=>{
      console.log("From the Service",my_data)

      this.path.navigate(['/dash'])

    })
  }

  //======================defaults=========================
  constructor(private auth:AuthService,private path:Router) { }

  ngOnInit(): void {
  }
}

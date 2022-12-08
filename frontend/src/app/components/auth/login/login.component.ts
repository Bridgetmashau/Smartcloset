import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //=================================properties================================
  LoginForm!:FormGroup;

  user_id :any;
  user:any
  isVisible: boolean = false;

  //==================================methods==================================

  get_login()
  {
     const user = 
     {
       email:this.LoginForm.value.email,
       password:this.LoginForm.value.password
     }

     console.log("From Login Form ",user)

    
     if(this.LoginForm.invalid)
     {return
     }else{
       

        this.auth.set_login(user).subscribe((login_data:any)=>{

          console.log("From backend",login_data)
 
             this.user_id = login_data.user[0].user_id;
             localStorage.setItem('user_id',this.user_id);
 
               //route to the dashboard after loggin in
             this.path.navigate(['/dash'])

            },
             (err) => {
               //alert("User does not exist, Register First")
              //return err.error.errorMessage;
              if (this.isVisible){
                return;
              }
            this.isVisible=true
            setTimeout(()=>this.isVisible=false,2500)
            return err.error.errorMessage
            }
          );
     }
  }

  get validate() {
    return this.LoginForm.controls;
  }

  //=================================defaults====================================
  constructor(private auth:AuthService,private path:Router) { }
  ngOnInit(): void {

    this.LoginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required])
    })
  }
}

import { getInstructionStatements } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DashService } from 'src/app/services/dashboard/dash.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  //=========================================properties==================================
postForm:FormGroup = new FormGroup({
  title:new FormControl(),
  post:new FormControl(),
})


userID:any = localStorage.getItem('user_id');

//============================================methods======================================

set_postForm()
{
  const post ={

    user_id:this.userID,
    title:this.postForm.value.title,
    post:this.postForm.value.post,
    post_date:Date()
    }

    console.log(post)

  this.dash.set_post(post).subscribe((message)=>{

      console.table(message)    
  })

  
    
}


//==============================================default methods==============================
  constructor(private dash:DashService) { }

  ngOnInit(): void {
  }

  

}

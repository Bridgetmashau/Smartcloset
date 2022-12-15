import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DashService } from '../services/dashboard/dash.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  posts: any
  edtStatus: any = false
  indeX: any
  edtedPost: any
  edtTitle: any
  hidden :boolean = false
  // btnClcked="false"

  editForm: FormGroup = new FormGroup({
  title: new FormControl(),
  post: new FormControl()

  })

  deletePost(ind: any) {

    console.log("selected id", ind)

    const deteteBody = {
      post_id: this.posts[ind].post_id,
      user_id: this.posts[ind].user_id
    }
    this.dash.delete_post(deteteBody).subscribe(() => {

      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate(['/post'], { relativeTo: this.route });

    })
  }

  hide()
  {
    this.hidden = true;
    
  }
  sendIndex(ind: any) {

    this.indeX = ind
    this.edtedPost = this.posts[ind].post
    this.edtTitle = this.posts[ind].title

  }

  constructor(private dash: DashService, private path: Router, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.dash.get_post().subscribe((messages) => {
      this.posts = messages
    })

  }


}




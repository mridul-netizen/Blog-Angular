import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})

export class PostsCreateComponent{

  newPost = '';
  enteredValue = '';

  // tslint:disable-next-line:typedef
  onAddPost() {
    this.newPost = this.enteredValue;
  }
}

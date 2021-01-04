import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import {PostsService} from '../posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './posts-create.component.html',
  styleUrls: ['./posts-create.component.css']
})

export class PostsCreateComponent{
  enteredTitle = '';
  enteredContent = '';

  constructor(public postsService: PostsService) {
  }
  // tslint:disable-next-line:typedef
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.postsService.addPost(form.value.title, form.value.content);
    form.reset();
  }
}

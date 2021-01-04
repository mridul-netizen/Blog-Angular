import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  // tslint:disable-next-line:typedef
  getPosts() {
    return [...this.posts]; // not the original objects just the array is copied
  }

  getPostUpdatedListener() {
    return this.postsUpdated.asObservable();
  }
  // tslint:disable-next-line:typedef
  addPost(title: string, content: string) {
    const post: Post = {title, content};
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }

}

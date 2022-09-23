import { Component } from '@angular/core';
import { PostService } from './services/post.service';
import { Post } from './models/post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-service';
  posts: Array<any>;

  constructor(private postService: PostService) {
    // let postService = new PostService();
    this.posts = postService.postList;
  }

  ngOnInit(): void {}

  addNewData() {
    let newPost: Post = {
      id: 7,
      postTitle: 'Post 7',
    };
    this.postService.addPost(newPost);
  }
}

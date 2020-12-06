import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Post, PostsService} from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post: Post;

  constructor(
    private route: ActivatedRoute,
    // private postsService: PostsService,
    private router: Router
    ) {}

  ngOnInit(): void {
    // Было
    // this.route.params.subscribe((params: Params) => {
    //   console.log('Params: ', params);
    //   this.post = this.postsService.getById(+params.id);
    // });

    // Стало
    // Без слежения
    this.post = this.route.snapshot.data.post;

    // Со слежением
    this.route.data.subscribe(data => {
      this.post = data.post
    });
  }

  loadPost() {
    this.router.navigate(['/posts', 44]);
  }
}

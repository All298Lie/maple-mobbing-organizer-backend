import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  // 💡 프론트엔드에서 데이터를 보낼 때 받는 창구
  @Post()
  create(@Body() postData: any) {
    return this.postsService.create(postData);
  }
}
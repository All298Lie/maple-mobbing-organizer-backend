import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post)
    private postsRepository: Repository<Post>,
  ) {}

  async findAll() {
    return await this.postsRepository.find({
      where: { status: 'APPROVED' },
      relations: { map: true, user: true, tags: true },
      order: { created_at: 'DESC' },
    });
  }

  // 💡 전달받은 데이터로 새 게시글을 생성하고 DB에 저장합니다.
  async create(postData: any) {
    const newPost = this.postsRepository.create({
      description: postData.description,
      kill_count: postData.killCount,
      status: 'APPROVED', // 💡 테스트를 위해 PENDING에서 APPROVED로 임시 변경!
    });
    return await this.postsRepository.save(newPost);
  }
}
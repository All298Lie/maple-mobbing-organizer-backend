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

  // 승인된 사냥터 공략글 목록 가져오기 (연관 데이터 포함)
  async findAll() {
    return await this.postsRepository.find({
      where: { status: 'APPROVED' },
      // 배열 형태에서 객체 형태로 변경! (true로 설정하면 해당 데이터를 가져옵니다)
      relations: {
        map: true,
        user: true,
        tags: true,
      },
      order: { created_at: 'DESC' },
    });
  }
}
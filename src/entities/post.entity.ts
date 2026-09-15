import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { User } from './user.entity';
import { Map } from './map.entity';
import { Tag } from './tag.entity';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Map)
  @JoinColumn({ name: 'map_id' })
  map: Map;

  @Column({ default: 'PENDING' })
  status: string; // PENDING, APPROVED, REJECTED

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ default: 0 })
  views: number;

  @CreateDateColumn()
  created_at: Date;

  // 게시글과 태그의 다대다(N:M) 관계 설정 (post_tags 테이블 자동 생성)
  @ManyToMany(() => Tag)
  @JoinTable({
    name: 'post_tags',
    joinColumn: { name: 'post_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  tags: Tag[];
}
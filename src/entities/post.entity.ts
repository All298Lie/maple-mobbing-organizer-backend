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
  status: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  // --- 💡 새로 추가된 핵심 데이터 ---
  @Column({ type: 'int', default: 6 })
  measured_time: number; // 측정 기준 시간 (메이플은 보통 6분(전투 측정) 기준)

  @Column({ type: 'int', default: 0 })
  kill_count: number; // 해당 시간 동안의 실제 처치 마릿수

  @Column({ type: 'int', default: 0 })
  like_count: number; // 추천 수 (랭킹 정렬 시 빠른 조회를 위해 캐싱)

  @Column({ default: 0 })
  views: number;
  // --------------------------------

  @CreateDateColumn()
  created_at: Date;

  @ManyToMany(() => Tag)
  @JoinTable({
    name: 'post_tags',
    joinColumn: { name: 'post_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tag_id', referencedColumnName: 'id' },
  })
  tags: Tag[];
}
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Post } from './post.entity';
import { Skill } from './skill.entity';

@Entity('post_layouts')
export class PostLayout {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Post)
  @JoinColumn({ name: 'post_id' })
  post: Post;

  @ManyToOne(() => Skill, { nullable: true })
  @JoinColumn({ name: 'skill_id' })
  skill: Skill;

  @Column({ type: 'jsonb' })
  position_data: any; // { x: 100, y: 200, type: 'line' } 등의 JSON 데이터
}
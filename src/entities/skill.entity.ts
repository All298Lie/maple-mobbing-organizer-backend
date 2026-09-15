import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('skills')
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // 예: 솔 야누스 - 새벽

  @Column()
  job_group: string; // 공용, 전사, 마법사 등

  @Column()
  req_level: number; // 스킬 사용 가능 레벨
}
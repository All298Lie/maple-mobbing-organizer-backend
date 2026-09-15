import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // 예: 제자리, 원젠컷

  @Column()
  category: string; // 사냥방식, 스펙 등 분류
}
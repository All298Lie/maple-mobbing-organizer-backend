import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  oauth_id: string; // 넥슨 또는 디스코드 고유 ID

  @Column()
  nickname: string;

  @Column({ default: 'USER' })
  role: string; // USER 또는 ADMIN

  @Column({ nullable: true })
  level: number; // 넥슨 연동 시 캐릭터 레벨

  @Column({ nullable: true })
  job: string; // 넥슨 연동 시 직업

  @CreateDateColumn()
  created_at: Date;
}
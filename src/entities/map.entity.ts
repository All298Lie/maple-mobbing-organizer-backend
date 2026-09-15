import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('maps')
export class Map {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string; // 예: 불타는 도서관 1

  @Column()
  region: string; // 예: 세르니움

  @Column({ type: 'int', default: 0 })
  min_level: number; // 입장/요구 레벨 (예: 260)

  @Column({ nullable: true })
  image_url: string; // CDN에 올라간 맵 이미지 경로
}
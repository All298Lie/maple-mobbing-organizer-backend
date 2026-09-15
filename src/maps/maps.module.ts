import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MapsService } from './maps.service';
import { MapsController } from './maps.controller';
import { Map } from '../entities/map.entity'; // 우리가 만든 엔티티 불러오기

@Module({
  imports: [TypeOrmModule.forFeature([Map])], // DB 테이블 연결
  controllers: [MapsController],
  providers: [MapsService],
})
export class MapsModule {}
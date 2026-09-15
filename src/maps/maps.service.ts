import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Map } from '../entities/map.entity';

@Injectable()
export class MapsService {
  constructor(
    @InjectRepository(Map)
    private mapsRepository: Repository<Map>, // DB 조작 도구(Repository) 주입
  ) {}

  // 사냥터 전체 목록 가져오기
  async findAll() {
    return await this.mapsRepository.find();
  }
}
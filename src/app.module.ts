import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    // 1. 환경변수 모듈 세팅
    ConfigModule.forRoot({
      isGlobal: true, // 앱 전체에서 환경변수 사용 가능하게 설정
    }),
    
    // 2. TypeORM(PostgreSQL) 연결 세팅
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // 개발용: 엔티티 수정 시 DB 스키마 자동 업데이트 (운영에서는 false 권장)
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
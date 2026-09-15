import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // .env 파일에 PORT가 설정되어 있으면 해당 포트를, 없으면 3000번 포트를 사용합니다.
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
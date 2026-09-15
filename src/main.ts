import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 💡 프론트엔드(3001포트)에서 보내는 요청을 허락해 줍니다.
  app.enableCors();
  
  // .env 파일에 PORT가 설정되어 있으면 해당 포트를, 없으면 3000번 포트를 사용합니다.
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
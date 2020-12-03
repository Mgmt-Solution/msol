import * as path from 'path';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as hbs from 'hbs';
import * as helpers from 'handlebars-helpers';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule
  );

  app.useStaticAssets(path.join(__dirname, '..', 'public'));
  app.setBaseViewsDir(path.join(__dirname, '..', 'views'));
  hbs.registerPartials(path.join(__dirname, '..', '/views/partials'));
  app.setViewEngine('hbs');
  helpers({ hbs });

  await app.listen(3000);
}
bootstrap();

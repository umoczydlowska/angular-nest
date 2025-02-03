// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { TodoModule } from './todo/todo.module';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { Task } from './todo/todo.model';
// import { dataBaseConfig } from './database/database.config';
// import { ProductModule } from './product/product.module';

// @Module({
//   imports: [
//     TodoModule,
//     SequelizeModule.forRoot({
//       ...dataBaseConfig,
//       // models: [Task],
//     }),
//     ProductModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { dataBaseConfig } from './database/database.config';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [ProductModule, SequelizeModule.forRoot(dataBaseConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

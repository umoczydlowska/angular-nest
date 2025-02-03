import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: ':memory:',
  autoLoadModels: true,
  synchronize: true,
};

import { TypeOrmModuleOptions } from "@nestjs/typeorm";
let postgreconfig : TypeOrmModuleOptions= {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'myuser',
    password: 'mypassword',
    database: 'sass',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,           // <<<< habilita esto para sincronización automática
    migrations: [__dirname + '/migrations/*{.ts,.js}'],
    migrationsRun: true,
}

  export default postgreconfig;
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
require('dotenv').config();

export const config:TypeOrmModuleOptions={
    type:'postgres',
    username:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    host:process.env.DB_HOST,
    port:5432,
    database:process.env.DB_NAME,
    synchronize:true, //false in production
    logging:true,
    entities:["dist/**/*.entity.{ts,js}"]
}


  


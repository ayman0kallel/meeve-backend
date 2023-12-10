import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'bmh2im2ylfllimnghqfq-mysql.services.clever-cloud.com',
  user: 'u1nvoeai1uwpnesg',
  password: 'nkkYkWZKM5CAYWrLY2fv',
  database: 'bmh2im2ylfllimnghqfq',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

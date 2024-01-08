import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'id21614262_meeve',
  password: 'MeeveCIM1@',
  database: 'id21614262_meevedb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

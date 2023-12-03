import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'sql11.freesqldatabase.com',
  user: 'sql11667222',
  password: 'FnwwLILQXL',
  database: 'sql11667222',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'sql11.freesqldatabase.com',
  user: 'sql11673668',
  password: 'RFYkvNEuMZ',
  database: 'sql11673668',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;

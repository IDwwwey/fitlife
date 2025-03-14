import mysql from 'mysql2';

const pool = mysql.createPool({
  host: 'dbinstance.cwehbp34mfnw.us-east-1.rds.amazonaws.com', // 您的RDS终端节点
  user: 'dbadmin',
  password: '12345678',
  database: 'fitlife',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool.promise();
import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 3000, // เปลี่ยนค่าเริ่มต้นเป็น 3000
  host: process.env.HOST || 'localhost',
  jwtSecret: process.env.JWT_SECRET || '',
  mysql: {
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'frankent',
    database: process.env.MYSQL_DATABASE || 'authentication',
    port: parseInt(process.env.MYSQL_PORT || '3306'), // ใช้ 3306 เป็นค่าพอร์ตเริ่มต้น
  },

  emailService: process.env.EMAIL_SERVICE,
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
};

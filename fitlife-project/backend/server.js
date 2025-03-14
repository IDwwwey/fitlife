import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import apiRouter from './routes/api.js';

// 解决 ES 模块的 __dirname 问题
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 初始化 Express 应用
const app = express();

// 中间件配置
app.use(cors());
app.use(express.json());

// 静态文件服务（核心配置）
const staticPath = path.join(__dirname, '../../frontend');
app.use(express.static(staticPath));

// API 路由挂载
app.use('/api', apiRouter);

// 处理所有前端路由（支持 SPA 刷新）
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// 错误处理中间件
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('服务器内部错误');
});

// 启动服务器
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`✅ 服务器运行在 http://localhost:${port}`);
});
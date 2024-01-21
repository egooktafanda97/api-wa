'use server';
import express, { Request, Response, Application } from 'express';
import next from 'next';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { useExpressServer } from 'routing-controllers';
import { UserController } from './app/controllers/UserController';
import { SessionController } from './app/controllers/SessionController';
import { whasappServices } from './app/services/whasappServices';
import { bootstrap } from './config/bootstrap';

import WsMiddleware from './app/middleware/WsMiddleware';
import { WssServers } from './app/services/WssServers';
import { WaMessageController } from './app/controllers/WaMessageController';
const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port: any = process.env.PORT || 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();
const server = new bootstrap().app;
const wss = WssServers();

(async () => {
  try {
    await app.prepare();
    await whasappServices(wss);
    useExpressServer(server, {
      controllers: [UserController, SessionController, WaMessageController]
    });
    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });

    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`> Ready on localhost:${port} - env ${process.env.NODE_ENV}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();

export { server, wss };

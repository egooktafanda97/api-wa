'use server';
import express, { Request, Response, Application } from 'express';
import next from 'next';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import cookieParser from 'cookie-parser';
import cors from 'cors';
export class bootstrap {
  public app: Application;
  constructor() {
    this.app = express();
    this.plugins();
  }
  plugins() {
    this.app.use(express.json());
    this.app.use(morgan('tiny'));
    this.app.use(express.static('public'));
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(
      '/docs',
      swaggerUi.serve,
      swaggerUi.setup(undefined, {
        swaggerOptions: {
          url: '/swagger.json'
        }
      })
    );
  }
}

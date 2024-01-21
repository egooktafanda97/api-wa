import 'reflect-metadata';
import { ValidationError } from '../../utils/error';
import { delays } from '../../utils/proccessing';
import { responseSuccessWithData } from '../../utils/response';
import 'reflect-metadata';

import { Controller, Param, Body, Get, Post, Put, Delete, Req, Res, QueryParam } from 'routing-controllers';
import * as whatsapp from 'wa-multi-session';
import ResponseApi from '../../utils/ResponseApi';

@Controller()
export class WaMessageController {
  /**
   *
   * @param value function
   * @returns
   */
  public async isEmpty(value: any) {
    if (Array.isArray(value)) {
      return value.length === 0;
    } else if (typeof value === 'object' && value !== null) {
      return Object.keys(value).length === 0;
    } else if (typeof value === 'string') {
      return value.trim().length === 0;
    }
    return !value;
  }

  @Post('/api/send-text')
  public async sendMessage(@Req() request: any, @Res() response: any) {
    try {
      const { to, text, isGroup, session }: { to: string; text: string; isGroup: boolean; session: string } = request?.body;

      if (!to || !text) {
        throw new ValidationError('Missing Parameters', 401);
      }
      const receiver: string = to;
      if (!session) {
        throw new ValidationError('Session Not Found', 404);
      }
      const send = await whatsapp.sendTextMessage({
        sessionId: session,
        to: receiver,
        isGroup: !!isGroup,
        text
      });

      return ResponseApi.success('Ok', send);
    } catch (error: any) {
      return ResponseApi.error('error', error);
    }
  }

  @Post('/api/send-broadcart')
  public async broadCast(@Req() request: any, @Res() response: any) {
    try {
      const sessionId = request.body.session || request.query.session || request.headers.session;
      const delay = request.body.delay || request.query.delay || request.headers.delay;
      if (!sessionId) {
        return {
          status: false,
          data: {
            error: 'Session Not Found'
          }
        };
      }
      for (const dt of request.body.data) {
        const to = dt.to;
        const text = dt.text;
        const isGroup = !!dt.isGroup;

        await whatsapp.sendTextMessage({
          sessionId: sessionId,
          to: to,
          isGroup: isGroup,
          text: text
        });

        await whatsapp.createDelay(delay ?? 1000);
      }
      return ResponseApi.success('Bulk Message is Processing', []);
    } catch (error) {
      return ResponseApi.error('error', error);
    }
  }
}

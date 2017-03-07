import * as express from 'express';

export interface IRegistrableController {
  register(app: express.Application): void;
}

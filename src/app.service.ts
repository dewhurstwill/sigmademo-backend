import { Injectable } from '@nestjs/common';

import { Message } from './common/types';

@Injectable()
export class AppService {
  getRoot(): Message {
    return {
      message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄',
    };
  }
  getHealth(): Message {
    return {
      message: '200 OK',
    };
  }
}

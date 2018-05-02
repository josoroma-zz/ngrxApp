import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {
  logInfo(msg: any)  { console.log(msg); }
  logDebug(msg: any) { console.debug(msg); }
  logError(msg: any) { console.error(msg); }
}

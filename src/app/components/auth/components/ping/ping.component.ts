import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { LoggerService } from '../../../../services/logger.service';

// App and Auth Actions.
import * as AuthActions from '../../actions/auth.actions';
// State and State Slices.
import * as fromAuth from '../../reducers/';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.scss']
})
export class PingComponent implements OnInit {
  getAuthState: Observable<any>;

  constructor(private logger: LoggerService, private store: Store<fromAuth.State>) {
    this.getAuthState = this.store.select(fromAuth.selectAuthState);

    this.logger.logInfo('PingComponent - constructor - this.getAuthState');
    this.logger.logInfo(this.getAuthState);
  }

  ngOnInit() {
    this.store.dispatch(new AuthActions.Ping);
  }

}

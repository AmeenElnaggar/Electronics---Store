import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from './reducers/auth.reducer';

export interface StoreInterface {
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<StoreInterface> = {
  auth: fromAuth.authReducer,
};

import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  fetchLoginAction,
  fetchSignupAction,
  getLoginResponseAction,
  getSignupResponseAction,
} from '../actions/auth.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StoreInterface } from '../store';
import { Store } from '@ngrx/store';

export class AuthenticationEffect {
  private actions$ = inject(Actions);
  private httpClient = inject(HttpClient);
  private store = inject(Store<StoreInterface>);

  signupEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchSignupAction),
      switchMap(({ data }) => {
        return this.httpClient
          .post(
            'https://clothingapp-production-681d.up.railway.app/api/v1/auth/signup',
            data
          )
          .pipe(
            map((responseSuccess: any) => {
              return getSignupResponseAction({ payload: responseSuccess });
            }),
            catchError((responseError: any) => {
              return of(getSignupResponseAction({ payload: responseError }));
            })
          );
      })
    )
  );

  loginEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchLoginAction),
      switchMap(({ data }) => {
        console.log('From Request', data);
        return this.httpClient
          .post(
            'https://clothingapp-production-681d.up.railway.app/api/v1/auth/login',
            data
          )
          .pipe(
            map((responseSuccess: any) => {
              console.log('Success : ', responseSuccess);
              return getLoginResponseAction({ payload: responseSuccess });
            }),
            catchError((responseError: any) => {
              console.log('Error : ', responseError);
              return of(getLoginResponseAction({ payload: responseError }));
            })
          );
      })
    )
  );
}

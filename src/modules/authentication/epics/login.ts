import { from, of} from 'rxjs'
import { ofType, ActionsObservable } from 'redux-observable'
import { switchMap, map, catchError, flatMap } from 'rxjs/operators'
import { requestingAuthentication } from '../constants/login'
import { authenticate } from '../../../services/authentication/login'
import { receivedAuthenticationAction, failAuthenticationAction, saveLoginTokenAction } from '../actions/login'
import { ErrorData } from '../../../services/error/error-message'

export const loginEpic = (action$: ActionsObservable<any>) => action$.pipe(
  ofType(requestingAuthentication),
  switchMap(
    (data) => from(authenticate(data.payload.credential))
    .pipe(
      flatMap((token) => [receivedAuthenticationAction(!!token), saveLoginTokenAction(token)]),
      catchError((error: ErrorData) => of(failAuthenticationAction(error)))
    )
  )
)

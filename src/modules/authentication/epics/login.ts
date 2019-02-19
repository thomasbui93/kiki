import { from, of} from 'rxjs'
import { ofType, ActionsObservable } from 'redux-observable'
import { switchMap, map, catchError } from 'rxjs/operators'
import { requestingAuthentication } from '../constants/login'
import { authenticate } from '../../../services/authentication/login'
import { receivedAuthenticationAction, failAuthenticationAction } from '../actions/login'
import { ErrorData } from '../../../services/error/error-message'

export const loginEpic = (action$: ActionsObservable<any>) => action$.pipe(
  ofType(requestingAuthentication),
  switchMap(
    ({ payload }) => from(authenticate(payload))
    .pipe(
      map((isLogin) => receivedAuthenticationAction(isLogin)),
      catchError((error: ErrorData) => of(failAuthenticationAction(error)))
    )
  )
)

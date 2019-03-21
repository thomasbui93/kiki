export type ErrorData = {
  message: string,
  errorCode: string
}

export const manufactureError = ({ message, errorCode }: Partial<ErrorData>): ErrorData =>
  ({
    message: (message ? message : 'Unexpected error has error'),
    errorCode: (errorCode ? errorCode : 'GEN-1')
  })

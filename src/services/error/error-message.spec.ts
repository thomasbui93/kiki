import { manufactureError } from "./error-message"

describe('manufactureError', () => {
  it('should correct form error message given correct data', () => {
    expect(manufactureError({
      errorCode: '101',
      message: 'test'
    })).toEqual({
      errorCode: '101',
      message: 'test'
    })
  })
  it('should correct form error message given missing data', () => {
    expect(manufactureError({
      errorCode: '101'
    })).toEqual({
      errorCode: '101',
      message: 'Unexpected error has error'
    })
    expect(manufactureError({
      message: 'test'
    })).toEqual({
      errorCode: 'GEN-1',
      message: 'test'
    })
  })
})

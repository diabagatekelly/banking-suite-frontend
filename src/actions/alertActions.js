export function alertError(message) {
    return {
      type: 'ERROR',
      message: message,
    }
  } 

  export function alertSuccess(message) {
    return {
      type: 'SUCCESS',
      message: message
    }
}
export const sendMessage = message => {
  if (isValidString(message)) {
    return Promise.resolve(`Received message: ${message}`)
  } else {
    return Promise.reject(new Error('Invalid message was given!'))
  }
}

const isValidString = str => {
  return str !== undefined && str !== null && typeof str === 'string'
}

import { sendMessage } from './index'

describe('#sendMessage', () => {
  it('should resolve with a message', done => {
    const message = 'Hi mom!'
    sendMessage(message)
      .then(response => {
        expect(response).toBe(`Received message: ${message}`)
        done()
      })
      .catch(done)
  })

  it('should reject with a message', done => {
    const invalidMessage = null
    sendMessage(invalidMessage)
      .then(done)
      .catch(error => {
        expect(error).toStrictEqual(new Error('Invalid message was given!'))
        done()
      })
  })
})

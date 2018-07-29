import {doSomething} from './client'

describe('doSomething', () => {
  it('should do something', () => {
    expect(doSomething('hi')).toEqual('hi')
  })
})

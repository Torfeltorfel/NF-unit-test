import { describe, expect, it } from '@jest/globals'
import { replaceName } from './replaceName'

describe('replaceName', () => {
  it('replaces "Name" with another one', () => {
    const result = replaceName('Hello Jane', 'Jane', 'Dolly')
    expect(result).toBe('Hello Dolly')
  })
})

describe('replaceName', () => {
  it('replaces "Name" with another one', () => {
    const result = replaceName('Hello Jane', 'Jane', 'Dolly')
    expect(result).toBe('Hello Dolly')
  })
})

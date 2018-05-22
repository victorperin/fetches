import { createClient } from '../src/client'
import http, { getHTTPMethods } from '../src/http'

describe('HTTP Module', () => {
  test('http module must have the method getHTTPMethods', () => {
    expect(http.getHTTPMethods).toBeDefined()
    expect(getHTTPMethods).toBeDefined()
  })
  test('getHTTPMethods should return an object with the http methods', () => {
    const httpMethods = ['post', 'get', 'upload', 'patch', 'put', 'remove']
    const uri = 'http://example.com/api/v1/'
    const client = createClient(uri)
    const keys = Object.keys(getHTTPMethods(client))
    expect(keys).toEqual(expect.arrayContaining(httpMethods))
  })
  test('getHTTPMethods needs a client as parameter', () => {
    expect(() => {
      getHTTPMethods()
    }).toThrow()
  })
})
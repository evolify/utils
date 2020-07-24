import * as dom from '../src'

test('dom', () => {
  expect(dom.className("btn", undefined && "disabled")).toBe("btn")
})

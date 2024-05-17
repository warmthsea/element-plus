import { nextTick, ref } from 'vue'
import { describe, expect, test } from 'vitest'

describe('DragBox.vue', () => {
  test('render test', async () => {
    await nextTick()
    expect(true).toEqual(true)
  })
})

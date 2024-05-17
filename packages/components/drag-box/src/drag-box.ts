import { buildProps, isString } from '@element-plus/utils'
import { useAriaProps } from '@element-plus/hooks'

import type { ExtractPropTypes } from 'vue'
import type DragBox from './drag-box.vue'

export const dragBoxProps = buildProps({
  /**
   * @description whether to disable
   */
  disabled: Boolean,
  id: {
    type: String,
    default: undefined,
  },
  /**
   * @description native `name` attribute
   */
  name: String,
  /**
   * @deprecated same as `label` in native input
   */
  label: String,
  ...useAriaProps(['ariaLabel']),
})

export type DragBoxProps = ExtractPropTypes<typeof dragBoxProps>

export const dragBoxEmits = {
  change: (value: string) => isString(value),
  clear: () => true,
}
export type DragBoxEmits = typeof dragBoxEmits

export type DragBoxInstance = InstanceType<typeof DragBox>

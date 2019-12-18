/** @jsx jsx */

import { Editor } from 'slate'
import { jsx } from '../../..'

export const run = editor => {
  Editor.move(editor, { edge: 'end' })
}

export const input = (
  <editor>
    <block>
      one two t<cursor />
      hree
    </block>
  </editor>
)

export const output = (
  <editor>
    <block>
      one two t<anchor />h<focus />
      ree
    </block>
  </editor>
)

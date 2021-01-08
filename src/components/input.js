import React from 'react'
import { attachEventProps } from '@aws-amplify/ui-react/lib-esm/react-component-lib/utils'

export const InputComponent = (props) => {
    return (
        <input
        onChange={props.setData}
        placeholder={props.text}
        value={props.value}
      />
    )
}
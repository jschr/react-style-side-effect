import { Children } from 'react'
import withSideEffect from 'react-side-effect'

export default function createStyleSideEffect(element, name) {
  function StyleSideEffect({ children }) {
    return Children.only(children)
  }

  if (name) {
    StyleSideEffect.displayName = name
  }

  function reducePropsToState(propsList) {
    const classNames = []
    let style = {}

    propsList.forEach((props) => {
      if (props.style) {
        style = { ...style, ...props.style }
      }

      if (props.className) {
        classNames.push(props.className)
      }
    })

    return { classNames, style }
  }

  function handleStateChangeOnClient({ classNames, style }) {
    element.setAttribute('class', classNames.join(' '))

    for (const key in style) {
      element.style[key] = style[key]
    }
  }

  return withSideEffect(
    reducePropsToState,
    handleStateChangeOnClient
  )(StyleSideEffect)
}

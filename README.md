React Style Side Effect
=========================

[![npm](https://img.shields.io/npm/v/react-style-side-effect.svg?style=flat-square)](https://www.npmjs.com/package/react-style-side-effect)

Declaritvely style elements that exist outside of the React tree. Works great with css-in-js libraries such as:
- [aphrodite](https://github.com/Khan/aphrodite)

## Installation

```
npm install --save react-style-side-effect
```

## Basic Usage

```js
import React from 'react'
import createStyleSideEffect from 'react-style-side-effect'

const HtmlStyle = createStyleSideEffect(document.docElement)
const BodyStyle = createStyleSideEffect(document.body)
const RootStyle = createStyleSideEffect(document.getElementById('root'))

export default function MyApp() {
  return (
    <HtmlStyle className='htmlClass'>
      <BodyStyle className='bodyClass'>
        <RootStyle className='rootClass'>
          ...
        </RootStyle>
      </BodyStyle>
    </HtmlStyle>
  )
}
```

## Usage with Aphrodite

```js
import React from 'react'
import { StyleSheet, css } from 'aphrodite'
import createStyleSideEffect from 'react-style-side-effect'

const HtmlStyle = createStyleSideEffect(document.docElement)

const styles = StyleSheet.create({
  html: {
    fontSize: '14px' // base font size for rem units
  }
})

export default function MyApp() {
  return (
    <HtmlStyle className={ css(styles.html) }>
      ...
    </HtmlStyle>
  )
}
```

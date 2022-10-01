/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Wrapper } from './styles'

export default ({
  children,
  isInline = false,
  gap = 'small',
  customWidth = 'auto',
  customHeight = 'auto',
  fullWidth = true,
  fullHeight = true,
  direction = 'row',
  justify = 'space-between',
  wrap = 'wrap',
  grow = false,
  shrink = true,
  basis = true,
  alignItems = 'center',
  alignContent,
  onClick = () => { },
  ...rest
}) =>
  <Wrapper
    data-is-inline={isInline}
    data-gap={gap}
    data-align-items={alignItems}
    data-align-content={alignContent}
    data-full-width={fullWidth}
    data-custom-width={customWidth}
    data-full-height={fullHeight}
    data-custom-height={customHeight}
    data-direction={direction}
    data-justify={justify}
    data-wrap={wrap}
    data-grow={grow}
    data-basis={basis}
    data-shrink={shrink}
    onClick={onClick}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
  >
    {children}
  </Wrapper>

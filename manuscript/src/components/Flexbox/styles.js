import styled from 'styled-components'

const gapItems = {
  none: '0px',
  small: '4px',
  medium: '8px',
  large: '16px',
  huge: '24px'
}

const single = reqGap => gapItems[reqGap]
const double = reqGap => `${gapItems[reqGap].replace('px', '') * 2}px`

export const Wrapper = styled.div.attrs(props => ({
  style: {
    flexDirection: props['data-direction'],
    gap: !props['data-direction'].includes('row')
      ? `${single(props['data-gap'])} ${double(props['data-gap'])}`
      : `${double(props['data-gap'])} ${single(props['data-gap'])}`,
    justifyContent: props['data-justify'],
    alignItems: props['data-align-items'],
    alignContent: props['data-align-content'],
    flexWrap: props['data-wrap'],
    display: props['data-is-inline'] ? 'inline-flex' : 'flex',
    flex: `
      ${props['data-grow'] ? '1' : '0'}
      ${props['data-shrink'] ? '1' : '0'}
      ${props['data-basis'] ? 'auto' : '0'}
    `,
  },
}))`
  align-items: center;

  width: ${props => props['data-full-width'] ? '100%' : props['data-custom-width']};
  height: ${props => props['data-full-height'] ? '100%' : props['data-custom-height']};
`

import styled from '@emotion/styled'
import { Platform } from '../types'
import { HEIGHT } from '../constants'

const Window = styled.div<{ platform: Platform }>`
  position: relative;
  top: ${(props) => HEIGHT[props.platform]};
  height: calc(100vh - ${(props) => HEIGHT[props.platform]});
`

export default Window

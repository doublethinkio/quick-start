import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import icons from './Icons'
import { ControlsProps } from '../../types'

const {
  maximize: Maximize,
  minimize: Minimize,
  fullscreen: Fullscreen,
  close: Close,
} = icons.win32

const Container = styled.div`
  display: grid;
  position: absolute;
  grid-column: 3;
  grid-template-columns: repeat(3, 46px);
  top: 0;
  right: 0;
  height: 100%;
  -webkit-app-region: no-drag;
`

const Button = styled.div`
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  user-select: none;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`

const MinimizeButton = styled(Button)`
  grid-column: 1;
`
const MaximizeButton = styled(Button)<{ showMaximize: boolean }>`
  grid-column: 2;

  svg:nth-of-type(1) {
    opacity: ${(props) => (props.showMaximize ? '0' : '1')};
    display: ${(props) => (props.showMaximize ? 'none' : 'block')};
  }

  svg:nth-of-type(2) {
    opacity: ${(props) => (props.showMaximize ? '1' : '0')};
    display: ${(props) => (props.showMaximize ? 'block' : 'none')};
  }
`

const CloseButton = styled(Button)`
  grid-column: 3;
  &:hover {
    background: #e81123 !important;
  }
  &:active {
    svg {
      filter: invert(1);
    }
  }
`

const ControlsWindows: React.FC<ControlsProps> = ({
  minimize,
  close,
  unmaximize,
  maximize,
  isMaximize,
}) => {
  return useMemo(
    () => (
      <Container>
        <MinimizeButton onClick={minimize}>
          <Minimize fill="#fff" />
        </MinimizeButton>
        <MaximizeButton
          showMaximize={isMaximize}
          onClick={isMaximize ? unmaximize : maximize}
        >
          <Maximize fill="#fff" />
          <Fullscreen fill="#fff" />
        </MaximizeButton>
        <CloseButton onClick={close}>
          <Close fill="#fff" />
        </CloseButton>
      </Container>
    ),
    [close, isMaximize, maximize, minimize, unmaximize]
  )
}

export default ControlsWindows

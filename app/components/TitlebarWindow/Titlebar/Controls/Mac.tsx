import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import icons from './Icons'
import { ControlsProps } from '../../types'

const {
  maximize: Maximize,
  minimize: Minimize,
  fullscreen: Fullscreen,
  close: Close,
} = icons.darwin

const Container = styled.div`
  display: grid;
  position: absolute;
  grid-column: 1;
  grid-template-columns: repeat(3, 18px);
  align-items: center;
  top: 0;
  left: 0;
  padding-left: 5px;
  height: 100%;
  -webkit-app-region: no-drag;
`

const Button = styled.div`
  grid-row: 1 / span 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 0px 4px;
  padding: 0px;
  user-select: none;
  line-height: 0;
  border: none;
  box-shadow: none;
`

const MinimizeButton = styled(Button)`
  grid-column: 2;
  border: 1px solid #e1a116;
  background-color: #ffbd2e;

  & svg {
    width: 6px;
    height: 6px;
    opacity: 0;
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }

  &:active {
    border-color: #ad7d15;
    background-color: #bf9123;
  }
`
const MaximizeButton = styled(Button)<{ showMaximize: boolean }>`
  grid-column: 3;
  border: 1px solid #12ac28;
  background-color: #28c940;
  & svg:nth-of-type(1) {
    width: 6px;
    height: 6px;
    opacity: 0;
  }

  & svg:nth-of-type(2) {
    width: 6px;
    height: 6px;
    opacity: 0;
    display: none;
  }

  &:hover {
    svg:nth-of-type(1) {
      opacity: ${(props) => (props.showMaximize ? '0' : '1')};
      display: ${(props) => (props.showMaximize ? 'none' : 'block')};
    }

    svg:nth-of-type(2) {
      opacity: ${(props) => (props.showMaximize ? '1' : '0')};
      display: ${(props) => (props.showMaximize ? 'block' : 'none')};
    }
  }

  &:active {
    border-color: #128622;
    background-color: #1f9a31;
  }
`

const CloseButton = styled(Button)`
  grid-column: 1;
  border: 1px solid #e2463f;
  background-color: #ff5f57;

  & svg {
    width: 4px;
    height: 4px;
    opacity: 0;
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }

  &:active {
    border-color: #ad3934;
    background-color: #bf4943;
  }
`

const ControlsMac: React.FC<ControlsProps> = ({
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
          <Minimize />
        </MinimizeButton>
        <MaximizeButton
          showMaximize={isMaximize}
          onClick={isMaximize ? unmaximize : maximize}
        >
          <Maximize />
          <Fullscreen />
        </MaximizeButton>
        <CloseButton onClick={close}>
          <Close />
        </CloseButton>
      </Container>
    ),
    [close, isMaximize, maximize, minimize, unmaximize]
  )
}

export default ControlsMac

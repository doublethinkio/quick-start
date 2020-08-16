import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import type * as CSS from 'csstype'
import Title, { TitleProps } from './Title'
import Controls from './Controls'
import { Platform } from '../types'
import { HEIGHT } from '../constants'
import { getDefaultPlatform } from '../utils'

/**
 * @see https://github.com/binaryfunt/electron-seamless-titlebar-tutorial
 */

const Container = styled.div<{
  platform: Platform
  backgroundColor?: CSS.Property.BackgroundColor
}>`
  position: fixed;
  height: ${(props) => HEIGHT[props.platform]};
  width: 100%;
  padding: 4px;
  color: #fff;
  background-color: ${(props) => props.backgroundColor ?? 'transparent'};
`

const DragRegion = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  width: 100%;
  height: 100%;
  -webkit-app-region: drag;
`

export interface TitlebarProps extends TitleProps {
  backgroundColor?: CSS.Property.BackgroundColor
}
export const Titlebar: React.FC<TitlebarProps> = ({
  title,
  platform,
  position,
  backgroundColor,
}) => {
  const platform_ = platform ?? getDefaultPlatform()

  return useMemo(
    () => (
      <Container platform={platform_} backgroundColor={backgroundColor}>
        <DragRegion>
          <Title title={title} platform={platform_} position={position} />
          <Controls platform={platform_} />
        </DragRegion>
      </Container>
    ),
    [backgroundColor, platform_, position, title]
  )
}

export default Titlebar

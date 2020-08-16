import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import useOnDocumentTitle from 'app/common/hooks/useOnDocumentTitle'
import { Platform } from '../../types'
import { TitlebarPosition } from '../../constants'

const Text = styled.div`
  mix-blend-mode: difference;
`

const Container = styled.div<{ position: number; platform: Platform }>`
  grid-column: ${(props) => props.position};
  display: flex;
  align-items: center;
  ${(props) =>
    props.platform === 'win32'
      ? 'margin-left: 8px'
      : 'margin-right: 18px;flex-direction: row-reverse'};
  overflow: hidden;
  font-family: 'Segoe UI', sans-serif;
  font-size: 12px;
  & ${Text} {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: ${(props) => (props.platform === 'win32' ? 1.5 : 1)};
    margin: ${(props) => (props.position === 2 ? 'auto' : 0)};
  }
`

export interface TitleProps {
  title?: string
  position?: 'side' | 'center'
  platform: Platform
}
export const Title: React.FC<TitleProps> = ({ title, position, platform }) => {
  const documentTitle = useOnDocumentTitle(title)
  const side =
    platform === 'win32' ? TitlebarPosition.left : TitlebarPosition.right

  return useMemo(
    () => (
      <Container
        position={position === 'side' ? side : TitlebarPosition.center}
        platform={platform}
      >
        <Text>{documentTitle}</Text>
      </Container>
    ),
    [documentTitle, platform, position, side]
  )
}

export default Title

import React, { useMemo } from 'react'
import Titlebar, { TitlebarProps } from './Titlebar'
import Window from './Window'

export type TitlebarWindowProps = TitlebarProps
const TitlebarWindow: React.FC<TitlebarWindowProps> = ({
  children,
  title,
  platform,
  position,
  backgroundColor,
}) => {
  return useMemo(
    () => (
      <>
        <Titlebar
          title={title}
          platform={platform}
          position={position}
          backgroundColor={backgroundColor}
        />
        <Window platform={platform}>{children}</Window>
      </>
    ),
    [backgroundColor, children, platform, position, title]
  )
}

export default TitlebarWindow

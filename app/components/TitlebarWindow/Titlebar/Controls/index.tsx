import React, { useCallback, useMemo, useEffect } from 'react'
import { remote } from 'electron'
import { useBoolean } from 'react-use'
import ControlsWindows from './Windows'
import ControlsMac from './Mac'
import { Platform } from '../../types'

const currentWindow = remote.getCurrentWindow()

export interface ControlsProps {
  platform: Platform
}
const Controls: React.FC<ControlsProps> = ({ platform }) => {
  const minimize = useCallback(() => {
    currentWindow.minimize()
  }, [])

  const maximize = useCallback(() => {
    currentWindow.maximize()
  }, [])

  const unmaximize = useCallback(() => {
    currentWindow.unmaximize()
  }, [])

  const close = useCallback(() => {
    currentWindow.close()
  }, [])

  const [isMaximize, toggle] = useBoolean(currentWindow.isMaximized())

  useEffect(() => {
    const toggleMaximize = () => void toggle(true)
    const toggleUnmaximize = () => void toggle(false)

    currentWindow.on('maximize', toggleMaximize)
    currentWindow.on('unmaximize', toggleUnmaximize)

    return () => {
      currentWindow.off('maximize', toggleMaximize)
      currentWindow.off('unmaximize', toggleUnmaximize)
    }
  })

  const hander = useMemo(
    () => ({
      minimize,
      maximize,
      unmaximize,
      close,
      isMaximize,
    }),
    [close, isMaximize, maximize, minimize, unmaximize]
  )

  return useMemo(
    () =>
      platform === 'darwin' ? (
        <ControlsMac {...hander} />
      ) : (
        <ControlsWindows {...hander} />
      ),
    [hander, platform]
  )
}

export default Controls

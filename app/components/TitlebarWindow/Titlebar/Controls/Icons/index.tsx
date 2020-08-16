import { Icons } from 'app/components/TitlebarWindow/types'
import { ReactComponent as MaximizeWindows } from './svg/windows/maximize.svg'
import { ReactComponent as MinimizeWindows } from './svg/windows/minimize.svg'
import { ReactComponent as CloseWindows } from './svg/windows/close.svg'
import { ReactComponent as FullscreenWindows } from './svg/windows/fullscreen.svg'
import { ReactComponent as MaximizeMac } from './svg/mac/maximize.svg'
import { ReactComponent as MinimizeMac } from './svg/mac/minimize.svg'
import { ReactComponent as CloseMac } from './svg/mac/close.svg'
import { ReactComponent as FullscreenMac } from './svg/mac/fullscreen.svg'

const icons: Icons = {
  darwin: {
    maximize: MaximizeMac,
    minimize: MinimizeMac,
    close: CloseMac,
    fullscreen: FullscreenMac,
  },
  win32: {
    maximize: MaximizeWindows,
    minimize: MinimizeWindows,
    close: CloseWindows,
    fullscreen: FullscreenWindows,
  },
}
export default icons

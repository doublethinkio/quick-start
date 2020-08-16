export type PickUnionTypes<M, L extends M> = L
export type Platform = PickUnionTypes<NodeJS.Platform, 'darwin' | 'win32'>
export type Height = { [key in Platform]: string }
export interface ControlsProps {
  minimize: () => void
  close: () => void
  unmaximize: () => void
  maximize: () => void
  isMaximize: boolean
}
export type ControlsType = { [key in Platform]: React.FC<ControlsProps> }
type ReactSVGComponent = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & { title?: string }
>
export type Icons = {
  [key in Platform]: {
    fullscreen: ReactSVGComponent
    close: ReactSVGComponent
    minimize: ReactSVGComponent
    maximize: ReactSVGComponent
  }
}

export const isPlatform = (str: string): str is Platform => {
  if (str !== 'darwin' && str !== 'win32') return false
  return true
}

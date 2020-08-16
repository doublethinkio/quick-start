import { Platform, isPlatform } from '../types'

/* eslint-disable import/prefer-default-export */
export const getDefaultPlatform = (): Platform => {
  const { platform } = process
  if (isPlatform(platform)) return platform
  return 'darwin'
}

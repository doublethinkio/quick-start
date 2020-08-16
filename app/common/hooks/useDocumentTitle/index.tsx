import { useRef, useEffect } from 'react'

export interface UseTitleOptions {
  restoreOnUnmount?: boolean
}
const DEFAULT_USE_TITLE_OPTIONS: UseTitleOptions = {
  restoreOnUnmount: false,
}
function useDocumentTitle(
  title: string,
  options: UseTitleOptions = DEFAULT_USE_TITLE_OPTIONS
) {
  const prevTitleRef = useRef(document.title)

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const prevTitle = prevTitleRef.current
    document.title = title

    if (!options.restoreOnUnmount) return void 0

    return () => {
      document.title = prevTitle
    }
  }, [options, title])
}

export default useDocumentTitle

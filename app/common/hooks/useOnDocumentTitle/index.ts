import { useState, useMemo, useCallback } from 'react'
import invariant from 'tiny-invariant'

import useMutationObserver from '../useMutationObserver'
import useDocumentTitle from '../useDocumentTitle'

/**
 * @see https://stackoverflow.com/a/29540461/11791657
 */
export function useOnDocumentTitle(title = document.title): string {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const [title_, setTitle] = useState(title)
  const titleElement = useMemo(() => document.querySelector('title'), [])
  const onDoucmentTitle = useCallback(() => {
    setTitle(document.title)
  }, [])
  const options = useMemo<MutationObserverInit>(
    () => ({
      characterData: true,
      childList: true,
    }),
    []
  )

  invariant(
    titleElement,
    'The title element does not exist, please check your HTML file!'
  )

  useMutationObserver(titleElement, onDoucmentTitle, options)

  useDocumentTitle(title)

  return title_
}

export default useOnDocumentTitle

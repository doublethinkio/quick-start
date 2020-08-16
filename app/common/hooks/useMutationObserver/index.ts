import { useEffect, useMemo } from 'react'

/**
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver
 */
export function useMutationObserver(
  targetNode: Node,
  callback: MutationCallback,
  config: MutationObserverInit
): MutationObserver {
  const observer = useMemo(() => new MutationObserver(callback), [callback])

  useEffect(() => {
    if (targetNode) {
      observer.observe(targetNode, config)
      return () => {
        observer.disconnect()
      }
    }

    return void 0
  }, [targetNode, config, observer])

  return observer
}

export default useMutationObserver

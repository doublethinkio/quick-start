import type { EasyPeasyConfig, PersistConfig, PersistStorage } from 'easy-peasy'
import { createLogger } from 'redux-logger'
import type { StoreModel } from 'app/common/third-party/easy-peasy/models'
import createElectronStorage from 'redux-persist-electron-storage'
import ElectronStorage from 'electron-store'
import { isTest } from 'app/common/utils/is'
import themes from './themes'

const instanceCache = new Map()
function getStorage() {
  let storage: PersistStorage | undefined

  if (!isTest()) {
    if (instanceCache.has('storage')) {
      storage = instanceCache.get('storage')
    } else {
      const electronStore = new ElectronStorage()
      storage = createElectronStorage({ electronStore })
      instanceCache.set('storage', storage)
    }
    /**
     * @see https://github.com/sindresorhus/electron-store#api
     */
    const electronStore = new ElectronStorage()
    storage = createElectronStorage({ electronStore })
  }

  return storage
}

class Config {
  public easyPeasy = {
    /**
     * @see https://easy-peasy.now.sh/docs/api/store-config.html
     */
    get storeConfig(): EasyPeasyConfig {
      const middleware = []

      const excludeLoggerEnvs = ['test', 'production']
      const shouldIncludeLogger = !excludeLoggerEnvs.includes(
        process.env.NODE_ENV || ''
      )

      if (shouldIncludeLogger) {
        /**
         * @see https://github.com/LogRocket/redux-logger
         */
        const logger = createLogger({
          level: 'info',
          collapsed: true,
        })

        middleware.push(logger)
        // TODO: https://github.com/ctrlplusb/easy-peasy/issues/304
      }

      return {
        name: 'EasyPeasyStore',
        devTools: true,
        disableImmer: false,
        middleware,
      }
    },
    /**
     * @see https://easy-peasy.now.sh/docs/api/persist.html
     * @see https://github.com/rt2zz/redux-persist#transforms
     * @see https://github.com/rt2zz/redux-persist#storage-engines
     * @see https://github.com/psperber/redux-persist-electron-storage
     * @see https://github.com/sindresorhus/electron-store
     */
    get persistConfig(): PersistConfig<StoreModel> {
      const storage = getStorage()

      return {
        blacklist: [],
        whitelist: [],
        mergeStrategy: 'merge',
        transformers: [],
        storage,
      }
    },
  }

  public theme = themes.default
}

const config = new Config()

export default config

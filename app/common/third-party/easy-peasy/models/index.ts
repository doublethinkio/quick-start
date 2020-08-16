// https://easy-peasy.now.sh/docs/typescript-tutorial/create-your-store.html#interface-declaration
import universe, { UniverseModel } from './universe'
import counter, { CounterModel } from './counter'

export interface StoreModel {
  universe: UniverseModel
  counter: CounterModel
}

export const storeModel: StoreModel = {
  universe,
  counter,
}

export default storeModel

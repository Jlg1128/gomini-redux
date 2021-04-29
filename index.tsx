import events from 'events';
// @ts-ignore
import { Provider } from './provider';
import connect from './connect';
import GoMiniRedux from './types/index';

const eventEmitter = new events.EventEmitter();

function createStore(reducer: GoMiniRedux.Reducer) {
  let state: GoMiniRedux.ConnectState<any> = {};
  let isInitial = true;
  const getState: GoMiniRedux.GetState = () => state;
  const subscribe = (listener: GoMiniRedux.Listener) => eventEmitter.on('statechange', listener);
  const dispatch: GoMiniRedux.Dispatch = ({ type, payload }: GoMiniRedux.AnyAction) => {
    // @ts-ignore
    const currentState = reducer(isInitial ? undefined : state, { type, payload });
    if (isInitial === true || currentState !== getState()) {
      state = currentState;
      eventEmitter.emit('statechange');
    }
    isInitial = false;
  };
  // subscribe(() => console.log('store变化了，当前的store是', getState()));

  dispatch({ type: '@init', payload: undefined });

  return {
    getState,
    subscribe,
    dispatch,
  };
}

export { connect, Provider };

export default createStore;

/* eslint-disable @typescript-eslint/ban-types */
import React, { ComponentClass } from 'react';

declare namespace GoMiniRedux {

   type ReduxStore = {
      getState: GetState,
      subscribe: Subscribe,
      dispatch: Dispatch,
   };

   type CreateStore = (reducer: Reducer) => ReduxStore;

   type Reducer = (state: ConnectState<any>, action: DispatchAction<any>) => ConnectState<any>;

   type Subscribe = (listener: Listener) => void;

   type Listener = () => void;

   type MapState = (state: ConnectState<any>) => Partial<ConnectState<any>>;

   type Dispatch = (action: DispatchAction<any>) => void;

   type Connect = (mapState: MapState) =>
   (Component: React.FC | React.ComponentClass) => React.ComponentClass | React.FC;

   type GetState = () => ConnectState<any>;

   type ConnectState<T extends object> = T;

   type DispatchAction<T extends AnyAction> = T;

   type AnyAction = {
      type: string | number;
      payload: object;
   };
}

export = GoMiniRedux;
export as namespace GoMiniRedux;

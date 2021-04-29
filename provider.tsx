import React from 'react';
import StoreContext from './context';
import GoMiniRedux from './types/index';

type Props = { store: GoMiniRedux.ReduxStore, children: React.ReactNode };

class Provider extends React.Component<Props> {
  componentDidMount() {
    if (!this.props.store) {
      throw new Error('store没传还是咋滴');
    }
    if (!this.props.children
      // @ts-ignore
      || ((this.props.children && this.props.children.$$typeof) !== Symbol.for('react.element'))) {
      throw new Error('请确认children是否存在或者children是否为react.element');
    }
  }

  render() {
    const { store, children } = this.props;
    return (
      // @ts-ignore
      <StoreContext.Provider value={store}>
        {children}
      </StoreContext.Provider>
    );
  }
}

export { StoreContext, Provider };

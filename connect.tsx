import React from 'react';
import StoreContext from './context';
import GoMiniRedux from './types/index';

function connect(mapState: GoMiniRedux.MapState) {
  type Props = {
    dispatch: GoMiniRedux.Dispatch;
  }

  type State = {
    reduxState: GoMiniRedux.ConnectState<any>;
    store: GoMiniRedux.ReduxStore | null;
  }
  return (Component: React.FC<Props> | React.ComponentClass<Props>) => {
    class WrapperComponent extends React.Component<any, State> {
      static contextType = StoreContext;

      // @ts-ignore
      store: ReduxStore = null;

      constructor(props: any) {
        super(props);
        // @ts-ignore
        this.state = {
          reduxState: {},
          store: null,
        };
      }

      componentDidMount() {
        const store: GoMiniRedux.ReduxStore = this.context;
        store.subscribe(() => {
          this.setState({ reduxState: mapState(store.getState()) });
        });
        this.setState({ reduxState: mapState(store.getState()), store });
      }

      render() {
        return this.state.store ? <Component
          {...this.props}
          {...this.state.reduxState}
          dispatch={this.state.store.dispatch}
        />
          : null;
      }
    }
    return WrapperComponent;
  };
}

export default connect;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Dimensions, Image, KeyboardAvoidingView } from 'react-native';
import { Router, Stack, Scene, ActionConst } from 'react-native-router-flux';
import Drawer from 'react-native-drawer';

import Main from './screens/Main';
import Login from './screens/Login';
import Sidebar from './screens/Sidebar';

export default class App extends Component {

  closeDrawer = () => {
    this.drawer.close();
  };

  openDrawer = () => {
    this.drawer.open();
  };

  static childContextTypes = {
    openDrawer: PropTypes.func,
    closeDrawer: PropTypes.func
  };

  getChildContext() {
    return {
      openDrawer: this.openDrawer,
      closeDrawer: this.closeDrawer
    };
  }

  render() {

    return (
      <Drawer
        ref={(ref) => { this.drawer = ref }}
        content={<Sidebar />}
        onClose={() => this.closeDrawer()}

        side="left"
        type='overlay'
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        closedDrawerOffset={-3}
        styles={drawerStyles}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
        <Router>
          <Stack key='root' hideNavBar>
            <Scene key='main' component={Main} title='Main' />
            <Scene key='login' component={Login} title='Login' />
          </Stack>
        </Router>
      </Drawer>
    )
  }
}

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
  main: { paddingLeft: 3 }
}
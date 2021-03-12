import React, {Component} from 'react';

import NavigationUtil from "../navigator/NavigationUtils";
import SplashScreen from 'react-native-splash-screen'



class WelcomePage extends Component {
    componentDidMount() {
        // this.props.onThemeInit();
        this.timer = setTimeout(() => {
          // console.log(SplashScreen)
          //   SplashScreen.hide();
            NavigationUtil.resetToHomPage({
                navigation: this.props.navigation
            })
        }, 200);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return null;
    }
}


export default WelcomePage
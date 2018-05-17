/**
 * Created by chj on 2018/5/16.
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import PropTypes from 'prop-types';

export default class common extends Component<{}> {

    render() {
        return (
            <View style={styles.container}>


            </View>
        );
    }
}
common.propTypes = {
};
common.defaultProps = {
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
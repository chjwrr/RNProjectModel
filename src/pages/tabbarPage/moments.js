/**
 * Created by chj on 2018/4/17.
 */
import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { connect } from 'react-redux'
import Color from '../../constance/staticColor';

class moments extends Component {

    static navigationOptions = {
        headerTitle: '朋友圈',
        headerRight: (
            <TouchableOpacity style={{marginRight: 10}}>
                <Text>发布</Text>
            </TouchableOpacity>
        ),
        headerStyle: {elevation: 0, shadowOpacity: 0} // 导航条样式
    };

    constructor(props){
        super(props);

    }

    render() {
        return <View style={styles.container} >
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.PAGE_BG_COLOR
    },

});

function mapStateToProps(state) {
    return {

    }
}
function mapDispatchToProps(dispatch) {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(moments)
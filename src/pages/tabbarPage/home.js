/**
 * Created by chj on 2018/4/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

import Toast from '@remobile/react-native-toast';
import TimeManager from '../../utils/timeManager';
import communicationsManager from '../../utils/communicationsManager';


class home extends Component {

    static navigationOptions = {
        headerTitle: <Text>home</Text>,
        headerStyle: {elevation: 0, shadowOpacity: 0} ,// 导航条样式
        headerRight: (
            <View>
                <Text>home1</Text>
                <Text>home2</Text>
            </View>
        )}

    constructor(props){
        super(props)

    }

    componentDidMount() {
        console.log(TimeManager.getTimeDetailInfo(1526461800));
        console.log(TimeManager.formatterTime(1526461800,'YYYY-MM-DD hh:mm'));


    }

    render() {
        return <View style={styles.container}>
            <TouchableOpacity onPress={()=>{
                Toast.showShortCenter('toast')

            }}>
                <Text>Toast</Text>
            </TouchableOpacity>


        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
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
export default connect(mapStateToProps, mapDispatchToProps)(home)
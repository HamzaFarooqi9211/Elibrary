import React, { Component } from "react";
import {FontAwesome5} from '@expo/vector-icons'
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

class DrawerApp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView  style={{flex:1}}>
                    <TouchableOpacity style={{alignItems:'flex-end',margin:26}} onPress= {this.props.navigation.openDrawer}>
        <FontAwesome5 name='bars' size={24} color='#f0f'/>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>  <Text>
            {this.props.name} Screen
        </Text></View>

        
                    </TouchableOpacity>
                </SafeAreaView>
            </View>
        );
    }
}
export default DrawerApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
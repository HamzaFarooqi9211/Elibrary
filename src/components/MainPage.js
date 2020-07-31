import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button,
    ImageBackground
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const image = { uri: "https://cdn.dribbble.com/users/2278077/screenshots/6409178/isouv-edu-01-concept-02_2x.jpg" };

const MainPage = (props) => (
    
     <ImageBackground source={image} style={styles.image}>
     
  
       <View style={styles.bottom}>

       <View style={styles.body}>

       <Text style={styles.heading}>
           Pocket Library
       </Text>
       <Text style={styles.infoHeading}>
           This is infoHeading 
       </Text>
       <Text style={styles.info}>
           This is Info ajshdkajhsda kajdkajsd aksdjahskdja cakjsdhkajsd a 
           skjdhaksjd ackajsdhkajsdh hkjahsdkjash kajshdkaj kajshdkajhsdkajd 
           kajhdkajshd jkhkjhk jhghj jgjhgjh eretre uy
       </Text>
       <View style={styles.buttons}>

       <TouchableOpacity style={styles.loginBtn} onPress={()=>props.navigation.navigate('SignIn')} >
           <Text style={{color:'#fff'}}> Login </Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.loginBtn} onPress={()=>props.navigation.navigate('HomePage')}>
           <Text style={{color:'#fff'}}> Get Books </Text>
       </TouchableOpacity>
       </View>

       </View>

       </View>
       </ImageBackground>
    
    )
export default MainPage;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: "column"
       
    },
    bottom:{
        position:"absolute",
        width:'100%',
        height:'37%',
        backgroundColor:'#f0f0f0',
        borderTopLeftRadius:40,
        borderTopRightRadius:40,
        justifyContent:'center',
        alignItems:'center'
    },
    body:{
        width:'80%',
        height:'80%',
        alignItems:'flex-start',
        justifyContent:'space-between'

    },
    buttons:
    {
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    loginBtn:{
        backgroundColor:'#ff6060',
        width:110,
        height:45,
        borderRadius:15,
        alignItems:'center',
        justifyContent:'center'

    },
    image:{
        height:'100%',
        width:'100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        resizeMode: "cover"
    },
    heading:{
        fontWeight:'bold',
        fontSize:29
    },
    info:{
        color:'#000000AB',
        fontSize:12,
        bottom:20,
        fontWeight:"100"
    },
    infoHeading:{
        fontSize:13,
        fontWeight:'bold',
        bottom:20
    }
   


});
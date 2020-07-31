import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    ImageBackground
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Linking from 'expo-linking';



const BooksProfile = (props) => (
    <View style={styles.container}>
    <View style={styles.background}>


      <View style={styles.top}>

      </View>
      <View style={styles.bottom}>

      </View>
      </View>
      <View style={styles.main}>

      <View style={styles.innerView}>
      <View style={{alignItems:'center',justifyContent:'center',height:60}}>
      <Text style={{color:'#fff',fontWeight:'bold',}}>{props.route.params.title}</Text>
      </View>

      <View style={styles.bookImageContainer}>
          <ImageBackground  source={{uri:props.route.params.thumbnail}} imageStyle={styles.imageStyles} style={styles.bookImage} ></ImageBackground>
      
          <View style={{width:'100%',height:'100%',alignItems:'center',justifyContent:'flex-start'}}>
      <TouchableOpacity style={styles.preview} onPress={()=>Linking.openURL(props.route.params.previewLink)}>
           <Text style={{color:'#fff',fontSize:10}}> Preview book </Text>
       </TouchableOpacity>
       <TouchableOpacity style={styles.preview} onPress={()=>Linking.openURL(props.route.params.infoLink)}>
           <Text style={{color:'#fff',fontSize:10}}> Book Details </Text>
       </TouchableOpacity>
       <Text style={{color:'#fff',fontSize:12,alignSelf:'center',right:20,top:10}}>Rating : </Text>
      </View>
      </View>
      <View style={styles.lower}>
      <View style={styles.lowerTop}>

      <Text style={{fontWeight:'bold'}}> Discription </Text>
      </View>
      <View style={styles.lowerMid}>
    <Text>he book description is the pitch to the reader about why they should buy your book. When done right, 
    it directly drives book sales. There are so many examples of how book descriptions lead to huge changes in sales</Text>
      </View>

   
      </View>
     

      </View>

      </View>

      
    </View>
    )
export default BooksProfile;

const styles = StyleSheet.create({
    lowerMid:{

width:'80%',
height:'80%',
justifyContent:'center',
alignItems:'center',
},
    lowerTop:{
        height:40,
        
        justifyContent:'center',
        alignItems:'center'
    },
    preview:{
        backgroundColor:'#ff6060',
        width:90,
        height:30,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        margin:5
    },
    background:{
        flex:1
    },
    bookImage:{
        height:150,
        width:100,
        elevation:20
        

    },
    imageStyles:{

    },

    innerView:{
        position:'absolute',
        width:'86%',
        height:'93%',
        
        
      
    },
    lower:{
        flex:1,
        backgroundColor:'#fff',
        margin:30,
        elevation:20,
      
    },
    bookImageContainer:{
        flexDirection:'row',
        height:150,
        width:150,
        margin:30

    },
    main:{
        position:'absolute',
        
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    top:{
        flex:1,
        backgroundColor:'#9185d7',
        alignItems:"center",
        justifyContent:'center'
    },
    bottom:{
        flex:2
    },
    container: {
       flex:1
    }
});
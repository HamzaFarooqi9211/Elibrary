import React, { useState } from "react";

import { YellowBox } from 'react-native';
import _ from 'lodash';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
        _console.warn(message);
    }
};


import axios from 'axios'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    ActivityIndicator,
    Modal,

} from "react-native";
import { TextInput, ScrollView, FlatList } from "react-native-gesture-handler";

import * as firebase from 'firebase'
import 'firebase/firestore';


// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";



// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAmhHUyElB-Yx9VN3RxY7rpom1Lx4X77WA ",
    authDomain: "e-liberary-a8cc4.firebaseapp.com",
    databaseURL: "https://e-liberary-a8cc4.firebaseio.com",
    projectId: "e-liberary-a8cc4",
    storageBucket: "e-liberary-a8cc4.appspot.com",
    messagingSenderId: "1014021675526",
    appId: "1:1014021675526:android:31ebe73da3e9b530de4187",
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}







const image = { uri: "https://books.google.com/books/content?id=MZJDDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api" };


const HomePage = (props) => {
    const [booksData, setbooksData] = useState([]);
    const [dataDownloaded, setdataDownloaded] = useState(false);
    const [programmingBooks, setprogrammingBooks] = useState([]);
    const [moviesBooks, setmoviesBooks] = useState([])
    const [natureBooks, setnatureBooks] = useState([]);
    const [osBooks, setosBooks] = useState([]);
    const [apiKey, setapiKey] = useState('AIzaSyBOAGgPeaDN-xr9-_-12V6OAhCDNa8-aRU')
    const [showIndicator, setshowIndicator] = useState(true);
    //const [searchedText, setsearchedText] = useState(initialState);
    const [searchedData, setsearchedData] = useState('');
    const [searchedTextArray, setsearchedTextArray] = useState([])
    const [showSearch, setshowSearch] = useState(false);
    const fetchBooksData = async () => {
        await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + searchedData + '&key=' + apiKey + '&maxResults=30').then(data => {


              setsearchedTextArray(data.data.items);
              setshowSearch(true);
            //  storeDataToFirebase();


        })


    }
    const searchedText=(data)=>
    {
setsearchedData(data);
    }



    const loadData = async () => {
        const booksRef = firebase.firestore().collection('books');
        const snapShot = await booksRef.where('bookType', '==', 'Nature').get();
        if (snapShot.empty) {
            console.log('Nothing is here dude');
        }
        else {

            snapShot.forEach(element => {

                setosBooks((books) => [...books, element.data()]);

            });


        }



    }

    const loadMovies = async () => {
        const booksRef = firebase.firestore().collection('books');
        const snapShot = await booksRef.where('bookType', '==', 'MoviesBooks').get();
        if (snapShot.empty) {
            console.log('Nothing is here dude');
        }
        else {

            snapShot.forEach(element => {

                setmoviesBooks((books) => [...books, element.data()]);
                

            });


        }



    }

    const loadNatureData = async () => {
        const booksRef = firebase.firestore().collection('books');
        const snapShot = await booksRef.where('bookType', '==', 'OperatingSystem').get();
        if (snapShot.empty) {
            console.log('Nothing is here dude');
        }
        else {

            snapShot.forEach(element => {

                setnatureBooks((books) => [...books, element.data()]);

            });


        }
        setshowIndicator(false);
        console.log('band hoja bhai');


    }

    const storeDataToFirebase = () => {

        const booksRef = firebase.firestore().collection('books');
        moviesBooks.forEach(book => {
            booksRef.doc(book.id).set({
                bookType: 'MoviesBooks',
                bookId: book.id,
                thumbnail: book.volumeInfo.imageLinks.thumbnail,
                title: book.volumeInfo.title,
                previewLink: book.volumeInfo.previewLink,
                infoLink: book.volumeInfo.infoLink,

            })
        });

    }



    if (!dataDownloaded) {

        loadData();
        loadNatureData();
        loadMovies();
        setdataDownloaded(true);
    }






    return (


        <ScrollView style={styles.container}>

        
          
            
        
            <Modal visible={showIndicator}>
                <View style={{ height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator size="large" animating={showIndicator} />
                </View>
            </Modal>
            <View style={styles.searchView}>
                <TextInput style={styles.searchText} placeholder='Search' onChangeText={searchedText}>

                </TextInput>

                <TouchableOpacity style={styles.searchBtn} onPress={async () => await fetchBooksData()} >
                    <Text style={{ color: '#fff' }}> Search </Text>
                </TouchableOpacity>

            </View>
           
            <View style={styles.listContainer}>

           

              <View style={styles.OperatingSystem}>

                    <Text style={styles.booksText}>
                        Searched Results
            </Text>
                    <FlatList horizontal={true} keyExtractor={(item, index) => item.id} data={searchedTextArray} renderItem={(book, index) => { return (<TouchableOpacity onPress={() => props.navigation.navigate('BooksProfile', book.item)}><ImageBackground imageStyle={styles.imageStyles} source={{ uri: book.item.volumeInfo.imageLinks.thumbnail }} style={styles.bookItemsStyle}></ImageBackground></TouchableOpacity>) }}>

                    </FlatList>



                </View>

              
                <View style={styles.OperatingSystem}>

                    <Text style={styles.booksText}>
                        Opertaing System Books
            </Text>
                    <FlatList horizontal={true} keyExtractor={(item, index) => item.id} data={osBooks} renderItem={(book, index) => { return (<TouchableOpacity onPress={() => props.navigation.navigate('BooksProfile', book.item)}><ImageBackground imageStyle={styles.imageStyles} source={{ uri: book.item.thumbnail }} style={styles.bookItemsStyle}></ImageBackground></TouchableOpacity>) }}>

                    </FlatList>



                </View>
                <View style={styles.programmingBooksStyle}>
                    <Text style={styles.booksText}>
                        Programming Books
        </Text>

                    <FlatList horizontal={true} data={natureBooks} renderItem={(book) => { return (<TouchableOpacity onPress={() => props.navigation.navigate('BooksProfile', book.item)}><ImageBackground imageStyle={styles.imageStyles} source={{ uri: book.item.thumbnail }} style={styles.bookItemsStyle}></ImageBackground></TouchableOpacity>) }}>

                    </FlatList>

                </View>
                <View style={styles.programmingBooksStyle}>
                    <Text style={styles.booksText}>
                        Movies Books
        </Text>

                    <FlatList horizontal={true} data={moviesBooks} renderItem={(book) => { return (<TouchableOpacity onPress={() => props.navigation.navigate('BooksProfile', book.item)}><ImageBackground imageStyle={styles.imageStyles} source={{ uri: book.item.thumbnail }} style={styles.bookItemsStyle}></ImageBackground></TouchableOpacity>) }}>

                    </FlatList>

                </View>
            </View>
        </ScrollView>
    )
}
export default HomePage;

const styles = StyleSheet.create({

    container: {
        flex: 1,



    },
    searchView: {
        width: '100%',

        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    searchText: {
        borderWidth: 0.5,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        height: 35
    },
    imageStyles: {
        borderRadius: 10,
        borderWidth:1

    },

    bookItemsStyle: {
        height: 170,
        width: 115,
        margin: 5,
       
    },
    listContainer: {
        width: '87%',
        alignSelf: 'flex-end',
        margin: 10
    },
    programmingBooksStyle: {
        marginTop: 50
    },

    searchBtn: {
        backgroundColor: '#ff6060',
        marginLeft: 10,
        width: 80,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    booksText: {
        fontWeight: 'bold',
        margin: 5,

    }
});
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

//TODO: Make hours update on button press

let date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();

function getTime() {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();

    let currHour = hours;
    let isAM;

    if(hours == 0) {
        currHour = 12;
    }

    if(hours < 12) {
        isAM = true;
    } else {
        isAM = false;
        currHour -= 12;
    }

    let text = "The time is " + currHour + ":" + minutes + " " + ((isAM == true) ? "am" : "pm");

    console.log(text);
}

function MainScreen(props) {
    console.log(hours + " " +minutes);
    return (
        <View style={styles.logoContainer}>
            <Text>Sell What You Don't Need</Text>

            <View style={styles.button}>
                <Button
                    onPress={getTime}
                    title="Get time"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroud: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 150,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,        
        alignItems: 'center',
    },
    button: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
        justifyContent: 'center',
        alignItems: 'center',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4'
    },
})

export default MainScreen;
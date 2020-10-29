import React, { useEffect, useState } from 'react';
import { StyleSheet, Button, Text, View, Image } from "react-native";

const mRock = require('./signs/rock.png');
const mPaper = require('./signs/paper.png');
const mScissor = require('./signs/scissors.png');
//for random colors
const mRandomColors = ['#dc0000','#009800','#0000d3'];

//get Random Emoji for Show
const mRandomRPSEmoji = () => {
    const mEmojis = [mRock, mPaper, mScissor];
    const random = Math.floor(Math.random() * 3);
    return mEmojis[random];
};


export default function PlayGround() {
    const [counter, setCounter] = useState(1);

    //for Effect
    useEffect(() => {
        //Check for greator then stop loop
        if (counter > 3) return;

        //Timer for Counter
        const timer = setTimeout(() => {
            setCounter(previous => previous + 1);
        }, 600);

        return () => clearTimeout(timer);
    }, [counter]);

    return (
        <View style={styles.container}>
            {counter > 3 ? (
            <>
                <Image style={styles.RPSImg} source={mRandomRPSEmoji()}/>

                <View style={styles.btnStyle}>  
                <Button
                    onPress={()=>{
                    setCounter(1)
                    }}   
                    title="Play Again"
                />
                </View>
            </>
            ) : (
                <View style={StyleSheet.compose(
                    styles.counterContainer,
                    {backgroundColor:mRandomColors[counter-1]},
                    )}>
                    <Text style={styles.counter}>{counter}</Text>
                </View>
            )}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnStyle: {
        width: 210,
        marginTop: 60,
        position: 'absolute',
        bottom: 25
    },
    RPSImg: {
        width: 250,
        height: 250
    },
    counter: {
        fontSize: 150,
        color: '#fff'
    },
    counterContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
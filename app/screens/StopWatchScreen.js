import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';

class StopWatchScreen extends Component {

    constructor(props) {
        super(props),

        this.state = {
            timer: null,
            minCounter: '00',
            secCounter: '00',
            disabled: false
        }
    }
    
    onButtonStart = () => { 
        let timer = setInterval(() => {
     
          var num = (Number(this.state.secCounter) + 1).toString(),
            count = this.state.minCounter;
     
          if (Number(this.state.secCounter) == 59) {
            count = (Number(this.state.minCounter) + 1).toString();
            num = '00';
          }
     
          this.setState({
            minCounter: count.length == 1 ? '0' + count : count,
            secCounter: num.length == 1 ? '0' + num : num
          });
          console.log(this.state.minCounter + " " + this.state.secCounter);
        }, 1000);
        this.setState({ timer });

        this.setState({disabled: true})
    }

    onButtonStop = () => {
        clearInterval(this.state.timer);
        this.setState({disabled : false});
    }

    onButtonClear = () => {
        clearInterval(this.state.timer);
        this.setState({
            timer: null,
            minutes_Counter: '00',
            seconds_Counter: '00',
            disabled: false
          });
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }
    
    render() {
        return (
            <View style={styles.background}>
                <Text>Hello World</Text>

                <TouchableOpacity
                    style= {styles.button}
                    onPress={this.onButtonStart}
                    disabled={this.state.disabled}>
                    <Text style={styles.buttonText}>Start Timer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style= {styles.button}
                    onPress={this.onButtonStop}>
                    <Text style={styles.buttonText}>Stop Timer</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style= {styles.button}
                    onPress={this.onButtonClear}>
                    <Text style={styles.buttonText}>Clear Timer</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        marginTop: 20,
        width: 200,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#e9bcba',
    },
    buttonText: {
        color: '#5b5670'
    }
})

export default StopWatchScreen;
import React, { Component } from 'react'
import { View, Text, Button, SafeAreaView } from 'react-native'

class Timer extends Component {

    state = {
        timer: null,
        counter: 5,
    };

    startTimer = () => {

        let timer = setInterval(this.manageTimer, 1000);
        this.setState({ timer });

    }

    manageTimer = () => {

        var states = this.state

        if (states.counter === 0) {
            alert('Times Up !\nTimer  is reset')
            clearInterval(this.state.timer)
            this.setState({
                counter: 5
            })
        }
        else {
            this.setState({
                counter: this.state.counter - 1
            });

        }
    }

    componentWillUnmount() {
        clearInterval(this.state.timer);
    }



    render() {
        return (
            <SafeAreaView style = {{flex: 1, justifyContent: "center"}}>


                <Text style={{ textAlign: 'center'}}>{this.state.counter}</Text>

                <View>
                    <Button
                        title='START TIMER'
                        onPress={() => this.startTimer()}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

export default Timer;
import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';
import {
    Container,
    Content,
} from 'native-base';


export default class Login extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Text>Hi</Text>
                </Content>
            </Container>
        );
    }
}

let windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

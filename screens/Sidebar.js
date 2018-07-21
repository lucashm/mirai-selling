import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';
import { Text } from 'react-native-elements';
import {
    Container,
    Content,
    Icon,
    List,
    ListItem,
} from 'native-base';


export default class Sidebar extends React.Component {
    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <View style={styles.header}>
                        <Icon style={{ color: 'white', fontSize: 50 }} name="contact" />
                        <Text style={{
                            color: 'white',
                            fontSize: 30
                        }}> Visitante</Text>
                    </View>
                    <List style={styles.list}>
                        <ListItem button noIndent style={styles.listItem}>
                            <Text style={styles.listText}>Favoritos</Text>
                            <Icon style={{color: 'white'}} name='arrow-forward' />
                        </ListItem>
                        <ListItem button noIndent>
                            <Text style={styles.listText}>Pedidos</Text>
                            <Icon style={{color: 'white'}} name='arrow-forward' />
                        </ListItem >
                        <ListItem button noIndent>
                            <Text style={styles.listText}>Cupons</Text>
                            <Icon style={{color: 'white'}} name='arrow-forward' />
                        </ListItem>
                        <ListItem button noIndent>
                            <Text style={styles.listText}>Configurações</Text>
                            <Icon style={{color: 'white'}} name='arrow-forward' />
                        </ListItem>
                        <ListItem button noIndent>
                            <Text style={styles.listText}>Ajuda</Text>
                            <Icon style={{color: 'white'}} name='arrow-forward' />
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

let windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eb2023',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 25,
    },
    list: {
        marginTop: 25
    },
    listText: {
        color: 'white',
        fontSize: 20,
        width: '80%'
    }
});

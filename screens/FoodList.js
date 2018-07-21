import React from 'react';
import { StyleSheet, Dimensions, ScrollView, Image, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import {
    Container,
    Content,
    Header,
    View,
    Icon,
    Left,
    Body,
    Right,
    Button
} from 'native-base';
import { Actions } from 'react-native-router-flux';


let windowWidth = Dimensions.get('window').width;

export default class FoodList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        this.setState({ items: this.props.items })
        let aux = [];
        for (let i = 0; i < this.props.items.length; i++) {
            aux.push({
                id: this.props.items[i].id,
                status: false
            })
        }
        this.setState({ loaded: aux });
    }

    changeloadedStatus(id) {
        let aux = this.state.loaded;
        for (let i = 0; i < aux.length; i++) {
            if (aux[i]['id'] == id) {
                aux[i]['status'] = true;
            }
        }
        this.setState({ loaded: aux });
        console.log(this.state.loaded);
        this.checkIfLoaded(id);
    }

    checkIfLoaded(id) {
        let aux = this.state.loaded;
        for (let i = 0; i < aux.length; i++) {
            if (aux[i]['id'] == id) {
                if (aux[i]['status'] == true) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header iosBarStyle='light-content' androidStatusBarColor='#c0392b' style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => { Actions.pop(); Actions.refresh() }}>
                            <Icon name='arrow-back' style={{ color: 'white' }} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 5 }}>
                        <Text style={{ color: 'white', fontSize: 20 }}>{this.props.title}</Text>
                    </Body>
                    <Right />
                </Header>
                <Content style={{ backgroundColor: '#c0392b' }}>
                    <ScrollView >
                        {
                            this.state.items.map(item => {
                                return (
                                    <View style={styles.itemList} key={item.title}>
                                        <View style={{ width: windowWidth * 0.5 }}>
                                            <Text
                                                style={{ color: 'white', fontSize: 16, fontWeight: 'bold', marginBottom: 5 }}>
                                                {item.title}
                                            </Text>
                                            <Text style={{ color: 'white', marginLeft: 5, marginTop: 5, marginBottom: 5 }}>
                                                {item.info}
                                            </Text>
                                            <Text style={{ color: 'white', marginLeft: 5 }}>
                                                {item.location}
                                            </Text>
                                            <Text style={{ color: 'white', marginLeft: 5 }}>
                                                {item.deliveryTime}
                                            </Text>
                                        </View>
                                        <View>
                                            <Image
                                                onLoad={() => this.changeloadedStatus(item.id)}
                                                style={{ width: windowWidth * 0.4, height: 100 }}
                                                source={item.image} />
                                            {
                                                this.checkIfLoaded(item.id) ?
                                                    <ActivityIndicator style={{ display: 'none' }} size="large" color="#fff" />
                                                    :
                                                    <ActivityIndicator size="large" color="#fff" />

                                            }


                                        </View>
                                    </View>
                                )
                            })
                        }
                    </ScrollView>

                </Content>
            </Container>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        backgroundColor: '#c0392b',
        width: windowWidth,
    },
    itemList: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: windowWidth,
        paddingBottom: 5,
        marginTop: 5,
        borderBottomColor: 'white',
        borderBottomWidth: 1
    }
});

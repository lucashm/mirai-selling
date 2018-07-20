import React from 'react';
import { StyleSheet, Dimensions, Image, KeyboardAvoidingView } from 'react-native';
import { Badge, Text, SearchBar } from 'react-native-elements';
import {
  Container,
  Content,
  Header,
  Footer,
  Left,
  Button,
  Icon, Item, Input, View, DeckSwiper, Card, CardItem, Body
} from 'native-base';

import SideSwiper from './components/SideSwiper';

const cards = [
  {
    text: 'Comida Japonesa',
    image: require('./static/img/japanese-food.jpg'),
    sub: 'O melhor do oriente!'
  },
  {
    text: 'Comida italiana',
    image: require('./static/img/italian-food.jpg'),
    sub: 'Alguém tocou no meu espaguete?!'
  }
]

export default class Main extends React.Component {
    static navigationOptions = {
        title: 'Bem vindo!'
    }
  render() {
    return (
      <Container style={styles.container}>
        <Header searchBar rounded style={styles.header}>
          <Left>
            <Button transparent> <Icon name='menu' style={{ color: '#ffc102' }} /> </Button>
          </Left>
        </Header>
        <Content style={styles.content}>
          <View>
            <Text h2 style={{ color: 'white' }} >Olá, visitante!</Text>
            <Text h5 style={{ color: 'white' }} >O que teremos para hoje?</Text>

            <View searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input
                  style={styles.input}
                  placeholderTextColor='white'
                  placeholder="Refeição ou restaurante..."
                />
              </Item>
            </View>
            <SideSwiper cards={cards} />
          </View>
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
  header: {
    backgroundColor: '#eb2023',
    width: windowWidth
  },
  content: {
    backgroundColor: '#eb2023',
    width: windowWidth,
    padding: windowWidth / 20
  },
  input: {
    color: 'white'
  }
});

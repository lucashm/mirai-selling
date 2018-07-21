import React from 'react';
import { StyleSheet, Dimensions, Image, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
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

import SideSwiper from '../components/SideSwiper';
import { Actions } from 'react-native-router-flux';

import { japaneseList, italianList, lunchList } from '../static/foodList';

const cards = [
  {
    id: 1,
    text: 'Comida Japonesa',
    image: require('../static/img/japanese-food.jpg'),
    sub: 'O melhor do oriente!',
    list: japaneseList
  },
  {
    id: 2,
    text: 'Comida italiana',
    image: require('../static/img/italian-food.jpg'),
    sub: 'Alguém tocou no meu espaguete?!',
    list: italianList
  },
  {
    id: 3,
    text: 'Lanches',
    image: require('../static/img/lunch-food.jpg'),
    sub: 'Pra quem tem pressa... ou não',
    list: lunchList
  }
]

export default class Main extends React.Component {

  static contextTypes = {
    openDrawer: PropTypes.func.isRequired
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header iosBarStyle='light-content' androidStatusBarColor='#c0392b' searchBar rounded style={styles.header}>
          <Left>
            <Button
              onPress={this.context.openDrawer}
              transparent> <Icon name='menu' style={{ color: '#ffc102' }} /> </Button>
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
    backgroundColor: '#c0392b',
    width: windowWidth
  },
  content: {
    backgroundColor: '#c0392b',
    width: windowWidth,
    padding: windowWidth / 20
  },
  input: {
    color: 'white'
  }
});

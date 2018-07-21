import React from 'react';
import { StyleSheet, Dimensions, Image, ScrollView, TouchableHighlight, ActivityIndicator } from 'react-native';
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
import { Actions } from 'react-native-router-flux';

export default class SideSwiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      loaded: []
    }
  }

  componentDidMount() {
    this.setState({ cards: this.props.cards })
    let aux = [];
    for (let i = 0; i < this.props.cards.length; i++) {
      aux.push({
        id: this.props.cards[i].id,
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
      <ScrollView horizontal>
        {
          this.state.cards.map(card => {
            return (
              <TouchableHighlight
                key={card.text}
                onPress={() => Actions.foodList({ items: card.list, title: card.text })}>
                <View>
                  <View style={styles.title}>
                    <Text>{card.text}</Text>
                  </View>
                  <ActivityIndicator style={this.state.loaded ? { display: 'none' } : { display: 'flex' }} size="large" color="#fff" />
                  <Image
                    onLoad={() => this.changeloadedStatus(card.id)}
                    style={{ width: windowWidth * 0.9, height: 250 }}
                    source={card.image} />
                  {
                    this.checkIfLoaded(card.id) ?
                      <ActivityIndicator style={{ display: 'none' }} size="large" color="#fff" />
                      :
                      <ActivityIndicator size="large" color="#fff" />

                  }
                  <View style={styles.footer}>
                    <Icon name="heart" style={{ color: '#ed4a6a', marginRight: 'auto' }} />
                    <View style={{ marginRight: 'auto' }}>
                      <Text>{card.sub}</Text>
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            )
          })
        }
      </ScrollView>
    );
  }
}

let windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  card: {
    margin: 15,
    flex: 1,
    borderRadius: 50
  },
  title: {
    padding: 20,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10
  }
});

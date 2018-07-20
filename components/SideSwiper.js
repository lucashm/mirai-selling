import React from 'react';
import { StyleSheet, Dimensions, Image, ScrollView } from 'react-native';
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

export default class SideSwiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    this.setState({ cards: this.props.cards })
  }

  render() {
    return (
      <ScrollView horizontal>
        {
          this.state.cards.map(card => {
            return (
              <View key={card.text}>
                <View style={styles.title}>
                  <Text>{card.text}</Text>
                </View>
                <Image style={{ width: windowWidth * 0.9, height: 250 }} source={card.image} />
                <View style={styles.footer}>
                  <Icon name="heart" style={{ color: '#ed4a6a', marginRight: 'auto' }} />
                  <View style={{ marginRight: 'auto' }}>
                    <Text>{card.sub}</Text>
                  </View>
                </View>
              </View>
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

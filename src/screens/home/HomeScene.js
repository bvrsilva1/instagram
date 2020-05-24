import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, View, Button, SafeAreaView , FlatList } from 'react-native'
import Card from '../Card'


const image = require('../../assets/lpbb.png')

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    padding: 10,
  },
  header: {
    height: '8%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  headerAvatar: {
    justifyContent: 'center'
  },
  headerNameLocation: {
    paddingLeft: 5,
    justifyContent: 'center'
  },
  image: {
    alignItems: 'center',
  },
  interaction: {
    marginTop: 10,
    flexDirection: 'row',
  },
  interactionLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  interactionRight: {
    marginLeft: 'auto',
  }

});

const HomeScene = ({ navigation }) => {

  const data = [
    {id: '123', avatar: image, image, comments: 'hello'},
    {id: '124', avatar: image, image, comments: 'hello'},
    {id: '125', avatar: image, image, comments: 'hello'},
    {id: '126', avatar: image, image, comments: 'hello'},
  ]

  return(
    <SafeAreaView style={{flex: 1}}>
      <Button
        title='go to messages'
        onPress={() => navigation.push('Messages', {
            name: 'Bruno'
          })}
        />
      <View style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => <Card post={item} />}
          keyExtractor={item => item.id}
      />
      </View>
    </SafeAreaView>
  )
}

HomeScene.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
};

export default HomeScene
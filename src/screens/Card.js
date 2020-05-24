import React from 'react'
import { StyleSheet, View, Text, ActivityIndicator } from 'react-native'
import { Image, Avatar, Icon } from 'react-native-elements'

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

const Card = ({post}) => {
  return(
    <View style={styles.card}>

      <View style={styles.header}>
        <View style={styles.headerAvatar}>
          <Avatar
            rounded
            source={post.avatar}
            size='small'
              />
        </View>
        <View style={styles.headerNameLocation}>
          <Text>bruno_sabbath</Text>
          <Text>Lincoln, Nebraska</Text>
        </View>
      </View>
          
      <View style={styles.image}>
        <Image
          source={post.image}
          style={{ width: 400, height: 400 }}
          PlaceholderContent={<ActivityIndicator />}
          />
      </View>
      <View style={styles.interaction}>
        <View style={styles.interactionLeft}>
          <Icon color='black' name="heart-o" type="font-awesome" size={20} />
          <Icon style={{paddingLeft: 10}} color='black' name="comment-o" type="font-awesome" size={20} />
        </View>
        <View style={styles.interactionRight}>
          <Icon color='black' name="bookmark-o" type="font-awesome" size={20} />
        </View>
      </View>
      <Text>{post.comments}</Text>
    </View>
  )
}

export default Card
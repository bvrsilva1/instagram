import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, View, Text, ActivityIndicator, FlatList, TextInput } from 'react-native'
import { Image, Avatar, Icon, Input } from 'react-native-elements'
import PostContext from '../context/PostContext'

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

  const context = useContext(PostContext)
  const [commentInput, showCommentInput] = useState(false)

  useEffect(() => {
    console.log(context)
  },[context])

  const { avatar, image, id, counter, comments } = post

  return(
    <View style={styles.card}>

      <View style={styles.header}>
        <View style={styles.headerAvatar}>
          <Avatar
            rounded
            source={avatar}
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
          source={image}
          style={{ width: 400, height: 400 }}
          PlaceholderContent={<ActivityIndicator />}
          />
      </View>
      <View style={styles.interaction}>
        <View style={styles.interactionLeft}>
          <Icon
            color='black'
            name='heart-o'
            type='font-awesome'
            size={20}
            onPress={() => context.addLike(id)}
          />
          <Icon
            style={{paddingLeft: 10}}
            color='black'
            name='comment-o'
            type='font-awesome'
            size={20}
            onPress={() => showCommentInput(!commentInput)}
          />
        </View>
        <View style={styles.interactionRight}>
          <Icon
            color='black'
            name="bookmark-o"
            type="font-awesome"
            size={20}
            onPress={() => context.savePost(id)}
          />
        </View>
      </View>
      <Text>{`${counter  } likes`}</Text>
      {
        commentInput ? (
          <Input
            onSubmitEditing={event => {showCommentInput(false); context.addComment(event.nativeEvent.text, '@bruno', id)}} 
            placeholder='comment' />
        ) : null
      }
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <View style={{flexDirection: 'row', paddingLeft: 10}}>
            <Text style={{fontWeight: 'bold'}}>
              {`${item.author  } `}
            </Text>
            <Text>
              {item.message}
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Card
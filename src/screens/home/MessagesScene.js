import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, SafeAreaView } from 'react-native'

const MessageScene = ({ navigation, route }) => {
  return(
    <SafeAreaView>
      <View>
        <Text>MESSAGES</Text>
        <Text>{route.params.name}</Text>
      </View>
    </SafeAreaView>
  )
}

MessageScene.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  route: PropTypes.object.isRequired,
};

export default MessageScene
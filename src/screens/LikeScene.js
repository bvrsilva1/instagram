import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, SafeAreaView } from 'react-native'

const LikeScene = ({ navigation }) => {
  return(
    <SafeAreaView>
      <View>
        <Text>LIKE</Text>
      </View>
    </SafeAreaView>
  )
}

LikeScene.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
};

export default LikeScene
import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, Button, SafeAreaView } from 'react-native'

const ProfileScene = ({ navigation }) => {
  return(
    <SafeAreaView>
      <View>
        <Text>
          Profile
        </Text>
        <Button 
          title='go back to home'
          onPress={() => navigation.goBack()}
      />
      </View>
    </SafeAreaView>
  )
}

ProfileScene.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
};

export default ProfileScene
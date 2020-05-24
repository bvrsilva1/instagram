import React from 'react'
import PropTypes from 'prop-types';
import { View, Text, SafeAreaView } from 'react-native'

const SearchScene = ({ navigation }) => {
  return(
    <SafeAreaView>
      <View>
        <Text>SEARCH</Text>
      </View>
    </SafeAreaView>
  )
}

SearchScene.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired,
};

export default SearchScene
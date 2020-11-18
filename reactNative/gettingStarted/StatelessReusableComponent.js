import React from 'react';
import { View, Text } from 'react-native'

const MyComponent = () => (
  <View>
    <Text>Hello World</Text>
  </View>
)

or

import React from 'react'
import { View, Text } from 'react-native'

function MyComponent () {
  return <View><Text>HELLO FROM STATELESS</Text></View>
}

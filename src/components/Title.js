import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors'

const Title = ({children}) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    titleStyle: {
        color: colors.white,
        marginStart: 20,
        fontSize: 16,
        fontWeight: '700'
    }
})
export default Title
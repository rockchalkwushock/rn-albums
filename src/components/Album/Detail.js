/* eslint-disable camelcase */

import React from 'react'
import { Image, Text, View } from 'react-native'

import { Card, Section } from '../Card'

type Props = {
  album: {
    artist: string,
    image: string,
    thumbnail_image: string,
    title: string
  }
}

const Detail = (props: Props) => {
  const { artist, image, thumbnail_image, title } = props.album
  const { header, pic, thumb, view1, view2 } = styles.root
  return (
    <Card>
      <Section>
        <View style={view1}>
          <Image source={{ uri: thumbnail_image }} style={thumb} />
        </View>
        <View style={view2}>
          <Text style={header}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </Section>
      <Section>
        <Image source={{ uri: image }} style={pic} />
      </Section>
    </Card>
  )
}

const styles = {
  root: {
    header: {
      fontSize: 18
    },
    pic: {
      height: 300,
      flex: 1,
      width: null
    },
    thumb: {
      height: 50,
      width: 50
    },
    view1: {
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    view2: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    }
  }
}

export default Detail

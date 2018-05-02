import React from 'react'
import { Text } from 'react-native'

import { Card, Section } from '../Card'

type Props = {
  album: {
    title: string
  }
}

const Detail = (props: Props) => (
  <Card>
    <Section>
      <Text>{props.album.title}</Text>
    </Section>
    <Section>
      <Text>{props.album.title}</Text>
    </Section>
  </Card>
)

export default Detail

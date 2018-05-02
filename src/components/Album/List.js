import React, { Component } from 'react'
import { View } from 'react-native'

import { fetchAlbums } from '../../data'
import Detail from './Detail'

class List extends Component {
  state = {
    albums: []
  }
  async componentDidMount() {
    const albums = await fetchAlbums()
    this.setState(prevState => ({ ...prevState, albums }))
  }
  renderAlbums = () =>
    this.state.albums.map(album => <Detail album={album} key={album.title} />)
  render() {
    return <View>{this.renderAlbums()}</View>
  }
}

export default List

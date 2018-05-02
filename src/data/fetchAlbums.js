import axios from 'axios'

export default async () =>
  await axios
    .get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(res => res.data)

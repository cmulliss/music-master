import React, { Component } from 'react'
import Artist from './Artist'
import Tracks from './Tracks'
import Search from './Search'
//   import '../index.css'

// global constant, wrapper address
const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com'

class App extends Component {
  state = { artist: null, tracks: [] }

  componentDidMount() {
    this.searchArtist('pentatonix')
  }

  searchArtist = (artistQuery) => {
    console.log('this.state', this.state)
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
      .then((response) => response.json())
      .then((json) => {
        if (json.artists.total > 0) {
          const artist = json.artists.items[0]

          this.setState({ artist: artist })

          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks `)
            .then((response) => response.json())
            .then((json) => this.setState({ tracks: json.tracks }))
            .catch((error) => alert(error.message))
        }
      })
      .catch((error) => alert(error.message))
  }

  render() {
    console.log('this.state', this.state)
    return (
      <div>
        <h2>Music Master</h2>
        <Search searchArtist={this.searchArtist} />
        <Artist artist={this.state.artist} />
        <Tracks tracks={this.state.tracks} />
      </div>
    )
  }
}
export default App

/*
 since the fetch returns a promise, we follow up with a .then handler
   this takes a callback fn with a response parameter, and this itself has its own json method which returns a promise as well. Means we can chain a second .then handler which has the resulting json

Artist component with artist prop, as the Artist component accesses the artist through props.
<Artist artist={this.state.artist} />

We can specify a searchArtist property of the search component and pass it down: this.searchArtist itself as a fn reference. 
 <Search searchArtist={this.searchArtist} />

*/

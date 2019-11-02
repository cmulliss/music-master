import React, { Component } from 'react'
import Artist from './Artist'

// global constant, wrapper address
const API_ADDRESS = 'https://spotify-api-wrapper.appspot.com'

class App extends Component {
  state = { artistQuery: '', artist: null, tracks: [] }

  // helper, set to callback fn
  updateArtistQuery = (event) => {
    console.log('event.target.value', event.target.value)
    this.setState({ artistQuery: event.target.value })
  }
  // since the fetch returns a promise, we follow up with a .then handler
  // this takes a callback fn with a response parameter, and this itself has its own json method which returns a promise as well. Means we can chain a second .then handler which has the resulting json
  searchArtist = () => {
    console.log('this.state', this.state)
    fetch(`${API_ADDRESS}/artist/${this.state.artistQuery}`)
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

  handleKeyPress = () => {
    if (event.key === 'Enter') {
      // event.preventDefault()
      this.searchArtist()
    }
  }

  render() {
    console.log('this.state', this.state)
    return (
      <div>
        <h2>Music Master</h2>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder="Search for an Artist"
        />
        <button onClick={this.searchArtist}>Search</button>
        <Artist artist={this.state.artist} />
      </div>
    )
  }
}
export default App

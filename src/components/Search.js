import React, { Component } from 'react'

class Search extends Component {
  state = { artistQuery: '' }

  // helper, set to callback fn
  updateArtistQuery = (event) => {
    console.log('event.target.value', event.target.value)
    this.setState({ artistQuery: event.target.value })
  }
  handleKeyPress = () => {
    if (event.key === 'Enter') {
      // event.preventDefault()
      this.searchArtist()
    }
  }

  // helper, callback, but don't want to duplicate code from App
  searchArtist = () => {
    this.props.searchArtist(this.state.artistQuery)
  }

  render() {
    return (
      <div>
        <input
          onChange={this.updateArtistQuery}
          onKeyPress={this.handleKeyPress}
          placeholder="Search for an Artist"
        />
        <button onClick={this.searchArtist}>Search</button>
      </div>
    )
  }
}

export default Search

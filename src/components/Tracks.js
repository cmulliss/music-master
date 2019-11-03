import React, { Component } from 'react'

class Tracks extends Component {
  state = {
    playing: false,
    audio: null,
    playingPreviewUrl: null
  }

  playAudio = (previewUrl) => () => {
    if (previewUrl !== null) {
      const audio = new Audio(previewUrl)

      if (!this.state.playing) {
        audio.play()

        this.setState({ playing: true, audio, playingPreviewUrl: previewUrl })
      } else {
        this.state.audio.pause()

        if (this.state.playingPreviewUrl === previewUrl) {
          this.setState({ playing: false })
        } else {
          audio.play()

          this.setState({ audio, playingPreviewUrl: previewUrl })
        }
      }
    } else {
      alert('Track not available')
    }
  }

  trackIcon = (track) => {
    return <span>&#9654;</span>
  }

  render() {
    const { tracks } = this.props

    return (
      <div>
        {tracks.map((track) => {
          const { id, name, album, preview_url } = track

          return (
            <div
              key={id}
              onClick={this.playAudio(preview_url)}
              className="track"
            >
              <img
                src={album.images[0].url}
                alt="track-image"
                className="track-image"
              />
              <p className="track-text">{name}</p>
              <p className="track-icon">{this.trackIcon(track)}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Tracks

/*
tracks passed down through props, so destructure tracks from this.props
const { tracks } = this.props

destructure from track
const { id, name, album } = track

helper, create a new js audio object, a new audio instance of the global audio class, as a paramter to the audio constructor pass in the previewUrl

The onClick handler needs to have a reference to the fn, but since we are using ()  to pass in the previewUrl, we are calling the fn right in the jsx. Bad practise as can leads to loops of setting state and rendering our component. Addressed by making playAudio return a fn itself by using the double => syntax, so this is going to point to its own callback fn. That way when we call playAudio with the (), its still returning this overall fn as a reference, which now has the previewUrl available to it. 

playAudio = (previewUrl) => () => {
    const audio = new Audio(previewUrl)
    audio.play()
  }

*/

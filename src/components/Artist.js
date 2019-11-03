import React from 'react'

const Artist = ({ artist }) => {
  // check if error with name or no artist of that name, skips remaining lines. Also check if images 0, guard clause.
  if (!artist) return null
  const { images, name, followers, genres } = artist
  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(', ')}</p>
      <img
        src={images[0] && images[0].url}
        alt='artist-profile'
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          objectFit: 'cover'
        }}
      />
    </div>
  )
}

export default Artist

/* the relevant Artist object is stored in the main App component state, but want the App component to pass down the artist's objext into this component through props, so accessible with props.artist.
Can get rid of the props variable entirely if we use the destructuring syntax to pass an object into the Artist component input, and we are going to destructure the artist key value right away

const Artist = (props) => {}
becomes:
const Artist = ({ artist }) => {

destructuring from the artist object:
const { images, name, followers, genres } = artist

genres, can make one string using the array join fn.

images also an array, so use first
*/

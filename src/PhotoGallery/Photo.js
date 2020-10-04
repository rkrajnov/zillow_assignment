import React from 'react'
import noImage from '../images/noImage.jpg'
import PropTypes from 'prop-types'

function Photo(props) {
    const {photo={}} = props
    const defaultCaption = 'No caption available'

  return (
    <div className="photo">
      <img
        src={photo.img || noImage}
        alt={photo.caption || defaultCaption}
        />
      <p className='photo__caption'>{photo.caption || defaultCaption}</p>
    </div>
  )
}

Photo.propTypes = {
  photo: PropTypes.object
}

export default Photo

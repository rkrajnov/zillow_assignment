import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Photo from './Photo'

function PhotoGallery(props){
    const [state, setState] = useState({
           index: 0,
           picList: props.photos
       })

    function onClickNext(){
        if (state.index + 1 === state.picList.length ){
            setState({
                ...state,
                index: 0
            })
        } else {
            setState({
                ...state,
                index: state.index + 1
            })
        }
    }

    function onClickPrevious(){
        if (state.index - 1 === -1 ){
            setState({
                ...state,
                index: state.picList.length - 1
            })
        } else {
            setState({
                ...state,
                index: state.index - 1
            })
        }
    }

    return (
        <div>
            <Photo photo={state.picList[state.index]}/> <br/>
            <button className='photo-gallery__arrow photo-gallery__arrow--left' onClick={onClickPrevious}> Previous </button>
            <button className='photo-gallery__arrow photo-gallery__arrow--right' onClick={onClickNext}> Next </button>
        </div>
    );
}

PhotoGallery.propTypes = {
    photos: PropTypes.array
}

PhotoGallery.defaultProps = {
    photos: [{}]

}

export default PhotoGallery
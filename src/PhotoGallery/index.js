import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Photo from './Photo'

function PhotoGallery(props){
    const [state, setState] = useState({
           index: 0,
           swipeStartPosition: 0,
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

    function swipeStart(event){
        const startPosition = event.changedTouches[0].clientX
        setState({
            ...state,
            swipeStartPosition: startPosition
        })
    }

    function swipeEnd(event) {
        const endPositon = event.changedTouches[0].clientX
        const delta = state.swipeStartPosition - endPositon

        if (delta > 75) { // 50 is the threshold before it is considered a swipe
            onClickNext()
        } else if (delta < 75) {
            onClickPrevious()
        }
    }

    return (
        <div className='photo-gallery'
             onTouchStart={(event) => swipeStart(event)}
             onTouchEnd={(event) => swipeEnd(event)}
        >
            <Photo photo={state.picList[state.index]}/> <br/>
            <button className='photo-gallery__arrow photo-gallery__arrow--left' onClick={onClickPrevious}> &lt; </button>
            <button className='photo-gallery__arrow photo-gallery__arrow--right' onClick={onClickNext}> &gt; </button>
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
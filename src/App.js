import React from 'react';
import PhotoGallery from './PhotoGallery'
import house1 from './images/house1.jpg'
import house2 from './images/house2.jpg'
import house3 from './images/house3.jpg'
import house4 from './images/house4.jpg'

const houses = [{
    img: house1,
    caption: 'House with a pool'
}, {
    img: house2,
    caption: 'Traditional home'
}, {
    img: house3,
    caption: 'Modern home'
}, {
    img: house4,
    caption: 'Trendy home'
}, {}
]

function App() {
    return(
        <PhotoGallery photos={houses}/>
    )
}

export default App;

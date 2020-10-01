import React from 'react'
import { connect } from 'react-redux';
import { selectGifList } from 'redux/gifs/gifs.selectors';
import { createStructuredSelector } from 'reselect';
import './gif-list.styles.scss';

const GifList = ({ selectGifs }) => {
    return (
        <div className="gif-list">
            {
                selectGifs.map(({images, id}) => <div key={id} className="image-container"><img src={images.original.url} alt="loading..." /></div>)
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    selectGifs: selectGifList
})

export default connect(mapStateToProps)(GifList);

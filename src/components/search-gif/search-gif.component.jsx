import React from 'react'
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addSearchQuery, fetchGifs } from 'redux/gifs/gifs.actions';
import { createStructuredSelector } from 'reselect';
import './search-gif.styles.scss';
import { selectSearchQuery } from 'redux/gifs/gifs.selectors'

const SearchGif = ({ searchQuery, addQuery, fetchGifs }) => {
    const { register, handleSubmit } = useForm();
    const onShowResult = ({query}) => {
        addQuery(query);
        fetchGifs({ query});
    };
    return (
        <div className="search-gif">
            <form onSubmit={handleSubmit(onShowResult)}>
                <div className="search-input-container">
                    <input defaultValue={searchQuery} name="query" ref={register({ required: true })} type="text" placeholder="Search For Gifs" />
                    <button className="search-btn" type="submit"><span className="icon-search"></span></button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    searchQuery: selectSearchQuery
})
const mapDispatchToProps = dispatch => ({
    fetchGifs: (filter) => dispatch(fetchGifs(filter)),
    addQuery: (query) => dispatch(addSearchQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchGif);

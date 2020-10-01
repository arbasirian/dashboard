import GifList from 'components/gif-list/gif-list.component'
import React from 'react'
import SearchGif from 'components/search-gif/search-gif.component'
import { Pagination, Spin } from 'antd'
import { createStructuredSelector } from 'reselect'
import { selectGifList, selectLoading, selectPagination, selectSearchQuery } from 'redux/gifs/gifs.selectors'
import { connect } from 'react-redux'
import { fetchGifs } from 'redux/gifs/gifs.actions'

const SearchGifsPage = ({ pagination, gifs, query, fetchGifs, isLoading }) => {
    console.log(query)
    const onSizeChange = (page) => {
        console.log(query)
        if (!query) return;
        fetchGifs({ query, limit: 25, offset: (page - 1) * 25 })
    }
    const { offset, total_count } = pagination;
    return (
        <div className="search-gifs-page">
            <Spin spinning={isLoading} delay={500}>
                <SearchGif />
                <GifList />
                {
                    gifs?.length > 0 ? <Pagination
                        showSizeChanger={false}
                        onChange={onSizeChange}
                        defaultCurrent={offset / 25}
                        defaultPageSize={25}
                        total={total_count}
                    /> : ''
                }
            </Spin>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    pagination: selectPagination,
    gifs: selectGifList,
    query: selectSearchQuery,
    isLoading: selectLoading
})

const mapDispatchToProps = dispatch => ({
    fetchGifs: (filter) => dispatch(fetchGifs(filter)),
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchGifsPage)

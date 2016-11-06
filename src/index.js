import _ from 'lodash'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YoutubeSearch from 'youtube-api-search'

import SearchBar from './components/search-bar'
import VideoDetail from './components/video-detail'
import VideoList from './components/video-list'

const API_KEY = 'AIzaSyCCyWpjXVEgTRnA9RYAzJYR_rM0_r14tp8'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
      term: null
    }

    this.searchVideos('school of life')
  }

  searchVideos(term) {
    YoutubeSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const searchVideos = _.debounce((term) => { this.searchVideos(term) }, 300)

    return (
      <div>
        <br />
        <br />
        <div className='row'>
          <div className='col-sm-12'>
            <SearchBar
              onSearch={term => this.searchVideos(term)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-md-7'>
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className='col-md-5'>
            <VideoList
              onVideoSelect={selectedVideo => this.setState({selectedVideo})}
              videos={this.state.videos}
            />
          </div>
        </div>
        <br />
        <br />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))

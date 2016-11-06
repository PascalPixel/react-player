import React, { Component } from 'react'

class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }

  render() {
    return (
      <div>
        <input
          type='text'
          className='form-control'
          placeholder='Search for...'
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <br />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearch(term)
  }
}

export default SearchBar

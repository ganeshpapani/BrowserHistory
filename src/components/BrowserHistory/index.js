import {Component} from 'react'

import './index.css'

class BrowserHistory extends Component {
  state = {historyList: ''}

  onChangeSearchInput = event => {
    this.setState({historyList: event.target.value})
  }

  render() {
    const {initialHistoryList} = this.props
    const {historyList} = this.state

    const searchResult = initialHistoryList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(historyList.toLowerCase()),
    )
    return (
      <div>
        <div className="container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />
          <div className="search-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="logo"
            />
            <input
              type="search"
              placeholder="Search History"
              onClick={this.onChangeSearchInput}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default BrowserHistory

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const topics = [
  { topic: 'music', count: 3 },
  { topic: 'IT', count: 5 },
  { topic: 'web development', count: 2}
]

class TopicsList extends PureComponent {
  static PropTypes = {
    topics: PropTypes.arrayOf(PropTypes.shape({
      topic: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })).isRequired
  }

  render () {
    return (
      <div>
        <h1>Topics Top 10</h1>
        <ol className = "Top10">
          {topics.map(t => <li>{t.topic} ({t.count}) </li>)}
        </ol>
      </div>
    )
  }
}

export default TopicsList

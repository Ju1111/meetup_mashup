const Meetup = require("meetup")
const mup = new Meetup()
let topicsCounter = {}

const INTERESTS = [
  'Software Development'
]

// count the occurrences of each topic
function countOccurrences(topicNames) {
  topicNames.forEach(name => {
    if (!topicsCounter[name]) return topicsCounter[name] = 1
    topicsCounter[name]++
  })
}

// sort the array of topics to create a top10
function topTen() {
  return Object.keys(topicsCounter)
    .sort((topicA, topicB) => (topicsCounter[topicB] - topicsCounter[topicA]))
    .slice(0, 10)
    .map(topic => ({
      topic,
      count: topicsCounter[topic]
    }))
}

function isInterestingTopic(topics) {
  return topics
    .filter(topic => (INTERESTS.includes(topic)))
    .length > 0
}

mup.stream("/2/rsvps", stream => {
  stream
    .on("data", item => {
      const topicNames = item.group.group_topics.map(topic => topic.topic_name)

      if (!isInterestingTopic(topicNames)) return

      countOccurrences(topicNames)

      console.log(topTen())
    }).on("error", e => {
       console.log("error! " + e)
    });
});

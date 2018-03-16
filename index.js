var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)
const Meetup = require("meetup")
const mup = new Meetup()

server.listen(3002)

const INTERESTS = [
  'Software Development'
]

let topicsCounter = {}

// count the occurrences of each topic
function countOccurrences(topicNames) {
  topicNames.forEach(name => {
    if (!topicsCounter[name]) return topicsCounter[name] = 1
    topicsCounter[name]++
  })
}

// sort the array of topics to create a top10
function sortTopics(arrayOfTopics) {
 arrayOfTopics.sort((topicA, topicB) => (topicsCounter[topicB] - topicsCounter[topicA]))
}

function isInterestingTopic(topics) {
  return topics
    .filter(topic => (INTERESTS.includes(topic)))
    .length > 0
}

io.on('connection', socket => {
 console.log('got connection')
  mup.stream("/2/rsvps", stream => {
    stream
     .on("data", item => {
       const topicNames = item.group.group_topics.map(topic => topic.topic_name )

       if (!isInterestingTopic(topicNames)) return

       console.log('---------------')

       countOccurrences(topicNames)

       const arrayOfTopics = Object.keys(topicsCounter)
       sortTopics(arrayOfTopics)

       let listWithCounter = arrayOfTopics.map(topic => {
         return { topic: topic, counter: topicsCounter[topic]
          }
       }).slice(0,10)

      console.log(listWithCounter)
      io.emit('action', listWithCounter)

    }).on("error", e => {
          console.log("error! " + e)
        });
   })
});

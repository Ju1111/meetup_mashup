var Meetup = require("meetup")
var mup = new Meetup()

let topicsCounter = {}

mup.stream("/2/rsvps", stream => {
  stream
    .on("data", item => {
      console.log('-------------------')

      const topicNames = item.group.group_topics.map(topic => topic.topic_name)

      if (topicNames.includes('Software Development')) {

      const arrayOfTopics = Object.keys(topicsCounter)

      topicNames.forEach(name => {
        if (topicsCounter[name]) {
          topicsCounter[name]++
        }
        else {
          topicsCounter[name] = 1
        }
      })

      arrayOfTopics.sort((topicA, topicB) => {
        if (topicsCounter[topicA] > topicsCounter[topicB]) {
          return -1
        }
        else if (topicsCounter[topicB] > topicsCounter[topicA]) {
          return 1
        }
        else {
          return 0
        }
      })

      const top10 = arrayOfTopics.slice(0, 10)

      const nameCounter = top10.map(topic => ({
        topic,
        count: topicsCounter[topic]
      }))

      console.log(nameCounter)
    }
    }).on("error", e => {
       console.log("error! " + e)
    });
});

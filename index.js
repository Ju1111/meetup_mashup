var Meetup = require("meetup")
var mup = new Meetup()

let topicsCounter = {}



mup.stream("/2/rsvps", stream => {
  stream
    .on("data", item => {
      console.log("got item " + item)

      const topicNames = item.group.group_topics.map(topic => topic.topic_name)

      const arrayOfTopics = Object.keys(topicsCounter)

      topicNames.forEach(name => {
        if (topicsCounter[name]) {
          topicsCounter[name]++
        }
        else {
          topicsCounter[name] = 1
        }
      })
      // console.log(topicsCounter)

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
      // console.log(arrayOfTopics.slice(0, 10))

      const nameCounter = arrayOfTopics.map(topic => {
        return { topic: topic, counter: topicsCounter[topic]}
      }).slice(0, 10)
      console.log(nameCounter)

    }).on("error", e => {
       console.log("error! " + e)
    });
});

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const rsvps = [
  {
    venue: {
      venue_name: "L'Albero dei Gelati",
      lon: -73.983864,
      lat: 40.672104,
      venue_id: 18235642
    },
    visibility: "public",
    response: "yes",
    guests: 0,
    member: {
      member_id: 428877,
      member_name: "Margaret Johnston",
      photo: "https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.awkwardfamilyphotos.com%2Fwp-content%2Fuploads%2Fcache%2F2014%2F10%2F292669902%2F677783985.jpg&f=1"
    },
    rsvp_id: 1694689556,
    mtime: 1508416064753,
    event: {
      event_name: "Wednesday Daytime Meetup",
      event_id: "244342120",
      time: 1508954400000,
      event_url: "https://www.meetup.com/parkslope/events/244342120/"
    },
    group: {
      group_topics: [
        {
          urlkey: "knitting",
          topic_name: "Knitting"
        },
        {
          urlkey: "spinners",
          topic_name: "Spinners"
        },
        {
          urlkey: "crocheting",
          topic_name: "Crocheting"
        }
      ],
      group_city: "Brooklyn",
      group_country: "us",
      group_id: 255707,
      group_name: "Park Slope Knitting Circle",
      group_lon: -73.99,
      group_urlname: "parkslope",
      group_state: "NY",
      group_lat: 40.67
    }
  },
  {
    venue: {
      venue_name: "The Oil and Gas Technology Centre",
      lon: -2.131917,
      lat: 57.142223,
      venue_id: 25528154
    },
    visibility: "public",
    response: "yes",
    guests: 0,
    member: {
      member_id: 238435510,
      photo: "https://secure.meetupstatic.com/photos/member/7/c/0/a/thumb_271351754.jpeg",
      member_name: "Pav"
    },
    rsvp_id: 1694689558,
    mtime: 1508416064822,
    event: {
      event_name: "The industrial app opportunity for entrepreneurs as part of IoT hosted at OGTC",
      event_id: "243876045",
      time: 1508949000000,
      event_url: "https://www.meetup.com/Aberdeen-Technology-Entrepreneurs-Club/events/243876045/"
    },
    group: {
      group_topics: [
        {
          urlkey: "startup-businesses",
          topic_name: "Startup Businesses"
        },
        {
          urlkey: "professional-networking",
          topic_name: "Professional Networking"
        },
        {
          urlkey: "smallbiz",
          topic_name: "Small Business"
        },
        {
          urlkey: "newtech",
          topic_name: "New Technology"
        },
        {
          urlkey: "web",
          topic_name: "Web Technology"
        },
        {
          urlkey: "entrepreneurship",
          topic_name: "Entrepreneurship"
        },
        {
          urlkey: "technology-startups",
          topic_name: "Technology Startups"
        }
      ]
    }
  }
]

const rsvp = rsvps[1]

class RsvpItem extends PureComponent {
  static PropTypes = {
    rsvp: PropTypes.arrayOf(PropTypes.shape({
      rsvpEvent: PropTypes.string.isRequired,
      member: PropTypes.shape({
        photo: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      }).isRequired
    })).isRequired
  }

  render () {
    return (
      <div>
        <p>{ rsvp.event.event_name }</p>
        <p>{ rsvp.member.member_name } is joining this event.</p>
        <img src={ rsvp.member.photo } />
      </div>
    )
  }
}

export default RsvpItem

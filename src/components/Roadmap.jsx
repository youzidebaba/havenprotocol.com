import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CheckCircleIcon from 'material-ui-icons/CheckCircle';
import './Roadmap.css'

class Roadmap extends Component {

  render() {
    return (
      <div className="roadmap">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Q1 2017"
            iconStyle={{ background: '#0F232B', color: '#fff' }}
            icon={<CheckCircleIcon />}
          >
          <h4 className="vertical-timeline-element-title">Protocol Design + Implementation</h4>
          <p>
            Haven Protocol is tested and running in base form with ring signatures and stealth addresses.
          </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Q2 2018"
            iconStyle={{ background: '#ccc', color: '#fff' }}
            icon={<CheckCircleIcon />}
          >
          <h4 className="vertical-timeline-element-title">Haven Offshore Value Smart Contract</h4>
          <p>
            Implementation of the Haven Protocol Offshore Holding smart contract that allows users to store their
            coins in terms of USD value to avoid volatility and keep money out of the traditional banking system without risk of loss.
          </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Q3 2018"
            iconStyle={{ background: '#ccc', color: '#fff' }}
            icon={<CheckCircleIcon />}
          >
          <h4 className="vertical-timeline-element-title">RING CT + Tor Integration</h4>
          <p>
            RingCT and Tor network integration to further anonymize the network
          </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Q4 2018"
            iconStyle={{ background: '#ccc', color: '#fff' }}
            icon={<CheckCircleIcon />}
          >
          <h4 className="vertical-timeline-element-title">IOS + Android Tor Wallets</h4>
          <p>
            Private Tor IOS and Android mobile wallets to facilitate easier use as a daily currency
            once the network has reached maturity.
          </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    );
  }
}

export default Roadmap;

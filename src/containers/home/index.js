import React, { Component } from 'react';
import '../../less/global.less';
import { request } from '../../server';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ads: [],
      flowers: []
    }
  }

  async componentDidMount() {
    const [ads, flowers] = await Promise.all([
      request({ url: 'https://flower.handsomehan.cn/v1/ads/' }),
      request({ url: 'https://flower.handsomehan.cn/v1/flowers/' })
    ])
    console.table({ ads, flowers })
    this.setState({
      ads: ads.results,
      flowers
    })
  }

  render() {
    return (
      <div className="center">
        {
          this.state.ads.map(item => {
            return (
              <div>
                {item.title}
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Home;
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
    let ads = [], flowers = []

    try {
      [ads, flowers] = await Promise.all([
        request({ url: 'https://flower.handsomehan.cn/v1/ads/' }).then(resp => resp.results),
        request({ url: 'https://flower.handsomehan.cn/v1/flowers/' }).then(resp => resp.results)
      ])
      // console.table({ ads, flowers })
    } catch (error) {
      console.log('error: %o', error)
    }

    this.setState({
      ads,
      flowers
    })
  }


  render() {
    return (
      <div className="center">
        {
          this.state.ads.map(item => {
            return (
              <div key={item.id}>
                {item.title}
              </div>
            )
          })
        }
        {
          this.state.flowers.map(item => {
            return (
              <div key={item.id}>
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
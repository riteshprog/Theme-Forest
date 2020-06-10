import React, { Component } from 'react';
import CoolTabs from 'react-cool-tabs';

export default class Recommendation extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="col-md-6 card offset-3">
<CoolTabs
         tabKey={'1'}
         style={{ width:  500, height:  500, background:  'white' }}
	      
	       activeTabStyle={{ background:  'white', color:  'blue' }}
	       unActiveTabStyle={{ background:  'white', color:  'black' }}
	       activeLeftTabBorderBottomStyle={{ background:  'blue', height:  4 }}
	       activeRightTabBorderBottomStyle={{ background:  'blue', height:  4 }}
	       tabsBorderBottomStyle={{ background:  'white', height:  4 }}
	       leftContentStyle={{ background:  'white' }}
	       rightContentStyle={{ background:  'white' }}
	       leftTabTitle={'Lable'}
	       rightTabTitle={'Lable'}
	       leftContent={<Content1/>}
	       rightContent={<Content2/>}
	       contentTransitionStyle={'transform 0.6s ease-in'}
	       borderTransitionStyle={'all 0.6s ease-in'}/>
         </div>

         </div>
               </div>
    )
  }
}
class Content1 extends Component {
  render() {
    return <div className="container-fluid">
      <div className="row">
      <p>Liquorice croissant chocolate chocolate cake. Bonbon dessert carrot cake fruitcake pudding sugar plum sweet gummies bear claw. Gummies marshmallow chocolate cake. Jelly icing cake carrot cake. Gummies marshmallow chocolate carrot cake lemon drops. Soufflé gingerbread cupcake chupa chups dragée halvah toffee liquorice. Jelly-o pie ice cream ice cream pudding sweet.</p>
      </div>
    </div>
  }
}
class Content2 extends Component {
  render() {
    return <div className="container-fluid">
    <div className="row">
      Jelly-o soufflé danish jelly-o jujubes oat cake caramels chocolate. Danish jelly chocolate bar jelly jujubes gummies halvah. Candy jujubes jujubes cheesecake bear claw sesame snaps cheesecake gingerbread. Toffee bonbon candy canes macaroon candy lollipop dragée. Brownie lemon drops chocolate cake pastry jelly biscuit.
      </div>
    </div>
  }
}

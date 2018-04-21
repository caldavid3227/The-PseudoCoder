import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';


class Home extends React.Component {
  render() {
    return ( 

    
      <div className="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>

       <div className="orbit" role="region" aria-label="Favorite Space Pictures" data-orbit>
  <div className="orbit-wrapper">
    <div className="orbit-controls">
      <button className="orbit-previous"><span className="show-for-sr">Previous Slide</span>&#9664;&#xFE0E;</button>
      <button className="orbit-next"><span className="show-for-sr">CHANGE</span>&#9654;&#xFE0E;</button>
    </div>
    <ul className="orbit-container">
      <li className="is-active orbit-slide">
        <figure className="orbit-figure">
          <img className="orbit-image" src="https://s3.amazonaws.com/viking_education/web_development/prep_engineering/logical_thinking_small.jpg" alt="Pic1"/>
          <figcaption className="orbit-caption">Welcome To The PseudoCoder!</figcaption>
        </figure>
      </li>
      <li className="orbit-slide">
        <figure className="orbit-figure">
          <img className="orbit-image" src="https://blog.nxp.com/wp-content/uploads/2017/10/Software-car-reuse-960x425.jpg" alt="Space"/>
          <figcaption className="orbit-caption">We Welcome You to a new way of setting up your code!</figcaption>
        </figure>
      </li>
      <li className="orbit-slide">
        <figure className="orbit-figure">
          <img className="orbit-image" src="https://alivenewspaper.com/wp-content/uploads/2017/08/build_your_business_plan_tool.jpg" alt="Space"/>
          <figcaption className="orbit-caption">Begin and End your code with us!</figcaption>
        </figure>
      </li>
      <li className="orbit-slide">
        <figure className="orbit-figure">
          <img className="orbit-image" src="http://blog.edmentum.com/sites/blog.edmentum.com/files/styles/blog_image/public/images/BlendedLearningFAQ_5.png?itok=jAO9ddaj" alt="Space"/>
          <figcaption className="orbit-caption">Learn new, more effective ways to plan, organize, and exicute your code!</figcaption>
        </figure>
      </li>
    </ul>
  </div>
  <nav className="orbit-bullets">
    <button className="is-active" data-slide="0"><span className="show-for-sr">First slide details.</span><span className="show-for-sr">Current Slide</span></button>
    <button data-slide="1"><span className="show-for-sr">Second slide details.</span></button>
    <button data-slide="2"><span className="show-for-sr">Third slide details.</span></button>
    <button data-slide="3"><span className="show-for-sr">Fourth slide details.</span></button>
  </nav>
</div>
</div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  };
};

export default connect(mapStateToProps)(Home);

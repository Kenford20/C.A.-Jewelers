import React, {Component} from 'react';
import GlobalHeader from '../components/global-header';
import GlobalFooter from '../components/global-footer';

class Whoops404 extends Component {
  componentDidMount() {
    document.title = "C.A. Jewelers: Engagement Rings & Custom Fine Jewelry | Chicago, IL";
  }

  render() {
    return (
      <div id="whoops">
        <GlobalHeader/>
        <div className="container">
          <p>We're sorry, the page you were looking for could not be found. Please call us at 123-456-7890 with any questions with any questions, or you may contact us <a href="/contact">here.</a></p>
          <a href="/">Return Home</a>
          <a href="/engagement-rings">Engagement Rings</a>
          <a href="/wedding">Wedding Rings</a>
          <a href="/jewelry">Fine Jewelry</a>
          <a href="/about">About</a>
        </div>
        <GlobalFooter/>
      </div>
    );
  }
}

export default Whoops404;
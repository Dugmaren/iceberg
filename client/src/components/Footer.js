import React, {Component} from 'react';

import twitter from '../images/twitter_icon_34.gif';
import facebook from '../images/fb_icon_34.gif';
import instagram from '../images/instagram_icon_34.gif';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div style={{float: 'left', clear: 'both'}}>
            <a
              style={{fontVariant: 'small-caps'}}
              href="mailto:admin@icebergdryice.com?subject=Website Contact"
            >
              Email
            </a>
          </div>
          604.524.0609
          <div style={{float: 'right'}}>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.twitter.com/icebergdryice"
            >
              <img src={twitter} alt="Twitter" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/icebergdryice"
            >
              <img src={facebook} alt="FaceBook" />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/icebergdryice"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
        </div>
        <div className="footer_spacer" />
      </div>
    );
  }
}

export default Footer;

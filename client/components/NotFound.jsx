import React from 'react';
import Pulse from 'react-reveal/Pulse';
import Shake from 'react-reveal/Shake';
import Zoom from 'react-reveal/Zoom';

const NotFound = ({ location }) => (
  <div className='m-5 text-center'>
    <Shake>
      <h1>\_(*~*)_/</h1>
    </Shake>
    <br />
    <Pulse>
      <h1>Error 404: Page Not Found.</h1>
    </Pulse>
    <br />
    <Zoom right>
      <h5>
        <code>{location.pathname}</code> does not exist.
      </h5>
    </Zoom>
  </div>
);

export default NotFound;

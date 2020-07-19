import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../../lib/components';

const IRouter: React.FC<{}> = () => (
  <div>
    <h1>You can write your demos</h1>
    <Button />
  </div>
);

ReactDOM.render(<IRouter />, document.querySelector('#app'));

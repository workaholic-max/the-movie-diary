import React from 'react';

import Button from '../../components/atoms/Button';

const Page = () => (
  <div className="page">
    <Button className="btn-primary">Favorite</Button>

    <Button className="btn-primary btn--rounded">F</Button>

    <Button className="btn-success">Watched</Button>

    <Button className="btn-success btn--rounded">W</Button>

    <Button className="btn-warning">Next to watch</Button>

    <Button className="btn-warning btn--rounded">N</Button>
  </div>
);

export default Page;

import React from 'react';
import { Link } from 'gatsby';

function Index() {
  return (
    <nav>
      <Link to="/arduino"> Arduino</Link> |
      <Link to="/tienda"> Tienda</Link> |
      <Link to="/academia"> Academia</Link>
    </nav>
  );
}

export default Index;

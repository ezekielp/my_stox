import React from 'react';

import NavbarContainer from '../nav/navbar_container';

class PortfolioIndex extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {
    return (
      <div className="portfolio-index-container">
        <NavbarContainer />
      </div>
    )
  }

}

export default PortfolioIndex;
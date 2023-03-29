import React from 'react';
import Title from '../Title';
import john from '../img/JoelHiltonHeadshot.jpg';

class Home extends React.Component {
  render() {
    return (
      <>
        <Title title="My Movie Website" />
        <img src={john} alt="John Hilton profile" />
      </>
    );
  }
}

export default Home;

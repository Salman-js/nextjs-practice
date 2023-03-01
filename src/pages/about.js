import React from 'react';

const About = () => {
  return <h2 className='m-auto font-bold'>About</h2>;
};

export default About;
About.getLayout = function PageLayout(page) {
  return <>{page}</>;
};

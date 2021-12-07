import React from 'react';

import Head from 'next/head';

import SignIn from './auth/SignIn';

function Home() {

  return (
    <React.Fragment>
      <Head>
        <title>Chat Application</title>
      </Head>
      <div>
        <SignIn />
      </div>
    </React.Fragment>
  );
};

export default Home;

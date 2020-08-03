import React, {Component} from 'react';
import Layout from './components/Layout/Layout';
import RobotBuilder from './containers/RobotBuilder/RobotBuilder'

function App() {
  return (
      <div >
          <Layout>
              <RobotBuilder />
          </Layout>
      
    </div>
  );
}

export default App;

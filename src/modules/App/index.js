import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';

import store from 'redux/store'

import Header from 'modules/Header';
import VideoList from 'modules/VideoList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Row className="appContainer">
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 22, offset: 1 }}
            lg={{ span: 16, offset: 4 }}
            xl={{ span: 16, offset: 4 }}
          >
            <Header />
            <VideoList/>
          </Col>
        </Row>
      </Provider>
    );
  }
}

export default App;

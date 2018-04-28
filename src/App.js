import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content, Button, Card, CardText } from 'react-mdl';
import './App.css';
import Main from './components/main';
import {link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
        <Layout fixedHeader>
            <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                <Navigation>
                    <a href="#">About Me</a>
                    <a href="#">Contact</a>
                    <a href="#">Projects</a>
                    <a href="#">Resume</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">About Me</a>
                    <a href="#">Contact</a>
                    <a href="#">Projects</a>
                    <a href="#">Resume</a>
                </Navigation>
            </Drawer>
            <Content />
        </Layout>
    </div>
    );
  }
}

export default App;

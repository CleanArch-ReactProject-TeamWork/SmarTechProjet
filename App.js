/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import AssetTab from './src/Presenter/Components/AssetTab';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab tabStyle={{ backgroundColor: '#009387' }} heading="Assets" >
            <AssetTab />
          </Tab>

        </Tabs>
      </Container>
    );
  }
}

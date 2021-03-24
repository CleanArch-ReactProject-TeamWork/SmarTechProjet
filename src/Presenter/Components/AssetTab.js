/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import { Container, Content, List, Text, View } from 'native-base';
import { GetAsset } from '../../Services/AssetService';
import AssetDataItems from './AssetDataItems';

export default class AssetTab extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            data: null,
        };
    }
    componentDidMount() {
        GetAsset().then(data => {
            this.setState({
                isLoading: false,
                data: data,
            });
        }).catch((err) => {
            Alert.alert('error', err);
        });
    }

    render() {
        console.log(this.state.data);
        let view = this.state.isLoading ? (
            <View>
                <ActivityIndicator animating={this.state.isLoading} />
                <Text style={{ marginTop: 10 }}>Please Wait..</Text>
            </View>
        ) : (
            <List
                dataArray={this.state.data}
                renderRow={(item) => {
                    return (
                        <AssetDataItems data={item} />
                    );
                }}
            />
        );
        return (
            <Container>
                <Content>
                    {view}
                </Content>
            </Container>
        );
    }
}

/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
    ListItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Right,
    Button,
} from 'native-base';
export default class AssetDataItems extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
    }
    render() {
        return (
            <ListItem thumbnail>

                <Left>
                    <Thumbnail
                        square
                        source={{
                            uri:
                                this.data.urlToImage != null
                                    ? this.data.urlToImage
                                    : 'https://cdn4.iconfinder.com/data/icons/delivery-1-1/512/check_clipboard-512.png',
                        }}
                    />
                </Left>
                <Body>
                    <Text numberOfLines={2} >{this.data.ASSETID}</Text>
                    <Text note numberOfLines={2}>{this.data.DESCRIPTION}</Text>
                </Body>
                <Right>
                    <Button transparent>
                        <Text>View</Text>
                    </Button>
                </Right>
            </ListItem>


        );
    }
}

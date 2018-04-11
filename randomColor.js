import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';

const colors = [
	'rgb(190, 144, 212)',
	'rgb(65, 131, 215)',
	'rgb(107, 185, 240)',
	'rgb(207, 0, 15)',
	'rgb(192, 57, 43)',
	'rgb(63, 195, 128)',
	'rgb(0, 177, 106)',
	'rgb(38, 194, 129)',
	'rgb(230, 126, 34)',
	'rgb(3, 166, 120)',
	'rgb(134, 226, 213)',
	'rgb(144, 198, 149)'
];

export default class HelloWorldApp extends Component {
	state = {
		currentNumber: 0
	};

	randomNumber = () => {
		return this.setState({
			currentNumber: Math.floor(Math.random() * 12) + 0
		});
	};

	render() {
		return (
			<View
				style={{
					flex: 1,
					backgroundColor: colors[this.state.currentNumber],
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<StatusBar barStyle="light-content" />
				<TouchableOpacity onPress={this.randomNumber}>
					<View
						style={{
							width: 100,
							height: 100,
							borderRadius: 15,
							backgroundColor: 'white',
							alignItems: 'center',
							justifyContent: 'center'
						}}
					>
						<Text
							style={{
								color: 'rgb(100, 100, 200)',
								fontWeight: '500'
							}}
						>
							Random!
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

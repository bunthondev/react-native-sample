import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Header = () => {
	return (
		<View style={styles.headerContainer}>
			<View style={styles.headerLeftContainer}>
				<TouchableOpacity onPress={() => console.log('press back')}>
					<Image
						style={styles.image}
						source={require('../Assets/arrow-left2.png')}
					/>
				</TouchableOpacity>
				<Text style={styles.title}>History</Text>
			</View>
			<TouchableOpacity onPress={() => console.log('press more')}>
				<Image
					style={styles.image}
					source={require('../Assets/more-vertical.png')}
				/>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	headerContainer: {
		width: '100%',
		height: 50,
		alignItems: 'center',
		backgroundColor: '#0388D1',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 15
	},
	headerLeftContainer: {
		flexDirection: 'row'
	},
	title: {
		color: '#fff',
		fontSize: 18,
		marginLeft: 15
	},
	image: {
		width: 20,
		height: 20
	}
});

export { Header };

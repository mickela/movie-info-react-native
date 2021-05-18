import React from 'react';
import { View, Text, StyleSheet, Button, StatusBar, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

class Home extends React.Component{

    renderHomeHeader = () =>{
        return(
            <View style={styles.headerWrapper}>
                <View style={styles.appTitleWrapper}>
                    <MaterialCommunityIcons name="movie-open-outline" size={28} color="white" />
                    <Text style={styles.appTitleText}>Movie Deets</Text>
                </View>
                <View style={styles.searchIconWrapper}>
                    <TouchableOpacity
                        onPress={()=> this.props.navigation.navigate("Search")}
                    >
                        <AntDesign name="search1" size={28} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                {this.renderHomeHeader()}
                <Button
                    onPress={()=> this.props.navigation.navigate("Details")}
                    title="Details"
                />
				<Text style={{ color: "#fff" }}>Home Page</Text>
				<StatusBar backgroundColor={colors.black} />
			</View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#414360',
		// alignItems: 'center',
		// justifyContent: 'center',
	},
    headerWrapper: {
        flex: 1,
        flexDirection: "row",
        alignContent: "space-between",
        // justifyContent: "space-between",
        padding: 20,
    },
    appTitleWrapper: {
        flex: 1,
        flexDirection: "row",
    },
    appTitleText: {
        color: colors.white,
        fontSize: 25,
        marginLeft: 9,
    },
    searchIconWrapper: {
        flex: 1,
        position: "absolute",
        top: 25,
        right: 25,
    }
});

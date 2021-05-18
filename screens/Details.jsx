import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Details extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Button
                    onPress={()=> this.props.navigation.navigate("Home")}
                    title="Home"
                />
                <Text style={{ color: "#fff" }}>Details Page</Text>
            </View>
        )
    }
}

export default Details;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#414360',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

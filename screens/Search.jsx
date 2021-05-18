import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

class Search extends React.Component{
    constructor(){
        super()
        this.state = {
            searchTerm: "",
            loading: false,
        }
    }

    handleTextChange = (txt) =>{
        this.setState(()=>({ searchTerm: txt }));
    }

    handleSubmit = (e) =>{

        const { searchTerm } = this.state;

        if(searchTerm.length > 0){
            return alert("Loading...");
        }
        alert("Movie title is required!");
    }

    render(){
        return(
            <View style={styles.container}>
            <Text style={{ color: "#fff" }}>Search Page</Text>
            <TextInput
                onChangeText={this.handleTextChange}
                value={this.state.searchTerm}
                style={styles.searchInput}
                autoFocus={true}
                onSubmitEditing={this.handleSubmit}
                selectionColor="red"
                autoCorrect={true}
            />
            <Button
                onPress={()=> this.props.navigation.goBack()}
                title="Back"
            />
        </View>
        )
    }
}

export default Search;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#414360',
		alignItems: 'center',
		justifyContent: 'center',
	},
    searchInput: {
        color: "white",
        backgroundColor: "coral",
        borderRadius: 150,
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: 390,
        fontSize: 25,
    }
});

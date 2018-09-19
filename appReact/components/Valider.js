import React from 'react'
import { StyleSheet, View, TextInput, Button, Text } from 'react-native'

class Valider extends React.Component {

  constructor(props) {
    super(props);

    this.number = Math.round((Math.random()* 100) + 1);
    
    this.state = {
      input: 0,
      msg: ""
    };
  }

  onPress = () => {

    if(this.state.input < this.number ){
      this.setState({ msg : "Trop petit !" });
    }
    if(this.state.input > this.number ){
      this.setState({ msg : "Trop grand !" });
    }
    if(this.state.input == this.number ){
      this.setState({ msg : "Bravo, vous avez trouvé la bonne valeur !" });
    }

  }

  reinit = () => {
    this.setState({ input : 0, msg : ""})
    this.number = Math.round((Math.random()* 100) + 1);
  }

  render() {
    return (
      <View style={styles.main_container}>
        <Text>Jeu du plus petit ou plus grand.</Text>
        <Text>Entrez une valeur comprise entre 1 et 100 !</Text>
        <TextInput style={styles.textinput} placeholder='Entrez un chiffre (valeur par défaut : 0)' onChangeText={(text) => this.setState({ input: text })}/>
        <Button style={{ height: 50 }} title='Valider' onPress={this.onPress}/>
        <Button style={{ height: 60 }} title='Relancer' onPress={this.reinit}/>
        <Text>{this.state.msg}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 20,
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Valider
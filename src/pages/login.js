import React,{useState} from 'react';
import { Text, TextInput, View, KeyboardAvoidingView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


import styles from './styles';
import GitHubLogo from '../assets/images/gitHubLogo.svg';
import DeveloperCommit from '../assets/images/developerCommit.svg';

  
export default function Login({navigation}) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <KeyboardAvoidingView style={styles.container} behavior='position'>
        
        <View style={styles.headerContainer}>
            <GitHubLogo style={styles.gitHubLogo}/>
            <Text style={styles.textAdviceHub}>AdviceHub</Text>
        </View>
    
    <View style={styles.bodyContainer}>
        <DeveloperCommit style = {styles.develeperCommit}/>
        <Text style = {styles.bodyText}>Insira um usuário do GitHub</Text>
        <TextInput style={styles.bodyInput}
            onChangeText={text => setSearchValue(text)}   
        />
        <TouchableOpacity style={styles.bodyButton} onPress={() => navigation.navigate("Profile",searchValue)}>
            <Text style={styles.textButton}>Continuar</Text>
        </TouchableOpacity>
    </View>
  </KeyboardAvoidingView>
  );
}
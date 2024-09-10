import {Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './LogonStyles/LoginStyles';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Login</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="User ID"
          value={userId}
          onChangeText={setUserId}
          keyboardType="user-id"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          keyboardType="password"
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

export default Login;

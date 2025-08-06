import React, { useEffect } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import { auth } from '../firebase';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';

export default function LoginScreen() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '691965473973-llrhhqojascmqgodfb0p1rgtmsc05qeb.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <View style={styles.container}>
      <Button
        title="Login with Google"
        disabled={!request}
        onPress={() => promptAsync()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
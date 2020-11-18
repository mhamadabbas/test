import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import i18n from '../../i18n/i18n';
import * as user from '../../store/slices/userSlice';
import styles from './LoginForm.style';

interface LoginFormProps {
  status: string;
  signIn: (...args: any) => any;
}

export const LoginForm = ({ status, signIn }: LoginFormProps) => {
  const { navigate } = useNavigation();

  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  const handleClick = () => {
    if (status === 'idle' || status === 'failed') {
      signIn({ email, password });
    }
  };

  return (
    <View style={styles.loginFormContainer}>
      <View style={styles.textInputCustomContainer}>
        <Text style={styles.labelText}>{i18n.t('Login.mail')}</Text>
        <TextInput
          style={styles.textInputCustom}
          value={email}
          keyboardType="email-address"
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.textInputCustomContainer}>
        <Text style={styles.labelText}>{i18n.t('Login.password')}</Text>
        <TextInput
          style={styles.textInputCustom}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
      </View>
      <Text
        style={styles.forgotPasswordText}
        onPress={() => navigate('ForgotPassword')}>
        {i18n.t('Login.forgotPassword')}
      </Text>
      <View>
        <TouchableOpacity style={styles.loginButton} onPress={handleClick}>
          <Text style={styles.loginButtonText}>{i18n.t('Login.signin')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  status: user.getStatus(state),
});
const mapDispatchToProps = { signIn: user.signIn };

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import LoginForm from '../../components/LoginForm/LoginForm';
import i18n from '../../i18n/i18n';
import style from './Login.style';

const Login = ({ navigation }) => {
  return (
    <View style={style.loginView}>
      <View style={style.header}>
        <View style={style.centered}>
          <Text style={style.titleText}>{i18n.t('Login.title')}</Text>
        </View>
        <View style={style.centered}>
          <Text style={style.subtitleText}>{i18n.t('Login.subtitle')}</Text>
        </View>
      </View>
      <LoginForm />
      <View style={style.signupView}>
        <Text style={style.signupText}>{i18n.t('Login.noAccount')}</Text>
        <TouchableHighlight
          style={style.signupButton}
          onPress={() => navigation.navigate('SwipeDemo')}>
          <Text style={style.signupButtonText}>
            {i18n.t('Login.signup')} (Swipe Demo)
          </Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default Login;

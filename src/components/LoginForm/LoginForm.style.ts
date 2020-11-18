import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loginFormContainer: {
    marginTop: 0,
    marginBottom: 0,
    marginLeft: '8%',
    marginRight: '8%',
  },

  textInputCustom: {
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 2,
    padding: 12,
    marginBottom: 12,
  },

  textInputCustomContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  labelText: {
    paddingBottom: 8,
    paddingLeft: 8,
    color: 'white',
  },

  loginButton: {
    width: '100%',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 0,
    marginRight: 0,
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 0,
    paddingRight: 0,
  },

  loginButtonText: {
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
    color: '#F3677F',
    letterSpacing: 2,
  },

  forgotPasswordText: {
    color: 'white',
    paddingLeft: 12,
    fontWeight: '700',
    textDecorationLine: 'underline',
    marginBottom: 12,
  },
});

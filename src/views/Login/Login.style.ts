import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loginView: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    flex: 1,
    backgroundColor: '#EE828F',
  },

  topContent: {
    height: '40%',
    justifyContent: 'space-between',
    paddingTop: '15%',
    paddingBottom: '10%',
  },

  titleContainer: {
    width: '100%',
    alignItems: 'center',
  },

  titleText: {
    fontSize: 44,
    color: 'white',
    textAlign: 'center',
    fontWeight: '300',
    letterSpacing: 2,
  },

  subtitleText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    maxWidth: '65%',
    lineHeight: 28,
  },

  signupView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  signupText: {
    color: 'white',
    marginBottom: 8,
  },

  signupButton: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    marginVertical: 0,
    marginHorizontal: '8%',
    paddingVertical: 16,
    paddingHorizontal: 36,
  },

  signupButtonText: {
    width: '100%',
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    letterSpacing: 2,
  },

  centered: {
    width: '100%',
    alignItems: 'center',
  },

  header: {
    height: '40%',
    justifyContent: 'space-between',
    paddingTop: '15%',
    paddingBottom: '10%',
  },
});

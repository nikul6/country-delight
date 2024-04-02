import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, TextInput, Platform } from 'react-native';
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">

export default function Login({ navigation }: LoginScreenProps) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <StatusBar style="auto" />
      <View style={styles.imgConatiner}>
        <Image
          source={require('../../assets/Banner-1.webp')}
          style={{ height: 250, width: 250, resizeMode: 'contain' }}
        />
      </View>
      <View style={styles.loginConatiner}>
        <View>
          <Text style={styles.getStartedText}>Get started</Text>
          <View style={styles.mobileNumberContainer}>
            <Image
              source={require('../../assets/india.png')}
              style={styles.countryImg}
            />
            <View style={styles.vr} />
            <TextInput
              placeholder='Enter mobile number'
              style={styles.textInput}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.cotinueBtn} onPress={() => navigation.navigate('BottomTabs')}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
          <Text style={styles.tncPrivacyText}>By signing up you agree to{"\n"}TnC and Privacy Policy</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imgConatiner: {
    flex: 0.6, justifyContent: 'center', alignItems: 'center'
  },
  loginConatiner: {
    flex: 0.4, margin: 10, paddingHorizontal: 20, borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    // backgroundColor:'green'
  },
  getStartedText: {
    paddingVertical: 10, fontSize: 15, fontWeight: 'bold', marginTop: 10
  },
  mobileNumberContainer: {
    borderWidth: 0.5, flexDirection: 'row', borderRadius: 10, justifyContent: 'center', borderColor: 'gray'
  },
  countryImg: {
    height: 45, width: 45, resizeMode: 'contain', marginHorizontal: 8
  },
  vr: {
    backgroundColor: 'green', borderWidth: 0.5, marginVertical: 8, borderColor: 'gray'
  },
  textInput: {
    height: 45, padding: 10, flex: 1, fontSize: 15
  },
  cotinueBtn: {
    backgroundColor: '#00AF64', padding: 16, borderRadius: 10, justifyContent: 'center', alignItems: 'center'
  },
  continueText: {
    color: '#fff', fontSize: 15, fontWeight: '700'
  },
  tncPrivacyText: {
    textAlign: 'center', paddingVertical: 10
  }
});

import React, {useState} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  Pressable,
  View,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {styles} from './SignupStyles/SignupStyles';

const SignupPage = () => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const [gender, setGender] = useState('');

  const showDatePicker = () => setDatePickerVisible(true);

  const hideDatePicker = () => setDatePickerVisible(false);

  const handleDateConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

  const handleGenderSelection = selectedGender => {
    setGender(selectedGender);
  };

  const handleSignup = () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    Alert.alert('Success', 'Account created successfully');
    console.log('Signup with:', email, password);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={fname}
        onChangeText={setFname}
        keyboardType="first-name"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lname}
        onChangeText={setLname}
        keyboardType="last-name"
        autoCapitalize="none"
      />

      {/* Gender */}
      <View style={styles.genderContainer}>
        <Text style={styles.genderLabel}>Gender: </Text>
        <TouchableOpacity
          style={[
            styles.genderOption,
            gender === 'Male' && styles.genderOptionSelected,
          ]}
          onPress={() => handleGenderSelection('Male')}>
          <Text
            style={[
              styles.genderOptionText,
              gender === 'Male' && styles.genderOptionTextSelected,
            ]}>
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderOption,
            gender === 'Female' && styles.genderOptionSelected,
          ]}
          onPress={() => handleGenderSelection('Female')}>
          <Text
            style={[
              styles.genderOptionText,
              gender === 'Female' && styles.genderOptionTextSelected,
            ]}>
            Female
          </Text>
        </TouchableOpacity>
      </View>

      {/* DOB */}
      <Pressable style={styles.input} onPress={showDatePicker}>
        <TextInput
          caretHidden
          placeholder="DOB"
          value={selectedDate.toLocaleDateString()}
          onChangeText={setDatePickerVisible}
          keyboardType="Date Picker"
          autoCapitalize="none"
          readOnly
        />
      </Pressable>

      <DateTimePickerModal
        style={styles.input}
        date={selectedDate}
        isVisible={datePickerVisible}
        modal="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
        maximumDate={new Date()}
      />

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      {/* phone number */}
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phonenumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-number"
        autoCapitalize="none"
      />

      {/* password */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignupPage;

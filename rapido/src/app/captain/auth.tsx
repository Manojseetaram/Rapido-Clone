import { View, Text,Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { authStyles } from "@/styles/authStyles";
import { ScrollView } from "react-native-gesture-handler";
import { commonStyles } from "@/styles/commonStyles";
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import CustomText from "@/components/shared/CustomeText";
import PhoneInput from "@/components/shared/PhoneInput"
import CustomButton from "@/components/shared/CustomButton";
import { resetAndNavigate } from "@/utils/Helpers";


const Auth = () => {

    const [phone, setPhone] = useState('');
    const handleText = async () => {
        resetAndNavigate("/captain/home")
    }
   
  return (
    <SafeAreaProvider style={authStyles.container}>
          <ScrollView contentContainerStyle={authStyles.container}>
              <View style={commonStyles.flexRowBetween}>
                  <Image source={require("@/assets/images/captain_logo.png")} style={authStyles.logo} />
                  <TouchableOpacity style={authStyles.flexRowGap}>
                      <MaterialIcons name="help" size={18} color="grey" />
                      <CustomText fontFamily="Medium" variant="h7">Help</CustomText>
                  </TouchableOpacity>
              </View>
              <CustomText fontFamily="Medium" variant="h6">
               Good to see you, Captain!
              </CustomText>
               <CustomText variant="h7" fontFamily="Regular" style={commonStyles.lightText}>
              Enter Your Phone number to Proceed
              </CustomText>
              <PhoneInput
                  onChangeText={setPhone}
                  value={phone}/>
          </ScrollView>
          <View>
              <CustomText variant="h8" fontFamily="Regular" style={[commonStyles.lightText,{textAlign:'center',marginHorizontal:20}]}>
                  By continuing, you agree to the terms and privacy policy of Rapido
              </CustomText>
              <CustomButton
                  title="Next"
                  onPress={handleText}
                  loading={false}
                  disabled={false}


              />
                  
            
          </View>
    </SafeAreaProvider>
  )
}

export default Auth;

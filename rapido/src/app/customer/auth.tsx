import { View, Text,Image, TouchableOpacity,Alert } from "react-native";
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
import { signin } from "@/service/authService";

const Auth = () => {

    const [phone, setPhone] = useState('');
    
    const handleText = async () => {
        if (!phone && phone.length !== 10) {
            Alert.alert("Bro enter your Phone number")
            return
        }
    signin({role:'customer',phone})
    }
   
  return (
    <SafeAreaProvider style={authStyles.container}>
          <ScrollView contentContainerStyle={authStyles.container}>
              <View style={commonStyles.flexRowBetween}>
                  <Image source={require("@/assets/images/logo_t.png")} style={authStyles.logo} />
                  <TouchableOpacity style={authStyles.flexRowGap}>
                      <MaterialIcons name="help" size={18} color="grey" />
                      <CustomText fontFamily="Medium" variant="h7">Help</CustomText>
                  </TouchableOpacity>
              </View>
              <CustomText fontFamily="Medium" variant="h6">
                  What's your number?
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

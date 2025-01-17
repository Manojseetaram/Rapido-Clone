import { View, Text,Image, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { roleStyles } from "@/styles/roleStyles";
import CustomText from "@/components/shared/CustomeText";
import { router } from "expo-router";

const Role = () => {
    const handlerCustomerPress = () => {
        router.navigate("/customer/auth")
    }
    const handlerCaptainPress = () => {
        router.navigate("/captain/auth")
    }
  return (
    <View style={roleStyles.container}>
          <Image
               source={require('@/assets/images/logo_t.png')}
              style={roleStyles.logo}
          />
                <CustomText fontFamily="Bold" variant="h6">
              Choose your user type
          </CustomText>
          <TouchableOpacity style={roleStyles.card} onPress={handlerCustomerPress}>
              <Image 
                   source={require("@/assets/images/customer.png")}
                  style={roleStyles.image} />
              <View style={roleStyles.cardContent}>
                  <CustomText style={roleStyles.title}>Customer</CustomText>
                  <CustomText style={roleStyles.description}>
                      Are you a customer? Order rides esily
                  </CustomText>
              </View>
          </TouchableOpacity>
          <TouchableOpacity style={roleStyles.card} onPress={handlerCaptainPress}>
              <Image 
                   source={require("@/assets/images/captain.png")}
                  style={roleStyles.image} />
              <View style={roleStyles.cardContent}>
                  <CustomText style={roleStyles.title}>Captain</CustomText>
                  <CustomText style={roleStyles.description}>
                      Are you a captain? join us to drive and deliver.
                  </CustomText>
              </View>
          </TouchableOpacity>
      </View>

  );
};

export default Role;

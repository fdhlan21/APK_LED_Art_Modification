import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Linking,

} from 'react-native';
import { MyButton, MyCalendar, MyGap, MyHeader, MyInput, MyPicker } from '../../components';
import { MyDimensi, colors, fonts, windowHeight, windowWidth, Color } from '../../utils';
import { MYAPP, apiURL, api_token, getData, storeData } from '../../utils/localStorage';
import { BackgroundImage } from 'react-native-elements/dist/config';
import { color } from 'react-native-reanimated';
import axios from 'axios';
import moment from 'moment';
import { useToast } from 'react-native-toast-notifications';
import MyLoading from '../../components/MyLoading';
import MyCarouser from '../../components/MyCarouser';
import { Icon } from 'react-native-elements';
import { NetworkInfo } from 'react-native-network-info';

export default function Home({ navigation, route }) {

  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
   
    NetworkInfo.getIPAddress().then(ip => {
      setIpAddress(ip);  
      console.log('IP Address Anda: ', ip);  
    });
  }, []);


  const verivikasiIp = () => {
    if (ipAddress === "10.11.12.13") {
        openLink(supportedURL.settingtext)
    } else {
      alert("Silakan sambungkan perangkat Anda ke WiFi Modul terlebih dahulu.")
    }
  }

  const supportedURL = {
    shoope : "https://s.shopee.co.id/4L05Q6xoz3",
    tiktok: "https://vt.tiktok.com/ZS2rx4j3b/?page=Mall",
    tokopedia: "https://www.tokopedia.com/aditiya793",
    lazada: "https://api.whatsapp.com/send/?phone=%2B6287882111505&text&type=phone_number&app_absent=0wa.me/+6287882111505",
    settingtext: "http://10.11.12.13",
  };
  
  const openLink = (url) => {
    Linking.openURL(url);

  };

  
  
  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,
    }}>

    <ImageBackground  source={require("../../assets/bgsplash.png")} style={{
      flex:1,
      width:'100%',
      height:'100%'
    }}>

    <View style={{
      padding:10,
    }}>

    {/* IMAGE */}
    <View style={{
      alignItems:"center"
    }}>
      <Image style={{
        width:300,
        height:140,

      }} source={require('../../assets/logo.png')}/>
    </View>


{/* MENU */}
<View style={{
  padding:10,
  flexDirection:"row",
  flexWrap:'wrap',
  marginTop:'5%',
  justifyContent:'space-around',
  

}}>

{/* SHOOPE */}


<TouchableWithoutFeedback onPress={() => openLink(supportedURL.shoope)}>
  <View style={{
    backgroundColor:colors.menuColor,
    padding:10,
    width:150,
    height:150,
    borderRadius:10,
   
    justifyContent:"center"


  }}>

  <Image style={{
    width:77,
    height:110,
    alignSelf:'center',
  }} source={require("../../assets/icon_shoope.png")}/>

  </View>
</TouchableWithoutFeedback>



{/* TIKTOK */}

<TouchableWithoutFeedback onPress={() => openLink(supportedURL.tiktok)}>
  <View style={{
    backgroundColor:colors.menuColor,
    padding:10,
    width:150,
    height:150,
    borderRadius:10,
    justifyContent:'center'

  }}>

<Image style={{
    width:101,
    height:110,
    alignSelf:'center',
  }} source={require("../../assets/icon_tiktok.png")}/>

  </View>
</TouchableWithoutFeedback>



{/* TOKO PEDIA */}

<TouchableWithoutFeedback onPress={() => openLink(supportedURL.tokopedia)}>
  <View style={{
    backgroundColor:colors.menuColor,
    padding:10,
    width:150,
    height:150,
    marginTop:20,
    borderRadius:10,
    justifyContent:'center'
  }}>

<Image style={{
    width:126,
    height:110,
    alignSelf:'center',
  }} source={require("../../assets/icon_tokopedia.png")}/>

  </View>
</TouchableWithoutFeedback>


{/* LAZADA */}

<TouchableWithoutFeedback onPress={() => openLink(supportedURL.lazada)}>
  <View style={{
    backgroundColor:colors.menuColor,
    padding:10,
    width:150,
    height:150,
    marginTop:20,
    borderRadius:10,
    justifyContent:'center'

  }}>

<Image style={{
    width:110,
    height:111,
    alignSelf:'center',
  }} source={require("../../assets/icon_wa.png")}/>

  </View>
</TouchableWithoutFeedback>


{/* SETTING TEXT */}

<TouchableWithoutFeedback onPress={verivikasiIp}>
  <View style={{
    backgroundColor:colors.menuColor,
    padding:10,
    width:150,
    height:150,
    marginTop:20,
    borderRadius:10,
    justifyContent:'center'

  }}>

<Image style={{
    width:92,
    height:91,
    alignSelf:'center',
  }} source={require("../../assets/icon_settingtext.png")}/>

<Text style={{
  fontFamily:fonts.primary[400],
  textAlign:'center',
  fontSize:12
}}>Setting Text</Text>
  </View>
</TouchableWithoutFeedback>


{/* RELOAD WEB SERVER */}

<TouchableWithoutFeedback>
  <View style={{
    backgroundColor:colors.menuColor,
    padding:10,
    width:150,
    height:150,
    marginTop:20,
    borderRadius:10,
    justifyContent:'center'

  }}>

<Image style={{
    width:92,
    height:91,
    alignSelf:'center',
  }} source={require("../../assets/icon_reloadserver.png")}/>

<Text style={{
  fontFamily:fonts.primary[400],
  textAlign:'center',
  fontSize:12
}}>Reload Web Server</Text>
  </View>
</TouchableWithoutFeedback>


</View>
    </View>

    </ImageBackground>  
  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
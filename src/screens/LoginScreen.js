import {
  View,
  Text,
  ImageBackground,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React,{useState,useEffect} from 'react';
import imagePath from '../utils/imagePath';
import LoginOptionModal from '../components/LoginOptionModal';
import {hp, wp} from '../utils/ResponsiveScreen';
import {colors, fontSize, fonts} from '../utils/theme';
import TypeWriter from '../components/TypeWriter';

const LoginScreen = () => {
  const [isModalVisible,setIsModalVisible] = useState(false)
  useEffect(()=>{

  },[])

  return (
    <ImageBackground style={{flex: 1,alignItems:'center'}} source={imagePath.img_background}>
      <View style={{position : 'absolute',width : wp(100),height : hp(100),backgroundColor : 'rgba(0, 0, 0, 0.6)'}}/>
      <Text style={{marginTop:hp(30),color : colors.color_white,fontFamily: fonts.Bold,fontSize:fontSize.px_30}}>StayEase</Text>
      <TypeWriter speed={100} style={{color : colors.color_white,fontFamily: fonts.Regular,fontSize:fontSize.px_18}} text={'Ease your management on finger tips.'} onComplete={()=> setIsModalVisible(true)}/>
      <LoginOptionModal isVisible={isModalVisible}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              height: hp(6),
              width: wp(85),
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderRadius: wp(8),
            }}>
            <Image
              source={imagePath.ic_mail}
              style={{
                height: hp(2.5),
                width: hp(2.5),
                tintColor: colors.color_white,
              }}
              resizeMode='contain'
            />
            <Text
              style={{
                fontFamily: fonts.Black,
                fontSize: fontSize.px_14,
                color: colors.color_white,
                marginStart: wp(1),
              }}>
              Continue With Email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.color_white,
              height: hp(6),
              width: wp(85),
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderRadius: wp(8),
              borderColor : colors.color_border,
              borderWidth : 1,
              marginVertical : hp(2)
            }}>
            <Image
              source={imagePath.ic_google}
              style={{
                height: hp(2.5),
                width: hp(2.5),
               
              }}
              resizeMode='contain'
            />
            <Text
              style={{
                fontFamily: fonts.Bold,
                fontSize: fontSize.px_14,
                color: colors.color_bg_black,
                marginStart: wp(1),
              }}>
              Login With Email
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: colors.color_white,
              height: hp(6),
              width: wp(85),
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
              borderRadius: wp(8),
              borderColor : colors.color_border,
              borderWidth : 1,
              // marginVertical : hp(2)
            }}>
            <Image
              source={imagePath.ic_facebook}
              style={{
                height: hp(2.5),
                width: hp(2.5),
               
              }}
              resizeMode='contain'
            />
            <Text
              style={{
                fontFamily: fonts.Bold,
                fontSize: fontSize.px_14,
                color: colors.color_bg_black,
                marginStart: wp(1),
              }}>
              Login With Facebook
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection : 'row',marginVertical:hp((3))}}>
              <Text style={{fontFamily : fonts.Medium,color : colors.color_bg_black, fontSize : fontSize.px_16,marginEnd : 5}}>Don't have an account?</Text>
              <Text style={{fontFamily : fonts.Medium,color : colors.color_red, fontSize : fontSize.px_16}}>Sign Up</Text>
          </View>
        </View>
      </LoginOptionModal>
    </ImageBackground>
  );
};

export default LoginScreen;

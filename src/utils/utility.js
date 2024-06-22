import {
    hp,wp
  } from './ResponsiveScreen';
  
  import { CommonActions } from '@react-navigation/native';







export function getHeightWidth(isHeight, heightWidthValue) {
    if (isHeight) {
      return hp(heightWidthValue / 8.44);
    } else {
      return wp(heightWidthValue / 3.9);
    }
  }
  
  export function printLog(label, value, isStringify) {
   
      if (isStringify) {
        console.log(label, JSON.stringify(value));
      } else {
        console.log(label, value);
      }
    
  }

  export const dateFormat = {
    DATE_TIME_AMPM : 'DD MMM YYYY hh:mm A'
  }

  export function validateEmail(email) {
    let isEmail = false;
  
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      isEmail = false;
    } else {
      isEmail = true;
    }
    return isEmail;
  }

  export function resetNavigation(navigation,screenName){
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: screenName }
        ],
      })
    );
  }

  export const performNavigation = (navigation, screenName, params) => {
    navigation.navigate(screenName, params);
  };



//   export function logout(navigation){
//     session.removeAllData().then((response)=>{
//       resetNavigation(navigation,stack.LOGIN)
//     })
//   }
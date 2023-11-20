/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  AppRegistry,
  TouchableOpacity,
  Linking,
  KeyboardAvoidingView,
  View,
  Text,
  useWindowDimensions,
  Platform,
  TouchableHighlight,
} from 'react-native';
// import {BarCodeReadEvent, RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
// import {
//   request,
//   PERMISSIONS,
//   openSettings,
//   RESULTS,
// } from 'react-native-permissions';

function App(): JSX.Element {
  const [barcode, setBarcode] = useState('');
  const [qrCodeType, setQrCodeType] = useState('');
  const [qrCodeValue, setQrCodeValue] = useState('');
  // const {height, width} = useWindowDimensions();
  // const [isCameraPermissionGranted, setIsCameraPermissionGranted] =
  //   useState(false);

  const onSuccess = (e: any) => {
    console.log(e);
    setQrCodeType(e.type);
    setQrCodeValue(e.data);

    // результат скана на ios #####
    // { target: 205,
    //   data: '4650075427798',
    //   type: 'org.gs1.EAN-13',
    //   rawData: null,
    //   bounds:
    //    { size: { width: '125.456914', height: '0.994876' },
    //      origin: { x: '78.991754', y: '195.823918' } } }

    // { target: 265,
    //   data: '104390',
    //   type: 'org.iso.Code128',
    //   rawData: null,
    //   bounds:
    //    { size: { width: '101.111285', height: '0.994876' },
    //      origin: { x: '134.501566', y: '200.466660' } } }

    // Linking.openURL(e.data).catch(err =>
    //   console.error('An error occured', err),
    // );
  };

  // react-native-vision-camera#####################
  // const codeScanner = useCodeScanner({
  //   codeTypes: [
  //     'qr',
  //     'ean-13',
  //     'ean-8',
  //     'code-128',
  //     'code-39',
  //     'code-93',
  //     'codabar',
  //     'itf',
  //     'upc-e',
  //     'pdf-417',
  //     'aztec',
  //     'data-matrix',
  //   ],
  //   onCodeScanned: codes => {
  //     console.log(codes[0].type, codes[0].value);
  //     setQrCodeType(codes[0].type);
  //     setQrCodeValue(codes[0].value as string);
  //   },
  // });
  // const CameraComponent = () => {
  //   const device = useCameraDevice('back');
  //   if (device == null) return <Text>Нет доступа к камере</Text>;
  //   return (
  //     <Camera
  //       device={device}
  //       isActive={true}
  //       torch={'on'}
  //       codeScanner={codeScanner}
  //       // style={StyleSheet.absoluteFill}
  //       style={{flex: 1, width: '100%'}}
  //     />
  //   );
  // };
  //#######################################

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.section}>
        {/* cтарые ViewPropTypes ########################################### */}
        {qrCodeValue && qrCodeType ? (
          <View style={styles.buttonContainer}>
            <Text style={styles.text}>Value: {qrCodeValue}</Text>
            <Text style={styles.text}>Type: {qrCodeType}</Text>
            <TouchableHighlight
              underlayColor={'rgba(44, 59, 143, 0.616)'}
              onPress={() => {
                setQrCodeValue('');
                setQrCodeType('');
              }}
              style={styles.btnPrimary}>
              <Text style={styles.btnText}>Сканировать новый QR код</Text>
            </TouchableHighlight>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#303b8f',
            }}>
            <Text style={styles.centerText}>Отсканируйте QR код.</Text>
            <QRCodeScanner
              onRead={e => onSuccess(e)}
              // фонарик ###########################
              // flashMode={RNCamera.Constants.FlashMode.torch}
              // topContent={
              //   // <Text style={styles.centerText}>
              //   //   Go to{' '}
              //   //   <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text>{' '}
              //   //   on your computer and scan the QR code.
              //   // </Text>
              //   <Text style={styles.centerText}>Отсканируйте QR код.</Text>
              // }
              topViewStyle={{flex: 0}}
              bottomViewStyle={{flex: 0}}
              containerStyle={styles.containerStyle}
              // cameraContainerStyle={styles.cameraContainerStyle}
              cameraStyle={styles.cameraStyle}
            />
          </View>
        )}

        {/* вылетает########################################### */}
        {/* {qrCodeValue && qrCodeType ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              backgroundColor: 'black',
            }}>
            <Text style={styles.text}>Value: {qrCodeValue}</Text>
            <Text style={styles.text}>Type: {qrCodeType}</Text>
            <TouchableHighlight
              underlayColor={'rgba(44, 59, 143, 0.616)'}
              // activeOpacity={globalStyles.btnPrimary.activeOpacity}
              onPress={() => {
                setQrCodeValue('');
                setQrCodeType('');
              }}
              style={styles.btnPrimary}>
              <Text style={styles.btnText}>Сканировать новый QR код</Text>
            </TouchableHighlight>
          </View>
        ) : (
          <View style={{flex: 1, width: '100%'}}>
            <View
              style={{width: '100%', padding: 20, backgroundColor: 'black'}}>
              <Text style={styles.headerText}>Отсканируйте QR код</Text>
            </View>
            <CameraComponent />
          </View>
        )} */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
  },
  btnPrimary: {
    marginTop: 100,
    justifyContent: 'center',
    backgroundColor: '#303b8f',
    borderWidth: 1,
    borderColor: '#303b8f',
    borderStyle: 'solid',
    paddingHorizontal: 32,
    paddingVertical: 16,
    maxWidth: 200,
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
  },
  centerText: {
    // flex: 1,
    fontSize: 18,
    padding: 20,
    color: 'white',
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'black',
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  // cameraContainerStyle: {
  // flex: 1,
  // alignItems: 'center',
  // justifyContent: 'center',
  //   backgroundColor: 'red',
  // },
  cameraStyle: {
    // flex: 1,
    height: '100%',
    borderColor: 'blue',
    borderWidth: 1,
    // overflow: 'hidden',
  },
});

export default App;

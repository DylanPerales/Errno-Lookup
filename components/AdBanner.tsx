import Constants from 'expo-constants';
import React from 'react';
import { Platform, Text, View } from 'react-native';

let BannerAd: any = null;
let TestIds: any = null;
let BannerAdSize: any = null;

try {
    const RNAds = require('react-native-google-mobile-ads');
    BannerAd = RNAds.BannerAd;
    TestIds = RNAds.TestIds;
    BannerAdSize = RNAds.BannerAdSize;
} catch (e) {
    // Ignore error if running in Expo Go without the native module
}

export default function AdBanner() {
    const isExpoGo = Constants.appOwnership === 'expo';

    if (isExpoGo || !BannerAd) {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#39FF14' }}>
                <Text style={{ color: '#39FF14', fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace', fontSize: 12 }}>[ Ad Placeholder (Expo Go) ]</Text>
            </View>
        );
    }

    const adUnitId = __DEV__
        ? TestIds.BANNER
        : Platform.select({
            ios: 'ca-app-pub-9179572262193956/6628731604', // Your iOS Ad Unit ID
            android: 'ca-app-pub-9179572262193956~2454517021', // REPLACE XXXXXXXXXX with your Android Ad Unit ID
            default: '',
        });

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: '#39FF14' }}>
            <BannerAd
                unitId={adUnitId}
                size={BannerAdSize.BANNER}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true,
                }}
            />
        </View>
    );
}

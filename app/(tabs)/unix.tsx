import unixData from '@/assets/data/unix_errno.json';
import AdBanner from '@/components/AdBanner';
import ErrnoList from '@/components/ErrnoList';
import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UnixScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <AdBanner />
            <View style={styles.headerContainer}>
                <Image source={require('@/assets/images/favicon.ico')} style={styles.icon} />
                <Text style={styles.headerText}>errno Lookup (AIX)</Text>
            </View>
            <ErrnoList data={unixData} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#39FF14',
    },
    icon: {
        width: 32,
        height: 32,
        marginRight: 10,
    },
    headerText: {
        fontSize: 24,
        color: '#39FF14',
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    },
});

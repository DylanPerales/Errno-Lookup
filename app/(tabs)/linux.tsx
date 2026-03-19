import linuxData from '@/assets/data/linux_errno.json';
import AdBanner from '@/components/AdBanner';
import ErrnoList from '@/components/ErrnoList';
import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LinuxScreen() {
    return (
        <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
            <AdBanner />
            <View style={styles.headerContainer}>
                <Image source={require('@/other/icon.png')} style={styles.icon} />
                <Text style={styles.headerText}>errno Lookup (Linux)</Text>
            </View>
            <ErrnoList data={linuxData} osName="linux" />
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
        borderWidth: 1,
        borderColor: 'rgb(51, 255, 0)',
    },
    headerText: {
        fontSize: 24,
        color: '#39FF14',
        fontWeight: 'bold',
        fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    },
});

import React, { useEffect } from 'react';
import { View } from 'react-native';

export default function AdBanner() {
    useEffect(() => {
        try {
            (window as any).adsbygoogle = (window as any).adsbygoogle || [];
            (window as any).adsbygoogle.push({});
        } catch (e) {
            console.error('AdSense error', e);
        }
    }, []);

    return (
        <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa', paddingVertical: 5 }}>
            <div dangerouslySetInnerHTML={{
                __html: `
        <ins class="adsbygoogle"
             style="display:inline-block;width:320px;height:50px"
             data-ad-client="ca-pub-9179572262193956"
             data-ad-slot="3489443061"></ins>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      `}} />
        </View>
    );
}

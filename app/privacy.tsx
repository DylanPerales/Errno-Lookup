import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export default function PrivacyPolicy() {
  const { colors } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Privacy Policy</Text>
      <Text style={[styles.date, { color: colors.text }]}>Last Updated: March 24, 2026</Text>

      <View style={styles.section}>
        <Text style={[styles.heading, { color: colors.text }]}>1. Introduction</Text>
        <Text style={[styles.paragraph, { color: colors.text }]}>
          This Privacy Policy explains how Errno Lookup ("we", "us", or "our") handles your information when you use our mobile application and web service. Importantly, we do not collect any personal data from our users.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.heading, { color: colors.text }]}>2. Information We Collect</Text>
        <Text style={[styles.paragraph, { color: colors.text }]}>
          We do not collect, store, or transmit any personally identifiable information (PII) or usage telemetry. All functionalities and queries within the app are performed locally on your device without sending your search queries to our servers.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.heading, { color: colors.text }]}>3. Data Sources</Text>
        <Text style={[styles.paragraph, { color: colors.text }]}>
          Errno Lookup is an offline reference tool. All definitions, error codes, and technical information provided within the app are curated from publicly available sources (such as standard Unix and Linux system manuals and documentations) and bundled directly into the application.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.heading, { color: colors.text }]}>4. Third-Party Services (Advertising)</Text>
        <Text style={[styles.paragraph, { color: colors.text }]}>
          While we do not collect data ourselves, our application uses third-party advertising services provided by Google AdMob to display advertisements. Ad networks may independently collect, use, and share information about your device, including your IP address, device identifiers (such as Google Advertising ID or Apple IDFA), and general location data, in order to serve targeted advertisements.
        </Text>
        <Text style={[styles.paragraph, { color: colors.text, marginTop: 10 }]}>
          We have no access to or control over these third-party trackers. For more information on how Google uses your data, please review the Google Privacy Policy: https://policies.google.com/privacy.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.heading, { color: colors.text }]}>5. Children's Privacy</Text>
        <Text style={[styles.paragraph, { color: colors.text }]}>
          Our services do not intentionally target anyone under the age of 13. Since we do not collect personal information, we also do not knowingly collect personal information from children under 13.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.heading, { color: colors.text }]}>6. App Store & Play Store Compliance</Text>
        <Text style={[styles.paragraph, { color: colors.text }]}>
          This Privacy Policy is intended to comply with the requirements set forth by Apple's App Store and Google's Play Store guidelines regarding user data privacy. By using Errno Lookup, you acknowledge that no user data is collected by the developer, and any data interactions are strictly limited to the third-party advertising networks mentioned above.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.heading, { color: colors.text }]}>7. Changes to This Privacy Policy</Text>
        <Text style={[styles.paragraph, { color: colors.text }]}>
          We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. Updates are effective immediately upon posting.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={[styles.heading, { color: colors.text }]}>8. Contact Us</Text>
        <Text style={[styles.paragraph, { color: colors.text }]}>
          If you have any questions or suggestions about our Privacy Policy, please contact the developer via the appropriate support channels provided on our app store listings.
        </Text>
      </View>

      <View style={styles.footerSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    marginBottom: 20,
    opacity: 0.7,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    opacity: 0.85,
  },
  footerSpacer: {
    height: 40,
  },
});

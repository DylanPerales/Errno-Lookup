import React, { useState } from 'react';
import { FlatList, Platform, StyleSheet, Text, TextInput, View } from 'react-native';

interface ErrnoItem {
  Number: number;
  Message: string;
  Description: string;
}

interface ErrnoListProps {
  data: ErrnoItem[];
}

export default function ErrnoList({ data }: ErrnoListProps) {
  const [search, setSearch] = useState('');

  const filteredData = data.filter(item => {
    const text = `${item.Number} ${item.Message} ${item.Description}`.toLowerCase();
    const searchTerms = search.toLowerCase().split(' ');
    return searchTerms.every(term => text.includes(term));
  });

  const renderItem = ({ item }: { item: ErrnoItem }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.number}>{item.Number}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.message}>{item.Message || 'N/A'}</Text>
        <Text style={styles.description}>{item.Description ? item.Description.trim() : ''}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Errno..."
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.Number.toString() + (item.Message || '')}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        initialNumToRender={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  searchContainer: {
    padding: 16,
    backgroundColor: '#000',
    borderBottomWidth: 1,
    borderBottomColor: '#39FF14',
    alignItems: 'center',
  },
  searchInput: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#39FF14',
    borderRadius: 0,
    padding: 12,
    fontSize: 16,
    color: '#39FF14',
    width: '100%',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
    ...Platform.select({
      web: { outlineStyle: 'none' } as any,
    }),
  },
  listContent: {
    padding: 16,
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'column',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#39FF14',
    alignItems: 'center',
    width: '100%',
    maxWidth: 600,
  },
  number: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#39FF14',
    textAlign: 'center',
    marginBottom: 4,
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  textContainer: {
    alignItems: 'center',
  },
  message: {
    fontSize: 18,
    fontWeight: '600',
    color: '#39FF14',
    marginBottom: 4,
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
  description: {
    fontSize: 16,
    color: '#39FF14',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Courier' : 'monospace',
  },
});

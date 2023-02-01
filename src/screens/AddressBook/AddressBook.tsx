import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  ListRenderItem,
  ListRenderItemInfo,
} from 'react-native'

import styles from './styles'

import { BASE_URL } from '~constants/constants'
import { Contact } from '~types/types'

export const AddressBook = (): JSX.Element => {
  const [results, setResults] = useState<Contact[]>([])
  const [filter, setFilter] = useState('all')
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    try {
      // Fetch contact list from API
      fetch(`${BASE_URL}/?results=10`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.results)
        })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleFilter = (gender: any) => {
    // Filter contacts by gender
    if (gender === 'all') {
      return results
    } else {
      return results.filter((item: any) => item.gender === gender)
    }
  }

  const handleSort = (list: any) => {
    // Sort contacts by first name
    return list.sort((a: any, b: any) => (a.name.first > b.name.first ? 1 : -1))
  }

  const handleSearch = (list: any) => {
    // Search contacts by first name
    if (searchText === '') {
      return list
    } else {
      return list.filter((item: any) => item.name.first.includes(searchText))
    }
  }

  const handleDelete = (index: number) => {
    // Delete existing contact
    const newList = [...results]
    newList.splice(index, 1)
    setResults(newList)
  }

  const keyExtractor = (_: Contact[], index: number) => index.toString()

  const renderItem = ({ item, index }: ListRenderItemInfo<Contact>) => (
    <View style={styles.listItem}>
      <Image style={styles.thumbnailImage} source={{ uri: item.picture.thumbnail }} />
      <View style={styles.textContainer}>
        <Text style={styles.listText}>
          {item.name.title + ' ' + item.name.first + ' ' + item.name.last}
        </Text>
        <Text style={styles.listText}>{item.email}</Text>
      </View>
      <TouchableOpacity style={styles.deleteBtn} onPress={() => handleDelete(index)}>
        <Text style={styles.deleteBtnText}>X</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={styles.filterContainer}>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setFilter('all')}>
          <Text style={styles.filterBtnText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setFilter('male')}>
          <Text style={styles.filterBtnText}>Male</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setFilter('female')}>
          <Text style={styles.filterBtnText}>Female</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={handleSearch(handleSort(handleFilter(filter)))}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  )
}

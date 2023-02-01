
import {  StyleSheet,  } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 8,
    },
    searchBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    searchInput: {
      flex: 1,
      padding: 8,
      marginRight: 8,
    },
    addInput: {
      padding: 8,
      flex: 0.7,
    },
    filterContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
    },
    filterBtn: {
      padding: 8,
      borderRadius: 8,
      backgroundColor: '#ccc',
    },
    filterBtnText: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#eee',
      padding: 8,
      marginBottom: 8,
      borderRadius: 8,
    },
    listText: {
      fontSize: 16,
    },
    deleteBtn: {
      padding: 8,
      backgroundColor: '#f44336',
      borderRadius: 8,
    },
    deleteBtnText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
    thumbnailImage: { 
      width: 35,
      height: 35,
    },
    textContainer: { 
      flexDirection: 'column',
   },

  });

  export default styles
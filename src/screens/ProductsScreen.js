import { FlatList, Image, StyleSheet, View } from 'react-native';

import products from '../data/products';

const ProductsScreen = () => {
  return (
    <FlatList
      data={products}
      renderItem={
        ({ item }) => (
          <View style={styles.itemConteiner}>
            <Image source={{ uri: item.image }}
              style={styles.image}
            />
          </View>
        )}
      numColumns={2}
    />
  )
};

const styles = StyleSheet.create({
  itemConteiner: {
    width: '50%',
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default ProductsScreen;
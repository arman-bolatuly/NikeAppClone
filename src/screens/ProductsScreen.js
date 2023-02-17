// import { useNavigation } from '@react-navigation/native';
import { FlatList, Image, StyleSheet, View, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/ProductsSlice';

const ProductsScreen = ({ navigation }) => {
  // const navigation = useNavigation();

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  return (
    <FlatList
      data={products}
      renderItem={
        ({ item }) => (
          <Pressable onPress={() => {
            // update the selected product
            dispatch(productsSlice.actions.setSelectProduct(item.id));
            navigation.navigate('Products Details')
          }} style={styles.itemConteiner}>
            <Image source={{ uri: item.image }}
              style={styles.image}
            />
          </Pressable>
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
import { StyleSheet, View, Image, FlatList, Text, ScrollView, Pressable, useWindowDimensions } from "react-native";
import products from "../data/products";
import { useSelector } from "react-redux";

const ProductDetailsScreen = () => {
  const product = useSelector((state) => state.products.selectedProduct);

  const { width } = useWindowDimensions();

  const addToCard = () => {
    console.warn('Added to cart');
  };

  return (
    <View>
      {/* Image Carousel */}
      <ScrollView>
        <FlatList
          horizontal
          data={product.images}
          renderItem={
            ({ item }) => (
              <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
            )
          }
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>
          {/* Description */}
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      {/* Add to cart button */}
      <Pressable onPress={addToCard} style={styles.button}>
        <Text style={styles.buttonText}>Add to cart</Text>
      </Pressable>

      {/* Navigation icon */}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300'
  },
  button: {
    position: 'absolute',
    backgroundColor: 'black',
    width: '90%',
    height: 50,
    margin: 20,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    bottom: 0,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
});

export default ProductDetailsScreen;
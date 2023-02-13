import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';
import cart from '../data/cart';
import CartListItem from '../components/CartListItem';

const shoppingCartComponent = () => {
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>320.00$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>10.00$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>420.00$</Text>
      </View>
    </View>
  )
};

const ShoppingCart = () => {
  return (
    <>
      <FlatList
        style={{ marginTop: 20 }}
        data={cart}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={shoppingCartComponent}
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Checkout</Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  totalsContainer: {
    paddingTop: 10,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
    margin: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: 16,
    color: 'gray',
  },
  textBold: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    // position: 'absolute',
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

export default ShoppingCart;
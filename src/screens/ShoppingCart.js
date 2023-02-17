import { FlatList, StyleSheet, View, Text, Pressable } from 'react-native';
import { useSelector } from 'react-redux';
import CartListItem from '../components/CartListItem';
import { selectSubtotal, selectDeliveryPrice, selectTotal } from '../store/CartSlice';

const shoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);
  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Subtotal</Text>
        <Text style={styles.text}>{subtotal}$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} $</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} $</Text>
      </View>
    </View>
  )
};

const ShoppingCart = () => {
  const cartItems = useSelector((state) => state.cart.items)
  return (
    <>
      <FlatList
        style={{ marginTop: 20 }}
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={shoppingCartTotals}
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
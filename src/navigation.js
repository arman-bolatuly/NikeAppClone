import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from '@expo/vector-icons';

// import Home from "./screens/Home";
import ShoppingCart from "./screens/ShoppingCart";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import { Pressable, Text } from "react-native";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerRight: () => (
              <Pressable
                onPress={() => navigation.navigate('Cart')}
                style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome5 name="shopping-cart" size={24} color="black" />
                <Text style={{ marginLeft: 5, fontWeight: '500' }}>1</Text>
              </Pressable>
            )
          })
          } />
        <Stack.Screen name="Products Details" component={ProductDetailsScreen} options={{ presentation: 'modal' }} />
        <Stack.Screen name="Cart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation
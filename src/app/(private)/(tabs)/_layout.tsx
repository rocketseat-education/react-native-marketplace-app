import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { colors } from '../../../styles/colors'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 110,
          paddingTop: 16,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'PRODUTOS',
          tabBarActiveTintColor: colors['purple-base'],
          tabBarIcon: ({ color }) => (
            <Ionicons name="storefront-outline" color={color} size={25} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            marginTop: 4,
          },
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: 'PEDIDOS',
          tabBarActiveTintColor: colors['purple-base'],
          tabBarIcon: ({ color }) => (
            <Ionicons name="clipboard-outline" color={color} size={25} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            marginTop: 4,
          },
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'CARRINHO',
          tabBarActiveTintColor: colors['purple-base'],
          tabBarIcon: ({ color }) => (
            <Ionicons name="cart-outline" color={color} size={25} />
          ),
          tabBarLabelStyle: {
            fontSize: 14,
            marginTop: 4,
          },
        }}
      />
    </Tabs>
  )
}

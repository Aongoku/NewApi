import { createDrawerNavigator } from "@react-navigation/drawer"


const Drawer = createDrawerNavigator();


const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName='Inicio'>
        <Drawer.Screen name='Inicio' component={HomeScreens}></Drawer.Screen>
        <Drawer.Screen name='Detalles' component={DetailsScreen}></Drawer.Screen>
    </Drawer.Navigator>
  )
}

export default DrawerNavigation

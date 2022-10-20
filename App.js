import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Colors from "./constants/colors";
import Home from "./screens/Home";
import ToDoList from "./screens/ToDoList";
import EditList from "./screens/EditList";


const Stack = createStackNavigator();

const ToDo = () => {
  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
    </View>);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="QuickTasks" component={Home}/>
        <Stack.Screen
          name="ToDoList"
          component={ToDoList}
          options={({route}) => {
            return ({
              title: route.params.title,
              headerStyle: {
                backgroundColor: route.params.color
              },
              headerTintColor: "white"
            })
          }}
        />
        <Stack.Screen
            name="Edit"
            component={EditList}
            options={({route}) => {
              return ({
                title: route.params.title ? `Edit ${route.params.title} list` : "Create new list",
                headerStyle: {
                  backgroundColor: route.params.color || Colors.blue
                },
                headerTintColor: "white"
              })
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

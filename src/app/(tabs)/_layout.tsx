import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: ' blue', tabBarInactiveTintColor: 'gray', headerShown: true 

        }}>
            <Tabs.Screen 
                name="index" options={{ title: 'Dashboard', tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="view-dashboard" color={typeof color === 'string' ? color : 'blue'} 
                size={24} />)
            
            }}  
            />
            <Tabs.Screen 
                name="Profile" options={{ title: 'Profile', tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" size={24} color={typeof color === 'string' ? color : 'blue'} />) }}  
            />                      
        </Tabs>
    );
}   
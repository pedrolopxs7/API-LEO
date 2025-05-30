import Drawer from "expo-router/drawer";

export default function DrawerLayout() {
    return (
        <Drawer>
            <Drawer.Screen
                name='home'
                options={{
                    drawerLabel: 'Home',
                    title: 'Início'
                }}
            />
            <Drawer.Screen
                name='settings/index'
                options={{
                    drawerLabel: 'Settings',
                    title: 'Configuração'
                }}
            />
        </Drawer>
    )
}
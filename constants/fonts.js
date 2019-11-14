// REQUIRED FOR `ICON` COMPONENT
import { Ionicons } from '@expo/vector-icons';

export default {
    'Roboto': require('../assets/fonts/Roboto-Regular.ttf'),
    'Roboto_light': require('../assets/fonts/Roboto-Light.ttf'),
    'Roboto_medium': require('../assets/fonts/Roboto-Medium.ttf'),
    'Roboto_bold': require('../assets/fonts/Roboto-Bold.ttf'),
    'Roboto_black': require('../assets/fonts/Roboto-Black.ttf'),
    ...Ionicons.font,
}

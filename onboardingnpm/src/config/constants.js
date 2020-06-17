import { Dimensions } from 'react-native';

const config = {
    SCREEN_WIDTH: Dimensions.get('window').width,
    SCREEN_HEIGHT: Dimensions.get('window').height,
    HEADER_HEIGHT: Dimensions.get('window').height - 45,
}
const string = {
    
    PREV: 'PREV',
    NEXT: 'NEXT',
    TYPEP: 'normal',
    TYPEN: 'bold',
}

export default {
    CONFIG: config,
    STRINGS: string,
}
import axios from "axios";

const api = axios.create({
    baseURL: 'http://192.168.0.9:3333',
});

export default api;

/**
 * IOS com Emulador: localhost
 * IOS com device: IP da máquina
 * Android com Emulador: adb reverse tcp:IP do servidor tcp: IP no emulador
 * Android com Emulador: 10.0.2.2 (Android Studio)
 * Android com device: IP da máquina
 */
import { configureStore } from "@reduxjs/toolkit";
import profilReducer from '../Features/profilSlice'
import wateringReducer from '../Features/WateringSlice'
import humidityReducer from '../Features/HumiditySlice'
import { loggerMiddleware } from "../Websocket/Client";

export default configureStore({
    reducer: {
        profil: profilReducer,
        wateringdata: wateringReducer,
        humiditydata: humidityReducer,
    },
    middleware: [loggerMiddleware]
    
})
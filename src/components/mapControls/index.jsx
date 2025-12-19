import {useMap} from "react-leaflet";
import IconButton from "@mui/material/IconButton"
import Remove from "@mui/icons-material/Remove"
import Add from "@mui/icons-material/Add"
import Stack from "@mui/material/Stack"
import NearMe from "@mui/icons-material/NearMe"

export const MapControls = ({setPosition}) => {
    const map = useMap();

    const handleFindMe = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    setPosition([latitude, longitude]);

                    // Центрируем карту на пользователе
                    map.flyTo([latitude, longitude], 15);
                },
                (error) => {
                    alert("Ошибка: " + error.message);
                },
                {
                    enableHighAccuracy: true, // Высокая точность
                    timeout: 10000, // 10 секунд ожидания
                    maximumAge: 0 // Не использовать кэш
                }
            );
        }
    };

    return(
        <Stack width={'100%'} height={'100%'} justifyContent={'center'} alignItems={'flex-end'} spacing={1} zIndex={1000} style={{padding: 10}}>
            <IconButton style={{backgroundColor:"white", zIndex: 1000}} onClick={() => map.zoomIn() }>
                <Add color={'primary'}/>
            </IconButton>
            <IconButton style={{backgroundColor:"white", zIndex: 1000}} onClick={() => map.zoomOut() } >
                <Remove color={'primary'}/>
            </IconButton>
            <IconButton style={{backgroundColor:"white", zIndex: 1000}} onClick={() => handleFindMe()}>
                <NearMe color={'primary'}/>
            </IconButton>
        </Stack>
    )
}

import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {Index} from "./components/map";
import { findNearestPointIndex } from './utils/find-nearest-location'
import {hanoverPoints} from "./test-data";
import * as React from "react";
import {useState} from "react";
import {Drawer} from "./components/swipableDrawer";

function App() {
    const [open, setOpen] = React.useState(false);
    const [selectedPlace, setSelectedPlace] = React.useState({name: "", description: "", availability:{}});
    const [userPosition, setUserPosition] = useState([])

    const handleMarkerClick = (placeInfo) => {
        setOpen(true)
        setSelectedPlace(placeInfo);
    }


    const handleFindNearest = () =>{
        const index = findNearestPointIndex(userPosition, hanoverPoints)
        handleMarkerClick(hanoverPoints[index])
    }

    return (
        <div className="app-container">
            <Index userPosition={userPosition} setUserPosition={setUserPosition} selectedPlaceCoords={selectedPlace.position}/>
            <div className={"ui-container"}>
                <Typography>
                    Connect EV
                </Typography>
                <Button sx={{background: 'white', color: 'black',  pointerEvents: 'auto'}} onClick={handleFindNearest}>
                    Charge me
                </Button>
                <Drawer open={open} setOpen={setOpen} placeInfo={selectedPlace} />
            </div>
        </div>
    );
}

export default App;

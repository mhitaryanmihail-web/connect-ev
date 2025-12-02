import './App.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {Map} from "./components/Map";

function App() {
    return (
        <div className="app-container">
            <Map/>
            <div className={"ui-container"}>
                <div style={{width:'100%', display:'flex', justifyContent:'center', alignItems: 'center'}}>
                    <Typography>
                        Connect EV
                    </Typography>
                </div>
                <Button sx={{background: 'white', color: 'black',  pointerEvents: 'auto'}}>
                    123123
                </Button>
            </div>
        </div>
    );
}

export default App;

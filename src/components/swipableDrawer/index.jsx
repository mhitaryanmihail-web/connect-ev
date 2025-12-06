import * as React from 'react';
import {Typography, Box, SwipeableDrawer} from '@mui/material';
import {BatteryChargingFull, Battery0Bar} from "@mui/icons-material";
import styles from './styles.module.scss'

export const Drawer = ({open, setOpen, placeInfo}) => {
    return(
        <SwipeableDrawer
            sx={{height: '30vh'}}
            open={open}
            anchor={"bottom"}
            onOpen={()=> setOpen(true)}
            onClose={()=> setOpen(false)}
        >
            <div className={styles.puller}>
            </div>
            <Box style={{minHeight:'30vh'}} padding={2}>
                <Typography variant={"h5"}>
                    {placeInfo.name}
                </Typography>
                <Typography variant={'subtitle1'}>
                    {placeInfo.description}
                </Typography>
                <Box className={styles.avalableInfo}>
                    <Box>
                        <Typography>Available</Typography>
                        <BatteryChargingFull/> {placeInfo.availabilityInfo?.available}
                    </Box>
                    <Box>
                        <Typography>Needed</Typography>
                        <Battery0Bar/> {placeInfo.availabilityInfo?.needed}
                    </Box>
                </Box>
            </Box>
        </SwipeableDrawer>
    )
}

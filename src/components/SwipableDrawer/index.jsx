import * as React from 'react';
import {Typography, Box, styled} from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import {grey} from "@mui/material/colors";
import {BatteryChargingFull, Battery0Bar} from "@mui/icons-material";

const Puller = styled('div')(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: grey[300],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
    ...theme.applyStyles('dark', {
        backgroundColor: grey[900],
    }),
}));

export const Drawer = ({open, setOpen, placeInfo}) => {
    return(
        <SwipeableDrawer
            sx={{height: '30vh'}}
            open={open}
            anchor={"bottom"}
            onOpen={()=> setOpen(true)}
            onClose={()=> setOpen(false)}
        >
            <Puller/>
            <Box style={{minHeight:'30vh'}} padding={2}>
                <Typography variant={"h5"}>
                    {placeInfo.name}
                </Typography>
                <Typography variant={'subtitle1'}>
                    {placeInfo.description}
                </Typography>
                <Box sx={{display: "flex", paddingTop: 2, gap: 4}}>
                    <Box sx={{display: "flex"}}>
                        <Typography>Available</Typography>
                        <BatteryChargingFull/> 1
                    </Box>
                    <Box sx={{display: "flex"}}>
                        <Typography>Needed</Typography>
                        <Battery0Bar/> 1
                    </Box>
                </Box>
            </Box>
        </SwipeableDrawer>
    )
}

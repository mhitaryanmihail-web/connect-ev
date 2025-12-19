import * as React from 'react';
import {Typography, Box, SwipeableDrawer, Divider, Card} from '@mui/material';
import {BatteryChargingFull, Battery0Bar, BatteryAlert} from "@mui/icons-material";
import styles from './styles.module.scss'

export const Drawer = ({open, setOpen, placeInfo}) => {

    const isEmpty = !!placeInfo?.availabilityInfo?.available

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
            <Box className={styles.placeInfoWrap}>
                <Card variant={"outlined"} className={styles.drawerCard}>
                    <Box>
                        <Typography variant={"h5"} fontWeight={700}>
                            {placeInfo.name}
                        </Typography>
                        <Typography fontSize={12} color={'gray'}>
                            {placeInfo.address}
                        </Typography>
                    </Box>
                    <Typography variant={'subtitle1'} sx={{paddingTop:'10px'}}>
                        {placeInfo.description}
                    </Typography>
                    <Box className={styles.placeInfo}>
                        <Box>
                            <Typography className={styles.infoLabel}>Available</Typography>
                            <Box className={styles.availabilityInfoItem}>
                                {isEmpty ? <BatteryChargingFull/> : <BatteryAlert color={"error"}/>}
                                <Typography fontWeight={800}>
                                    {placeInfo.availabilityInfo?.available}
                                </Typography>
                            </Box>
                        </Box>
                        <Divider orientation={'vertical'} flexItem variant={'middle'} />
                        <Box>
                            <Typography className={styles.infoLabel} >Needed</Typography>
                            <Box className={styles.availabilityInfoItem}>
                                <Battery0Bar/>
                                <Typography fontWeight={800}>
                                    {placeInfo.availabilityInfo?.needed}
                                </Typography>
                            </Box>
                        </Box>
                        <Divider orientation={'vertical'} flexItem variant={'middle'} />
                        <Box>
                            <Typography className={styles.infoLabel} >Work hours</Typography>
                            <Box className={styles.availabilityInfoItem}>
                                <Typography fontWeight={800}>
                                    {placeInfo?.workHours ?? '-'}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Card>
                <Card variant={"outlined"} sx={{padding: '1rem'}} className={styles.drawerCard}>
                    <Typography fontWeight={700}>
                        Tariffs
                    </Typography>
                    <Box className={styles.tariffs}>
                        <Box className={styles.tariffItem} >
                            <Typography>
                                first 1 hour
                            </Typography>
                            <Typography>
                                {placeInfo?.tariffs?.hour ?? '-'} €
                            </Typography>
                        </Box>
                        <Box className={styles.tariffItem}>
                            <Typography>
                                next 2 hours
                            </Typography>
                            <Typography>
                                {placeInfo?.tariffs?.hour2 ?? '-'} €
                            </Typography>
                        </Box>
                        <Box className={styles.tariffItem}>
                            <Typography>
                                till the end of the day
                            </Typography>
                            <Typography>
                                {placeInfo?.tariffs?.day ?? '-'} €
                            </Typography>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </SwipeableDrawer>
    )
}

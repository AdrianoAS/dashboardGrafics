import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './style'
import { memo } from 'react';
import PropTypes from 'prop-types'
import { Area, AreaChart, ResponsiveContainer, Tooltip } from 'recharts'


const BoxDash = (props) => {
    const { title, quantity, data, dataKey } = props

    const style = useStyles();
    return (
        <Grid className={style.container}>
            <Box className={style.title}>
                <Typography>{title}</Typography>
            </Box>
            <Box className={style.boxMain}>
                <Typography>{quantity}</Typography>
                <ResponsiveContainer width="100%" height={150}>
                    <AreaChart data={data} >
                        <defs>
                            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1" >
                                <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
                                <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
                            </linearGradient>
                        </defs>
                        <Tooltip content={<CustomToolTip />} />
                        <Area type="monotone" dataKey={dataKey.dataKey} stroke="#2451B7" fill="url(#color)" />
                    </AreaChart >
                </ResponsiveContainer>
            </Box>
        </Grid>
    )
}

function CustomToolTip({ active, payload, label }) {
    const style = useStyles();

    if (active) {
        return (
            <div className={style.boxTooltip}>
                {payload.map(data => (
                    Object.getOwnPropertyNames(data.payload).map(namePropertyTitle => (
                        <h4 key={namePropertyTitle} className={style.tooltipTitle}>
                            {
                                namePropertyTitle.includes('Data')
                                && data.payload[namePropertyTitle]
                            }
                        </h4>
                    ))
                ))}
                {payload.map((data) => (
                    Object.getOwnPropertyNames(data.payload).map(nameProperty => (
                        <div key={nameProperty} className={style.tooltip}>
                            <span>{nameProperty}:</span><p>{data.payload[nameProperty]}</p>
                        </div>
                    ))
                ))
                }
            </div >
        )
    }
    return null
}


BoxDash.prototype = {
    title: PropTypes.string,
    quantity: PropTypes.string,
    data: PropTypes.array,
    dataKey: PropTypes.Object
}

export default memo(BoxDash)



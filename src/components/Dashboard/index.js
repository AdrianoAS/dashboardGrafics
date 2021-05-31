import { Box, Container, Grid, Typography } from '@material-ui/core'
import useStyles from './style'
import BoxDash from '../Box'
import React, { useState } from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const Dashboard = () => {

    const [data, setData] = useState([
        {
            dataEmail: [
                {
                    "Quantidade de emails": "15",
                    "Hora do ulimo email": "14:00",
                    "Data do ultimo email": "2020-05-27",
                    "Emails em progresso": "10",
                    "Emails": "20",
                },
                {
                    "Quantidade de emails": "25",
                    "Hora do ulimo email": "14:00",
                    "Data do ultimo email": "2020-05-28",
                    "Emails em progresso": "10",
                    "Emails": "20",

                },
                {
                    "Quantidade de emails": "85",
                    "Hora do ulimo email": "14:00",
                    "Data do ultimo email": "2020-05-29",
                    "Emails em progresso": "10",
                    "Emails": "20",

                },
                {
                    "Quantidade de emails": "5",
                    "Hora do ulimo email": "14:00",
                    "Data do ultimo email": "2020-05-26",
                    "Emails em progresso": "10",
                    "Emails": "20",

                },
                {
                    "Quantidade de emails": "45",
                    "Hora do ulimo email": "14:00",
                    "Data do ultimo email": "2020-05-25",
                    "Emails em progresso": "10",
                    "Emails": "20",

                },
                {
                    "Quantidade de emails": "0",
                    "Hora do ulimo email": "14:00",
                    "Data do ultimo email": "2020-05-23",
                    "Emails em progresso": "10",
                    "Emails": "20",

                },
                {
                    "Quantidade de emails": "110",
                    "Hora do ulimo email": "14:00",
                    "Data do ultimo email": "2020-05-20",
                    "Emails em progresso": "10",
                    "Emails": "20",

                },
                {
                    "Quantidade de emails": "15",
                    "Hora do ulimo email": "14:00",
                    "Data do ultimo email": "2020-05-19",
                    "Emails em progresso": "10",
                    "Emails": "20",

                },

            ],
        },
        {
            dataWhatFace: [
                {
                    "Quantidade de Whats/face": "30",
                    "Hora do ultimo Whats/face": "14:00",
                    "Data do ultimo Whats/face": "2020-05-27",
                    "Whats/face em progresso": "55",
                    "Whats/face finalizados": "10",
                },
                {
                    "Quantidade de Whats/face": "40",
                    "Hora do ultimo Whats/face": "14:00",
                    "Data do ultimo Whats/face": "2020-05-27",
                    "Whats/face em progresso": "55",
                    "Whats/face finalizados": "10",
                },
                {
                    "Quantidade de Whats/face": "80",
                    "Hora do ultimo Whats/face": "14:00",
                    "Data do ultimo Whats/face": "2020-05-27",
                    "Whats/face em progresso": "55",
                    "Whats/face finalizados": "10",
                },
                {
                    "Quantidade de Whats/face": "10",
                    "Hora do ultimo Whats/face": "14:00",
                    "Data do ultimo Whats/face": "2020-05-27",
                    "Whats/face em progresso": "55",
                    "Whats/face finalizados": "10",
                },
                {
                    "Quantidade de Whats/face": "20",
                    "Hora do ultimo Whats/face": "14:00",
                    "Data do ultimo Whats/face": "2020-05-27",
                    "Whats/face em progresso": "55",
                    "Whats/face finalizados": "10",
                },
                {
                    "Quantidade de Whats/face": "90",
                    "Hora do ultimo Whats/face": "14:00",
                    "Data do ultimo Whats/face": "2020-05-27",
                    "Whats/face em progresso": "55",
                    "Whats/face finalizados": "10",
                },
                {
                    "Quantidade de Whats/face": "30",
                    "Hora do ultimo Whats/face": "14:00",
                    "Data do ultimo Whats/face": "2020-05-27",
                    "Whats/face em progresso": "55",
                    "Whats/face finalizados": "10",
                },
            ],
        },
        {
            dataOrderAnalisys: [
                {
                    orders_analisys: "55",
                },
                {
                    orders_analisys: "60",
                },
                {
                    orders_analisys: "90",
                },
                {
                    orders_analisys: "20",

                },
                {
                    orders_analisys: "75",

                },
                {
                    orders_analisys: "30",

                },
                {
                    orders_analisys: "7",
                },
            ],
        },
        {
            dataOrderAnalized: [
                {
                    orders_analized: "12",
                },
                {
                    orders_analized: "10",
                },
                {
                    orders_analized: "1",
                },
                {
                    orders_analized: "12",
                },
                {
                    orders_analized: "50",
                },
                {
                    orders_analized: "21",
                },
                {
                    orders_analized: "2",
                },
            ],
        },
        {
            dataPhoneAnswers: [
                {
                    phones_answers: "25",
                },
                {
                    phones_answers: "30",
                },
                {
                    phones_answers: "50",
                },
                {
                    phones_answers: "80",
                },
                {
                    phones_answers: "20",
                },
                {
                    phones_answers: "18",
                },
            ]
        },
        {
            dataPhoneLost: [
                {
                    phones_lost: "11",
                },
                {
                    phones_lost: "11",
                },
                {
                    phones_lost: "11",
                },
                {
                    phones_lost: "11",
                },
                {
                    phones_lost: "11",
                },
                {
                    phones_lost: "11",
                },
            ]
        },
    ])

    const dataTeste = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
    ];

    const style = useStyles();
    return (
        <Container className={style.container}>
            <Grid className={style.header}>
                <Box>home</Box>
                <Box>Periodo</Box>
            </Grid>
            <Grid className={style.main}>
                <Grid className={style.boxes}>
                    <BoxDash
                        title="Emails"
                        quantity="2020"
                        data={data[0].dataEmail}
                        dataKey={{ dataKey: 'Quantidade de emails' }} />
                    <BoxDash
                        title="Face/whats" quantity="2020"
                        data={data[1].dataWhatFace}
                        dataKey={{ dataKey: "Quantidade de Whats/face" }}
                    />
                    <BoxDash
                        title="pedidos em analise" quantity="2020"
                        data={data[2].dataOrderAnalisys}
                        dataKey={{ dataKey: 'orders_analisys' }}
                    />
                    <BoxDash
                        title="pedidos Analizados" quantity="2020"
                        data={data[3].dataOrderAnalized}
                        dataKey={{ dataKey: 'orders_analized' }}
                    />
                    <BoxDash
                        title="Telefones respondidos" quantity="2020"
                        data={data[4].dataPhoneAnswers}
                        dataKey={{ dataKey: 'phones_answers' }}
                    />
                    <BoxDash
                        title="Telefones perdidos" quantity="2020"
                        data={data[5].dataPhoneLost}
                        dataKey={{ dataKey: 'phones_lost' }}
                    />
                </Grid>
                <Grid className={style.boxToday}>
                    <Grid className={style.mainBoxToday}>
                        <Box className={style.TodayTitle}>
                            <Typography>Hoje</Typography>
                        </Box>
                        <Box className={style.BoxGrafics} >
                            <Box style={{ width: "100%", height: 300 }}>
                                <ResponsiveContainer>
                                    <PieChart>
                                        <Tooltip />
                                        <Pie dataKey="value" data={dataTeste} fill="#8884d8" label />
                                    </PieChart>
                                </ResponsiveContainer>
                            </Box>
                            <Box style={{ width: "100%", height: '100%' }}>
                                <p>conteudo do grafico</p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className={style.mainBoxToday}>
                        <Box>
                            <Typography>Hoje</Typography>
                        </Box>
                        <Box>
                            <Box></Box>
                            <Box></Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Dashboard

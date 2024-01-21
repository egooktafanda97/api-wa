'use client';
import React, { useEffect, useState } from 'react';
import { Layout } from '@/components/layouts/layouts';
import { Button, Grid, TableContainer } from '@mui/material';
import { Box, styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { defaultColorScema } from '@/config/app';
import { FaQrcode } from 'react-icons/fa';
import axios from 'axios';
import { session_id } from '@/utils/utils';
import moment from 'moment';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0)
];
const ws = new WebSocket('ws://localhost:3001');
export default function NewSession() {
  const [qr, setQr] = useState<any>();
  const [sessionId, setSessionId] = useState<any>(null);
  const [dataParsing, setDataParsing] = useState<any>();
  const [refreshQr, setRefreshQr] = useState<any>(3000);
  const [dataSession, setDataSession] = useState<any[]>([]);

  const genetateSessionId = () => {
    const sessionId: number = session_id();
    setSessionId(sessionId);
    return sessionId;
  };

  const hndelQr = async () => {
    const sessionIds = genetateSessionId();
    if (sessionIds != null) {
      try {
        await axios.get(`/api/new-session?session=${sessionIds}&scan=true&user_id=1`);
        hndelWss(sessionIds);
      } catch (error) {}
    }
  };
  const getUserSession = async () => {
    const sessions: any = await axios.get(`/api/get-session/1`).catch((err: any) => {
      console.log(err);
    });
    setDataSession(sessions?.data?.data ?? []);
  };
  useEffect(() => {
    getUserSession();
  }, []);
  const hndelWss = (session_Id: any) => {
    console.log(session_Id);

    ws.onopen = () => {
      console.log('Connected to WebSocket server');
    };

    ws.onmessage = (event: any) => {
      getUserSession();
      const data = JSON.parse(event.data);
      if (session_Id == data.sessionId) {
        if (data.event == 'onQrUpdate') {
          setQr(data.qr ?? null);
        } else if (data.event == 'connecteting') {
          setQr(`` ?? null);
        } else if (data.event == 'connected') {
          setQr(`/ilustrations/message-lock.png` ?? null);
        }
      }
    };

    return () => {
      ws.close();
    };
  };

  return (
    <Layout>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: '100%',
                minHeight: 200
              }
            }}
          >
            <Paper elevation={1} style={{ padding: '5px' }}>
              <img src={qr} className="w-full h-full" alt="" />
            </Paper>
          </Box>
          <Box
            sx={{
              paddingLeft: 1,

              paddingRight: 1
            }}
          >
            <Button onClick={hndelQr} className={`w-full bg-[${defaultColorScema.primary}]`}>
              <FaQrcode size={20} /> <span className="ml-2">Session Baru</span>
            </Button>
          </Box>
        </Grid>
        <Grid item md={8} xs={12}>
          <Paper elevation={1} style={{ padding: '5px' }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Session Name</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Active Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataSession.length != 0 &&
                    dataSession.map((row) => (
                      <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                        <TableCell component="th" scope="row">
                          {row?.dataValues?.session_name}
                        </TableCell>
                        <TableCell align="right">{row?.dataValues?.status_connecting ? 'active' : 'nonactive'}</TableCell>
                        <TableCell align="right">{moment(row?.dataValues?.updatedAt).format('YYYY-MM-DD HH:SS')}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

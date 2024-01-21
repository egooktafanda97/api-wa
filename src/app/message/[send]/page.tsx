'use client';
import React, { useEffect, useState } from 'react';
import { Layout } from '@/components/layouts/layouts';
import { Button, FormControl, Grid, TableContainer } from '@mui/material';
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
import DropDownMui from '@/components/atoms/DropDown/DropDownMui';
import ChatBoxMui from '@/components/atoms/chat-box/chat-box-mui';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0)
];
const ws = new WebSocket('ws://localhost:3001');
export default function SendMessage() {
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
                width: '100%'
              }
            }}
          >
            <Paper style={{ padding: '5px', background: 'transparent' }}>
              <DropDownMui />
            </Paper>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: '100%',
                minHeight: 300
              }
            }}
          >
            <Paper elevation={1} style={{ padding: '5px' }}>
              <DropDownMui />
              <hr className="mt-2" />
              <ChatBoxMui />
            </Paper>
          </Box>
        </Grid>
        <Grid item md={8} xs={12}>
          <Paper elevation={1} style={{ padding: '5px' }}>
            <div className="card">
              <label htmlFor="">SESSION ACTIVE: ...</label>
            </div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Send To</TableCell>
                    <TableCell align="right">message</TableCell>
                    <TableCell align="right">Date</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component="th" scope="row">
                        ..
                      </TableCell>
                      <TableCell align="right">..</TableCell>
                      <TableCell align="right">..</TableCell>
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

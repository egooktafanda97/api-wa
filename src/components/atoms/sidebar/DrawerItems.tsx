import { defaultColorScema } from '@/config/app';
import { Box } from '@mui/material';
import React from 'react';
import { FaHome } from 'react-icons/fa';

export default function DrawerItems() {
  return (
    <>
      <div className="flex flex-row items-center">
        <div className={`w-[5px] bg-[#8310F5] rounded-r-md h-[40px]`}></div>
        <Box padding={1} width={`100%`}>
          <Box sx={{ boxShadow: 1 }} padding={1} borderRadius={1} display={`flex`} justifyItems={`center`}>
            <FaHome color={`#8310F5`} size="20" />
            <span
              style={{
                marginLeft: '10px',
                fontWeight: 'bold',
                color: defaultColorScema.textSecondary
              }}
            >
              Dashboard
            </span>
          </Box>
        </Box>
      </div>
      <div className="flex flex-row items-center">
        <div className={`w-[5px] h-[40px]`}></div>
        <Box padding={1} width={`100%`}>
          <Box sx={{ boxShadow: 0 }} padding={1} borderRadius={1} display={`flex`} justifyItems={`center`}>
            <FaHome size="20" />
            <span
              style={{
                marginLeft: '10px',
                color: defaultColorScema.textSecondary
              }}
            >
              Dashboard
            </span>
          </Box>
        </Box>
      </div>
    </>
  );
}

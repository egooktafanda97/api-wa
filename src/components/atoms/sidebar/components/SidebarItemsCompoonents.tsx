import { defaultColorScema } from '@/config/app';
import { Box } from '@mui/system';
import React from 'react';
import { FaHome } from 'react-icons/fa';
const activeConfig: any = {
  leftRaundedColors: defaultColorScema.primary
};
const defaultConfig: any = {
  leftRaundedColors: defaultColorScema.secondary
};
const DynamicIcon = ({ color, size }: { color: string; size: number }) => {
  return <FaHome color={color} size={size} />;
};
export default function SidebarItemsCompoonents({ active, hover }: { active: any; hover: any }) {
  return (
    <div className="flex flex-row items-center">
      <div className={`w-[5px] bg-[#8310F5] rounded-r-md h-[40px]`}></div>
      <Box padding={1} width={`100%`}>
        <Box sx={{ boxShadow: 1 }} padding={1} borderRadius={1} display={`flex`} justifyItems={`center`}>
          <DynamicIcon color="#8310F5" size={20} />
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
  );
}

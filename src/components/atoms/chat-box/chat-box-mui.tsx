import * as React from 'react';
import { Box, TextField, Button, Typography, Avatar, Grid, Paper, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { FaClipboardList, FaFileAlt, FaLink, FaSeedling } from 'react-icons/fa';
import TextAreaMui from '../Input/TextAreaMui';

const messages = [
  { id: 1, text: 'Hi there!', sender: 'bot' },
  { id: 2, text: 'Hello!', sender: 'user' },
  { id: 3, text: 'How can I assist you today?', sender: 'bot' },
  { id: 1, text: 'Hi there!', sender: 'bot' },
  { id: 2, text: 'Hello!', sender: 'user' },
  { id: 3, text: 'How can I assist you today?', sender: 'bot' },
  { id: 1, text: 'Hi there!', sender: 'bot' },
  { id: 2, text: 'Hello!', sender: 'user' },
  { id: 3, text: 'How can I assist you today?', sender: 'bot' },
  { id: 1, text: 'Hi there!', sender: 'bot' },
  { id: 2, text: 'Hello!', sender: 'user' },
  { id: 3, text: 'How can I assist you today?', sender: 'bot' },
  { id: 1, text: 'Hi there!', sender: 'bot' },
  { id: 2, text: 'Hello!', sender: 'user' },
  { id: 3, text: 'How can I assist you today?', sender: 'bot' },
  { id: 1, text: 'Hi there!', sender: 'bot' },
  { id: 2, text: 'Hello!', sender: 'user' },
  { id: 3, text: 'How can I assist you today?', sender: 'bot' }
];

const ChatBoxMui = () => {
  const [input, setInput] = React.useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      console.log(input);
      setInput('');
    }
  };

  const handleInputChange = (event: any) => {
    setInput(event.target.value);
  };

  return (
    <Box
      sx={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'grey.200'
      }}
    >
      <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </Box>
      <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <TextAreaMui />
          </Grid>
          <Grid item xs={2}>
            <div className="w-full h-full flex justify-center items-center">
              <IconButton className="bg-blue-500" aria-label="add to shopping cart">
                <FaLink fontSize="small" />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Message = ({ message }: { message: any }) => {
  const isBot = message.sender === 'bot';

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: isBot ? 'flex-start' : 'flex-end',
        mb: 2
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isBot ? 'row' : 'row-reverse',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ bgcolor: isBot ? 'primary.main' : 'secondary.main' }}>{isBot ? 'B' : 'U'}</Avatar>
        <Paper
          variant="outlined"
          sx={{
            p: 2,
            ml: isBot ? 1 : 0,
            mr: isBot ? 0 : 1,
            backgroundColor: isBot ? 'primary.light' : 'secondary.light',
            borderRadius: isBot ? '20px 20px 20px 5px' : '20px 20px 5px 20px'
          }}
        >
          <Typography variant="body1">{message.text}</Typography>
        </Paper>
      </Box>
    </Box>
  );
};

export default ChatBoxMui;

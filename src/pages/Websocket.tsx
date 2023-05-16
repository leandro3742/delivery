import React, { useEffect } from 'react';
import io from 'socket.io-client';

const WebSocketClient: React.FC = () => {
  const [message, setMessage] = React.useState('');
  const socket = io('http://localhost:3000', {
    transports: ['websocket'],
  });

  useEffect(() => {
    // Establecer la conexión del socket cuando se monta el componente

    // Manejar los eventos del socket
    socket.on('connect', () => {
      console.log('Conexión establecida');
    });

    socket.on('message', (message) => {
      console.log('Mensaje recibido:', message);
    });

    socket.on('disconnect', () => {
      console.log('Conexión cerrada');
    });

    return () => {
      // Cerrar la conexión del socket cuando se desmonta el componente
      socket.disconnect();
    }

  }, []);

  return (
    <div>
    </div>
  );
};

export default WebSocketClient;

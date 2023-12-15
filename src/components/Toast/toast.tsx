import { useState } from 'react';
import ToastMessage from '../../interfaces/interfaces';

const Toast: React.FC = () => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  // Función para agregar un mensaje de toast
  const addToast = (text: string) => {
    const id = Math.floor(Math.random() * 10000); // Generamos un ID único para el mensaje
    const newToast: ToastMessage = { id, text };
    setMessages([...messages, newToast]);

    // Eliminamos el mensaje después de 5 segundos
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  // Función para eliminar un mensaje de toast
  const removeToast = (id: number) => {
    const updatedMessages = messages.filter((message) => message.id !== id);
    setMessages(updatedMessages);
  };

  return (
    <div className="toast-container">
      {messages.map((message) => (
        <div key={message.id} className="toast">
          <span>{message.text}</span>
          <button onClick={() => removeToast(message.id)}>Cerrar</button>
        </div>
      ))}
    </div>
  );
};

export default Toast;

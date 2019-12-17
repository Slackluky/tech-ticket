import React from 'react';
import { askForPermissioToReceiveNotifications } from './push-notifications';

const NotificationButton = () => (
    <button onClick={askForPermissioToReceiveNotifications} >
      Clique aqui para receber notificações
    </button>
);

export default NotificationButton;
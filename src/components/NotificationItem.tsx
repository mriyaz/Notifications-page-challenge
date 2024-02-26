import React from 'react';
import { Notification } from '../types';


const NotificationItem: React.FC<Notification> = ({ id, senderImg, sender, reaction, reactionTo, message, timestamp, isUnread, userImg }) => {
  return (

    <div className='flex flex-row mx-2  mb-5'>
      <img src={senderImg} className='m-2 w-10 h-10' />

      <div className='flex-col mr-auto'>
        <span className='font-bold'> {sender} </span>
        {reaction} {reactionTo && <span className='font-semibold text-blue-600 hover:cursor-pointer'>{reactionTo}</span>}
        {isUnread && <div className="inline-block w-2 h-2 rounded-full ml-2 bg-red-500"></div>}
        <br />
        <span className='text-gray-400 '> {timestamp}</span>
        {message && <div className='border-2 p-3 text-sm text-gray-600 hover:bg-blue-50 hover:cursor-pointer md:mt-3'>
          {message}
        </div>}
      </div>

      {userImg && <img src={userImg} className='m-2 w-10 h-10' />}

    </div>
  )
}

export default NotificationItem
import React, { useState, useEffect } from 'react';
import NotificationItem from './NotificationItem';

const NotificationList = () => {
    const [notifications, setNotifications] = useState([
        {
            id: 1,
            senderImg: 'assets/images/avatar-mark-webber.webp',
            sender: 'Mark Webber',
            reaction: 'reacted to your recent post',
            reactionTo: 'My first tournament today!',
            message: '',
            timestamp: '1m ago',
            isUnread: true,
            userImg:''
        },
        {
            id: 2,
            senderImg: 'assets/images/avatar-angela-gray.webp',
            sender: 'Angela Gray',
            reaction: 'followed you',
            reactionTo: '',
            message: '',
            timestamp: '5m ago',
            isUnread: true,
            userImg:''
        },
        {
            id: 3,
            senderImg: 'assets/images/avatar-jacob-thompson.webp',
            sender: 'Jacob Thompson',
            reaction: 'has joined your group',
            reactionTo: 'Chess Club',
            message: '',
            timestamp: '1 day ago',
            isUnread: false,
            userImg:''
        },
        {
            id: 4,
            senderImg: 'assets/images/avatar-rizky-hasanuddin.webp',
            sender: 'Rizky Hasanuddin',
            reaction: 'sent you a private message',
            reactionTo: '',
            message: "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
            timestamp: '5 days ago',
            isUnread: true,
            userImg:''
        },
        {
            id: 5,
            senderImg: 'assets/images/avatar-kimberly-smith.webp',
            sender: 'Kimberly Smith',
            reaction: 'commented on your picture',
            reactionTo: '',
            message: '',
            timestamp: '1 week ago',
            isUnread: false,
            userImg:'assets/images/image-chess.webp'
        },
        {
            id: 6,
            senderImg: 'assets/images/avatar-nathan-peterson.webp',
            sender: 'Nathan Peterson',
            reaction: 'reacted to your recent post',
            reactionTo: '5 end-game strategies to increase your win rate',
            message: '',
            timestamp: '2 weeks ago',
            isUnread: true,
            userImg:''
        },
        {
            id: 7,
            senderImg: 'assets/images/avatar-anna-kim.webp',
            sender: 'Anna Kim',
            reaction: 'left the group',
            reactionTo: 'Chess Club',
            message: '',
            timestamp: '2 weeks ago',
            isUnread: true,
            userImg:''
        },
    ]);

    const [unreadCount, setUnreadCount] = useState(0);

    useEffect(() => {
        notifications.sort((a, b) => {
            return Number(b.isUnread) - Number(a.isUnread)
        });
        setUnreadCount(notifications.filter(n => n.isUnread).length)
    }, [])


    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, isUnread: false })));
        setUnreadCount(0)
    }

    return (
        <div className='container mx-auto m-5 p-5 md:w-1/2 shadow-xl backdrop-blur-xl rounded-lg '>
            <div className="flex flex-row justify-between items-center mb-5 md:my-10">
                <div className='flex flex-row justify-between items-center gap-2'>
                    <h1 className='text-xl font-bold'>Notifications</h1>
                    <p className='bg-gray-700 rounded text-white px-2'>{unreadCount}</p>
                </div>
                <button className='text-gray-600' onClick={markAllAsRead}>Mark all as read</button>
            </div>

            {notifications.map(n =>
                <NotificationItem id={n.id} senderImg={n.senderImg} sender={n.sender}
                    reaction={n.reaction} reactionTo={n.reactionTo} message={n.message}
                    timestamp={n.timestamp} isUnread={n.isUnread} userImg={n.userImg} />
            )}
        </div>
    )
}

export default NotificationList
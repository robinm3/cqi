import React, { useEffect, useState } from 'react'
import NotificationCard from '../components/NotificationCard'
import { getNotifications } from '../services/Notification'

const Notifications = () => {
  const [notifications, setNotifications] = useState([])
  useEffect(() => {
    const fetchNotifications = async () => {
      const notifs = await getNotifications()
      setNotifications(notifs)
    }
    fetchNotifications()
  }, [])
  

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
      {notifications.map((notif) => (
        <NotificationCard notif={notif} />
      ))}
    </div>
  )
}

export default Notifications

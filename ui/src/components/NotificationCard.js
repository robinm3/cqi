import React from 'react'

const NotificationCard = ({ notif }) => {
  return (
    <div className="border rounded">
      {notif.read ? (
        <span class="flex h-3 w-3 relative top-1 left-[96%]">
          <span class="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </span>
      ) : null}
      <div className="p-3">
        <p className="font-bold text-center text-xl">{notif.name}</p>
        <p>{notif.description}</p>
        <p>Type : {notif.type}</p>
        <p>
          Origine : {notif.userFirstName} {notif.userLastName}
        </p>
      </div>
    </div>
  )
}

export default NotificationCard

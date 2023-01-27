import React, { useState } from 'react'
import NotificationCard from '../components/NotificationCard'

const Notifications = () => {
  // const notifications = getNotifications()
  const notifications = [
    {
      name: 'Nouveau objet trouvé',
      description: 'un cell bleu avec des pommes',
      type: 'securite',
      userFirstName: 'John',
      userLastName: 'Doe',
      read: false,
    },
    {
      name: 'Nouveau objet perdu',
      description: 'un balais noir avec des pommes',
      type: 'securite',
      userFirstName: 'John2',
      userLastName: 'Doe2',
      read: true,
    },
    {
      name: 'Nouveau objet trouvé',
      description: 'un cell bleu avec des pommes',
      type: 'securite',
      userFirstName: 'John',
      userLastName: 'Doe',
      read: false,
    },
    {
      name: 'Nouveau objet perdu',
      description: 'un balais noir avec des pommes',
      type: 'securite',
      userFirstName: 'John2',
      userLastName: 'Doe2',
      read: true,
    },
    {
      name: 'Nouveau objet trouvé',
      description: 'un cell bleu avec des pommes',
      type: 'securite',
      userFirstName: 'John',
      userLastName: 'Doe',
      read: false,
    },
    {
      name: 'Nouveau objet perdu',
      description: 'un balais noir avec des pommes',
      type: 'securite',
      userFirstName: 'John2',
      userLastName: 'Doe2',
      read: true,
    },
    {
      name: 'Nouveau objet trouvé',
      description: 'un cell bleu avec des pommes',
      type: 'securite',
      userFirstName: 'John',
      userLastName: 'Doe',
      read: false,
    },
    {
      name: 'Nouveau objet perdu',
      description: 'un balais noir avec des pommes',
      type: 'securite',
      userFirstName: 'John2',
      userLastName: 'Doe2',
      read: true,
    },
    {
      name: 'Nouveau objet trouvé',
      description: 'un cell bleu avec des pommes',
      type: 'securite',
      userFirstName: 'John',
      userLastName: 'Doe',
      read: false,
    },
    {
      name: 'Nouveau objet perdu',
      description: 'un balais noir avec des pommes',
      type: 'securite',
      userFirstName: 'John2',
      userLastName: 'Doe2',
      read: false,
    },
  ]

  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
      {notifications.map((notif) => (
        <NotificationCard notif={notif} />
      ))}
    </div>
  )
}

export default Notifications

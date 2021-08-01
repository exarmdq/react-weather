import React from 'react'

export default function ErrorMessage ({ message }) {
  return (
    <article className="message is-danger">
      <div className="message-body">
        {message}
      </div>
    </article>
  )
}

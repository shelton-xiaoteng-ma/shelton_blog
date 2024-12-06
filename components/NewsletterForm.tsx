'use client'

import { useState } from 'react'

const NewsletterForm = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_API_KEY}`,
        },
        body: JSON.stringify({
          email: email,
          groups: [process.env.NEXT_PUBLIC_MAILERLITE_GROUP_ID],
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!')
      }

      setSuccess(true)
      setEmail('')
      setError('')
    } catch (error) {
      setError(error.message || 'Something went wrong!')
      setSuccess(false)
    }
  }

  return (
    <div className="pb-8 pt-4">
      <div className="pb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Subscribe to my newsletter
        </h2>
        <p className="text-gray-600 dark:text-gray-400">Get notified when I publish new posts.</p>
      </div>
      <form className="flex flex-col sm:flex-row" onSubmit={handleSubmit}>
        <div className="flex-1">
          <label className="sr-only" htmlFor="email-input">
            Email address
          </label>
          <input
            autoComplete="email"
            className="border border-gray-300 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:outline-none focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
            id="email-input"
            name="email"
            placeholder="Enter your email"
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-2 flex w-full sm:ml-2 sm:mt-0">
          <button
            className="w-full rounded-md bg-primary-500 px-4 py-2 font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 dark:ring-offset-black dark:hover:bg-primary-400"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
      {error && <div className="mt-2 text-sm text-red-500 dark:text-red-400">{error}</div>}
      {success && (
        <div className="mt-2 text-sm text-green-500 dark:text-green-400">
          Successfully subscribed!
        </div>
      )}
    </div>
  )
}

export default NewsletterForm

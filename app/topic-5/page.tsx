'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'

export default function Topic5Page() {
  const [reflection, setReflection] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!reflection.trim()) {
      alert('Please enter a reflection')
      return
    }

    setLoading(true)
    try {
      const response = await fetch('/api/reflections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic_id: 5,
          reflection: reflection.trim(),
        }),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setSubmitted(true)
      setReflection('')
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      alert('Error submitting reflection. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-2xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Topic 5</h1>
        
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Share Your Reflection</h2>
          <p className="text-muted-foreground mb-6">
            Your reflection will be posted anonymously. Share your thoughts, observations, or questions.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Textarea
              placeholder="Write your reflection here..."
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              className="min-h-32"
            />
            
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Submitting...' : 'Submit Anonymously'}
            </Button>
          </form>

          {submitted && (
            <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800">✓ Your reflection has been posted anonymously!</p>
            </div>
          )}
        </Card>

        <div className="flex gap-4">
          <Link href="/community-thoughts">
            <Button variant="outline" className="w-full">
              View Community Thoughts
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

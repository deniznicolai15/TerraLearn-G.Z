'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Navbar } from '@/components/navbar'
import Link from 'next/link'
import Image from 'next/image'

const galleryImages = [
  { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9cfff74f-df19-440f-b88d-7fd8e897e7fe-8PQR4IdzQVfoCQLwnv1V3FDtIhykRU.jpg" },
  { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3a8c7dbd-8d32-4aa2-b03d-70e85d74d933-8ETVDLrXNoSgLH7uiuNclS9RWKs2iL.jpg" },
  { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/979ec1fc-4162-4751-9bf9-1684b4649403-R1bltlSmcxyhCXX1RZCd3flqodg8AG.jpg" },
  { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/be69ecbf-3f37-42ab-8115-fdf1e1208015-NLK8xbUvPYQS2iANdUpEbEauFYQc9c.jpg" },
  { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f4d60a3b-bf0f-408e-a4eb-db8bcec50383-uIE8e2SxR5UtlOsuaYlGG8y5r56p4W.jpg" },
  { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1b4a5c70-ec54-49f0-9a9d-0a8f6cdf5daa-0RYDKdAcu83pJS7LIlSxEC5WXV4DPj.jpg" },
  { image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/84c16e0b-d809-4741-9d91-82383a66cfec-CAJn4bSZws1JjepUoL7NLkRhfPKqU7.jpg" }
]

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
      
      <main className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-foreground mb-8">Topic 5: Save Now or Suffer Later</h1>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Content */}
          <div className="flex-1">
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
                  <p className="text-green-800">Your reflection has been posted anonymously!</p>
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
          </div>

          {/* Right side - Gallery Images */}
          <div className="lg:w-80 xl:w-96">
            <h3 className="text-xl font-semibold text-foreground mb-4">Gallery</h3>
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((item, index) => (
                <div 
                  key={index} 
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={item.image}
                    alt={`Conservation gallery image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 200px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

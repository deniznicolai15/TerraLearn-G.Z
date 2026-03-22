'use client'

import { useEffect, useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Link from 'next/link'

interface Reflection {
  id: string
  topic_id: number
  reflection: string
  created_at: string
}

export default function CommunityThoughtsPage() {
  const [reflections, setReflections] = useState<Reflection[]>([])
  const [topic1, setTopic1] = useState<Reflection[]>([])
  const [topic2, setTopic2] = useState<Reflection[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchReflections()
  }, [])

  const fetchReflections = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/reflections')
      const data = await response.json()
      
      setReflections(data)
      setTopic1(data.filter((r: Reflection) => r.topic_id === 1))
      setTopic2(data.filter((r: Reflection) => r.topic_id === 2))
    } catch (error) {
      console.error('Error fetching reflections:', error)
    } finally {
      setLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 pt-32 pb-16">
        <h1 className="text-4xl font-bold text-foreground mb-2">Community Thoughts</h1>
        <p className="text-muted-foreground mb-8">
          Explore reflections shared anonymously by other learners
        </p>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <p className="text-muted-foreground">Loading reflections...</p>
          </div>
        ) : (
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="all">
                All ({reflections.length})
              </TabsTrigger>
              <TabsTrigger value="topic1">
                Topic 1 ({topic1.length})
              </TabsTrigger>
              <TabsTrigger value="topic2">
                Topic 2 ({topic2.length})
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {reflections.length === 0 ? (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    No reflections yet. Be the first to share!
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Link href="/topic-1">
                      <Button variant="outline">Topic 1</Button>
                    </Link>
                    <Link href="/topic-2">
                      <Button variant="outline">Topic 2</Button>
                    </Link>
                  </div>
                </Card>
              ) : (
                reflections.map((reflection) => (
                  <Card key={reflection.id} className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-semibold text-primary">
                        {reflection.topic_id === 1 ? '🌳 Topic 1: Forest Ecosystems' : '🌍 Topic 2: Biodiversity & Conservation'}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(reflection.created_at)}
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">{reflection.reflection}</p>
                    <div className="mt-4 text-xs text-muted-foreground">
                      Posted anonymously
                    </div>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="topic1" className="space-y-4">
              {topic1.length === 0 ? (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    No reflections yet. Be the first to share about forest ecosystems!
                  </p>
                  <Link href="/topic-1">
                    <Button>Share Your Reflection</Button>
                  </Link>
                </Card>
              ) : (
                topic1.map((reflection) => (
                  <Card key={reflection.id} className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-semibold text-primary">🌳 Forest Ecosystems</span>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(reflection.created_at)}
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">{reflection.reflection}</p>
                    <div className="mt-4 text-xs text-muted-foreground">
                      Posted anonymously
                    </div>
                  </Card>
                ))
              )}
            </TabsContent>

            <TabsContent value="topic2" className="space-y-4">
              {topic2.length === 0 ? (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground mb-4">
                    No reflections yet. Be the first to share about biodiversity and conservation!
                  </p>
                  <Link href="/topic-2">
                    <Button>Share Your Reflection</Button>
                  </Link>
                </Card>
              ) : (
                topic2.map((reflection) => (
                  <Card key={reflection.id} className="p-6 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-sm font-semibold text-primary">🌍 Biodiversity & Conservation</span>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(reflection.created_at)}
                      </span>
                    </div>
                    <p className="text-foreground leading-relaxed">{reflection.reflection}</p>
                    <div className="mt-4 text-xs text-muted-foreground">
                      Posted anonymously
                    </div>
                  </Card>
                ))
              )}
            </TabsContent>
          </Tabs>
        )}
      </main>
    </div>
  )
}

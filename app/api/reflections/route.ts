import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const { topic_id, reflection } = await request.json()

    if (!topic_id || !reflection) {
      return NextResponse.json(
        { error: 'Missing topic_id or reflection' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('reflections')
      .insert([
        {
          topic_id,
          reflection,
        },
      ])
      .select()

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(data, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const topic_id = searchParams.get('topic_id')

    let query = supabase
      .from('reflections')
      .select('*')
      .order('created_at', { ascending: false })

    if (topic_id) {
      query = query.eq('topic_id', topic_id)
    }

    const { data, error } = await query

    if (error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

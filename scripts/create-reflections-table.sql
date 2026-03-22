-- Create reflections table for anonymous community thoughts
CREATE TABLE IF NOT EXISTS reflections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  topic_id INT NOT NULL,
  thought TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS reflections_topic_id_idx ON reflections(topic_id);
CREATE INDEX IF NOT EXISTS reflections_created_at_idx ON reflections(created_at);

-- Set up Row Level Security
ALTER TABLE reflections ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read reflections (public viewing)
CREATE POLICY "Allow public read" ON reflections
  FOR SELECT USING (true);

-- Allow anyone to insert reflections (anonymous submissions)
CREATE POLICY "Allow public insert" ON reflections
  FOR INSERT WITH CHECK (true);

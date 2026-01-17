-- Create inquiries table for quote requests and contact form submissions
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  type TEXT NOT NULL CHECK (type IN ('quote', 'contact')),
  property_type TEXT,
  number_of_windows TEXT,
  service_type TEXT[], -- Array of selected services
  location TEXT NOT NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT,
  subject TEXT, -- For contact form
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_inquiries_email ON inquiries(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);

-- Create index on type for filtering
CREATE INDEX IF NOT EXISTS idx_inquiries_type ON inquiries(type);

-- Enable Row Level Security (RLS)
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (form submissions) from anyone
CREATE POLICY "Allow public inserts" ON inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create policy to allow reads only for authenticated users (you can adjust this based on your needs)
-- For now, we'll allow authenticated users to read all inquiries
-- You may want to restrict this further based on your authentication setup
CREATE POLICY "Allow authenticated reads" ON inquiries
  FOR SELECT
  TO authenticated
  USING (true);

-- Create a function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc', NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_inquiries_updated_at
  BEFORE UPDATE ON inquiries
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Add comments for documentation
COMMENT ON TABLE inquiries IS 'Stores quote requests and contact form submissions';
COMMENT ON COLUMN inquiries.type IS 'Type of inquiry: quote (from booking form) or contact (from contact form)';
COMMENT ON COLUMN inquiries.service_type IS 'Array of selected services (exterior, interior, screens, tracks, hard-water)';
COMMENT ON COLUMN inquiries.property_type IS 'Type of property (condo, single-family, large-home, commercial, etc.)';

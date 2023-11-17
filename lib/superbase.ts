
import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient('https://efbptbzminacsvkbvcrm.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmYnB0YnptaW5hY3N2a2J2Y3JtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTg2OTAyMiwiZXhwIjoyMDE1NDQ1MDIyfQ.kSvwohxFKMvpvLXWuSyOXbd-8UOilZRtZFQH-Y9kRPk',{db:{schema:'next_auth'}})
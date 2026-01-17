# Supabase Setup Instructions

This guide will help you set up Supabase to store form submissions from your window cleaning website.

## Step 1: Create a Supabase Project

1. Go to [https://app.supabase.com](https://app.supabase.com)
2. Sign up or log in
3. Click "New Project"
4. Fill in your project details:
   - Name: `window-cleaning` (or your preferred name)
   - Database Password: Create a strong password (save this!)
   - Region: Choose the closest region to your users
5. Click "Create new project" and wait for it to initialize (takes ~2 minutes)

## Step 2: Get Your API Keys

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the following values:
   - **Project URL** (this is your `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon/public key** (this is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

## Step 3: Set Up the Database Table

1. In your Supabase dashboard, go to **SQL Editor**
2. Click "New Query"
3. Copy and paste the entire contents of `supabase/migrations/001_create_inquiries_table.sql`
4. Click "Run" (or press Ctrl+Enter)
5. You should see "Success. No rows returned" - this means the table was created successfully

## Step 4: Configure Environment Variables

1. Create a `.env.local` file in the root of your project (if it doesn't exist)
2. Add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

3. Replace the placeholder values with your actual Supabase URL and anon key from Step 2

## Step 5: Install Dependencies

Run the following command to install the Supabase client library:

```bash
npm install
```

## Step 6: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to `/book` and submit a test quote request
3. Go to your Supabase dashboard → **Table Editor** → **inquiries**
4. You should see your test submission in the table

## Step 7: Set Up Row Level Security (Optional)

The SQL migration already includes RLS policies that:
- Allow anyone to insert (submit forms)
- Allow authenticated users to read inquiries

If you want to restrict who can read inquiries, you can modify the policies in the Supabase dashboard under **Authentication** → **Policies**.

## Viewing Submissions

To view form submissions:

1. Go to your Supabase dashboard
2. Navigate to **Table Editor**
3. Click on the `inquiries` table
4. You'll see all quote requests and contact form submissions

## Troubleshooting

### "Missing Supabase environment variables" error
- Make sure your `.env.local` file exists in the project root
- Verify the variable names are exactly: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Restart your development server after adding environment variables

### Form submissions not appearing
- Check the browser console for errors
- Verify the table was created successfully in Supabase
- Check that your RLS policies allow inserts
- Verify your API keys are correct

### Database connection issues
- Double-check your Supabase URL and anon key
- Make sure your Supabase project is active (not paused)
- Check Supabase status page for any service issues

## Security Notes

- The `anon` key is safe to use in client-side code (it's public)
- Row Level Security (RLS) is enabled to protect your data
- Only authenticated users can read inquiries (you can adjust this in policies)
- Anyone can submit forms (which is what you want)

## Next Steps

- Set up email notifications when new inquiries are submitted (using Supabase Edge Functions)
- Create a dashboard to view and manage inquiries
- Set up automated responses or follow-up workflows

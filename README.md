# Lunari Frontend API Integrated

This package connects the latest frontend with the working NestJS backend API.

## Requirements
- Backend running at `http://localhost:4000`
- Frontend env file with `NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1`

## Integrated flows
- Sign up -> register API
- Sign in -> login API
- Setup flow -> profile update API
- Home -> authenticated user profile fetch
- Add log -> create daily log API
- Water -> create hydration API
- Settings -> authenticated user data display

## Run
1. Copy `.env.example` to `.env.local`
2. Run `npm install`
3. Run `npm run dev`
4. Open `http://localhost:3000`

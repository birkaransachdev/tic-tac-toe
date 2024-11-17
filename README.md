# Real-Time Multiplayer Tic-Tac-Toe Game

A real-time multiplayer Tic-Tac-Toe game built using Node.js, WebSockets, Redis, and React.

## Prerequisites
- Node.js (v16 or higher)
- Redis
- Docker (optional, for Redis)
- npm

## Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/tic-tac-toe.git
cd tic-tac-toe
```

### 2. Setup
```bash
npm install
```

Create a .env file in the backend folder:
```
REDIS_HOST=localhost
REDIS_PORT=6379
PORT=3000
JWT_SECRET=mysecretkey
```

### 3. (Optional) Run Redis Server 
If you have Docker, and don't have the Redis CLI installed, run this command:
```
docker run -p 6379:6379 --name redis-server -d redis
```

### 4. Start Backend Server
```
node server.js
```

### 5. Start Frontend Server
```
npm run dev
```

### 6. Access the Game
Open your browser and go to:
```
http://localhost:5173
```
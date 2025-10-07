💰 Expense Tracker – Frontend (React Native + Expo)
This is the mobile frontend for the Expense Tracker application.
It’s built with React Native using Expo, and integrates Clerk authentication, Expo Router, and custom hooks for transaction and summary management.


🚀 Features
Secure user authentication via Clerk
Add, view, and delete transactions
Automatic balance summary (income, expenses, total)
Auto-refresh on navigation and pull-to-refresh
Responsive UI with icons and reusable components
Works across Android, iOS, and web


🧩 Tech Stack
Tool / Library	Purpose
Expo	Simplifies React Native setup and development
React Native	Core mobile framework
Expo Router	File-based routing and navigation
Clerk Expo	User authentication and session handling    
@react-navigation/native	Navigation state and lifecycle
React Hooks (useState, useCallback, useFocusEffect)	State and lifecycle management
Expo Secure Store	Securely store tokens locally
Expo Haptics	Haptic feedback for button interactions
@expo/vector-icons	Built-in icon library
Custom Hooks (useTransactions)	Encapsulates transaction and summary logic
Custom Components	Reusable UI parts like BalanceCard, TransactionItem, PageLoader


🧠 Project Structure
frontend/
 ├── app/                  # Screens & routes
 ├── components/           # Reusable UI components
 ├── hooks/                # Custom React hooks
 ├── assets/               # Images & styles
 ├── constants/            # API URLs & config
 ├── package.json
 └── App.js (entry)


⚙️ Setup Instructions
1️⃣ Install Dependencies
npm install

2️⃣ Start Development Server
npm run start
Then scan the QR code in the terminal using the Expo Go app (on your phone)
or press:
a for Android emulator
i for iOS simulator
w for web preview

3️⃣ Environment Variables
Inside constants/api.js, set your backend API URL:
export const API_URL = "https://your-backend-url.com/api";

🧰 Common Commands
Command	Description
npm run android	Run app on Android emulator
npm run ios	Run app on iOS simulator
npm run web	Run app in browser
npm run lint	Lint the code
npm run reset-project	Reset Expo cache and rebuild project

👨‍💻 Author
Amit Yadav
Mobile frontend for the full-stack Expense Tracker App.
Focus: React Native, Expo Router, and Clerk authentication.
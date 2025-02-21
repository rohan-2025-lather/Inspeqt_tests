Inspeqt Tests 🧪

This repository contains test cases for the notification panel for Auditor and Manager roles using Playwright.

🚀 Getting Started:

1️⃣ Clone the Repository
git clone https://github.com/your-username/Inspeqt_tests.git
cd Inspeqt_tests

2️⃣ Set Up Environment Variables
Create a .env file in the root folder and add the following credentials:


# Email credentials for checking notifications on email
IMAP_USER=
IMAP_APP_PASSWORD=

# Admin credentials
ADMIN_EMAIL=
ADMIN_PASSWORD=

# Auditor credentials
AUDITOR_EMAIL=
AUDITOR_PASSWORD=

# Manager credentials
MANAGER_EMAIL=
MANAGER_PASSWORD=


🔹 IMAP_USER → Email used to fetch notifications
🔹 IMAP_APP_PASSWORD → App password for IMAP access
🔹 ADMIN_EMAIL / PASSWORD → Admin login details
🔹 AUDITOR_EMAIL / PASSWORD → Auditor login details
🔹 MANAGER_EMAIL / PASSWORD → Manager login details

📜 Additional Notes:-
1.Ensure you have Playwright installed (npx playwright install).

2.If you face authentication issues, enable IMAP access in your email settings.

3.Reports are generated in the /playwright-report/ directory.

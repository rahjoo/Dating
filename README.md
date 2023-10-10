# Telegram Dating mini App Installation Guide

**Introduction:**

This miniapp is built using the Telegram Mini App API and React JS.

It facilitates users to connect with others and find matches based on preferences.

-[https://t.me/VivaDateBot] (Sample Bot.)

**Prerequisites:**

Before you begin, ensure you have met the following requirements:

- [Node.js](https://nodejs.org/) (version LTS)
- [npm](https://www.npmjs.com/)

**Installation:**

1. Clone the repository:

   ```sh
   git clone https://github.com/biruknova/telegramDating.git
   ```

2. Change to the project's directory:

   ```sh
   cd telegramDating
   ```

3. Install dependencies using npm:

   ```sh
   npm install
   ```

4. Start the development server:

   ```sh
   npm run start
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the app.

**Configuration :**

1. Set your `BASE_URL` is the `config.js` file located in the `src` directory:

   ```javascript
   const BASE_URL = "your base url";

   export default BASE_URL;
   ```

2. Save the file and restart the development server.

# Telegram Mini App Usage - Dating App

## Overview

This miniapp is built using the Telegram Mini App API and React JS.
It facilitates users to connect with others and find matches based on preferences.

## Features

### **Bottom Navigation**

There are three main tabs in the bottom navigation:

- **Home**
- **Matches**
- **Profile**

### **Home Tab**

- Users are displayed in a card layout.

  - **User Information Displayed**:
    - User Image
    - Name
    - Age
    - Bio (if available)
  - Two action buttons:
    - **Like**: If clicked, you move on to the next user card. If there's a match, a match modal pops up.
    - **Dislike**: If clicked, you move on to the next user card.

- If there are no users left to display, a card shows up with the message:

  > "No one is available."

- **Match Modal**:
  - **Header**: "It's a match!"
  - Displays images of both users (the user and the person they matched with).
  - Two buttons:
    - **Profile**: Opens the matched user's profile.
    - **Continue**: Closes the match popup and moves to the next user card.

### **Matches Tab**

- Displays all the people you've matched with. Which when clicked, navigates to the profile of the clicked match.
- **Matched User Profile**:

  - Profile Picture
  - **Message Button**: Opens the matched user's Telegram chat.
  - **Unmatch Button**: Removes the matched user from your matches list.
  - Display of matched user's:
    - Username
    - Bio
    - Gender
    - Age

- **Note**: If a matched user doesn't have a username and you try to message them, a snackbar notification will appear with a message.

### **Profile Tab**

- Displays the user's:

  - Profile Picture (with an edit icon on top)
  - Username
  - Bio
  - Age
  - Gender
  - **Upgrade Button**: Allows users to upgrade and earn a `pro` badge. Payment processing is via Stripe. With the `pro` feature, the user will be able to see the 'Likes you' badge on the users list.

- **Edit Profile**:
  - Clicking on the pen icon above the profile picture opens the "Edit Profile" page.
  - Users can edit:
    - Name
    - Age (Minimum age limit: 16 years)
    - Bio

### **On First Launch**

- **Auto Login**: Users are automatically logged in.
- **New Users**:
  - Redirected to a signup page with:
    - Editable name input (autofilled).
    - Age input (Minimum age 16 years).
    - Gender selector buttons: "Male" and "Female".
  - Once all fields are valid and filled, a Telegram main button will appear labeled "Continue".
  - Clicking "Continue" registers the user and redirects them to the "Home" tab.

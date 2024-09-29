# ChatterBox – Full Stack Web Application

ChatterBox is a personalized chat application built using **PHP** and **MySQL**, offering a user-friendly experience with real-time messaging and voice message integration. The application features secure password encryption, active user status, and a clean, responsive interface.

## Objectives
- Build a personalized chat application for private communication.
- Provide a voice button feature for a more user-friendly chat experience.
- Ensure seamless interaction using MySQL for database management and PHP for server-side scripting.
- Encrypt password data for enhanced security.
- Display active and inactive statuses for users.

## Features
1. **User Authentication**: Login and sign-up system with encrypted password storage.
2. **Real-Time Chat**: Users can chat with others in real-time.
3. **Voice Messages**: Users can send voice messages to enhance communication.
4. **Active Status**: Displays whether users are online or offline.
5. **Profile Pictures**: Users can upload and display their profile pictures.
6. **Responsive Design**: The app is accessible across various devices with a smooth user interface.

## Prerequisites
Before setting up ChatterBox, ensure that the following software is installed:
- **XAMPP**: A local server environment that includes Apache, MySQL, PHP, and phpMyAdmin. You can download it from [this link](https://sourceforge.net/projects/xampp/).

## Installation Steps

### 1. Install XAMPP
1. Download and install XAMPP from the official site according to your operating system.
2. Make sure to install XAMPP in **C:/Program Files** to avoid potential errors. If you encounter UAC (User Account Control) issues, you can choose another location, but you might need to adjust some settings.

### 2. Start XAMPP
1. Open the XAMPP Control Panel and start **Apache** and **MySQL** services.
2. Click the **Admin** button next to MySQL to access phpMyAdmin. Alternatively, you can visit phpMyAdmin directly by typing `localhost/phpMyAdmin` into your web browser.

### 3. Setup Project Files
1. Navigate to the XAMPP installation folder, typically located at:
    ```
    C:/xampp/htdocs/
    ```
2. Copy the ChatterBox project files into the `htdocs` folder. This should include all PHP, JavaScript, and image files.

### 4. Database Configuration
1. Import the `Chatapp.sql` file using phpMyAdmin to set up the required database and tables for the application.
2. Open phpMyAdmin, click on **Import**, and choose the `Chatapp.sql` file from your local system.

### 5. File Structure
- **htdocs/**: Contains all project files.
    - **/php/**: Contains PHP files.
    - **/js/**: Contains JavaScript files for frontend interactions.
    - **/uploads/**: Contains user-uploaded files, including profile pictures and voice messages.
    - **/images/**: Contains default and user-uploaded images.

### 6. Login and Sign-Up Pages
- **Login Page**: Users can log in using their registered credentials. All fields are required.
- **Sign-Up Page**: New users can register by providing their details. Once registered, they can log in and start chatting.

### 7. Main Chat Interface
- After logging in, users will be redirected to the main chat interface. 
- The chat interface displays:
    - **List of active users**: Shows users who are currently online.
    - **Chat area**: Where users can send and receive messages, including voice messages.
    - If no messages have been sent, a message will indicate that the conversation has not started yet.

### 8. Sending Messages
- Users can send text messages, which will be displayed in the chat area.
- If the message is sent from both sides, it will be visible to both users in real-time.

## Screenshots
Include screenshots to showcase the login page, chat interface, and active user status.

- **Login Page**  
  ![Login Page](![Screenshot 2024-09-29 165952](https://github.com/user-attachments/assets/f35e7ce1-f852-44a6-9fac-25774634d430))
  
- **Chat Interface**  
  ![Chat Interface](![Screenshot 2024-09-29 170822](https://github.com/user-attachments/assets/ef5ecce9-4b06-472a-b8e6-14bd941c758e)
)

- **User Status**  
  ![User Status](![Screenshot 2024-09-29 170200](https://github.com/user-attachments/assets/0dee2617-8f4d-4626-9e76-e52b1beff3d5)
)

## Technologies Used
- **PHP**: Server-side scripting
- **MySQL**: Database management for storing user credentials, messages, and activity status.
- **JavaScript**: Frontend interactions
- **HTML/CSS**: Structure and styling for the web interface.
- **Bootstrap**: For responsive design.

## Security
- Passwords are securely encrypted before being stored in the MySQL database.
- Users' activity status (Active/non Active) is updated in real-time to improve user experience.

## Usage
1. Open your web browser and navigate to `http://localhost/ChatterBox/` to access the application.
2. Register or log in to start chatting with other users.
3. Use the voice message feature to send audio messages.

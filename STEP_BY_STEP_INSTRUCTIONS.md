# Step-by-Step Instructions - مدارس شعلة النور

Follow these steps in order to prepare your app for store upload.

## Step 1: Generate App Icons ⚠️ REQUIRED

Your app needs icons for both Android and iOS. This is already configured, you just need to run it.

### Option A: Using the Script (Easiest)

**On Windows:**
1. Open Command Prompt or PowerShell in your project folder
2. Run:
   ```bash
   generate_icons.bat
   ```

**On Mac/Linux:**
1. Open Terminal in your project folder
2. Run:
   ```bash
   chmod +x generate_icons.sh
   ./generate_icons.sh
   ```

### Option B: Manual Method

1. Open terminal in your project folder: `D:\flutter projects\madrasty`
2. Run these commands:
   ```bash
   flutter pub get
   flutter pub run flutter_launcher_icons
   ```

### What This Does:
- Generates all required icon sizes for Android (in `android/app/src/main/res/mipmap-*`)
- Generates all required icon sizes for iOS (in `ios/Runner/Assets.xcassets/AppIcon.appiconset/`)
- Uses your logo files: `assets/icons/logo.png` and `assets/icons/logo_trans.png`

### Verify It Worked:
- Check that icons were created in the folders mentioned above
- You should see multiple icon files with different sizes

---

## Step 2: Create Android Keystore ⚠️ REQUIRED for Google Play

**IMPORTANT**: You MUST do this before uploading to Google Play Store. Without a keystore, you cannot sign your app for release.

### Step 2.1: Create the Keystore File

1. Open Command Prompt or PowerShell in your project folder
2. Navigate to the android folder:
   ```bash
   cd android
   ```
3. Run this command (replace the values in brackets with your info):
   ```bash
   keytool -genkey -v -keystore upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
   ```

4. You'll be asked several questions. Here's what to enter:
   - **Keystore password**: Choose a STRONG password (write it down!)
   - **Re-enter password**: Enter the same password
   - **Your name**: Your name or organization (e.g., "Shu3la Al-Noor Schools")
   - **Organizational Unit**: Department (e.g., "IT Department" or just press Enter)
   - **Organization**: Your organization name (e.g., "Shu3la Al-Noor")
   - **City**: Your city (e.g., "Riyadh")
   - **State**: Your state/province (e.g., "Riyadh" or press Enter)
   - **Country code**: Two letters (e.g., "SA" for Saudi Arabia)
   - **Confirm**: Type "yes"
   - **Key password**: Can be same as keystore password or different (write it down!)

5. The keystore file will be created at: `android/upload-keystore.jks`

**⚠️ CRITICAL**: 
- Save the keystore file in a safe place (back it up!)
- Write down your passwords somewhere secure
- If you lose this file or passwords, you CANNOT update your app on Google Play!

### Step 2.2: Create key.properties File

1. In your project folder, go to: `android/key.properties.example`
2. Copy this file and rename it to `key.properties` (remove `.example`)
3. Open `android/key.properties` in a text editor
4. Replace the placeholder values with your actual values:

   ```
   storePassword=your_actual_keystore_password_here
   keyPassword=your_actual_key_password_here
   keyAlias=upload
   storeFile=../upload-keystore.jks
   ```

   Example:
   ```
   storePassword=MySecurePassword123!
   keyPassword=MySecurePassword123!
   keyAlias=upload
   storeFile=../upload-keystore.jks
   ```

5. Save the file

**Note**: The `key.properties` file is already in `.gitignore`, so it won't be committed to git (this is good for security).

### Step 2.3: Verify Keystore Setup

Test that everything works:

1. Build a release version:
   ```bash
   flutter build appbundle --release
   ```

2. If successful, you'll see:
   - Output file: `build/app/outputs/bundle/release/app-release.aab`
   - No errors about missing keystore

3. If you get errors:
   - Check that `key.properties` file exists and has correct paths
   - Verify passwords are correct
   - Make sure `upload-keystore.jks` is in the `android` folder

---

## Step 3: Test Your App

Before uploading, make sure your app works correctly:

### Test on Android Device/Emulator:
```bash
flutter run --release
```

### Test on iOS Device/Simulator (Mac only):
```bash
flutter run --release
```

### What to Test:
- ✅ App launches without crashes
- ✅ All features work correctly
- ✅ No debug messages or test data visible
- ✅ App icon displays correctly
- ✅ App name shows as "مدارس شعلة النور"

---

## Step 4: Build Release Versions

### For Google Play Store (Android):

1. Make sure you completed Step 2 (keystore setup)
2. Build the app bundle:
   ```bash
   flutter build appbundle --release
   ```
3. Find your file at: `build/app/outputs/bundle/release/app-release.aab`
4. This is the file you'll upload to Google Play Console

### For App Store (iOS):

1. Build iOS app:
   ```bash
   flutter build ios --release
   ```
2. Open in Xcode:
   ```bash
   open ios/Runner.xcworkspace
   ```
3. In Xcode:
   - Select your development team
   - Go to: Product → Archive
   - Wait for archive to complete
   - Click "Distribute App"
   - Choose "App Store Connect"
   - Follow the wizard to upload

---

## Step 5: Prepare Store Assets

Before uploading, you need to prepare:

### For Google Play Store:
- [ ] **App Icon**: 512x512px PNG (no transparency)
- [ ] **Feature Graphic**: 1024x500px PNG
- [ ] **Screenshots**: At least 2, up to 8 (phone: 1080x1920px or 1920x1080px)
- [ ] **Short Description**: 80 characters max (in Arabic)
- [ ] **Full Description**: Up to 4000 characters (in Arabic)
- [ ] **Privacy Policy URL**: Must be accessible without login

### For Apple App Store:
- [ ] **App Icon**: 1024x1024px PNG (no transparency, no rounded corners)
- [ ] **Screenshots**: 
  - iPhone 6.7": 1290x2796px (at least 3)
  - iPhone 6.5": 1284x2778px (at least 3)
  - iPad Pro 12.9": 2048x2732px (at least 3)
- [ ] **Description**: In Arabic
- [ ] **Privacy Policy URL**: Required
- [ ] **Support URL**: Your support website

---

## Step 6: Upload to Stores

### Google Play Store:
1. Go to: https://play.google.com/console
2. Create new app (if first time)
3. Fill in all store listing information
4. Upload the `.aab` file from Step 4
5. Complete content rating questionnaire
6. Submit for review

### Apple App Store:
1. Go to: https://appstoreconnect.apple.com
2. Create new app
3. Fill in app information
4. Upload build via Xcode (from Step 4)
5. Complete app privacy details
6. Fill store listing
7. Submit for review

---

## Quick Command Reference

```bash
# Generate icons
flutter pub get
flutter pub run flutter_launcher_icons

# Create keystore (run from android folder)
cd android
keytool -genkey -v -keystore upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload

# Test app
flutter run --release

# Build for Google Play
flutter build appbundle --release

# Build for App Store
flutter build ios --release
```

---

## Troubleshooting

### Icons not generating?
- Check that `assets/icons/logo.png` exists
- Check that `assets/icons/logo_trans.png` exists
- Make sure images are valid PNG files

### Keystore errors?
- Verify `key.properties` file exists in `android` folder
- Check that passwords match what you entered
- Ensure `upload-keystore.jks` is in `android` folder
- Check file paths in `key.properties` are correct

### Build errors?
- Run `flutter clean` then try again
- Make sure all dependencies are installed: `flutter pub get`
- Check that you're using the correct Flutter channel: `flutter channel stable`

### Need help?
- Check `STORE_UPLOAD_GUIDE.md` for detailed information
- Check `KEYSTORE_SETUP.md` for keystore-specific help

---

## ✅ Checklist Before Upload

- [ ] Icons generated successfully
- [ ] Android keystore created and configured
- [ ] App tested on real devices
- [ ] Release build successful (AAB for Android, Archive for iOS)
- [ ] Store assets prepared (screenshots, descriptions, etc.)
- [ ] Privacy policy URL ready
- [ ] Support contact information ready
- [ ] App name verified: "مدارس شعلة النور"
- [ ] Bundle ID verified: `com.shu3laalnoor.madrasty`

Good luck! 🚀


# Store Upload Guide - مدارس شعلة النور

This guide contains all the requirements and steps needed to upload your app to Google Play Store and Apple App Store.

## ✅ Completed Changes

The following changes have been automatically applied:

1. **App Name Updated**: Changed to "مدارس شعلة النور" in:
   - `pubspec.yaml` (description)
   - `android/app/src/main/AndroidManifest.xml` (android:label)
   - `ios/Runner/Info.plist` (CFBundleDisplayName and CFBundleName)
   - `lib/main.dart` (title)

2. **Bundle Identifiers Updated**:
   - Android: `com.shu3laalnoor.madrasty`
   - iOS: `com.shu3laalnoor.madrasty`

3. **Package Name Updated**: MainActivity.kt package updated and moved to new location
4. **Android Signing Configuration**: Set up and ready (see KEYSTORE_SETUP.md)

## ⚠️ Manual Steps Required

### 1. Generate App Icons

Run the icon generation script:
```bash
# Windows
generate_icons.bat

# Linux/Mac
./generate_icons.sh

# Or manually
flutter pub get
flutter pub run flutter_launcher_icons
```

This will generate icons for both Android and iOS from your logo files.

### 2. Set Up Android Keystore (Required for Release)

Follow the detailed instructions in `KEYSTORE_SETUP.md`:

1. Create a keystore file
2. Create `android/key.properties` file
3. The build configuration is already set up!

**Important**: Without a keystore, you cannot upload to Google Play Store.

### 3. Update Version Number

Before each release, update the version in `pubspec.yaml`:
```yaml
version: 1.0.0+1  # Format: MAJOR.MINOR.PATCH+BUILD_NUMBER
```

- **Version Name** (1.0.0): User-visible version
- **Build Number** (+1): Internal version for stores (must increment for each upload)

### 4. Generate App Icons (Already configured)

The icon configuration is already set in `pubspec.yaml`. Just run:
```bash
flutter pub run flutter_launcher_icons
```

Or use the helper scripts: `generate_icons.bat` (Windows) or `generate_icons.sh` (Linux/Mac)

Ensure you have:
- `assets/icons/logo.png` (1024x1024px recommended)
- `assets/icons/logo_trans.png` (transparent background)

### 5. Build Release Versions

**Android (APK/AAB):**
```bash
flutter build appbundle --release
```
Output: `build/app/outputs/bundle/release/app-release.aab`

**iOS:**
```bash
flutter build ios --release
```
Then open in Xcode and archive for App Store.

---

## 📱 Google Play Store Requirements

### Prerequisites
1. **Google Play Developer Account** ($25 one-time fee)
2. **App Signing Key** (create keystore for release builds)

### Required Information

#### 1. App Details
- **App Name**: مدارس شعلة النور (max 50 characters)
- **Short Description**: 80 characters max
- **Full Description**: 4000 characters max
- **App Icon**: 512x512px PNG (no transparency)
- **Feature Graphic**: 1024x500px PNG
- **Screenshots**: 
  - Phone: At least 2, up to 8 (16:9 or 9:16)
  - Tablet: At least 1, up to 8
  - TV: Optional
  - Wear OS: Optional

#### 2. Content Rating
- Complete content rating questionnaire
- Get rating certificate

#### 3. Privacy Policy
- **Required**: Must have a privacy policy URL
- Must explain what data you collect and how you use it
- Must be accessible without login

#### 4. Target Audience
- Select age groups
- Select content guidelines

#### 5. App Access
- Free or Paid
- Countries/regions for distribution

#### 6. Store Listing (Arabic)
- **Title**: مدارس شعلة النور
- **Short Description**: تطبيق إدارة المدارس - متابعة الطلاب والحضور والغياب
- **Full Description**: (Write comprehensive description in Arabic)
- **App Category**: Education
- **Tags**: مدارس، تعليم، إدارة، طلاب، حضور

#### 7. Graphics Requirements
- **App Icon**: 512x512px, PNG, no transparency
- **Feature Graphic**: 1024x500px, PNG
- **Phone Screenshots**: 1080x1920px or 1920x1080px
- **Tablet Screenshots**: 1200x1920px or 1920x1200px

#### 8. App Bundle (AAB)
- Upload `.aab` file (not APK)
- Minimum SDK version: Check `android/app/build.gradle.kts`
- Target SDK version: Should be latest (API 34+)

#### 9. Signing
✅ **Signing configuration is already set up!**

The `build.gradle.kts` file is configured to use a keystore for release builds.

**To complete setup:**
1. Follow the instructions in `KEYSTORE_SETUP.md` to create your keystore
2. Create `android/key.properties` file (use `key.properties.example` as template)
3. Build your release AAB: `flutter build appbundle --release`

**Important**: Keep your keystore file and passwords safe! You cannot update your app on Google Play without them.

---

## 🍎 Apple App Store Requirements

### Prerequisites
1. **Apple Developer Account** ($99/year)
2. **Xcode** (latest version)
3. **Certificates and Provisioning Profiles**

### Required Information

#### 1. App Information
- **Name**: مدارس شعلة النور (max 30 characters for display)
- **Subtitle**: 30 characters max
- **Category**: Education
- **Primary Language**: Arabic
- **Bundle ID**: `com.shu3laalnoor.madrasty` (must match Xcode)

#### 2. Pricing and Availability
- Free or Paid
- Available countries/regions

#### 3. App Privacy
- **Privacy Policy URL**: Required
- **Data Collection**: Declare what data you collect
- **Tracking**: Declare if you track users

#### 4. App Store Listing (Arabic)
- **Name**: مدارس شعلة النور
- **Subtitle**: تطبيق إدارة المدارس
- **Description**: (Write comprehensive description in Arabic)
- **Keywords**: مدارس، تعليم، إدارة، طلاب
- **Support URL**: Your support website
- **Marketing URL**: Optional

#### 5. Screenshots
- **iPhone 6.7" Display**: 1290x2796px (iPhone 14 Pro Max)
- **iPhone 6.5" Display**: 1284x2778px (iPhone 11 Pro Max)
- **iPhone 5.5" Display**: 1242x2208px (iPhone 8 Plus)
- **iPad Pro 12.9"**: 2048x2732px
- **iPad Pro 11"**: 1668x2388px
- At least 3 screenshots required per device size

#### 6. App Icon
- 1024x1024px PNG
- No transparency
- No rounded corners (iOS adds them)
- No alpha channel

#### 7. Version Information
- **Version**: 1.0.0 (from pubspec.yaml)
- **Build Number**: 1 (increment for each upload)
- **Copyright**: Your copyright notice

#### 8. Build Upload
1. Build iOS app:
   ```bash
   flutter build ios --release
   ```

2. Open in Xcode:
   ```bash
   open ios/Runner.xcworkspace
   ```

3. In Xcode:
   - Select your team in Signing & Capabilities
   - Product → Archive
   - Distribute App → App Store Connect
   - Upload to App Store

#### 9. App Store Connect Setup
1. Create new app in App Store Connect
2. Bundle ID: `com.shu3laalnoor.madrasty`
3. Fill all required information
4. Upload build
5. Submit for review

---

## 🔍 Search Optimization (ASO)

### Keywords to Include
- **Arabic**: مدارس، تعليم، إدارة المدارس، طلاب، حضور، غياب، أولياء الأمور
- **English**: schools, education, school management, students, attendance, parents

### App Title
- Include main keyword: "مدارس شعلة النور"
- Keep it short and memorable

### Description
- Use keywords naturally in first 3 lines
- Include features and benefits
- Use bullet points for readability

### Screenshots
- Show key features in screenshots
- Add text overlays explaining features
- Use first screenshot to show main value proposition

---

## ✅ Pre-Upload Checklist

### General
- [ ] App name updated everywhere
- [ ] Bundle identifiers updated
- [ ] Version number set correctly
- [ ] App icons generated and correct sizes
- [ ] App tested on real devices
- [ ] No debug code or test data
- [ ] Privacy policy URL ready
- [ ] Support email/website ready

### Android Specific
- [ ] MainActivity.kt moved to new package structure
- [ ] Keystore created for signing
- [ ] Signing config added to build.gradle.kts
- [ ] AAB file built successfully
- [ ] Minimum SDK version appropriate
- [ ] Permissions declared and justified
- [ ] App tested on multiple Android versions

### iOS Specific
- [ ] Bundle identifier matches App Store Connect
- [ ] Signing certificates and profiles set up
- [ ] App tested on multiple iOS devices
- [ ] Info.plist properly configured
- [ ] App icons in correct format
- [ ] Launch screen configured
- [ ] Privacy permissions declared in Info.plist

### Store Listings
- [ ] App name in Arabic
- [ ] Description written in Arabic
- [ ] Screenshots prepared (all required sizes)
- [ ] Feature graphic/App preview video ready
- [ ] Privacy policy accessible
- [ ] Support URL working
- [ ] Category selected correctly

### Content
- [ ] No placeholder text
- [ ] All features working
- [ ] No broken links
- [ ] Proper error handling
- [ ] Loading states implemented
- [ ] Offline handling (if applicable)

---

## 🚀 Upload Process

### Google Play Store
1. Go to Google Play Console
2. Create new app
3. Fill store listing
4. Upload AAB file
5. Complete content rating
6. Set pricing and distribution
7. Submit for review

### Apple App Store
1. Go to App Store Connect
2. Create new app
3. Fill app information
4. Upload build via Xcode or Transporter
5. Complete app privacy details
6. Fill store listing
7. Submit for review

---

## 📝 Important Notes

1. **Bundle Identifier**: Once published, you CANNOT change the bundle identifier. Make sure `com.shu3laalnoor.madrasty` is final.

2. **App Name**: Can be changed later, but affects search rankings.

3. **Version Numbers**: Must always increment. Cannot upload same version twice.

4. **Review Time**: 
   - Google Play: 1-3 days typically
   - Apple App Store: 1-7 days typically

5. **Rejections**: Common reasons:
   - Missing privacy policy
   - Incomplete store listing
   - App crashes
   - Violation of content guidelines
   - Missing required information

6. **Updates**: After first release, you can update the app with new versions.

---

## 🔗 Useful Resources

- [Google Play Console Help](https://support.google.com/googleplay/android-developer)
- [App Store Connect Help](https://help.apple.com/app-store-connect/)
- [Flutter Deployment Guide](https://docs.flutter.dev/deployment)
- [App Store Optimization Guide](https://developer.apple.com/app-store/optimization/)

---

## 📞 Support

If you encounter issues during upload:
1. Check Flutter documentation
2. Review store-specific error messages
3. Check store developer forums
4. Contact store support if needed

Good luck with your app launch! 🎉


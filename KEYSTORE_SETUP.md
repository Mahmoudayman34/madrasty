# Android Keystore Setup Guide

This guide will help you create a keystore for signing your Android app for release on Google Play Store.

## Step 1: Create the Keystore

Run the following command in your terminal (replace the values as needed):

```bash
keytool -genkey -v -keystore android/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload
```

You will be prompted to enter:
- **Keystore password**: Choose a strong password (save this!)
- **Key password**: Can be same as keystore password or different (save this!)
- **Your name**: Your name or organization name
- **Organizational Unit**: Department name (optional)
- **Organization**: Your organization name
- **City**: Your city
- **State**: Your state/province
- **Country code**: Two-letter country code (e.g., SA for Saudi Arabia)

**Important**: 
- Save the keystore file in a safe place
- **DO NOT** lose the keystore file or passwords - you cannot update your app on Google Play without it!
- Consider backing up the keystore file to a secure location

## Step 2: Create key.properties File

1. Copy the example file:
   ```bash
   cp android/key.properties.example android/key.properties
   ```

2. Edit `android/key.properties` and fill in your actual values:
   ```
   storePassword=your_actual_keystore_password
   keyPassword=your_actual_key_password
   keyAlias=upload
   storeFile=../upload-keystore.jks
   ```

## Step 3: Verify Configuration

The `build.gradle.kts` file is already configured to use the keystore if `key.properties` exists.

To test the release build:
```bash
flutter build appbundle --release
```

The output will be in: `build/app/outputs/bundle/release/app-release.aab`

## Security Notes

1. **Never commit** `key.properties` or `upload-keystore.jks` to version control
2. These files are already in `.gitignore`
3. Keep backups of your keystore in a secure location
4. If you lose the keystore, you cannot update your app - you'll need to create a new app listing

## Troubleshooting

### Error: "Keystore file does not exist"
- Make sure the `storeFile` path in `key.properties` is correct
- The path should be relative to the `android` directory

### Error: "Wrong password"
- Double-check your passwords in `key.properties`
- Make sure there are no extra spaces or characters

### Error: "Alias does not exist"
- Make sure the `keyAlias` in `key.properties` matches the alias you used when creating the keystore (should be "upload")

## Next Steps

After setting up the keystore:
1. Build your release AAB: `flutter build appbundle --release`
2. Upload to Google Play Console
3. Keep your keystore safe for future updates!


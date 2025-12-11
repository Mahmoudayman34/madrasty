#!/bin/bash
echo "Generating app icons..."
flutter pub get
flutter pub run flutter_launcher_icons
echo ""
echo "Icons generated successfully!"
echo "Check android/app/src/main/res/mipmap-* and ios/Runner/Assets.xcassets/AppIcon.appiconset/"


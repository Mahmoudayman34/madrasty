# Add project specific ProGuard rules here.
# You can control the set of applied configuration files using the
# proguardFiles setting in build.gradle.

# Flutter wrapper
-keep class io.flutter.app.** { *; }
-keep class io.flutter.plugin.**  { *; }
-keep class io.flutter.util.**  { *; }
-keep class io.flutter.view.**  { *; }
-keep class io.flutter.**  { *; }
-keep class io.flutter.plugins.**  { *; }
-keep class com.google.android.gms.** { *; }
-keep class dev.fluttercommunity.flutter_font_manager.** { *; }
-keep class io.flutter.plugins.googlefonts.** { *; }

# Keep native methods
-keepclasseswithmembernames class * {
    native <methods>;
}


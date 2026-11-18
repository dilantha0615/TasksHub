# TasksHub

A React Native mobile application built with Expo Router as part of **COST 32152 - Mobile Application Development** at the Department of Statistics & Computer Science, University of Kelaniya.

## Features Implemented
- **Hybrid File-Based Navigation (Expo Router):** Implemented bottom tab navigation (`Dashboard` and `Profile`) combined with a modal stack screen (`Add New Task`).
- **Persistent Local Storage (`AsyncStorage`):** Stored, retrieved, and cleared serialized JSON arrays of tasks and student profile details so data persists across app restarts.
- **Local Notifications (`expo-notifications`):** Configured foreground notification handling and scheduled immediate local alerts whenever a new task is saved.
- **Image Picker (`expo-image-picker`):** Integrated media library permissions and square-cropped avatar selection on the Student Profile screen.


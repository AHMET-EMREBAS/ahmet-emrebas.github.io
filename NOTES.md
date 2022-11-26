### intitial

- Set the base.href './'
- To build `nx build app-name`
- To mame `nx run app-name:make`

### How to build app with multiple locale

- Build angular app
- Change base.heref value to './' in each index.html locale folder
- Choose a default locale and copy it into the root directory.
- Set link to each locale as follows

```
          <a MUST BE CLICKED FIRST AND ONCE  href="./en/index.html">en</a>

          <a href="../en/index.html">en</a>
          <a href="../tr/index.html">tr</a>
          <a href="../jp/index.html">jp</a>
          <a href="../es/index.html">es</a>
          <a href="../fr/index.html">fr</a>
          <a href="../ch/index.html">ch</a>
          <a href="../rs/index.html">rs</a>
```

### How to setup nativescript

- Install android studio.
- Install JDK 11
- Run `tns doctor`
- Set the required environment variables
- Create Virtual Device of API 32 Pixel 4 supporting Google APIs
- Install NDK in android studio for side by side look
- Install Android SDK Command-line tools
- Install Android SDK platform tools

- Run the Device, then run `nx run app-name:android`
- Set the android:exported="true" in Androidmanifest
- Do not forget to install node dependencies

- Set paths for tools `C:\Users\aecst\AppData\Local\Android\Sdk\tools\bin`

### Important

- Angular builder package must be compatible with the current angular version
- Use the angular-builder 14 in nativescript
- You do not have to change the angular-builder version for entire project. Just change it in the nativescript package.json file.

### How to add PWA to project

- Install @angular/pwa `yarn add -D @angular/pwa`
- Add pwa `nx g @angular/pwa:ng-add --project=project-name`

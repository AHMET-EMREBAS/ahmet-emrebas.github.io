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

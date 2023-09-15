### Configure

```css
@use './theme/techbir.scss' as techbir;

$lightness: 60%;
$primary: hsl(219, 70%, $lightness);
$secondary: hsl(298, 73%, $lightness);
$warn: hsl(19, 66%, $lightness);
$error: hsl(0, 63%, $lightness);
$info: hsl(199, 100%, $lightness);
$dark: hsl(0, 0%, 5%);
$light: hsl(0, 0%, 100%);

@include techbir.configure(
  $primary,
  $secondary,
  $warn,
  $error,
  $info,
  $dark,
  $light
);
```

### Black White

- `--lightness: 49%;`
- `--dark: hsl(0, 20%, 10%);`
- `--light: hsl(0, 20%, 90%);`
- `--surface: hsl(0, 20%, 90%);`
- `--surface-light: white;`
- `--surface-lighter: white;`
- `--surface-dark: black;`
- `--surface-darker: black;`

### Fonts

- `Roboto ( .roboto )`
- `Special Elite ( .special_elite )`
- `Josefin Sans (.josefin_sans )`
- `Lobster ( .lobster)`
- `Comfortaa (.comfortaa )`
- `Rubik Dirt ( .rubik_dirt )`
- `Rubik Iso ( .rubik iso )`
- `Black Ops One ( .black_ops_one )`
- `Concert One (.concert_one )`
- `Tourney (.tourney )`
- `Tourney (.tourney )`
- `Dancing Script (.dancing_script )`
- `Material Symbols Rounded (.icon .fill )`

### Font sizes

- `--font-size-1: 1rem;`
- `--font-size-2: 1.4rem;`
- `--font-size-3: 1.8rem;`
- `--font-size-4: 2.2rem;`
- `--font-size-5: 2.6rem;`
- `--font-size-6: 3rem;`
- `--font-size-7: 3.4rem;`
- `--font-size-8: 3.8rem;`
- `--font-size-9: 4.2rem;`
- `--font-size-10: 4.6rem;`
- `--font-size-11: 5rem;`
- `--font-size-12: 5.4rem;`

### Border Widths

- `--border-size-9: 9px;`
- `--border-size-8: 8px;`
- `--border-size-7: 7px;`
- `--border-size-6: 6px;`
- `--border-size-5: 5px;`
- `--border-size-4: 4px;`
- `--border-size-3: 3px;`
- `--border-size-2: 2px;`
- `--border-size-12: 12px;`
- `--border-size-11: 11px;`
- `--border-size-10: 10px;`
- `--border-size-1: 1px;`

### Border Radiuses

- `--border-radius: 0.5em;`
- `--border-radius-9: 9px;`
- `--border-radius-8: 8px;`
- `--border-radius-7: 7px;`
- `--border-radius-6: 6px;`
- `--border-radius-5: 5px;`
- `--border-radius-4: 4px;`
- `--border-radius-3: 3px;`
- `--border-radius-2: 2px;`
- `--border-radius-12: 12px;`
- `--border-radius-11: 11px;`
- `--border-radius-10: 10px;`
- `--border-radius-1: 1px;`

### Border Classes

```css
.border-primary {
  border-color: var(--primary);
}

.border-secondary {
  border-color: var(--secondary);
}

.border-warn {
  border-color: var(--warn);
}

.border-error {
  border-color: var(--error);
}

.border-info {
  border-color: var(--info);
}

.border-dark {
  border-color: var(--dark);
}

.border-light {
  border-color: var(--light);
}

.border-solid {
  border-style: solid;
}

.border-dashed {
  border-style: dashed;
}

.border-double {
  border-style: double;
}

.border-dotted {
  border-style: dotted;
}
```

### Sizes

- `--h-1: 8.3333333333%;`
- `--w-1: 8.3333333333%;`
- `--h-2: 16.6666666667%;`
- `--w-2: 16.6666666667%;`
- `--h-3: 25%;`
- `--w-3: 25%;`
- `--h-4: 33.3333333333%;`
- `--w-4: 33.3333333333%;`
- `--h-5: 41.6666666667%;`
- `--w-5: 41.6666666667%;`
- `--h-6: 50%;`
- `--w-6: 50%;`
- `--h-7: 58.3333333333%;`
- `--w-7: 58.3333333333%;`
- `--h-8: 66.6666666667%;`
- `--w-8: 66.6666666667%;`
- `--h-9: 75%;`
- `--w-9: 75%;`
- `--h-10: 83.3333333333%;`
- `--w-10: 83.3333333333%;`
- `--h-11: 91.6666666667%;`
- `--w-11: 91.6666666667%;`
- `--h-12: 100%;`
- `--w-12: 100%;`

### Box Sizes

- `--box-size-1: 33.3333333333px;`
- `--box-size-2: 66.6666666667px;`
- `--box-size-3: 100px;`
- `--box-size-4: 133.3333333333px;`
- `--box-size-5: 166.6666666667px;`
- `--box-size-6: 200px;`
- `--box-size-7: 233.3333333333px;`
- `--box-size-8: 266.6666666667px;`
- `--box-size-9: 300px;`
- `--box-size-10: 333.3333333333px;`
- `--box-size-11: 366.6666666667px;`
- `--box-size-12: 400px;`

### Button Sizes

- `--button-min-width: 120px;`
- `--button-min-height: 36px;`
- `--button-max-width: 200px;`
- `--button-max-height: 100px;`

### Shadows

Shadows are defiend with 3 digit numbers.

First and second digit should fall within the range of 0 to 3;

Third digit should fall within the range of 0 to 7;

- `--box-shadow-000: 0px 0px 0px hsl(0, 20%, 10%);`
- `--box-shadow-000-light: 0px 0px 0px #5c3d3d;`
- `--box-shadow-000-dark: 0px 0px 0px black;`
- `--box-shadow-000-inset: 0px 0px 0px hsl(0, 20%, 10%);`
- `--box-shadow-000-light-inset: 0px 0px 0px #5c3d3d;`
- `--box-shadow-000-dark-inset: 0px 0px 0px black;`
- `--There are a lot......`
- `--box-shadow-337: 3px 3px 7px hsl(0, 20%, 10%);`
- `--box-shadow-337-light: 3px 3px 7px #5c3d3d;`
- `--box-shadow-337-dark: 3px 3px 7px black;`
- `--box-shadow-337-inset: 3px 3px 7px hsl(0, 20%, 10%);`
- `--box-shadow-337-light-inset: 3px 3px 7px #5c3d3d;`
- `--box-shadow-337-dark-inset: 3px 3px 7px black;`

### Colors

#### Primary

- `--primary: hsl(219, 70%, 60%);`
- `--primary-light: #a8c1f0;`
- `--primary-lighter: white;`
- `--primary-dark: #1f51ad;`
- `--primary-darker: #08142b;`
- `--primary-face: var(--light);`

#### Secondary

- `--secondary: hsl(298, 73%, 60%);`
- `--secondary-light: #efa7f1;`
- `--secondary-lighter: white;`
- `--secondary-dark: #ab1cb0;`
- `--secondary-darker: #2b072c;`
- `--secondary-face: var(--light);`

#### Warn

- `--warn: hsl(19, 66%, 60%);`
- `--warn-light: #eec0aa;`
- `--warn-lighter: white;`
- `--warn-dark: #a94d23;`
- `--warn-darker: #2a1309;`
- `--warn-face: var(--light);`

#### Error

- `--error: hsl(0, 63%, 60%);`
- `--error-light: #ecacac;`
- `--error-lighter: white;`
- `--error-dark: #a62626;`
- `--error-darker: #2a0909;`
- `--error-face: var(--light);`

#### Info

- `--info: hsl(199, 100%, 60%);`
- `--info-light: #99dfff;`
- `--info-lighter: white;`
- `--info-dark: #008bcc;`
- `--info-darker: #002333;`
- `--info-face: var(--light);`

#### Dark

- `--dark: hsl(0, 0%, 5%);`
- `--dark-light: #404040;`
- `--dark-lighter: #737373;`
- `--dark-dark: black;`
- `--dark-darker: black;`
- `--dark-face: var(--light);`

#### Light

- `--light: hsl(0, 0%, 100%);`
- `--light-light: white;`
- `--light-lighter: white;`
- `--light-dark: #cccccc;`
- `--light-darker: gray;`
- `--light-face: var(--dark);`

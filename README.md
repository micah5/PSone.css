# PSone.css
![description](https://i.imgur.com/IctX9D2.png "description")

Please feel free to submit a pull request, no matter how small. I love getting them.

At the moment there's just a CSS file that you can link to:
```html
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/98mprice/PSone.css@master/PSone.min.css">
```
I hope to add some JS eventually to help with progressbars etc.

## Reference
### Container
From FF7
```html
<div class="container">
  <label class="title">Default</label>
  <p>Kick! Punch! It's all in the mind.</p>
</div>
<div class="container dark">
  <label class="title">dark</label>
  <p>You see, the island is the site of a secret nuclear
   weapons disposal facility.</p>
</div>
<div class="container light">
  <label class="title">light</label>
  <p>Crash, Crash? Are you there Crash? ... Are you there Crash?</p>
</div>
```

### Button
From Tekken 3
```html
<button type="button" class="btn">Normal</button>
<button type="button" class="btn primary">Primary</button>
<button type="button" class="btn success">Success</button>
<button type="button" class="btn warning">Warning</button>
<button type="button" class="btn error">Error</button>
```

### Progress bar
From MGS1
```html
<div class="progress">
  <div class="bar" style="width: 80%"></div>
  <div class="subtitle">Default</div>
</div>
<div class="progress primary">
  <div class="bar" style="width: 100%"></div>
  <div class="subtitle">primary</div>
</div>
<div class="progress success">
  <div class="bar" style="width: 40%"></div>
  <div class="subtitle">success</div>
</div>
<div class="progress warning">
  <div class="bar" style="width: 60%"></div>
  <div class="subtitle">warning</div>
</div>
<div class="progress error">
  <div class="bar" style="width: 20%"></div>
  <div class="subtitle">error</div>
</div>
<div class="progress indeterminate">
  <div class="bar"></div>
  <div class="subtitle">indeterminate</div>
</div>
```

### Radio Button
From the PS1 memory card screen
```html
<label>
  <input type="radio" name="test" value="small" checked>
  <span class="option">Yes
    <span class="click"></span>
  </span>
</label>
```

### Input
From FF7
```html
<div class="field">
  <label>Default</label>
  <input type="text" class="input">
</div>
<div class="field is-inline">
  <label>With placeholder</label>
  <input type="text" class="input" placeholder="Jill Valentine">
</div>
```

## Development

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/micah5/PSone.css/issues)

Fork the project and enter this commands in your terminal

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/PSone.css.git
cd PSone.css
npm install
```

### Storybook
For visual testing, this project contains storybook which you can run by doing the next command
```sh
$ npm run storybook
```

### Demo
The demo page is located in `index.html`. If you want to change something there, you can use the next command
```sh
$ npm run dev
```

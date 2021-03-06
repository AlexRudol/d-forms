# D-Forms

[Demo](http://alexrudol.com/demo/d-forms/) | [GitHub](https://github.com/AlexRudol/d-forms)

Simple and lightweight web-form styles.

Easy to use, tweak and extend.

*HTML5, CSS3 (SCSS), jQuery*

## How to use

All minimized and ready to use files are in **/d-forms** folder:
- `/fonts` _(icon font)_
- `d-forms.min.css` _(main styles)_
- `d-forms.min.js` _(main js file)_

1. These files should be linked to project:
    ```
    <script type="text/javascript" src="path/to/file/d-forms.min.js" ></script>
    <link type="text/css" rel="stylesheet" href="path/to/file/d-forms.min.css">
    
    ```
2. Also jQuery is required:
    ```
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
    
    ```
3. Icon font (if needed) should be placed the same folder as **d-forms.min.css**.

## How to customize

It's easy to customize by changing files in the **/src** folder.

To change styles:

1. There are separate styles in the **_theme-standart.scss** for: colors, elements, theme styles. It's better to:
  1. Copy **/src/scss/_theme-standart.scss** file and rename (*_theme-NAME.scss*).
  1. Change the first line of **/src/scss/d-forms.scss** with new filename (*_theme-NAME.scss*).
  1. Change anything in **_theme-NAME.scss** file.
1. Compile **/src/scss/d-forms.scss** to **/d-forms/d-forms.min.css**. There is ready to use **gulpfile.js** or use Grunt or your editor's plugins.

## Found a bug?

These styles are under active development. So I'm not surprised. Just [create an issue](https://github.com/AlexRudol/d-forms/issues). I'll fix it as soon as possible.

## Roadmap

- Client side form validation
- Optimization
- Date and time pickers
- Grid styles
- More themes

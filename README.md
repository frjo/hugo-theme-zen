# The Hugo Zen theme

**Zen** theme strives to be as clean and standard compliant as possible with some neat features. A solid base for your custom [Hugo](https://gohugo.io/) theme.

It uses HTML5 with a modern CSS grid and flex layout. Recent versions of all the mayor browsers support it, see [Can I use css grid](http://caniuse.com/#search=grid).

Sass is processed with Hugo pipes that was added in Hugo 0.46. To make using npm optional I have added the stylesheets from the excellent sass plugin [typey](https://www.npmjs.com/package/typey) to the theme directly.

This is originally a port of the [Zen](https://www.drupal.org/project/zen) theme by [JohnAlbin](https://www.drupal.org/u/johnalbin), a very popular base theme for Drupal.


## Features

* A mobile menu
* Analytics with Matamo (Piwik)
* Automatic linting of css and js
* Contact form (PHP)
* CSS grid and flex for layout
* Gulp.js (only for sass/js lint)
* HTML5
* Hugo Pipes for js and sass
* jQuery 3
* Micro.blog
* Minify css
* Meta tags and JSON-LD
* Multilingual (i18n)
* Normalize CSS
* Responsive design
* RSS and JSON feeds with full content
* Search with DuckDuckGo
* Sub theme support (Theme Components)


## Sites using the Hugo Zen theme

* [Combonetwork development](https://combonet.se/) (multilingual)
* [Drejargården](https://www.drejargarden.se/)
* [Helmer Grundström](https://www.helmergrundstrom.se/)
* [xdeb.org](https://xdeb.org/)
* [xdeb.net](https://xdeb.net/)


## On the large screen

![screenshot](https://raw.githubusercontent.com/frjo/hugo-theme-zen/master/images/tn.png)


## On the small screen

![screenshot](https://raw.githubusercontent.com/frjo/hugo-theme-zen/master/images/tn_mobil.png)


## The mobile menu

![screenshot](https://raw.githubusercontent.com/frjo/hugo-theme-zen/master/images/tn_mobil_menu.png)


## Installation

```
$ cd themes
$ git clone https://github.com/frjo/hugo-theme-zen.git zen
```

[Hugo - Installing Hugo](https://gohugo.io/getting-started/installing/)


## Customise layouts

To customise a layout included in the zen theme, copy it to the root layout directory and edit it there. Make sure to maintain the directory structure inside the layouts directory. 

Add any new layouts to the root layout directory as well. This way they will not be overwritten when updating the theme.


## Customise styles and scripts

Styles and scripts are processed with Hugo pipes that was added in Hugo 0.46.

To customise a js or sass file, copy it to the root assets directory and edit it there. Make sure to maintain the directory structure inside the assets directory.

By default the sass files are built for production, compressed with fingerprint. By setting the Hugo enviroment variable to "dev" they will instead be nested with sourcemaps.

```
§ hugo serve watch --environment=dev
```


## config.yaml example

All the "params" are optional.

```
baseurl: "https://example.org/"
title: "SiteTitle"

params:
  contact: "info@example.org"
  copyright: "This site is licensed under a 
              (https://creativecommons.org/licenses/by-sa/4.0/)."
              [Creative Commons Attribution-ShareAlike 4.0 International License]
  dateformat: ""            # Set the date format, default to "2 January, 2006"
  description: ""           # Set site description, used in meta tags and JSON-LD
  favicon: ""               # Relative path to favicon in json feed, no leading slash.
  feedlinks: true           # Show feed links in the footer.
  footer: "A [example.org](https://example.org/) production."
  icon: ""                  # Relative path to icon in json feed, no leading slash.
  image: ""                 # Relative path to site image in JSON-LD, no leading slash.
  imageMaxWidth: ""         # Max width for images added via figure shortcode.
  jquery: true              # Add jQuery
  languageDir: ""           # Set ltr or rtl, defaults to ltr.
  logo: false               # Turn off the logo.
  microUsername: ""         # Your micro.blog username.
  mobileMenu: true          # Turn on a mobile menu on small screens.
  piwikSiteId:              # Matamo site id
  piwikTrackerUrl: ""       # Matamo url, schemaless and no slash on end (example.com/matamo).
  poweredby: true           # Show powered by hugo in footer
  search: true              # Site search with DuckDuckGo.
  searchSize: 20            # Search field size, default 20.
  sidebar: true             # Show a sidebar to the right
  submitted: true           # Show author and date information for a post.
```


## Multilingual

English and Swedish translations are included and you can easily add more to the `i18n` site directory.

A language selector will be included on sites with more than one language. Add a `LanguageName` parameter to your language configuration, this is what will be displayed in the selector.

The language selector will link to a translation of the current page if it exist and to the front page if it does not.

```
languages:
  sv:
    weight: 1
    params:
      LanguageName: "Svenska"
  en:
    weight: 2
    params:
      LanguageName: "English"
```


## Contact form

If your server support php with the mail() command (very common) you can use the included contact form feature to get a contact form for your site.

1. Copy the file `themes/zen/php/contact.php.example` to `static/php/contact.php`.
2. Edit the contact.php file so it has your own e-mail address. You may also change the mail subject prefix.
3. Add the shortcode `{{< contact >}}` to a page. Also set `contactform: true` in the front matter for that page so the contact.js file gets loaded.

If you have a SPF record for your domain, make sure the web server is listed or other mail server may mark the mail as spam.

Two types of spam protection is implemented. The form can only be posted after the user have moved the mouse or pressed the tab or enter key. The form have a "honypot" field that is invisible to humans but not to most spam boots. If that field is filled in the mail will not be sent.

Form validation is handeld by HTML5 and there is some CSS to make it look nice.

Javascript is used for spam protection and to display error/success messages.


## Dates

If "lastmod" is set in the frontmatter on a post that value will be used in the "submitted" section. If not "date" is used.

With "lastmod" set a date section will also appear at the bottom of post telling the reader the created and modification dates.


## Shortcodes

### Contact

Insert a html5 contact form, see more above.

```
{{< contact >}}
```

### Figure

Zen comes with a improved version of the built in "figure" shortcut.

* You can set a max width for images with parameter "imageMaxWidth". 
* If width and height is not set the real dimensions of the image will be used.
* If only width or height is set the other value will be proportionally calculated.

### Clear

Break float.

```
{{< figure src="/images/image.jpg" class="right" >}}

blablabla # Displayed left of the image.

{{< clear >}}

blablabla # Displayed below of the image.
```

### Wrapper

A simple, but useful, shortcode to wrap content in a div with a class.

```
{{% wrapper class-name-you-want %}}
The **content** that should be wrapped.
{{% /wrapper %}}
```

This will produce:

```
<div class="class-name-you-want">
The <strong>content</strong> that should be wrapped.
</div>
```


## Use Gulp to lint Sass and JavaScript

* Lint your Sass using sass-lint.
* Lint your JavaScript using eslint.
* Will lint files in the theme as well as the root assets directory.
* Watch all of your files as you develop and re-build everything on the fly.

Set up your front-end development build tools:

1. Install Node.js and npm, the Node.js package manager.

    Detailed instructions are available on the "npm quick start guide":
    https://github.com/kss-node/kss-node/wiki/npm-quick-start-guide

2. The package.json file in your new sub-theme contains the versions of all the
Node.js software you need. To install them run:

        npm install

3. Install the gulp-cli tool globally. Normally, installing a Node.js globally
is not recommended, which is why both Gulp and Grunt have created wrapper
commands that will allow you to run "gulp" or "grunt" from anywhere, while
using the local version of gulp or grunt that is installed in your project.
To install gulp's global wrapper, run:

        npm install -g gulp-cli

5. The default gulp task will lint your Sass and JavaScript.
To run the default gulp task, type:

        gulp

    To watch all your files as you develop, type:

        gulp watch


## Create a zen subtheme

Since Hugo 0.42 there is sub them support via [Theme Components](https://gohugo.io/themes/theme-components/). A nice feature if you want to extend an existing theme, like zen.

If all you want is customise layouts, styles and scripts for a site it's easier to copy the needed files to the root layout and assets directories and edit them there. See instructions above.

The included "create_sub_theme.sh" script makes it easy to get started on a sub theme. Navigate to the theme directory where you have placed the zen base theme and run the script like this.

```
$ ./zen/create_sub_theme.sh
```

Enter a name for your sub theme when asked for. In the site config file add your sub theme name first and "zen" after it. Hugo will now first look in the sub theme for files and if they are not there look in the zen base theme.

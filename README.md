# The Hugo Zen theme

**Zen** theme strives to be as clean and standard compliant as possible with some neat features. A solid base for your custom [Hugo](https://gohugo.io/) theme.

It uses HTML5 with a modern CSS grid and flex layout. Recent versions of all the mayor browsers support it, see [Can I use css grid](http://caniuse.com/#search=grid).

Sass is processed with Hugo pipes. To make using npm optional I have added the stylesheets from the excellent sass plugin [typey](https://www.npmjs.com/package/typey) directly to the theme.

![Lighthouse report](https://raw.githubusercontent.com/frjo/hugo-theme-zen/main/images/lighthouse_report.png)


## Table of contents

* [Features](#features)
* [Minimum Hugo version](#minimum-hugo-version)
* [Installation](#installation)
* [Updating](#updating)
* [Run example site](#run-example-site)
* [Performance](#performance)
* [Sites using the Hugo Zen theme](#sites-using-the-hugo-zen-theme)
* [Screenshots](#screenshots)
* [Configuration](#configuration)
* [Customise](#customise)
* [Render hook templates](#render-hook-templates)
* [Multilingual](#multilingual)
* [Search](#search)
* [Contact form](#contact-form)
* [Cookie consent](#cookie-consent)
* [Dates](#dates)
* [Podcast](#podcast)
* [Shortcodes](#shortcodes)
* [Content security policy headers](#Content-security-policy-headers)
* [Choose between using jQuery or Umbrella JS](#choose-between-using-jquery-or-umbrella-js)
* [Use npm to lint Sass and JavaScript](#use-npm-to-lint-sass-and-javascript)
* [Getting help](#getting-help)
* [Credits](#credits)


## Features

* A mobile menu
* Analytics with Matamo (Piwik)
* Cookie consent
* Commands for linting of css and js
* Contact form (PHP)
* CSS grid and flex for layout
* HTML5
* Hugo Pipes for js and sass
* jQuery 3
* Micro.blog
* Meta tags and JSON-LD
* Multilingual (i18n)
* Normalize CSS
* Podcast
* Responsive design
* RSS and JSON feeds with full content
* Search with FlexSearch.js
* Sub theme support (Theme Components)
* Umbrella JS 3 (tiny jQuery replacement, 2.5kB when gzipped)


## Minimum Hugo version

Hugo Extended version 0.67.1 or higher is required.


## Installation

You can download and unpack the theme manually from Github but it's easier to use git to clone the repo.

From the root of your site:

```
$ git clone https://github.com/frjo/hugo-theme-zen.git themes/zen
```

If you use git to version control your site, highly recommended, it's best to add the zen theme as a submodule.

From the root of your site:

```
git submodule add https://github.com/frjo/hugo-theme-zen.git themes/zen
```


## Updating

From the root of your site:

```
git submodule update --remote --merge
```


## Run example site

From the root of `themes/zen/exampleSite`:

```
hugo server --themesDir ../..
```


## Performance

Performance should be excellent.

* Minimal and compliant HTML5
* Styles 17,7 kB (4,3 kB when gzipped)
* JavaScript 8,4 kB (2,7 kB when gzipped)
* All scripts loaded in head with "defer"
* Optimised for HTTP/2

Some performance tools will complain about to many files (js and css files are not concatenated) but with HTTP/2 that can be ignored.


## Sites using the Hugo Zen theme

* [BypassCensorship](https://www.bypasscensorship.org/) (multilingual)
* [Combonetwork development](https://combonet.se/) (multilingual)
* [DevSecOps Talks](https://devsecops.fm)
* [Drejargården](https://www.drejargarden.se/)
* [Helmer Grundström](https://www.helmergrundstrom.se/)
* [xdeb.org](https://xdeb.org/)
* [xdeb.net](https://xdeb.net/)


## Screenshots

### On the large screen

![screenshot](https://raw.githubusercontent.com/frjo/hugo-theme-zen/main/images/tn.png)


### On the small screen

![screenshot](https://raw.githubusercontent.com/frjo/hugo-theme-zen/main/images/tn_mobil.png)


### The mobile menu

![screenshot](https://raw.githubusercontent.com/frjo/hugo-theme-zen/main/images/tn_mobil_menu.png)


## Configuration

Configurations parameters for the sites config file, in yaml format. All the "params" are optional.

```
baseurl: "https://example.org/"
title: "SiteTitle"
theme: "zen"
languageCode: "en-GB"       # Set your language code (only needed for none multilingual sites).

params:
  cookieConsent: true       # Show cookie consent form, default false.
  contact: "info@example.org"
  copyright: "This site is licensed under a 
              (https://creativecommons.org/licenses/by-sa/4.0/)."
              [Creative Commons Attribution-ShareAlike 4.0 International License]
  dateformat: ""            # Set the date format, default to "2 January, 2006"
  description: ""           # Set site description, used in meta tags and JSON-LD
  favicon: ""               # Relative path to favicon in json feed, no leading slash.
  feedlinks: true           # Show feed links in the footer.
  footer: "A [example.org](https://example.org/) production."
  icon: ""                  # Relative path to icon in json feed and JSON-LD, no leading slash.
  image: ""                 # Relative path to site image in JSON-LD, no leading slash.
  imageMaxWidth: ""         # Max width for images added via figure shortcode.
  jquery: true              # Add jQuery
  languageDir: ""           # Set ltr or rtl, defaults to ltr.
  logo: false               # Turn off the logo.
  mainSections:             # The sections you want to have listed on the front page.
    - "section1"            # Default to the section with most content if not set.
    - "section2"            # Set to empty if no section should be listed.
  microUsername: ""         # Your micro.blog username.
  mobileMenu: true          # Turn on a mobile menu on small screens.
  piwikSiteId:              # Matamo site id
  piwikTrackerUrl: ""       # Matamo url, schemaless and no slash on end (example.org/matamo).
  plausibleSiteID: ""       # Plausible site id/domain.
  plausibleTrackerURL: ""   # Plausible url, schemaless and no slash on end. Optional, defaults to "plausible.io/…"
  poweredby: true           # Show powered by hugo in footer
  privacyPolicyUrl: ""      # If set will add link to cookie consent form.

  realfavicongenerator:     # If full set of favicons, site manifest etc. exists, default false.
  relatedposts: true        # Show related posts under a "See also" section, default false.
  searchLimit: 20           # Max number of search hits, default 20.
  sidebar: true             # Show a sidebar to the right
  submitted: true           # Show author and date information for a post.
  themeColor:               # Hex color value, used in meta tags, default "#ffffff".

  podcast:
    title:                  # * Feed title, defaults to site title (iTunes).
    description:            # * Feed description/summary, defaults to  site description (iTunes).
    image:                  # * Feed image, place inside assets directory (iTunes).
    category:
      name:                 # * Feed category (iTunes).
      subcategories: []     # Feed sub category (iTunes).
    explicit: false/true    # Feed explicit settting, default to false (iTunes).
    author:                 # Feed author (iTunes).
    owner:
      name:                 # Feed owner name (iTunes).
      email:                # Feed owner e-mail (iTunes).
    lang:                   # Feed language, defaults to site language (iTunes).
    block: no/yes           # Block the feed from iTunes, default to no (iTunes).
    complete: no/yes        # Set the feed as complete, defaults to no (iTunes).
    type: episodic/serial   # Podcast type, defaults to episodic (iTunes).
    newfeed:                # Are you moving? Set the new feed url here (iTunes).
    cdn:                    # CDN url, no slash on end (https://cdn.example.org).
    local: false            # Are the audio files local (true) or remote (false), default to true.
    preload: none/metadata/auto # Set on the HTML5 audio tag, defaults to "metadata".
```

The site will work without setting any of the podcast parameters but your podcast feed will not be accepted by iTunes. At a minimum you need to set the first four, title, description, image and category name. Read more in the podcast section below.


## Customise


### Front page

This is a part that almost everyone will like to customise in some manner. The template file is `layouts/index.html`. By default it will include any text you put in `content/_index.md` and below that list the posts in "mainSections" as summaries.

If you do not specify any sections in the "mainSections" param (see configuration above) it will list the section with the most posts. If you do not want to list anything, set it but leave the value empty.


### Colours and variables

This is another part that almost everyone will like to customise.

They are found in the `assets/sass/init/_colors.scss` and `assets/sass/init/_variables.scss` files. Copy them to the root `assets/sass/init/` directory to set your own values.


### Logo

Place your logo at `static/images/logo.png`. If you don't provide a logo, then the default theme logo will be used.


### Favicons

Upload your image to [RealFaviconGenerator](https://realfavicongenerator.net/) then copy-paste the generated favicon files under `static`.

Then set the "realfavicongenerator" param to true to add the needed meta tags. Also good to set the "themeColor" param to correct colour.


### Layouts

To customise a layout included in the zen theme, copy it to the root layout directory and edit it there. Make sure to maintain the directory structure inside the layouts directory.

Add any new layouts to the root layout directory as well. This way they will not be overwritten when updating the theme.


#### Menu and sidebar layouts

If a Hugo main menu is defined (.Sites.Menu.main) the menu template will use it to build a navigation menu. If not, the template will automatically add entries for the home page, each root page and each section, in that order.

If the default sidebar is activated it will display each section with all its pages listed below.

They are set up in `layouts/partials/menu.html`, `layouts/partials/mobilmenu.html` and `layouts/partials/sidebar.html`.


### CSS grid for layout

Modern CSS grid is the easiest and cleanest way to layout your pages.

The CSS grid layout are in `assets/sass/layouts/_layouts.scss`. A lot can be done by just reordering "grid-template-rows".


### Other styles and scripts

Styles and scripts are processed with Hugo pipes that was added in Hugo 0.46.

To customise a js or sass file, copy it to the root assets directory and edit it there. Make sure to maintain the directory structure inside the assets/sass directory.

There is an `assets/sass/_custom.scss` file meant for your custom styles. Copy it to the root `assets/sass/_custom.scss` to use it.

The default styles in `assets/sass/_zen.scss` are boring but functional. You can easily overide them completely by placing an empty file named "_zen.scss" in root assets/sass directory.

The sass files are by default built for production, compressed with fingerprint.

By setting the Hugo environment variable to "development" (default when running `hugo server`) they will instead be nested with sourcemaps.


## Render hook templates

### Add anchor links to headers

An example render hook template for templates will add anchor links to all headers. To activate it copy the file `~/theme/zen/layouts/_default/_markup/render-heading.html.example` to `layouts/_default/_markup/render-heading.html`.

Needed styles are in the `_zen.scss` file.


## Multilingual

Arabic, Finnish, English, Hebrew, French, German, Norwegian, Portugis and Swedish translations are included and you can easily add more to the `i18n` site directory. All but English and Swedish are contributed by users, thanks!

A language selector will be included on sites with more than one language. Add `languageName` to your language configuration, this is what will be displayed in the selector.

The language selector will link to a translation of the current page if it exist and to the front page if it does not.

For "rtl" languages add a `languageDirection` parameter to the language configuration. If not added it will default to "ltr".

Add a `languageCode` parameter to each language as well, that is used to set the correct language attribute in the `html` tag and in feeds. The root `languageCode` is then not needed. If not set the language key (e.g. "en") will be used.

```
languages:
  sv:
    weight: 1
    languageName: "Svenska"
    languageCode: "sv-SE"
  en:
    weight: 2
    languageName: "English"
    languageCode: "en-GB"
  ar:
    weight: 3
    languageName: "العربية"
    languageDirection: "rtl"
    languageCode: "ar"
```


## Search

Built in integration with the excellent [FlexSearch.js](https://github.com/nextapps-de/flexsearch). A fast full text search that reads a JSON file created by Hugo to index and search the site.

Here is the three steps needed to create a search page.

1. Add a new output format in your configuration file.
    ```
    outputFormats:
      SearchIndex:
        mediaType: "application/json"
        baseName: "searchindex"
        isPlainText: true
        notAlternative: true
    ```
2. Add the new output format to output setting for "home".
    ```
    outputs:
      home: ["HTML", "SearchIndex", "[other formats you need]"]
    ```
3. Add the shortcode `{{< search >}}` to a page. The search and flexsearch js files gets loaded automatically on pages that use the shortcode.

Your search page will now have a search field where all the posts of the site can be searched.

The only setting is "searchLimit" that defaults to 20.


## Contact form

If your server support php with the mail() command (very common) you can use the included contact form feature to get a contact form for your site.

1. Copy the file `themes/zen/php/contact.php.example` to `static/php/contact.php`.
2. Edit the contact.php file so it has your own e-mail address. You may also change the mail subject prefix.
3. Add the shortcode `{{< contact >}}` to a page. The contact.js file gets loaded automatically on pages that use the shortcode.

If you have a SPF record for your domain, make sure the web server is listed or other mail server may mark the mail as spam.

Two types of spam protection is implemented. The form can only be posted after the user have moved the mouse or pressed the tab or enter key. The form have a "honypot" field that is invisible to humans but not to most spam boots. If that field is filled in the mail will not be sent.

Form validation is handled by HTML5 and there is some CSS to make it look nice.

Javascript is used for spam protection and to display error/success messages.

## Cookie consent

Allow users to opt-in to tracking. Matomo and Google analytic are supported out of the box.

See `assets/js/tracking.js` for example how to implement it.

The name of the cookie set is "cookieconsent" and it can have the values "accept" or "decline" depending on what button the visitor clicks.

![Lighthouse report](https://raw.githubusercontent.com/frjo/hugo-theme-zen/main/images/cookieconsent.png)


## Dates

If "lastmod" is set in the frontmatter on a post that value will be used in the "submitted" section. If not, "date" is used.

With "lastmod" set a date section will also appear at the bottom of post telling the reader the created and modification dates.


## Podcast

The Zen theme supports podcasting.

* RSS feed with all the needed iTunes tags.
* Single and full layouts with HTML 5 audio player.
* Archetype with required parameters.

Here follow all the possible podcast frontmatter parameters. Only the first two is mandatory and are in the podcast archetype.

```
podcast:
    mp3:                    # * The path to the mp3 file, 
    duration:               # * Episode duration, e.g 1:04:02 (iTunes).
    image:
        src:                # Episode image src, place inside the assets directory (iTunes).
        alt:                # Alt text for the image, explain what is on the image.
        width:              # Image width in the article, defaults to 250px.
        class:              # Image wrapper class.
    explicit: true/false    # Episode explicit setting, default to false (iTunes).
    episode:                # Episode number (iTunes).
    episodeType: full/trailer/bonus # Episode type, defaults to full (iTunes).
    season:                 # Episode season (iTunes).
    block:                  # Block the episode from iTunes, default to no (iTunes).
```

* [Apple Podcasts categories](https://help.apple.com/itc/podcasts_connect/#/itc9267a2f12)
* [Apple - A podcaster’s guide to RSS](https://help.apple.com/itc/podcasts_connect/#/itcb54353390)


## Shortcodes

### Audio and Video

```
{{< audio src="/audio/audio.mp3" class="something" >}}

{{< video src="/video/video.mp4" class="something" >}}
```

Possible parameters are:

* src
* class
* preload (none/metadata/auto, default metadata)
* width (only video)

The audio and video tags will be wrapped with a figure tag.


### Clear

Break float.

```
{{< figure src="/images/image.jpg" class="right" >}}

blablabla # Displayed left of the image.

{{< clear >}}

blablabla # Displayed below of the image.
```


### Contact

Insert a html5 contact form, [see more above](#contact-form).

```
{{< contact >}}
```


### Figure and Img

Zen comes with a improved version of the built in "figure" shortcut and a very similar "img" shortcode.

```
{{< figure src="/images/image.jpg" alt="Example image." caption="Lorem ipsum dolor sit amet." >}}

{{< img src="/images/image.jpg" alt="Example image." size="600x" >}}
```


Possible parameters are:

* alt
* attr (only figure)
* attrlink (only figure)
* caption (only figure)
* class
* height
* link
* size (only works if image is inside /assets dir)
* src
* title (only figure)
* width

Only "src" is none optional but you really should set "alt" as well.

* If the images is inside the /assets dir and "size" is set the shortcode will use the resize command.
* You can set a max width for images with parameter "imageMaxWidth". Only used for images where size, width and height is not set.
* If width and height is not set the real dimensions of the image will be used.
* If only width or only height is set the other value will be proportionally calculated.


### File

Creates a link to a file in static or in assets directory.

Possible parameters are:

* class
* newtab (default false)
* src
* text


### Search

Creates a search page for the site, [see more above](#search).

```
{{< search >}}
```


### Wrapper

A simple, but useful, shortcode to wrap content in a div with a class. The content will be run through "markdownify".

```
{{< wrapper class-name-you-want >}}
The **content** that should be wrapped.

Some more content.
{{< /wrapper >}}
```

This will produce:

```
<div class="class-name-you-want">
<p>The <strong>content</strong> that should be wrapped.</p>

<p>Some more content.</p>
</div>
```

If the content should be left untouched add "nomarkdown" after the class name.

```
{{< wrapper class-name-you-want nomarkdown >}}
The **content** that should be wrapped.

Some more content.
{{< /wrapper >}}
```

This will produce:

```
<div class="class-name-you-want">
The **content** that should be wrapped. Some more content.
</div>
```


## Content security policy headers

Includes tracking code for Matomo or Google in a way that supports Content security policy headers. Read more in my blog post [Content security policy headers when using Matomo or Google analytics](https://xdeb.org/post/2020/01/14/content-security-policy-headers-when-using-matomo-or-google-analytics/).

## Choose between using jQuery or Umbrella JS

[Umbrella JS](https://umbrellajs.com/) (a tiny jQuery replacement) is always added and it's used for all theme JavaScript. To add jQuery, set the related parameter to true in the configuration file or in the front matter of specific pages. No problem having both libraries loaded on the same page.

This is the way I construct my JavaScript files.

**Umbrella JS:**

```
(function ($) {

  'use strict';

  // Add your code here.
  $('html').removeClass('nojs').addClass('js');

})(u);
```

**jQuery:**

```
(function ($) {

  'use strict';

  // Add your code here.
  $('html').removeClass('nojs').addClass('js');

})(jQuery);
```


## Use npm to lint Sass and JavaScript

* Lint your Sass using stylelint.
* Lint your JavaScript using eslint.
* Can lint files in the theme as well as the project assets directory.

Set up your front-end development build tools:

1. Install Node.js and npm, the Node.js package manager.
2. The package.json file in your new sub-theme contains the versions of all the
Node.js software you need. To install them run:

        npm install

3. Run the following commands to lint your theme and projects Sass and JavaScript code.

        npm run lint-theme
        npm run lint-project
        nmp run lint (project + theme)


## Getting help

If you run into an issue that isn't answered by this documentation or the [`exampleSite`](https://github.com/frjo/hugo-theme-zen/tree/main/exampleSite), then visit the [Hugo forum](https://discourse.gohugo.io/). The folks there are helpful and friendly. **Before** asking your question, be sure to read the [requesting help guidelines](https://discourse.gohugo.io/t/requesting-help/9132). Feel free to tag me in your question, my forum username is [@frjo](https://discourse.gohugo.io/u/frjo/summary).


## Credits

This is originally a port of the [Zen](https://www.drupal.org/project/zen) theme by [JohnAlbin](https://www.drupal.org/u/johnalbin), a very popular base theme for Drupal.

Thanks to the [Cupper Hugo theme](https://github.com/zwbetz-gh/cupper-hugo-theme/) for a really good Readme, have copied a lot from it.

Icons from [tabler/tabler-icons: A set of over 850 free MIT-licensed high-quality SVG icons for you to use in your web projects.](https://github.com/tabler/tabler-icons) and [Language Icon](http://www.languageicon.org/).
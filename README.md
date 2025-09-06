# The Hugo Zen theme

**Zen** theme strives to be as clean and standard compliant as possible with some neat features. A solid base for your custom [Hugo](https://gohugo.io/) theme.

It uses HTML5 with a modern CSS grid and flex layout. Care has been taken to produce semantic and accessible code.

![Lighthouse report](https://raw.githubusercontent.com/frjo/hugo-theme-zen/main/images/lighthouse_report.png)


## Demo site

Take a look at the [Zen demo site](https://zen-demo.xdeb.org/) ([GitHub](https://github.com/frjo/zen-demo)).

## Quickstart

Quickstart a new site with the Zen theme by using the [Zen demo repo as a template](https://github.com/frjo/zen-demo/generate).


## Table of contents

* [Version 5.x](#version-5x)
* [Version 4.x](#version-4x)
* [Version 3.x](#version-3x)
* [Version 2.x](#version-2x)
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
* [Use npm to lint Sass and JavaScript](#use-npm-to-lint-sass-and-javascript)
* [Repository links](#repository-links)
* [Math typesetting with KaTeX](#math-typesetting-with-katex)
* [Getting help](#getting-help)
* [Credits](#credits)


## Version 5.x

* Minimum Hugo version is now v0.146.0. This plus the rearranged variables are the reasons for making this v5.
* Rearranged a lot of variables. This will require some work to upgrade if you have customisations. I'm working towards using vanilla css only.
* Using the new template structure introduced in v0.146.0. If you have overridden templates you will need to use the same structure in your root layout directory.
* Colours are now set directly as css variables. You no longer need to override `_colors.scss`, instead override select colours in `_custom.scss`. This simplification was the main motivation for v5.
* Homepage/frontpage template renamed from `index.html` to `home.html`.
* Converted most sass settings in to pure css variables.
* Split sass and css settings it to separate files.
* The "respond-to" mixin is deprecated in v5, use css @media directly instead.
* jQuery/umbrella js is  deprecated in v5, use alpinejs or vanilljs instead.
* No other significant changes.

### Upgrade to 5.x

1. Make sure you are using Hugo v0.146.0 or later both in development and for deployment.
2. Remove your projects `_colors.scss`, take note of the colours you have changed.
3. Override colours and other css variables in projects `_custom.scss`.
4. Update/remove/convert variables you overridden in projects `_extra.scss` so they match changes in themes `_variables.scss` and `_sass_variables.scss`.
5. If you have overridden templates you will need to use the new template structure in your root layout directory.

## Version 4.x

* Minimum Hugo version is now v0.124.0. This is the reason for making this v4.
* Updated a number of things to remove all "WARN  deprecated".
* No other significant changes.


## Version 3.x

* Implement modern CSS like flex, grid and variables throughout.
* All sass variables now have a css variable version. All styles use the css variable version.
* Defaults to a System-ui font stack (like GitHub and Stack overflow among others).
* New setting `params.internalPagination` to use the Hugo built in pagination template instead of the plain Zen version.
* New setting `params.sassTranspiler`. Defaults to "libsass" but "dartsass" is also supported.
* Split sass "reset" dir into "base" dir and pure "reset" file.
* Added margin top/bottom/block classes, mt--m/mb--m/mx--m, for all "spacing" variables.
* New sass components:
    * cards
    * center
    * disabled
    * flex-group
    * flex-inline
    * footer
    * grid-group
    * grid-stack
    * icon-inline
    * meta
    * spacing
    * stretch
    * tags
* Remove all use of "typey" lib.
* Remove unused/outdated components.
* Only a few small changes to templates.


### Upgrade to 3.x

1. Update your projects `_colors.scss` to add the new colours.
2. Update overridden variables in projects `_extra.scss` so they match changes in themes `_variables.scss`.
3. Replace `@include font-size(s);` with `font-size: var(--fs-s);` etc.
4. Replace `@include typeface(headings);` with `font-family: var(--ff-headings);` etc.
5. Replace sass variables with css variables, e.g. `$zen-gutters` with `var(--gutters)`.


## Version 2.x

* Replaced "normalize" with slimmer and updated "reset". Removed everything for old IE versions.
* Use of css4 variables. Colours are now used like this `var(--color-brand)`.
* The colours, fonts and variables sass files are now in the root sass directory.
* Use `site` instead of `.Site` and `$.Site`.
* Use a default line-height of unitless 1.5. For headers it is set to 1.3.
* Added `_extra.scss` where variables can be overridden.
* The zen-gutters variable is now a calculated value based on window width.
* Added max-line-width for readability, default to 70ch.
* New shortcodes: button, svg, reflink and details.


## Features

* A mobile menu
* AlpineJS 3
* Analytics with Matomo (Piwik)
* Cookie consent
* Commands for linting of css and js
* Contact form (PHP)
* CSS grid and flex throughout
* HTML5
* Hugo Pipes for images, js and sass
* Math typesetting with KaTeX
* Micro.blog
* Meta tags and JSON-LD
* Multilingual (i18n)
* Modern CSS reset
* Podcast
* Responsive design
* RSS and JSON feeds with full content
* Search with FlexSearch.js


## Minimum Hugo version

Hugo Extended version 0.146.0 or higher is required.


## Installation

### Hugo module

You need to have `go` installed to use Hugo modules.

Turn your new or existing site into a hugo module.

From the root of your site:

```shell
hugo mod init github.com/me/my-site
```

Then set the "theme" setting to "github.com/frjo/hugo-theme-zen/v5".

From the root of your site:

```shell
hugo mod get -u
```

### Git clone

You can download and unpack the theme manually from Github but it's easier to use git to clone the repo.

From the root of your site:

```shell
git clone https://github.com/frjo/hugo-theme-zen.git themes/zen
```

Then set the "theme" setting to "zen".

### Git submodule

If you use git to version control your site you can add the zen theme as a submodule.

From the root of your site:

```shell
git submodule add https://github.com/frjo/hugo-theme-zen.git themes/zen
```

Then set the "theme" setting to "zen".

## Updating

### Hugo module

From the root of your site:

```shell
hugo mod get -u
```

### Git submodule

From the root of your site:

```shell
git submodule update --remote --merge
```


## Run example site

From the root of `themes/zen/exampleSite`:

```shell
hugo server --themesDir ../..
```


## Performance

Performance should be excellent.

* Minimal and compliant HTML5
* Styles 23,2 kB (6,7 kB when gzipped)
* JavaScript 1 kB (with only mobile menu active, 4 Kb with all features active)
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

![screenshot](https://raw.githubusercontent.com/frjo/hugo-theme-zen/main/images/tn.png)


## Configuration

Configurations parameters for the sites config file, in yaml format. All the "params" are optional.

```yaml
baseurl: "https://example.org/"
title: "SiteTitle"
theme: "zen"
languageCode: "en-GB"       # Set your language code (only needed for none multilingual sites).

params:
  alpine: true              # Add AlpineJS, default false.
  author:
    name:                   # Your Name
    url:                    # https://example.org/somepage
    avatar:                 # path/to/some-image.jpg
  blogSections:             # Sections whose <schema.org> `JSON+LD` in the page `<head>`
    - blog                  # will be `@type: BlogPosting`.
    - post                  # Defaults to a list including only 'post' and 'blog'.
  breadcrumbSections:       # Sections in which pages will have a `BreadcrumbListing`
    - section2              # in the <schema.org> `JSON+LD` in the page's `<head>`.
    - section3              # This theme requires Hugo `v0.109.0` or higher to
                            # generate the `BreadcrumbListing`.
  cookieConsent: true       # Show cookie consent form, default false.
  contact: "info@example.org"
  dateformat: ""            # Set the date format, default to "2 January, 2006"
  description: ""           # Set site description, used in meta tags and JSON-LD
  favicon: ""               # Relative path to favicon in json feed, no leading slash.
  feedlinks: true           # Show feed links in the footer.
  footer: "A [example.org](https://example.org/) production."
  icon: ""                  # Relative path to icon in json feed and JSON-LD, no leading slash.
  image: ""                 # Relative path to site image in JSON-LD, no leading slash.
  imageMaxWidth: ""         # Max width for images added via figure shortcode.
  internalPagination: true  # Use Hugo's internal pagination template, default false.
  jquery: true              # Add jQuery, default false.
  languageDir: ""           # Set ltr or rtl, defaults to ltr.
  logo: false               # Turn off the logo, defaults to true.
  logoPath:                 # Relative path to site logo, defaults to "images/logo.png", no leading slash.
  logoHeight:               # Set logo height, defaults to none.
  logoWidth:                # Set logo width, defaults to none.
  mainSections:             # The sections you want to have listed on the front page.
    - "section1"            # Default to the section with most content if not set.
    - "section2"            # Set to empty if no section should be listed.
  math: true                # Turn on math typesetting with KaTeX, default false.
  menuInHeader: true        # Move the main menu to the header, default false.
  microUsername: ""         # Your micro.blog username.
  mobileMenu: true          # Turn on a mobile menu on small screens, default false.
  mobileMenuOutline: true   # Mobil menu button as outline, default false.
  piwikSiteId:              # Matomo site id
  piwikTrackerUrl: ""       # Matomo url, schemaless and no slash on end (example.org/matomo).
  plausibleSiteID: ""       # Plausible site id/domain.
  plausibleTrackerURL: ""   # Plausible url, schemaless and no slash on end. Optional, defaults to "plausible.io/…"
  poweredby: true           # Show powered by hugo in footer
  privacyPolicyUrl: ""      # If set will add link to cookie consent form.
  relatedposts: true        # Show related posts under a "See also" section, default false.
  sassTranspiler: "dartsass"# The Sass transpiler to use, default "libsass".
  searchLimit: 20           # Max number of search hits, default 20.
  sidebar: true             # Show a sidebar to the right, default false.
  siteName: false           # Hide the site name (visually-hidden), default true.
  submitted: true           # Show author and date information for a post.
  themeColor:               # Hex color value, used in meta tags, default "#ffffff".
  umbrella: true            # Add Umbrella JS, default false.

  podcast:
    title:                  # * Feed title, defaults to site title (iTunes).
    description:            # * Feed description/summary, defaults to  site description (iTunes).
    image:                  # * Feed image, place inside assets directory (iTunes).
    category:
      name:                 # * Feed category (iTunes).
      subcategories: []     # Feed sub category (iTunes).
    explicit: false/true    # Feed explicit setting, default to false (iTunes).
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

They are found in the theme `assets/sass/_colors.scss`, `assets/sass/_variables.scss` and `assets/sass/_sass_variables.scss` files. You can copy them to the root `assets/sass/` directory to set your own values. 

In most cases you likely only need to override a few values and then it is easier to set these in the extra and custom sass files.

Root `assets/sass/_extra.scss`: Loaded first so use to override sass variables only.

Root `assets/sass/_custom.scss`: Loaded last so use to override css variables and add any custom styles you need.


### Logo

Place your logo at `static/images/logo.png`. If you don't provide a logo, then the default theme logo will be used.

There are also setting to set a custom `logoPath` as well as setting logo width and height.

### Favicons

Upload your image to [RealFaviconGenerator](https://realfavicongenerator.net/) then copy the generated favicon files in to the `static` directory. (Do not place them in a sub directory.)

The theme will autodetect them and add the needed code.


### Head and footer partials

If you create partials named `head/extra.html` and/or `footer.html` they will be used. They do not exist or are empty in the theme but are supported as a convenience.

Content in the "head/extra" partial will be added to the end of the "head" tag, perhaps some extra css or javascript.

Content in the "footer" partial will replace all the default content in the "footer" tag.


### Layouts

To customise a layout included in the zen theme, copy it to the root layout directory and edit it there. Make sure to maintain the directory structure inside the layouts directory.

Add any new layouts to the root layout directory as well. This way they will not be overwritten when updating the theme.


#### Menu and sidebar layouts

If a Hugo main menu is defined (.Sites.Menu.main) the menu template will use it to build a navigation menu.

If the default sidebar is activated it will display each section with all its pages listed below.

They are set up in `layouts/partials/menu.html`, `layouts/partials/mobilmenu.html` and `layouts/partials/sidebar.html`.


### CSS grid for layout

Modern CSS grid is the easiest and cleanest way to layout your pages.

The CSS grid layout are in `assets/sass/layouts/_layouts.scss`. A lot can be done by just reordering "grid-template-rows".


### Other styles and scripts

Styles and scripts are processed with Hugo pipes that was added in Hugo 0.46.

To customise a js or sass file, copy it to the root assets directory and edit it there. Make sure to maintain the directory structure inside the assets/sass directory.

There is an `assets/sass/_custom.scss` file meant for your custom styles. Copy it to the root `assets/sass/_custom.scss` to use it.

The default styles in `assets/sass/_zen.scss` are boring but functional. You can easily override them completely by placing an empty file named "_zen.scss" in root assets/sass directory.

The sass files are by default built for production, compressed with fingerprint.

By setting the Hugo environment variable to "development" (default when running `hugo server`) they will instead be nested with sourcemaps.


## Render hook templates

### Add anchor links to headings

Example render hook template for headings that will add anchor links. To activate it copy the file `~/theme/zen/layouts/markup_examples/render-heading.html` to `layouts/_markup/render-heading.html`.

### Process Markdown images

Example render hook that process images in the same way as the "img" shortcode. See top of the file for settings to adjust it to your needs. To activate it copy the file `~/theme/zen/layouts/_markup/render-image.html` to `layouts/_markup/render-image.html`.

### Make external links open in a new tab.

Example render hook to rewrite external links so they open in a new tab. To activate it copy the file `~/theme/zen/layouts/markup_examples/render-link.html` to `layouts/_markup/render-link.html`.

I rarely use this one, I think the user should decide how links open.

### Add "Copy code" button to codeblocks.

Example render hook to "Copy code" buttons to codeblocks". To activate it copy the file `~/theme/zen/layouts/markup_examples/render-codeblock.html` to `layouts/_markup/render-codeblock.html`.


## Multilingual

A language selector will be included on sites with more than one language. Add `languageName` to your language configuration, this is what will be displayed in the selector.

The language selector will link to a translation of the current page if it exist and to the front page if it does not.

For "rtl" languages add a `languageDirection` parameter to the language configuration. If not added it will default to "ltr".

Add a `languageCode` parameter to each language as well, that is used to set the correct language attribute in the `html` tag and in feeds. The root `languageCode` is then not needed. If not set the language key (e.g. "en") will be used.

```yaml
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

The Zen theme templates has some strings that needs translation, e.g. "Home" and "Menu". Many translations are included and you can easily add more to the `i18n` site directory. All but English and Swedish are contributed by users, thanks!

* Arabic
* Danish
* English
* Finnish
* French
* German
* Hebrew
* Indonesian
* Norwegian
* Portuguese
* Serbian
* Swahili
* Swedish


### Non English site

If you want to have a site in another language than English but do not need multiple languages the following settings are needed.

Set `defaultContentLanguage` to your language code, otherwise it will default to "en" . Also set `languageCode` so browsers are informed of what language the site is in.

Here how it looks for a site in Swedish.

```yaml
languageCode: "sv-SE"
defaultContentLanguage: "sv"
```


## Search

Built in integration with the excellent [FlexSearch.js](https://github.com/nextapps-de/flexsearch). A fast full text search that reads a JSON file created by Hugo to index and search the site.

Here is the three steps needed to create a search page.

1. Add a new output format in your configuration file.
    ```yaml
    outputFormats:
      SearchIndex:
        mediaType: "application/json"
        baseName: "searchindex"
        isPlainText: true
        notAlternative: true
    ```
2. Add the new output format to output setting for "home".
    ```yaml
    outputs:
      home: ["HTML", "SearchIndex", "[other formats you need]"]
    ```
3. Add the shortcode `{{< search >}}` to a page. The search and flexsearch js files gets loaded automatically on pages that use the shortcode.

Your search page will now have a search field where all the posts of the site can be searched.

The only setting is "searchLimit" that defaults to 20.


## Contact form

If your server support php with the mail() command (very common) you can use the included contact form feature to get a contact form for your site.

1. Copy the file `themes/zen/php/contact.php` to `static/php/contact.php`.
2. Edit the contact.php file so it has your own e-mail address. You may also change the mail subject prefix.
3. Add the shortcode `{{< contact >}}` to a page. The contact.js file gets loaded automatically on pages that use the shortcode.

If you have a SPF record for your domain, make sure the web server is listed or other mail server may mark the mail as spam.

Two types of spam protection are implemented. The form can only be posted after the user moved the mouse or pressed the tab or enter key. The form has a "honeypot" field that is invisible to humans but not to most spam boots. If that field is filled in the mail will not be sent.

Form validation is handled by HTML5 and there is some CSS to make it look nice.

Javascript is used for spam protection and to display error/success messages.


## Cookie consent

Allow users to opt-in to tracking. Matomo and Google analytic are supported out of the box.

Set `cookieConsent` param to true to activate. Also set `privacyPolicyUrl` to include a link to your privacy policy in the cookieconsent dialog.

See `assets/js/tracking.js` for example how to implement it for other cookies.

The users choice is stored in localStorage item "cookieconsent".

It it recommended to add a link or button to allow users to change their choice. Adding the class "clearcookieconsent" is all that is needed.

```html
<button class="button clearcookieconsent">Cookie settings</button>
<a href="#" class="clearcookieconsent">Cookie settings</a>
```

When a user clicks the button/link the localStorage item "cookieconsent" is cleared and the cookieconsent dialog is shown again.

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

```yaml
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

Support for files in global assets directory, static directory and page resources.

```
{{< audio src="/audio/audio.mp3" class="something" >}}

{{< video src="/video/video.mp4" poster="/images/poster.jpeg" class="something" >}}
```

Possible parameters are:

* autoplay (only video)
* caption
* class
* loop (only video)
* poster (only video)
* preload (none/metadata/auto, default metadata)
* src
* width (only video)

The audio and video tags will be wrapped with a figure tag.


### Button

Creates a link with the class "button". If "newtab" is true the link will open in a new tab.

Possible parameters are:

* class
* newtab
* src
* text


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

### Details and Summary

Insert a html5 contact form, [see more above](#contact-form).

```
{{< details summary="The summary text here" >}}
The details text here.

It can be long and **contain** markdown.
{{< /details >}}
```

Possible parameters are:

* class
* summary


### Figure and Img

Zen comes with a improved version of the built in "figure" shortcut and a very similar "img" shortcode. Support for images in global assets directory, static directory and page resources.

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
* size (not for images in static directory)
* srcset (not for images in static directory)
* src
* title (only figure)
* width

Only "src" is none optional but you really should set "alt" as well.

* You can set a max width for images with parameter "imageMaxWidth". Only used for images where size, width and height is not set.
* If width and height is not set the real dimensions of the image will be used.
* If only width or only height is set the other value will be proportionally calculated.


### File

Creates a link to a file in global assets directory, static directory and page resources.

Possible parameters are:

* class
* newtab (default false)
* src
* text


### Reflink

Creates a link to an internal page.

```
{{< reflink "some-page.md" >}}
```

This will output:

```html
<a href="/path/to/page/">The title of the page</a>
```


### SVG

SVG shortcode with inline support. Support for images in global assets directory, static directory and page resources.

```
{{< svg src="/images/image.svg" alt="Example image." caption="Lorem ipsum dolor sit amet." >}}

{{< img src="/images/image.svg" inline="true" >}}
```

Possible parameters are:

* alt (not for inline)
* caption
* class
* height (not for inline)
* inline
* link
* src
* width (not for inline)


### Search

Add a search form for the site, [see more above](#search).

```
{{< search >}}
```


### Wrapper

A simple, but useful, shortcode to wrap content in a div with a class. The content can use markdown.

```
{{< wrapper class-name-you-want >}}
The **content** that should be wrapped.

Some more content.
{{< /wrapper >}}
```

This will produce:

```html
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

```html
<div class="class-name-you-want">
The **content** that should be wrapped. Some more content.
</div>
```


## Content security policy headers

Includes tracking code for Matomo or Google in a way that supports Content security policy headers. Read more in my blog post [Content security policy headers when using Matomo or Google analytics](https://xdeb.org/post/2020/01/14/content-security-policy-headers-when-using-matomo-or-google-analytics/).


## Use npm to lint Sass and JavaScript

* Lint your Sass using stylelint.
* Lint your JavaScript using biome.
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


## Repository links

Add view and edit repo links on your post. Activates when you add repository settings, see example for GitHub below. See more in the partial `repository-links.html`.

```yaml
repository:
    branch: "main"
    owner: "kalle"
    repo: "myhugowebsite"
    urlPatternEdit: "https://github.com/%s/%s/edit/%s/%s"
    urlPatternView: "https://github.com/%s/%s/blob/%s/%s"
```

Copied from example by [jmooring](https://discourse.gohugo.io/t/hugo-v0-112-0-new-template-functions/44512)


## Math typesetting with KaTeX

Download the latest release from <https://github.com/KaTeX/KaTeX/releases>. Unpack and place the resulting "katex" directory in the root `static` directory.

The resulting path should be `static/katex`. Then set the `math` param to "true" and write some math to be typeset.

Wrap inline math in single "$":

~~~~
Lorem $E=mc^2$ ipsum
~~~~

and block math in double "$$":

~~~~
$$
[ \int_0^1 \frac{dx}{e^x} =  \frac{e-1}{e} ]
$$
~~~~

Markdown rendering will in some instances mess with the math. To avoid this use the math shortcode for inline math:

~~~~
Lorem {{< math >}}E=mc^2{{< /math >}} ipsum
~~~~

 and math codeblocks for block math:

`~~~~ math`  
`[ \int_0^1 \frac{dx}{e^x} =  \frac{e-1}{e} ]`  
`~~~~`


## Getting help

If you run into an issue that isn't answered by this documentation or the [`exampleSite`](https://github.com/frjo/hugo-theme-zen/tree/main/exampleSite), then visit the [Hugo forum](https://discourse.gohugo.io/). The folks there are helpful and friendly. **Before** asking your question, be sure to read the [requesting help guidelines](https://discourse.gohugo.io/t/requesting-help/9132). Feel free to tag me in your question, my forum username is [@frjo](https://discourse.gohugo.io/u/frjo/summary).


## Credits

This is originally a port of the [Zen](https://www.drupal.org/project/zen) theme by [JohnAlbin](https://www.drupal.org/u/johnalbin), a very popular base theme for Drupal.

Thanks to the [Cupper Hugo theme](https://github.com/zwbetz-gh/cupper-hugo-theme/) for a really good Readme, have copied a lot from it.

Icons from [tabler/tabler-icons: A set of over 850 free MIT-licensed high-quality SVG icons for you to use in your web projects.](https://github.com/tabler/tabler-icons) and [Language Icon](http://www.languageicon.org/).

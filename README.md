# wojtas.it

Personal portfolio site for Filip Wojtasinski, deployed with GitHub Pages at
wojtas.it. Plain HTML, CSS, and JavaScript, no framework and no build step.

## Structure

```
index.html       page structure
css/style.css     all styling
js/main.js        language switching, filters, and rendering of the project grid
content.js        all editable text and project data, in pl / en / de
assets/img/       one cover image per project
CNAME             GitHub Pages custom domain
```

## Editing content

Everything a recruiter reads lives in `content.js`. Layout code should not
need to change for a text edit.

- `ui.<lang>` holds every UI string (nav labels, filter labels, section
  headings, button text, and so on) for a given language.
- `intro` and `about` hold the two lead paragraphs, one string per language.
- `projects` is an array of project entries. Each has a `name`, `categories`
  (used by the filter buttons), `repo` and `demo` links, an `image` path, and
  `hook` / `description` / `imageAlt`, each an object with `en`, `pl`, and
  `de` strings.
- `contact` holds the email, phone, LinkedIn, and GitHub values shown in the
  contact section.

To change wording, find the string in `content.js` and edit it directly. To
add a project, copy an existing entry in the `projects` array, give it a new
`id` and the next `index` number, add a cover image under `assets/img/`, and
fill in the fields. To add a new filter category, add an entry to the
`categories` array and matching `filterX` keys under `ui.<lang>`.

## Adding German

The `de` language is wired up end to end (language switcher, storage,
rendering) but the strings themselves are placeholders (empty strings).
Reading through `content.js`, fill in every `de: ""` with a German
translation, matching the tone of the `en` string next to it. No other file
needs to change. Once a `de` string is non-empty, it is used automatically
when the site is set to German. Fields left empty fall back to English.

## Setting the phone number and LinkedIn link

In `content.js`, under `contact`:

```js
contact: {
  email: "f.wojtasinski@gmail.com",
  phone: "",       // e.g. "+48 000 000 000"
  linkedin: "",     // e.g. "https://www.linkedin.com/in/..."
  github: "https://github.com/wojtas-it"
}
```

Both fields are hidden from the contact section until they are set. Fill
them in and they appear automatically, with `tel:` and profile links wired
up in `js/main.js`.

## Images

Cover images live in `assets/img/<project-id>/cover.jpg`. They were exported
from each project's own README screenshots, resized to a max dimension of
1000px and compressed as JPEG to keep the page light. Replace a cover image
by overwriting the file at the same path (any reasonably sized, compressed
image works, the layout crops to fit via `object-fit: cover`).

## Running locally

No build step. Open `index.html` directly in a browser, or serve the folder
with any static file server, for example:

```
npx serve .
```

## Deployment

The site is deployed with GitHub Pages from this repository's default
branch. `CNAME` points the custom domain wojtas.it at GitHub Pages; do not
remove it unless the domain configuration changes.

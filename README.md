# Beverly’s portfolio

Welcome to my website!!!

## Where to edit

| File or folder | What it controls |
| --- | --- |
| `index.html` | The page structure and connections to the other files |
| `styles.css` | Colours, fonts, spacing, and responsive layouts |
| `js/content.js` | Profile, projects, experience, and media |
| `js/app.js` | Navigation, search, filters, dialogs, and remaining page wording |
| `assets/images/` | Photos, portrait, banner, and thumbnails |
| `assets/videos/` | Video files |

**Start with `js/content.js`.** It contains `window.PORTFOLIO`, with five main sections: `profile`, `projects`, `experience`, `media`, and `about`. Most content changes only need this file.

## Add fun videos and photos

The Films & Photos section supports videos, photos, and project demos. Its filters let visitors browse **All**, **Videos**, **Photos**, or **Project demos**.

The initial content includes your supplied project demo links. No personal photos or travel videos have been invented or included. Add your own media whenever you are ready.

Put image files in `assets/images/` and video files in `assets/videos/`. Use simple filenames such as `mountain-morning.jpg`. Paths below are relative to `index.html`, even though you enter them inside `js/content.js`.

Copy one of these objects into the `media` array. **These filenames are examples: the pictured files are not included.** Replace them with files you add yourself.

### A photo

```js
{
  id: 'mountain-morning', // Choose a unique ID.
  type: 'photo',
  category: 'Personal',
  title: 'A morning outside', // Replace with your own title.
  description: 'A small moment worth remembering.',
  src: 'assets/images/mountain-morning.jpg', // Add this file or change the path.
  thumbnail: 'assets/images/mountain-morning.jpg',
  alt: 'Describe what is actually visible in your photograph.'
},
```

`alt` is a short description for someone who cannot see the photo. Write what is in your actual image.

### Your own MP4 video

```js
{
  id: 'weekend-film',
  type: 'video',
  category: 'Personal',
  title: 'A weekend away', // Replace with your own title.
  description: 'A short film from my camera roll.',
  src: 'assets/videos/weekend-film.mp4', // Example file: add your own MP4.
  thumbnail: 'assets/images/weekend-film.jpg', // Add your own cover image.
  alt: 'Describe your video cover image.'
},
```

Use a still from the video as its thumbnail. Large video files make the website slower to download; a YouTube link is another option.

### A YouTube video

```js
{
  id: 'my-youtube-video',
  type: 'video',
  category: 'Project demo',
  title: 'BuffBuddy demo',
  description: 'Team project demonstration.',
  url: 'https://youtu.be/lOtPP37NJ2o', // Existing supplied demo; replace for a new video.
  art: 'terminal' // Existing illustrated cover; an optional thumbnail can replace it.
},
```

That example uses the existing BuffBuddy link; do not add a duplicate unless you are deliberately making a second entry. For a personal video, replace the URL, title, and description, set `category: 'Personal'`, and add your own `thumbnail`. Copy an existing `art` value only when you want one of the built-in illustrated covers.

For each video, use either a local `src` or an external `url`. Each item needs its own unique `id`. Use `category: 'Project demo'` for engineering demonstrations and `category: 'Personal'` for your other videos and photos.

## Update your profile

In `profile`, edit `name`, `handle`, and `intro`. Optional fields include:

- `avatar`: path to your portrait, such as `assets/images/portrait.jpg`.
- `banner`: path to your banner image, such as `assets/images/banner.jpg`.
- `email`: your public email address.
- `linkedin`: the complete URL of your LinkedIn profile.

The image paths above are illustrative; add your own files first. Only enter contact details you want visitors to see. Keep unused optional fields blank and preserve the other existing profile settings.

## Edit your personal story

Use `about` in `content.js` to change the heading, introductory sentence, paragraphs, and interest tags. Other fixed wording, including education cards and some homepage text, is in `js/app.js`.

## Update projects and experience

Edit the existing objects in `projects` and `experience`. To add an entry, copy a similar one and replace its content. Keep dates, personal contributions, and team achievements accurate. Each project and experience needs its own unique `id`. Keep existing IDs unchanged when you reorder entries; homepage links use those IDs.

A project can use your own image:

```js
image: 'assets/images/my-project.jpg', // Add this image file first.
imageAlt: 'Describe the actual project photograph or screenshot.',
```

These are optional fields to add inside a project object. Keep its existing `art` value as an illustrated fallback when no custom image is set.

## Small editing tips

- Separate objects in an array with commas. Copying an existing entry is the easiest starting point.
- Keep text inside quotes. If your text contains an apostrophe, use double quotes around it, for example `title: "Beverly's weekend"`.
- Match filenames and capitalisation exactly. A missing image usually means its path does not match the file.
- After changes, try the page on a narrow browser window, open the edited project or media item, and check its links.
- Keep a backup before making larger changes. If you rearrange folders, update the paths that refer to them.

Photo cards open a full-size viewer with Previous/Next controls and keyboard arrows. Local videos play in a dialog; external video URLs open in a new tab. Adding files to a folder alone does not add them to the gallery: add a matching `media` entry too.

This is a static site: content is edited in code. A future admin editor, uploads from your browser, or visitor accounts would need additional services.

To publish later, upload the entire website folder to your static website host, with `index.html` at the site root. Opening or editing these files locally does not change your current live website.

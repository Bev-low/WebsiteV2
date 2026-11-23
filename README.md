# Beverly’s portfolio

Welcome to my website!!!

A fun way to showcase me, an engineer with creative passion!
Head over to https://www.beverlylow.site/

## Updating education and experience photos
The live site loads `js/content.js` and `js/app.js` directly. The older files in `js/data`, `js/pages`, and other subfolders are not loaded by `index.html`.

In `js/content.js`, add entries to `education.experiences[].photos` or the `photos` arrays for August Robotics, Bumblebee HornetX, and Pixta Vietnam:

```json
{"src":"assets/images/experiences/your-photo.jpg","alt":"Describe the photo","caption":"A short story about this moment"}
```

Copy the corresponding images into `assets/images/experiences/`. Empty arrays show intentional placeholders. Galleries support touch scrolling, keyboard scrolling, and previous/next buttons when multiple photos are present. Education cards open the full story.

Space Defenders uses the existing processor illustration until its `image` field and the matching media item's `thumbnail` are filled in. Project `video` fields create Watch demo links in the project dialog.

## Camera portrait and homepage work covers
Add your camera portrait as `assets/images/camera_images/Camera.jpg` (capital C). The Films & Photos hero loads it automatically; adjust `profile.filmPortrait` and `profile.filmPortraitAlt` in `js/content.js` to use a different filename or description. A portrait or square crop with space around your face and camera works well. The image fills its frame; adjust `.film-portrait > img.custom-cover` object-position in `css/recruiter-layout.css` if needed.

Homepage work cover slots load these filenames automatically:
- `assets/images/experiences/espressif-cover.jpg`
- `assets/images/experiences/august-robotics-cover.jpg`
- `assets/images/experiences/pixta-cover.jpg`

Landscape images work best. The `coverImage` and `coverAlt` fields on each experience can be edited. Missing images leave a labelled placeholder.

New visitors start in dark mode. The theme button saves their chosen light/dark preference.

The uploaded camera portrait now uses lowercase `camera.jpg`. Education photos are grouped into NUS, NTNU, GBA/Shenzhen (including GAB-Wutongshan), and Vietnam albums. August Robotics and HornetX photos appear in their experience galleries; Bluehouse photos appear in the cooling project dialog. Vietnam travel photos stay with the NOC education story, and the Pixta homepage card uses its logo. Exact filename capitalisation is preserved for deployment.

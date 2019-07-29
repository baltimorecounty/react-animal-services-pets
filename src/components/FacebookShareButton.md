Facebook share button that allows you to dynamically share an item on facebook. This method avoids having to have meta tags loaded on the page in order to share.

Note: This component requires an App to be created in order to use this button.

```js
<FacebookShareButton
  url="//baltimorecountymd.gov/pets/Rocky"
  title="Adopt Rocky, a six-year-old Mixed Breed recycling pup."
  description="Rocky is a six-year-old Mixed Breed recycling pup. He is a creative canine, has a thousand ideas..."
  text="Share Rocky on Facebook"
  thumbnail="/images/pets/Rocky"
/>
```

If you aren't using React you will need to render the following html and include `bc-social-media.js` in your site, app or page:

```html
<button
  class="facebook-share"
  data-url="//baltimorecountymd.gov/pets/Rocky"
  data-title="Adopt Rocky, a six-year-old Mixed Breed recycling pup."
  data-description="Rocky is a six-year-old Mixed Breed recycling pup. He is a creative canine, has a thousand ideas..."
  data-thumbnail="/images/pets/Rocky"
>
  Share Rocky on Facebook
</button>
```

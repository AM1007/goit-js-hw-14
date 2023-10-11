# goit-js-hw-14

### Task 1

Write a script that:

1. It will count and output to the console the number of categories in `ul#categories`, i.e. `li.item` elements.
2. For each element `li.item` in the list `ul#categories`, it will find and output to the console the text of the element's title (the `<h2>` tag) and the number of elements in the category (all `<li>` 's nested in it).

As a result, the following messages will be displayed in the console.

```js
Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5
```

---

### Task 2

The HTML contains an empty list of `ul#ingredients`.

```html
<ul id="ingredients"></ul>
```

JavaScript contains an array of strings.

```js
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
```

Write a script that for each element of the `ingredients` array:

1. Creates a separate `<li>` element. Be sure to use the `document.createElement()` method.
2. Will add the name of the ingredient as its text content.
3. Will add the `item` class to the element.
4. After that, it will insert all `<li>` in one operation into the `ul#ingredients` list.

### Task 3

Write a script to create a gallery and display an array of data on the display. HTML list ul.gallery.

---

### Task 3

Write a script to create a gallery and display an array of data on the display. HTML list `ul.gallery`.

```html
<ul class="gallery"></ul>
```

Use an array of images objects to create `<img>` elements nested within `<li>`. To create markup, use template lines and the `insertAdjacentHTML()` method.

```js
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
```

---

### Task 4

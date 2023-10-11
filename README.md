# goit-js-hw-14

### Task 1

Write a script that:

It will count and output to the console the number of categories in `ul#categories`, i.e. `li.item` elements.
For each element `li.item` in the list `ul#categories`, it will find and output to the console the text of the element's title (the `<h2>` tag) and the number of elements in the category (all `<li>` 's nested in it).

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

Creates a separate `<li>` element. Be sure to use the `document.createElement()` method.
Will add the name of the ingredient as its text content.
Will add the `item` class to the element.
After that, it will insert all `<li>` in one operation into the `ul#ingredients` list.

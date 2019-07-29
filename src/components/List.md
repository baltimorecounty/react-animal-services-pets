

```js
const books = [
	{
		Id: 1,
		Title: "The Great Gatsby"
	},
	{
		Id: 2,
		Title: "To Kill a Mockingbird"
	},

];

<List
	dataSource={books}
	renderItem={book => <p>{book.Title}</p>}
	itemKey="Id"
/>
```

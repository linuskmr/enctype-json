# JSON-support for HTML forms

This JS script adds the capability to HTML forms to natively send JSON data in a POST request instead of the typical `multipart/form-data`.


## Usage

Include the `enctype-json.js` script in your HTML.

```html
<script src="enctype-json.js" defer></script>
```

Use `enctype="application/json"` together with `method="POST"` in your form.

```html
<form method="POST" enctype="application/json">
</form>
```

> Try out opening [`example.html`](./example.html) in a browser, open the Dev Tools, activate `persist logs`, and submit the form to see this in action.


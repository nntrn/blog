# jsCommentBlock



## JS Comment Block

```javascript
function jsCommentBlock(str, max = 80) {
  return `/* ${str.replace(new RegExp(`(.{${max - 10},${max}}) `, 'g'), '$1\n * ')} */`
}
```

{% tabs %}
{% tab title="Example" %}
```javascript
var example = "You can’t get very far in JavaScript without dealing with objects. They’re foundational to almost every aspect of the JavaScript programming language. In fact, learning how to create objects is probably one of the first things you studied when you were starting out. With that said, in order to most effectively learn about prototypes in JavaScript, we’re going to channel our inner Jr. developer and go back to the basics."

jsCommentBlock(example)
```
{% endtab %}

{% tab title="Output" %}
```javascript
/* You can’t get very far in JavaScript without dealing with objects. They’re
 * foundational to almost every aspect of the JavaScript programming language. In
 * fact, learning how to create objects is probably one of the first things you
 * studied when you were starting out. With that said, in order to most effectively
 * learn about prototypes in JavaScript, we’re going to channel our inner Jr.
 * developer and go back to the basics. */
```
{% endtab %}
{% endtabs %}


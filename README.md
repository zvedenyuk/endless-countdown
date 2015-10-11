# Endless countdown
A simple and beautiful endless countdown timer for landing pages. You set the date to countown to once and when the date passes it adds 3 days so that the time is always positive. This script is useful for landing pages to set an offer deadline date.

Demo: http://44px.ru/labs/countdown/demo.html

## Setup

The script uses jQuery. Include it as well as the script file. Add these lines to the `head` of your webpage:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="endless-countdown/js.js"></script>
```
Also, don't forget to link styles:
```html
<link href="endless-countdown/style.css" rel="stylesheet" type="text/css">
```

On the webpage place this `html` code where you want your countdown timer to show up. Set your first desired date in the `date` attribute:
```html
<div class="endless_countdown" date="300914">
	<div></div>
	<div></div>
	<img src="endless-countdown/counterDotsBlack.png" />
	<div></div>
	<img src="endless-countdown/counterDotsBlack.png" />
	<div></div>
</div>
```

Finally, initialize timer like this:
```js
$(document).ready(function() {
	endlessCountdown();
});
```

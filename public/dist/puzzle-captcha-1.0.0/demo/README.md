<h1>PuzzleCAPTCHA</h1>

<p>I was really impressed, when I saw this fancy <a href="http://www.webdesignbeach.com/beachbar/ajax-fancy-captcha-jquery-plugin" target="_blank">Drag and Drop CAPTCHA</a>. However, it wasn't touch friendly and needed a bit of designers' touch for the icons/images.<br>Then I started thinking about how to make it better. <br>That's how it happened.</p>

<nav>
<ul>
<li><a href="#PuzzleCAPTCHA-DEMO">Demo</a></li>
<li ><a href="#PuzzleCAPTCHA-WORKS">How it works</a></li>
<li><a href="#PuzzleCAPTCHA-USE">How to use</a></li>
</ul>
</nav>


<a name="PuzzleCAPTCHA-DEMO"></a>
<h2>Demo</h2>

<p>Have a look at the live demo!!</p>
<a href="http://choikangstory.com/puzzleCAPTCHA/" target="_blank">http://choikangstory.com/puzzleCAPTCHA/</a>

<a name="PuzzleCAPTCHA-WORKS"></a>
<h2>How it works</h2>

<ul>
	<li>It automatically generates a very simple jigsaw kind of puzzle from any image on the web.</li>
	<li>Need to lock the form by using [disabled="true"] on the submit button.</li>
	<li>You can generate a value by Server-side Script and put into the option called [targetVal] then it will pass when the form is submitted so can double check by Server-side script.</li>
</ul>

<a name="PuzzleCAPTCHA-USE"></a>
<h2>How to use</h2>

<h3>Basic Usage</h3>
<ol>
	<li>
		Add the plugin script
		'''
		<script src="puzzleCAPTCHA.js"></script>
		'''
	</li>
	<li>
		Add the style
		<pre><code><link rel="stylesheet" href="puzzleCAPTCHA.css"></code></pre>
	</li>
	<li>
		Add HTML
		<pre><div id="PuzzleCaptcha"></div></pre>
	</li>
	<li>
		Call me!!
		<pre>
		<script>
			$("#PuzzleCaptcha").PuzzleCAPTCHA({
				imageURL:'http://distilleryimage2.s3.amazonaws.com/c886e1100cbe11e3a77722000a1fbc49_5.jpg'
			});
		</script>
		</pre>
	</li>
</ol>

<h3>Options // <small>default value</small></h3>
<dl>
	<dt>imageURL // <small>My instagram photo ;)</small></dt>
	<dd>including [http://].</dd>

	<dt>width // <small>"auto"</small></dt>
	<dd>Use number<small>(* without "px")</small>, when you need to specify the width of the puzzle.</dd>

	<dt>height // <small>"auto"</small></dt>
	<dd>The same as [width].</dd>

	<dt>columns // <small>3</small></dt>
	<dd>Add number to divide in column.</dd>

	<dt>rows // <small>2</small></dt>
	<dd>Add number to divide in row.</dd>

	<dt>targetInput // <small>null</small></dt>
	<dd>
		Using jQuery selector - 
		<br>
		e.g) The input tag looks like:<br>
		<pre><input type="hidden" class="any-class-name-selector-for-input" name="the-name-that-you-want-to-confirm-on-server-side-script"></pre>
		<br>
		The value could be {targetInput:".any-class-name-selector-for-input"}
	</dd>

	<dt>targetVal // <small>null</small></dt>
	<dd>The value that can be anything what you want to submit so you can confirm on submitted form.</dd>

	<dt>targetButton // <small>null</small></dt>
	<dd>
		Using jQuery selector - 
		<br>
		e.g) The button tag looks like:<br>
		<pre>
			<button type="submit" disabled="true" class="any-class-name-selector-for-button" name="any-name">Submit!!</button>
		</pre>
		<br>
		The value could be {targetButton:".any-class-name-selector-for-button"}

	</dd>

</dl>


<br><br><br>

<h4>*Thing to do:</h4>

<ul>
	<li>Validate the value passed when it is called.</li>
	<li>Image preloading is not clear depending on the browser.</li>
</ul>



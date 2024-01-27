

<html>
<body>
    <title>JavaScript</title>
<h1><u>event</u></h1>
<hr>
<button onclick="document.getElementById('demo').innerHTML=Date()">The time is?</button>
<p id="demo"></p>
<hr>


<h2>JavaScript HTML Events</h2>
<button onclick="this.innerHTML=Date()">The time is?</button>
<hr>

<h2>JavaScript HTML Events</h2>
<p>Click the button to display the date.</p>
<button onclick="displayDate()">The time is?</button>
<script>
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
</script>
<p id="demo"></p>
<hr>
<h1><u>string</u></h1>
<hr>
<p>Strings are written inside quotes. You can use single or double quotes:</p>
<p id="demo"></p>
<script>
let carName1 = "Volvo XC60"; // Double quotes
let carName2 = 'Volvo XC60'; // Single quotes
document.getElementById("demo").innerHTML =
carName1 + " " + carName2; 
</script>
<hr>
<h1><u>alert</u></h1>
<hr>
<h1>The Window Object</h1>
<h2>The alert() Method</h2>

<p>Click the button to display an alert box.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  alert("Hello! I am an alert box!");
}
</script>
<hr>
<h1><u>string length</u></h1>
<hr>
<p>The length of the string is:</p>
<p id="demo"></p>
<script>
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.getElementById("demo").innerHTML = text.length;
</script>
<hr>
<h2><u>Functions</u></h2>
<hr>
<p>This example calls a function which performs a calculation and returns the result:</p>
<p id="demo"></p>
<script>
var x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;
function myFunction(a, b) {
  return a * b;
}
</script>
<hr>
<h1><u>if</u></h1>
<h2>JavaScript if</h2>

<p>Display "Good day!" if the hour is less than 18:00:</p>

<p id="demo">Good Evening!</p>

<script>
if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}
</script>
<hr>
<h1><u>if...else</u></h1>
<h2>JavaScript if .. else</h2>

<p>A time-based greeting:</p>

<p id="demo"></p>

<script>
const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("demo").innerHTML = greeting;
</script>
<hr>
<h1><u>operator</u></h1>
<hr>
<h2>JavaScript if .. else</h2>

<p>A time-based greeting:</p>

<p id="demo"></p>

<script>
const hr = new Date().getHours(); 
let greting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("demo").innerHTML = greeting;
</script>
<hr>
<h1><u>operator</u></h1>
<hr>
<h1>JavaScript Bitwise AND</h1>
<h2>The & Operator</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 & 1;
</script>
<br>
<h1>JavaScript Bitwise XOR</h1>
<h2>The ^ Operator</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 ^ 1;
</script>
<br>
<h1>JavaScript Bitwise NOT</h1>
<h2>The ~ Operator</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = ~ 5;
</script>
<br>
<h1>JavaScript Bitwise Left</h1>
<h2>The << Operator</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 << 1;
</script>
<br>
<h1>JavaScript Signed Bitwise Right</h1>
<h2>The >> Operator</h2>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = -5 >> 1;
</script>
<br>
<hr>
<h2><u></u>JavaScript HTML DOM</u></h2>
<hr>
<p id="intro">Finding HTML Elements by Id</p>
<p>This example demonstrates the <b>getElementsById</b> method.</p>

<p id="demo"></p>

<script>
const element = document.getElementById("intro");

document.getElementById("demo").innerHTML = 
"The text from the intro paragraph is: " + element.innerHTML;

</script>
<hr>
<h2>JavaScript HTML DOM</h2>
<hr>
<div id="main">
<p>Finding HTML Elements by Tag Name</p>
<p>This example demonstrates the <b>getElementsByTagName</b> method.</p>
</div>

<p id="demo"></p>

<script>
const x = document.getElementById("main");
const y = x.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 
'The first paragraph (index 0) inside "main" is: ' + y[0].innerHTML;

</script>

</body>
</html>
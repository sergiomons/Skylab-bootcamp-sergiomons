﻿<!DOCTYPE html>
<html>
<body>

<p>Creating and using an object method.</p>

<p>A method is actually a function definition stored as a property value.</p>

<p id="demo"></p>

<script>
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
       return this.firstName + " " + this.lastName;
    }
};

document.getElementById("demo").innerHTML = person.fullName();
</script>
</body>
</html>
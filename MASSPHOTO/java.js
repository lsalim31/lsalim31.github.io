
var n;

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName('im');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get the right arrow element that goes right
var right_a = document.getElementById("right_a");
var left_a = document.getElementById("left_a");


for (var i = 0; i < img.length; i++) 
{
	img[i].onclick = function(){
		modal.style.display = "block";
		modalImg.src = this.src;
		n = Number(this.dataset.value);
		captionText.innerHTML = this.alt;
		if (n == img.length-1)    
		{
			right_a.style.display = "none";
			left_a.style.display = "block";
		}
		else if (n == 0)    
		{
			right_a.style.display = "block";
			left_a.style.display = "none"
		}
		else if ((n != img.length-1) || (n != 0))
		{
			right_a.style.display = "block";
			left_a.style.display = "block";
		}
}
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
  n = 0;
}

right_a.onclick = function(){
	n = n + 1;
	modalImg.src = img[n].src;
	captionText.innerHTML = img[n].alt;
	if (n == img.length-1)    
	{
		right_a.style.display = "none";
		left_a.style.display = "block";
	}
	if (n != img.length-1)
	{
		right_a.style.display = "block";
		left_a.style.display = "block";
	}
}

left_a.onclick = function(){
	n = n - 1;
	modalImg.src = img[n].src;
	captionText.innerHTML = img[n].alt;
	if (n == 0)    
	{
		right_a.style.display = "block";
		left_a.style.display = "none"
	}
	if (n != 0) 
	{
		right_a.style.display = "block";
		left_a.style.display = "block"
	}
}

var lis = document.getElementsByClassName("center button_box");

function show()
{	
	document.getElementById("grid").style.display = "block";
	// document.getElementById("but0").style.display = "none";
	document.getElementById("but1").style.display = "block";

	for (var i = 0; i < lis.length; i++) 
	{
		lis[i].style.display="none"
	}

}
function menu()
{	
	// document.getElementById("grid").style.animationName = "zoom_out";
	document.getElementById("grid").style.display = "none";
	for (var i = 0; i < lis.length; i++) 
	{
		lis[i].style.display="block"
	}
	document.getElementById("but1").style.display = "none";

}



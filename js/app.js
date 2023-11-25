



	const anchors = document.querySelectorAll('a[href*="#"]')
	for (let anchor of anchors) {
	anchor.addEventListener('click', (e)=> {
	e.preventDefault()

	const blockID = anchor.getAttribute('href').substr(1)

	document.getElementById(blockID).scrollIntoView({
		behavior: 'smooth',
		block: 'start'
	})
	})
}




// const items = document.querySelectorAll(".accordion a");
// function toggleAccordion(){
// 	this.classList.toggle('active');
// 	this.nextElementSibling.classList.toggle('active');
// }
// items.forEach(item => item.addEventListener('click', toggleAccordion));


// Подпрыгивание стрелки

const element = document.querySelector('#top-link');

element.addEventListener('mouseenter', function(event) {
	event.target.classList.add('jump')
})

element.addEventListener('mouseleave', function(event) {
	event.target.classList.remove('jump')
})


// Кнопки 

// Функция для показа контента Div1 и скрытия контента Div2
function showDiv1(Div1, Div2) {
	var x = document.getElementById(Div1);
	var y = document.getElementById(Div2);
	
	x.style.display = "block";
	y.style.display = "none";
	}
	
	// Функция для показа контента Div2 и скрытия контента Div1
function showDiv2(Div1, Div2) {
	var x = document.getElementById(Div1);
	var y = document.getElementById(Div2);
	
	x.style.display = "none";
	y.style.display = "block";
	}

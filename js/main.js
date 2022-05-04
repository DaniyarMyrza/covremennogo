var a = 35; //Числовой тип данных, переменная//
var b = "Привет, "; //Строковой тип данных, переменная//
var bd = "мир!"
var c = false;//Булево//
var d = 5; 



// a = 456;
// //prompt - это запросить значение
// a = prompt ('Напишите значение переменной a');

//if - это условие//
//else - это если в любом другом случаи
// if (a == 37) {
// 	alert ('a = 37');
// } else {
//  alert ("Что-то другое!")
// }

//for - это цикл//
// for (var i = 0; i < 5; i++) {
// 	alert (i);
// }

// Объекты
// var obj = {
	// (key)Ключи к (value)значение
// 	'key': 'value',
// 	'key': 'value',
// 	'key': 'value',
// 	'key': 'value'
// } 


var user = {
	'name': 'Петья',
	'surname': 'Васичкин',
	'age': 25
}

// alert ( user.surname );


// Массив


// var mas = ['Петья', 'Васичкин', 25];

// alert (mas[2]);



//Функции 

// function doMagic (a,b) {
// 	alert (a + b);
// }

// doMagic(10,5);
// doMagic(1,1);


//document.getElementById - находит кнопу или объект через idник
var btn = document.getElementById('btn');
 

// onclick - ловит событие
btn.onclick = function (e) {
	//e.preventDefault(); - это строка отменяет стандартное действие по клику
	e.preventDefault();

	// document.querySelector - можно обращатьсая к элементам через class
	var text = document.querySelector('p.intro');
	text.classList.add('red');
	var img = document.querySelector('.desktop');
	img.style.display = 'none';
    document.querySelector('.skill-change').style.marginleft = '50px';
}


// $(function) () {
// $(window).scroll(function(){
// 	$('#learn .section-title').each(function(){
// 		var imagePos = $(this).offset().top;

// 		var topOfWindow = $(window).scrollTop();
// 		if (imagePos < topOWindow+650) {
// 			$(this).addClass("fadeInLeft");
// 		}
	
// 		});
	
// });

// }


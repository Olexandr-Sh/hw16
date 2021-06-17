// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось value инпута, лежащего в переменной elem.




// let elem = document.getElementById('elem');

// function func() {
//   console.log(this.value);
// }

// func.call(elem); //тут должно вывести value инпута



// ДРУГЕ ЗАВДАННЯ \/



// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось 'привет, Иванов Иван'.
// Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

// var elem = document.getElementById('elem');

// function func(surname, name) {
//   this.surname = surname;
//   this.name = name;
// 	console.log(`${this.value}, ${surname} ${name}`);
// }

// func.call(elem, 'Шевцов', 'Олександр'); //тут должно вывести 'привет, Иванов Иван'


//ТРЕТЄ ЗАВДАННЯ \/


// Добавьте в последнюю строчку метод apply() так, чтобы на экран вывелось 'привет, Иванов Иван'.
// Слово 'привет' должно взяться из value инпута, а 'Иванов' и 'Иван' должны быть параметрами функциями.

// var elem = document.getElementById('elem');

// function func(surname, name) {
// 	console.log(`${this.value}, ${surname} ${name}`);
// }

// func.apply(elem, ['Шевцов', 'Олександр']); //тут должно вывести 'привет, Иванов Иван'




//ЧЕТВЕРТЕ ЗАВДАННЯ \/

// Напишите в указанном месте конструкцию с методом bind() так, 
// чтобы this внутри функции func всегда указывал на инпут из переменной elem.

// var elem = document.getElementById('elem');

// function func(surname, name) {
// 	console.log(`${this.value}, ${surname} ${name}`);
// }


// //Тут напишите конструкцию с bind()


// let firstUser = func.bind(elem, 'Shevtsov', 'Olexandr');
// setTimeout(firstUser, 1000) //тут должно вывести 'привет, Иванов Иван'
// let secondUser = func.bind(elem, 'Shevtsov', 'Andriy');
// setTimeout(secondUser, 2000) //тут должно вывести 'привет, Петров Петр'


// Система авторизации сломалась. Мы не видим в модальных окнах, имени пользователя


//П'ЯТЕ ЗАВДАННЯ \/


function askPassword(ok, fail) {
  let password = prompt('Password?', '');
  if (password === 'rockstar') {
	  user.loginOk();
  } else {
  	user.loginFail();
  }
}

let user = {
  name: 'Вася',

  loginOk() {
    alert(`${this.name} logged in`);
  },

  loginFail() {
    alert(`${this.name} failed to log in`);
  },

};

askPassword.apply(user.loginOk, user.loginFail);
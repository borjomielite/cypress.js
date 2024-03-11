describe('Автотесты на авторизацию на login.qa.studio ', function () {
   
   it('Проверка правильных логина и пароля', function () {
        cy.visit('https://login.qa.studio/'); // Посети сайт
               
        cy.get('#mail').type('german@dolnikov.ru'); // Ввели правильный логин
        cy.get('#loginButton').should('be.disabled') // Проверим, что кнопка не кликабельна
       
        cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
        cy.get('#loginButton').should('be.enabled'); // Проверим, что кнопка кликабельна
        
        cy.get('#loginButton').click(); // Нажимаем войти

 		cy.get('#messageHeader').should('be.visible'); // Проверим, что текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Сообщение содержит текст

        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // Проверим, что крестик виден
		cy.get('#exitMessageButton > .exitIcon').click() // Можно закрыть сообщение
    })


	it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Посети сайт

        cy.get('#forgotEmailButton').click(); // Нажимаем кнопку забыли пароль
               
        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввожу логин
		cy.get('#restoreEmailButton').click(); // нажать кнопку отправить код

		cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail')
      cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // Проверим, что крестик виден
      cy.get('#exitMessageButton > .exitIcon').click() // Можно закрыть сообщение
    })

   it('Проверка правильного логина и неправильного пароля', function () {
        cy.visit('https://login.qa.studio/'); // Посети сайт
               
        cy.get('#mail').type('vlad@dolnikov.ru'); // Ввели правильный логин
        cy.get('#loginButton').should('be.disabled') // Проверим, что кнопка не кликабельна
       
        cy.get('#pass').type('iLoveqastudio123'); // Ввели неправильный пароль
        cy.get('#loginButton').should('be.enabled'); // Проверим, что кнопка кликабельна
        
        cy.get('#loginButton').click(); // Нажимаем войти

      cy.get('#messageHeader').should('be.visible'); // Проверим, что текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Сообщение содержит текст

        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // Проверим, что крестик виден
      cy.get('#exitMessageButton > .exitIcon').click() // Можно закрыть сообщение
    })

   it('Проверка неправильного логина и правильного пароля', function () {
        cy.visit('https://login.qa.studio/'); // Посети сайт
               
         cy.get('#mail').type('vlad@dolnikov.ru'); // Ввели неправильный логин
         cy.get('#loginButton').should('be.disabled') // Проверим, что кнопка не кликабельна
       
         cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
         cy.get('#loginButton').should('be.enabled'); // Проверим, что кнопка кликабельна
        
         cy.get('#loginButton').click(); // Нажимаем войти

         cy.get('#messageHeader').should('be.visible'); // Проверим, что текст виден пользователю
          cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Сообщение содержит текст

        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // Проверим, что крестик виден
      cy.get('#exitMessageButton > .exitIcon').click() // Можно закрыть сообщение
    })

   it('Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); // Посети сайт
               
        cy.get('#mail').type('dolnikov.ru'); // Ввели неправильный логин
        cy.get('#loginButton').should('be.disabled') // Проверим, что кнопка не кликабельна
       
        cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
        cy.get('#loginButton').should('be.enabled'); // Проверим, что кнопка кликабельна
        
         cy.get('#loginButton').click(); // Нажимаем войти

         cy.get('#messageHeader').should('be.visible'); // Проверим, что текст виден пользователю
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Сообщение содержит текст

         cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // Проверим, что крестик виден
         cy.get('#exitMessageButton > .exitIcon').click() // Можно закрыть сообщение
    })

   it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Посети сайт
               
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели неправильный логин
        cy.get('#loginButton').should('be.disabled') // Проверим, что кнопка не кликабельна
       
        cy.get('#pass').type('iLoveqastudio1'); // Ввели правильный пароль
        cy.get('#loginButton').should('be.enabled'); // Проверим, что кнопка кликабельна
        
        cy.get('#loginButton').click(); // Нажимаем войти

        cy.get('#messageHeader').should('be.visible'); // Проверим, что текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Сообщение содержит текст

        cy.get('#exitMessageButton > .exitIcon').should ('be.visible'); // Проверим, что крестик виден
      cy.get('#exitMessageButton > .exitIcon').click() // Можно закрыть сообщение
    })
})


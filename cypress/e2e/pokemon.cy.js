describe('Автотесты на покупку аватара в покемонах', function () {

   it('Проверка успешной покупки аватара', function () {
         cy.visit('https://pokemonbattle.me/login'); // Посети сайт
               
         cy.get(':nth-child(1) > .auth__input').type ('borjomielite@yandex.ru'); // Ввводим правильный логин
         cy.get('.auth__button').should('be.enabled'); // Проверим, что кнопка кликабельна
       
         cy.get('#password').type('Qwertyuiop413+!'); // Ввели правильный пароль
         cy.get('.auth__button').should('be.enabled'); // Проверим, что кнопка кликабельна

         cy.get('.auth__button').click(); // Нажимаем войти

         cy.get('.header__btns > [href="/shop"]').click(); // Нажимаем кнопку Магазин
         cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // Выбираем аватара 

         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // Вводим номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // Вводим срок карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Вводим CCV
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('German Dolnikov'); // Вводим имя владельнцы арты

         cy.get('.pay-btn').click(); // Нажимаем кнопку
         cy.get('#cardnumber').type('56456'); // Вводим пуш из смс

         cy.get('.payment__submit-button').click(); // Нажиммамем кнопку
         
         cy.get('.payment__adv').click(); // Возвращаемся в магазин
      
    })
})

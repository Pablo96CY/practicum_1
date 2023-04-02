import authData from '../fixtures/authData.json';

describe('main page test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('check all page blocks', () => {
    cy.contains('Конструктор');
    cy.contains('Список заказов');
    cy.contains('Личный кабинет');
    cy.contains('Соберите бургер');
    cy.contains('Булки');
    cy.contains('Соусы');
    cy.contains('Наполнители');
  });

  it('create order and check it in profile history', () => {
    cy.contains('a','Личный кабинет').click();
    cy.get('[name=email]').type(authData.email);
    cy.get('[name=password]').type(authData.password);
    cy.contains('button', 'Войти').click();
    cy.contains('a','Конструктор').click();
    cy.contains('span', 'Краторная булка').trigger('dragstart');
    cy.contains('Перетащите').trigger('drop');
    cy.contains('span', 'Биокотлета').trigger('dragstart');
    cy.contains('Добавьте').trigger('drop');
    cy.contains('Оформить заказ').click();
    cy.contains('a','Личный кабинет').click();
    cy.contains('a','История заказов').click();
    cy.contains('Био-марсианский краторный бургер').click();
  });
})
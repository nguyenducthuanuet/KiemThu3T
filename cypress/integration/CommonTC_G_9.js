const _ = require('lodash');

describe("Kiem tra thuc hien chuc nang chinh cua man hinh khi nhan Enter", function () {

    it('Dang nhap', function () {
        cy.visit(Cypress.env('URL_LOGIN'));
    	cy.get('input[name=email]').type(Cypress.env('USER_ADMIN'));
    	cy.get('input[name=password]').type(Cypress.env('LOGIN_PASSWORD'));
    	cy.get('button[type=submit]').click();
    });

    it('Truy cap trang them moi benh nhan', function () {

        cy.get('.page-sidebar-menu .nav-item').contains('Quản lý người dùng').click();
    });

    it('Kiem tra can le cua cac <td>', function () {
        cy.get('tbody tr td').each(function($el, index, $list) {
            if(isNaN(parseInt($el.context.innerText))) {
              if(_.isEmpty($el.context.innerText))
                console.log("nut bam");
            }
        });
    });
});

const _ = require('lodash');


describe("Kiem tra thuc hien chuc nang chinh cua man hinh khi nhan Enter", function () {

    _.forEach(Cypress.env('users'), function (user) {
        context("User: " + user.role, function () {
            it("dang nhap", function () {
                cy.visit(Cypress.env('LOGIN_URL'));
                cy.get('input[name=email]').type(user.user.email);
                cy.get('input[name=password]').type(user.user.password);
                cy.get('button[type=submit]').click();
            });

            it("Kiem tra grid trong /main/admin/administrators/employments", function () {
                cy.visit('/main/admin/administrators/employments');
                console.log("123");
                cy.get('table');
            });


        })
    });
});

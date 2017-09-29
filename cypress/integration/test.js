const _ = require('lodash');

describe("TEST", function () {

    context("2. Di chuyen con tro chuot vao 1 row", function () {
        it("Kiem tra mau thay doi", function () {
            cy.visit(Cypress.env('LOGIN_URL'));
            cy.get('input[name=email]').type("admin_10@gmail.com");
            cy.get('input[name=password]').type("Methadone@2017");
            cy.get('button[type=submit]').click();
            cy.wait(1000);
            cy.visit('/main/admin/administrators/issuing_agency');
            // cy.get('tbody tr').first().trigger('mouseover');
            // cy.get('tbody tr').first().trigger('mouseenter').then(function ($el) {
            //     console.log("el", $el.css('background-color'));
            // });
            cy.get('tbody tr:first td').then(function ($el) {
                _.forEachRight($el, function (value) {
                    console.log(value.getElementsByTagName('a'));
                })
            });
        });
    });
});
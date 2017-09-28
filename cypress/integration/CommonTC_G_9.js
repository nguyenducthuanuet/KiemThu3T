const _ = require('lodash');


describe("Kiem tra thuc hien chuc nang chinh cua man hinh khi nhan Enter", function () {

    _.forEach(Cypress.env('users'), function (user) {
        context("User: " + user.role, function () {
            _.forEach(user.urls, function (url) {

                it("Kiem tra grid trong " + url, function () {
                    cy.visit(Cypress.env('LOGIN_URL'));
                    cy.get('input[name=email]').type(user.user.email);
                    cy.get('input[name=password]').type(user.user.password);
                    cy.get('button[type=submit]').click();
                    cy.wait(1000);
                    cy.visit(url);
                    cy.wait(1000);
                    cy.get('table tr td').each(function ($el, index, $list) {
                        // console.log($el.text(), isNaN($el.text()));
                        if(!isNaN(parseInt($el.text()))) {
                            // console.log($el.text(), parseInt($el.text()));
                            expect($el).to.have.css('text-align', 'right');
                        } else {
                            var date = new Date($el.text());
                            if (date instanceof Date && !isNaN(date.valueOf())) {
                                expect($el).to.have.css('text-align', 'center');
                            }
                            expect($el).to.have.css('text-align', 'left');
                        }
                    });

                    cy.get('.page-header .title').each(function ($el, index, $list) {
                        expect($el).to.have.css('text-align', 'left');
                        expect($el).to.have.css('font-weight', 'bold');
                    })
                });
            });


        })
    });
});

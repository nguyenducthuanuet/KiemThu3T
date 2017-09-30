const _ = require('lodash');

describe("TEST", function () {

    context("3.3. Chuc nang phan trang nam o goc duoi ben trai cua grid", function () {
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
            // cy.get('tbody tr:first td').then(function ($el) {
                // _.forEachRight($el, function (value) {
                //     console.log(typeof value);
                // })
            // });
            // cy.get('tbody tr:first td:last').each(function ($el, index, $list) {
            //     var innerText = $el.text();
            //     var event = ($el.find('a').attr('ng-click'));
            //     expect(event).to.not.be.undefined;
            // });

            // cy.get('table').each(function ($el, index, $list) {
            //     // console.log('offset top', $el.offset().top);
            //     var tableOffsetTop = $el.offset().top;
            //     var tableOffsetLeft = $el.offset().left;
            //     var tableWidth = $el.width();
            //     cy.get('.pagination').each(function ($el, index, $list) {
            //         var paginationOffsetTop = $el.offset().top;
            //         var paginationOffsetLeft = $el.offset().left;
            //         // console.log('offset top', $el.offset().top);
            //         console.log(paginationOffsetLeft, tableOffsetLeft + tableWidth/4);
            //         expect(paginationOffsetTop - tableOffsetTop > 0).to.be.true;
            //         expect(paginationOffsetLeft - (tableOffsetLeft + tableWidth/4) < 0).to.be.true;
            //     });
            // });
            cy.get('tbody tr:first').each(function ($el, index, $list) {
                $el.mouseover();
            })


        });
    });
});
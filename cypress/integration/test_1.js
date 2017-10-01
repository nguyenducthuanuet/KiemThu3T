var data = require('../fixtures/roles.json');

function Roles() {
	this.roles = data;
	this.roleIndex = 0;
	this.urlIndex = 0;

	this.getCurrentRole = function() {
		return this.roles[this.roleIndex];
	}

    this.getCurrentUrl = function() {
        console.log('current url', this.urlIndex);
        var currentUrl = this.roles[this.roleIndex].urls[this.urlIndex];
        this.urlIndex++;
        // console.log('current url', this.urlIndex);
        if (this.urlIndex >= this.roles[this.roleIndex].urls.length) {
            this.urlIndex = 0;
            this.roleIndex++;
        }

        return currentUrl;
    }
}

var roles = new Roles();

describe('Kiểm tra màn hình ở trạng thái mặc định', function() {
    // Đăng nhập và chuyển tới trang thêm bệnh nhân
    beforeEach(function() {
        var role = roles.getCurrentRole();
    //    console.log('current role', role);
    	cy.visit(Cypress.env('LOGIN_URL'));
    	cy.get('input[name=email]').type(role.user.email);
    	cy.get('input[name=password]').type(role.user.password);
    	cy.get('button[type=submit]').click();

    	cy.wait(1000);
    });

    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data[i].urls.length; j++) {
            it(data[i].role, function() {
                cy.visit(roles.getCurrentUrl());
                cy.wait(500);
            });
        }
    }
})

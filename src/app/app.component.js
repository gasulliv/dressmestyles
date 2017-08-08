"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.fullImagePath = '/assets/images/no-bk.png';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n   <nav>\n   <div class = \"container\">\n    <div class=\"nav-wrapper\">\n      <a href=\"#!\" class=\"brand-logo\"><img class = \"small\" [src]=\"fullImagePath\">\n      </a>\n      <a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><a href=\"sass.html\"><i class=\"fa fa-cloud\" aria-hidden=\"true\"></i></a></li>\n        <li><a href=\"badges.html\">Outfits</a></li>\n        <li><a href=\"collapsible.html\">Profile</a></li>\n        <li><a href=\"mobile.html\">Logout</a></li>\n      </ul>\n      <ul class=\"side-nav\" id=\"mobile-demo\">\n        <li><a href=\"sass.html\">Sass</a></li>\n        <li><a href=\"badges.html\">Components</a></li>\n        <li><a href=\"collapsible.html\">Javascript</a></li>\n        <li><a href=\"mobile.html\">Mobile</a></li>\n      </ul>\n    </div>\n   </div>\n  </nav>\n  <div class = \"container\">\n   <div class=\"row\">\n      <div class=\"col s6 login\">\n\n\t\t <div class=\"row\">\n        <div class=\"col s12 m7\">\n          <div class=\"card small\">\n            <div class=\"card-image\">\n              <img src=\"images/sample-1.jpg\">\n              <span class=\"card-title\">Card Title</span>\n            </div>\n            <div class=\"card-content\">\n              <p>I am a very simple card. I am good at containing small bits of information.\n              I am convenient because I require little markup to use effectively.</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"#\">This is a link</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      </div>\n      <div class=\"col s6 info\">\n\n\t\t <div class=\"row\">\n        <div class=\"col s12 m7\">\n          <div class=\"card small\">\n            <div class=\"card-image\">\n              <img src=\"images/sample-1.jpg\">\n              <span class=\"card-title\">Card Title</span>\n            </div>\n            <div class=\"card-content\">\n              <p>I am a very simple card. I am good at containing small bits of information.\n              I am convenient because I require little markup to use effectively.</p>\n            </div>\n            <div class=\"card-action\">\n              <a href=\"#\">This is a link</a>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      </div>\n   </div>\n  <div class = \"weather\">\n  \tIf the user needs to add a new weather they can do that here\n  </div>\n  <div class = \"outfits\">\n  New outfits based on the chosen new weather and location will appear here!\n  </div>\n  </div>\n  ",
        styles: ["\n   nav {\n\tbackground-color:transparent;\n\tpadding:4px;\n   }\n\ta {\n\t\tcolor:  #FCFBE3;\n\t}\n\n\t.info {\n\t\tbackground-color: #FCFBE3;\n\t}\n\n\t.login{\n\t\tbackground-color: transparent;\n\t}\n\n\t.weather {\n\n\t\twidth:100%;\n\t\tpadding:40px;\n\n\t}\n\n\t.outfits{\n\t\tbackground-color: #FCFBE3;\n\t\tpadding:20px;\n\t\twidth:100%;\n\t}\n\n    .profile {\n\n\tbackground-color: #FCFBE3;\n\tpadding:20px;\n\twidth:100%;\n\n\t}\n\n\t.brand-logo{\n\t\tmargin-left:20px;\n\t}\n\n\t.small {\n\t\twidth:4%;\n\t\theight:4%;\n\t}\n\n  "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
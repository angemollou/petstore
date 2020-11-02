odoo.define("petstore.petstore", function (require) {
  "use strict";

  var Class = require("web.Class");
  var Widget = require("web.Widget");
  var core = require("web.core");
  var utils = require("web.utils");
  var qweb = core.qweb;

  var _t = core._t;
  var _lt = core._lt;

  var homePage = Widget.extend({
    className: "petstore_homepage",
    start: function () {
      this.$el.append(
        qweb.render("HomePageTemplate", {
          a: "GREAT",
          c: "black",
        })
      );

      /******************
       Before Using QWeb 
      *******************/
      var greeting = new GreetingsWidget(this, "Bob");
      // var greeting = new GreetingsWidget(null);
      // greeting.destroy();

      if (typeof this.getChildren()[0] != "undefined") {
        console.log("children: " + this.getChildren()[0].$el);
      }

      return greeting.appendTo(this.$el);
    },
  });

  var GreetingsWidget = Widget.extend({
    template: "GreetingTemplate",
    className: "petstore_greetings",
    init: function (parent, name) {
      this._super(parent);
      this.name = name;
    },
    start: function () {
      if (typeof this.getParent() != "undefined") {
        console.log("parent: " + this.getParent().$el);
      }
    },
  });

  core.action_registry.add("petstore.homepage", homePage);
  core.action_registry.add("instance.petstore.HomePage", () => {});
});

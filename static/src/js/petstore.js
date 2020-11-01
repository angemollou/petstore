odoo.define("petstore.petstore", function (require) {
  "use strict";

  var Class = require('web.Class');
  var Widget = require('web.Widget');
  var core = require('web.core');
  var utils = require('web.utils');

  var _t = core._t;
  var _lt = core._lt;

  var homePage = Widget.extend({
    className: "oe_petstore_homepage",
    init: function(parent) {
      this._super(parent);
      console.log('Hello from the init');
      alert('Hello from the init');
    },
    start: function () {
      console.log("pet store home page loaded");
      alert("pet store home page loaded");

      this.$el.append("<div>Hello dear Odoo!</div>");

      var greeting = new GreetingsWidget(this);
      return greeting.appendTo(this.$el);
    },
  });

  var GreetingsWidget = Widget.extend({
    className: "oe_petstore_greetings",
    start: function () {
      this.$el.append(
        "<div>We are so happy to see you again in this menu!</div>"
      );
    },
  });

  core.action_registry.add('petstore.homepage', homePage);
  core.action_registry.add("instance.petstore.HomePage", () => {});

});
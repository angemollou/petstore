odoo.define("petstore.petstore", function (require) {
  "use strict";

  var Class = require("web.Class");
  var Widget = require("web.Widget");
  var core = require("web.core");
  var utils = require("web.utils");
  var qweb = core.qweb;

  var HomePage = Widget.extend({
    className: "o_petstore_homepage",
    events: {
      mouseover: function (e) {
        var pos = this.$("#pos");

        pos[0].style = `position:absolute; top:${e.clientY}px; left:${e.clientX}px; color:black;`;
        pos[0].innerText = `(X: ${e.clientX}, Y: ${e.clientY})`;

        if (pos[0].hidden) pos.show();
      },
      mouseout: function () {
        this.$("#pos").hide();
      },
    },
    start: function () {
      var products = new ProductsWidget(
        this,
        ["cpu", "mouse", "keyboard", "graphic card", "screen"],
        "green"
      );

      var pos = '<span id="pos" hidden=""></span>';
      this.$el.append(pos);

      return products.appendTo(this.$el);
    },
  });

  var ProductsWidget = Widget.extend({
    template: "ProductsWidget",
    className: "o_petstore_product",
    button_clicked: function (event) {
      alert(event.target.innerText + " clicked");
    },
    events: {
      "click .o_product_button": "button_clicked",
    },
    init: function (parent, products = [], color = "black") {
      this._super(parent);

      this.name = name;
      this.products = products;
      this.color = color;
    },
  });

  core.action_registry.add("petstore.homepage", HomePage);
});

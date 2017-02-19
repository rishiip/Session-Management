var UsersView = Backbone.View.extend({

  tagName: "li",

  className: "users",

  events: {
  },

  initialize: function() {
    // this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    console.log('hello world');
  }
});

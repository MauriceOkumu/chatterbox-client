// YOUR CODE HERE:


app = {

  server: 'https://api.parse.com/1/classes/messages/',

  init: function() {
    // Get username
    app.username = window.location.search.substr(10);

    app.onscreenMessages = {};

    // cache some dom references
    app.$text = $('#message');

    app.fetch();
    // setInterval (app.fetch.bind(app), 1000);

    $('#send').on('submit', app.handleSubmit);
  },

  send: function(message) {
    $.ajax({
      type: 'POST',
      url: app.server,
      data: JSON.stringify(message),
      contentType: 'application/json',
      success: function(json) {
        message.objectId = json.objectId;
        app.fetch()
        // app.displayMessage(message);
      },
      error: function (error) {
        console.error('Error', error);
      }
    });
  },

  fetch: function() {
    $.ajax({
      url: app.server,
      data: { order: '-createdAt' },
      contentType: 'application/json',
      success: function(json) {
        app.displayMessages(json.results);
      },
      error: function (error) {
        console.error('Error', error);
      }
    });
  },
  
  handleSubmit: function(e) {
    e.preventDefault();

    var message = {
      username: app.username,
      text: app.$text.val(),
      roomname: app.roomname || 'lobby'
    };

    // app.$text.val('');

    app.send(message);
  },

  clearMessages: function() {
    $('#chats').html('');
  },

  renderMessage: function(message) {
    var $user = $('<div>', {class: 'user'}).text(message.username);
    var $text = $('<div>', {class: 'text'}).text(message.text);
    var $message = $('<div>', {class: 'chat', 'data-id': message.objectId }).append($user, $text);
    return $message;
  },

  displayMessage: function(message) {
    if (!app.onscreenMessages[message.objectId]) {
      var $html = app.renderMessage(message);
      $('#chats').prepend($html);
      app.onscreenMessages[message.objectId] = true;
    }
  },

  displayMessages: function(messages) {
    for (var i = messages.length; i > 0; i--) {
      app.displayMessage(messages[i - 1]);
    }
  },



};
app.init()



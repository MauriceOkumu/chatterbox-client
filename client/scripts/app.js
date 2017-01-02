// YOUR CODE HERE:
let app = {};
app.init = () =>{};
app.send = (message) =>{
  $.ajax({
    url: 'https://api.parse.com/1/classes/messages',
    type: 'POST',
    data: JSON.stringify(message),
    success: function (data) {
      console.log('this is the data sent....:  ', data);
    },
    error: function (data) {
      console.error('chatterbox: Failed to send message');
    }
  });
};
// app.fetch = (message) => {
//   $.ajax({
// 	type: 'GET',
// 	data: JSON.stringify(message),
// 	success: function (data) {
// 	  console.log('this is the data sent....:  ', data);
// 	},
// 	error: function (data) {
// 	  console.error('chatterbox: Failed to send message');
// 	}
//   });
// };
// app.clearMessages = () => {
// 	$.ajax({
// 	  url: 'https://api.parse.com/1/classes/messages',
// 	  type: 'DELETE',
// 	  data: JSON.stringify(message),
// 	  success: function (data) {
// 	    console.log('this is the data sent....:  ', data);
// 	  },
// 	  error: function (data) {
// 	    console.error('chatterbox: Failed to send message');
// 	  }
//   });
// };
// app.renderMessage = () =>{};
// app.renderRoom = () =>{};
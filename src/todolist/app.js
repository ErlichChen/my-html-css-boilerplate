var todoController = (function() {

  return {

  }
})();

var uiController = (function() {

  var DOMs = {
    dateLabel: ".todolist-title-date"
  }

  return {
    showDate: function() {
      var now, months, month, year;
      now = new Date();
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      month = now.getMonth();
      year = now.getFullYear();
      document.querySelector(DOMs.dateLabel).textContent = months[month] + ' ' + year;
    }

  }

})();

var controller = (function(todoCtl, uiCtl) {

  var setEventListener = function() {

  }

  return {
    start: function() {
      console.log("App has started.");
      uiCtl.showDate();
      // uiCtl.showTodoList();
      setEventListener();
    }
  }

})(todoController, uiController);

controller.start();

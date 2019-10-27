$(() => {
  //array of lists
  const list = [];

  // Takes the array items and clg them
  const render = () => {
    let $liTodo = $("<li>").addClass("listItems");

    $("ul").append($liTodo);
    $liTodo.text(`${list[list.length - 1]}`);

    DragDrop();
  };

  const DragDrop = () => {
    //when dragging add some style to cursor and opacity
    $(".listItems").draggable({ cursor: "move", opacity: 0.37 });

    $(".holdCompletedTasks").droppable({
      drop: () => {
        $("li").on("click", event => {
          $(event.currentTarget).css("text-decoration", "line-through");
          deleteItem(event.currentTarget);
        });
      }
    });
  };

  const deleteItem = x => {
    setTimeout(() => {
      x.remove();
    }, 1000);
  };

  $("form").on("submit", event => {
    list.push($("#input-box").val());
    event.preventDefault();
    $(event.currentTarget).trigger("reset");

    render();
  });
});

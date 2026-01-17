module.exports = (io) => {
  let tasks = [];

  io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // Send existing tasks
    socket.emit("task:list", tasks);

    socket.on("task:add", (title) => {
      const task = {
        id: Date.now(),
        title,
        completed: false,
      };

      tasks.push(task);
      io.emit("task:list", tasks);
    });

    socket.on("task:toggle", (taskId) => {
      tasks = tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      );

      io.emit("task:list", tasks);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
    });
  });
};

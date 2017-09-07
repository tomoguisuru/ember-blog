function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PostScenario(server) {
  const users = server.createList('user', 5);

  users.forEach(user => {
    const notUser = users.filter(_user => _user.id !== user.id);
    const len = notUser.length;
    const comments = server.createList('comment', rand(0, 5), { user: notUser.objectAt(rand(0, len - 1))});

    server.createList('post', rand(1, 10), { user, comments });
  });
}

export default PostScenario;

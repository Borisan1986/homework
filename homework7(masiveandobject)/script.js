let user = {
    name: 'Dave',
    age: 30,
            'loves js':true
  };
  
  alert(user["ioves js"]);

  let favoriteMovieKey = 'Favorite moovie';

  user[favoriteMovieKey] = 'Shrek 2';

  alert(user[favoriteMovieKey]);
  alert(user['favorite moovie']);

db.category.updateOne({
    $or: [
          {"name" : { $eq: "Science"}},
          {"name" : { $eq: "science"}}
      ]},
      { $set: { "name" : "science and the world" } }
   );
db.grades.aggregate([ 
	{ $unwind: "$scores" },
	{ $match: { "scores.type": { $ne: "quiz" } } },
	{ $group: { 
		_id: {
			student_id: "$student_id",
			class_id: "$class_id"
		},
		averageScore: { $avg: "$scores.score" } 
	} },
	{ $group: { 
		_id: "$_id.class_id",
		averageClassScore: { $avg: "$averageScore" } 
	} },
	{ $sort: { averageClassScore: -1 } },
	{ $limit : 1 }
])
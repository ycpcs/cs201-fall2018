
var PREPOPULATE = true;

var courseInfo = {
	courseName: "CS 201: Fundamentals of Computer Science II",
	classDays: ["Wed", "Fri"],


	// The following is true if final exam is on the LAST day of class;
	// false if final exam is during exam week."
	inClassFinalExam: false,
	// The following is for the college-scheduled final exam.
	// It is not used if final is on last day of class"
	finalExamDates: [
		new FinalExamDay("101", new Date("12/14/2018 10:15:00")),
		new FinalExamDay("102", new Date("12/14/2018 12:45:00")),
		new FinalExamDay("103", new Date("12/14/2018 12:45:00")),
		new FinalExamDay("104", new Date("12/13/2018 15:00:00"))
	],


	classPeriods: [
		{
			topic: new Topic("Lecture 1: Introduction, Primitive Java", "lectures/lecture01.html"),
			reading: "1.1&ndash;1.6",
			lab: new Lab("Lab 1: Dog Years", "labs/lab01.html")
		},
		{
			topic: new Topic("Lecture 2: Objects/References, Constructors, JUnit", "lectures/lecture02.html"),
			reading: "2.1&ndash;2.3",
			lab: new Lab("Lab 2: Coins class", "labs/lab02.html")
		},
		{
			topic: new Topic("Lecture 3: JUnit, Arrays", "lectures/lecture03.html"),
			reading: "3.1&ndash;3.9",
			lab: new Lab("Lab 3: Arrays", "labs/lab03.html")
		},
		{
			topic: new Topic("Lecture 4: File I/O, Exceptions", "lectures/lecture04.html"),
			reading: "2.5&ndash;2.6",
			lab: new Lab("Text File I/O", "labs/lab04.html")
		},
		{
			topic: new Topic("Lecture 5: Exceptions", "lectures/lecture05.html"),
			reading: "2.5",
			lab: new Lab("Lab 5: Exceptions", "labs/lab05.html")
		},
		{
			topic: new Topic("Lecture 6: GUIs", "lectures/lecture06.html"),
			lab: new Lab("Lab 6: GUIs", "labs/lab06.html")
		},
		{
			topic: new Topic("Lecture 7: Inheritance", "lectures/lecture07.html"),
			reading: "4.1&ndash;4.2",
			lab: new Lab("Lab 7: Inheritance and Polymorphism", "labs/lab07.html")
		},
		{
			topic: new Topic("Lecture 8: ArrayList, Inheritance (continued)", "lectures/lecture08.html"),
			reading: "4.3&ndash;4.4",
			lab: new Lab("Lab 8: Inheriting Fields and Methods", "labs/lab08.html")
		},
		{
			topic: new Topic("** Exam 1", "")
		},
		{
			topic: new Topic("Lecture 9: Type casts, instanceof, Object class, Interfaces", "lectures/lecture09.html"),
			lab: new Lab("Lab 9: Comparable, Sorting", "labs/lab09.html")
		},
		{
			topic: new Topic("Lecture 10: Generic methods and classes", "lectures/lecture10.html"),
			reading: "4.5&ndash;4.7",
			lab: new Lab("Lab 10: Using Generic Containers and Algorithms", "labs/lab10.html")
		},
		{
			topic: new Topic("Lecture 11: Generic methods, functors", "lectures/lecture11.html"),
			reading: "4.8",
			lab: new Lab("Lab 11: Functors", "labs/lab11.html")
		},
		{
			topic: new Topic("Lecture 12: Analysis of Algorithms", "lectures/lecture12.html"),
			reading: "5.1&ndash;5.3",
			lab: new Lab("Lab 12: Benchmarking ArrayList", "labs/lab12.html")
		},
		{
			topic: new Topic("Lecture 13: Big-O", "lectures/lecture13.html"),
			reading: "5.4&ndash;5.8",
			lab: new Lab("Lab 13: Big-O", "labs/lab13.html")
		},
		{
			topic: new Topic("Lecture 14: Collections, Iterators", "lectures/lecture14.html"),
			reading: "6.1-6.3",
			lab: new Lab("Lab 14: Iterators, Interleaving", "labs/lab14.html")
		},
		{
			topic: new Topic("Lecture 15: Generic Algorithms", "lectures/lecture15.html"),
			reading: "6.4",
			lab: new Lab("Lab 15: Generic Algorithms", "labs/lab15.html")
		},
		{
			topic: new Topic("Lecture 16: Lists", "lectures/lecture16.html"),
			reading: "6.5",
			lab: new Lab("Lab 16: List Reversal", "labs/lab16.html")
		},
		{
			topic: new Topic("** Exam 2", "")
		},
		{
			topic: new Topic("Lecture 17: Parallel Programming with Threads", "lectures/lecture17.html"),
			lab: new Lab("Lab 17: Parallel Estimation of π", "labs/lab17.html")
		},
		{
			topic: new Topic("Lecture 18: Stacks and Queues", "lectures/lecture18.html"),
			reading: "6.6",
			lab: new Lab("Lab 18: Palindromes")
		},
		{
			topic: new Topic("Lecture 19: Sets and Maps", "lectures/lecture19.html"),
			reading: "6.7-6.8",
			lab: new Lab("Lab 19: Word Count", "labs/lab19.html")
		},
		{
			topic: new Topic("Lecture 20: Recursion", "lectures/lecture20.html"),
			reading: "7.1, 7.3",
			lab: new Lab("Lab 20: Recursion", "labs/lab20.html")
		},
		{
			topic: new Topic("Lecture 21: Proof by Induction", "lectures/lecture21.html"),
			reading: "7.2",
			lab: new Lab("Lab 21: Proof By Induction", "labs/lab21.html")
		},
		{
			topic: new Topic("Lecture 22: Memoization and Dynamic Programming", "lectures/lecture22.html"),
			reading: "7.6",
			lab: new Lab("Lab 22: Binomial Coefficient", "labs/lab22.html")
		},
		{
			topic: new Topic("Lecture 23: Merge and Quick Sort", "lectures/lecture23.html"),
			reading: "8.5-8.6",
			lab: new Lab("No lab", "")
		},
		{
			topic: new Topic("** Exam 3", "")
		},
		{
			topic: new Topic("Lecture 24: Relational Databases and SQL", "lectures/lecture24.html"),
			lab: new Lab("Lab 23: Relational Databases and SQL", "labs/lab23.html")
		},
		{
			topic: new Topic("Lecture 25: Database Applications and JDBC", "lectures/lecture25.html"),
			lab: new Lab("Lab 24: JDBC", "labs/lab24.html")
		},
	]
};

// vim:ts=2:

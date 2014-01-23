var HoneyBadger = {
	head: 1,
	tail: 1,
	alive: true,
	feelings: ["Don't care", "Don't give a shit"],	

	kills:function(x){
		x.alive=false
		return "Honey Badger don't give a shit!"
	},

	called:function(){
		console.log("Honey Badger don't care")
	},
}

var snake = {
	head: 1,
	rattle: 1,
	alive: true,
}

var BillyBob = {
	head: 1,
	tail: 1,
	alive: true,
	interests: ["hunting, fishing, catfish gigging"],

	kills:function(x){
		x.alive=false
		return "Yeehaw, bo"
	},
}
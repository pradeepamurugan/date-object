// date object //

	// let date=new Date();
	// console.log(date);
	// console.log(date.getFullYear());
	// console.log(date.getMonth());
	// console.log(date.getDate());
	// console.log(date.getDay());
	// console.log(date.getTime());
	// console.log(date.getHours());
	// let date=new Date();
	// console.log(date.setDate(10));
	// console.log(date.getDate());
	// console.log(date);
	
	// math.floor(9.3);
	// console.log(floor);
	
	
	let time = new Date (parseInt(prompt("Enter your time")));
	
	if(time<=12){
		console.log("Morning");
	}
	else if(time<15){
		console.log("Afternoon");
	}
	else if(time<18){
		console.log("Evening");
	}
	else if(time<=23)
	{
		console.log("Night");
	}
	
	else{
		console.log("Error");
	}
	
	let months=new Date();
	let month=months.getMonth("month");
	let mon=prompt("Enter your month");
	
	if(mon<=3){
		console.log("spring");
	}
	else if(mon<=7){
		console.log("summer");
	}
	else if(mon<=11){
		console.log("winter");
	}
	else{
		console.log("current season");
	}
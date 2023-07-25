window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let prom1= new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(20);
	},2000)

let prom2= new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(30);
	},3000)
})
	let prom3= new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(60);
	},6000)
})
	let prom4= new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(80);
	},5000)
})
	let prom5= new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(40);
	},4000)
})
promises=[prom1,prom2,prom3,prom4,prom5];
let x=Promise.any(promises);
	document.getElementById("output").innerText=x;
	
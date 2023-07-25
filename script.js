window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let div=document.getElementById("output");
let prom1= new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(20);
	},2000)
})
let prom2= new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(30);
	},3000)
})
	let prom3= new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(10);
	},1000)
})
	let prom4= new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(50);
	},5000)
})
	let prom5= new Promise((resolve)=>{
	setTimeout(()=>{
		resolve(40);
	},4000)
})
promises=[prom1,prom2,prom3,prom4,prom5];
let x=Promise.any(promises);
let data1;
x.then((data)=>{
  div.innerText=data;

})
x.catch((data)=>{
  div.innerText=data;

})
	
	
// problme i node 
// let a=90;
// let b=10;
// setTimeout(()=>{
//     b=20;
// },2000);

// console.log(a+b);

// How to handle this type problem 

// let a = 90;
// let b = 0;

// let waitdata =new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(30)
//     },2000)
// })
// waitdata.then((data)=>{
//     b=data;
//     console.log(a+b);
    
// })


// Async opration here 

// console.log('start one ...');
// setTimeout(() => {

//     console.log('second one ...');
// }, 2000)
// console.log('third one ...');
// console.log('four one ...');





// CRUD Opration do 

// const fs=require('fs');
// const path=require('path');

// const dirpath = path.join(__dirname,'Data');
// const filepath = `${ dirpath }/niraj.txt`;
// Make File 
// fs.writeFileSync(filepath,'helo thi sis niraj singh');

// Read 
// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item)
// })
// Update 
// fs.appendFile(filepath,' and file name is apple.txt',(err)=>{
//     if(!err){
//         console.log('file name is update');
//     }
// })
// Rename 
// fs.rename(filepath,`${dirpath}/neha.txt`,(err)=>{
//     if(!err){
//         console.log('file name is update');
        
//     }
// })
const posts=[
    {title:'post one', body:'This is post One'},
    {title:'post two', body:'This is post two'}
];

let userLastActivityTime=null;

function getPosts(){
    setTimeout(()=>{
    let output='';
    posts.forEach((post,index)=>{
        output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        posts.push(post);
        const error=false;
         if(!error){
         resolve()
         }else{
            reject('Error:something went wrong');
         }
    },2000);
});
}

function updateLastUserActivityTime(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            userLastActivityTime=new Date();
            resolve('User activity time updated');
        },1000);
    })
}

function deleteLastPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(posts.length>0){
                posts.pop();
                resolve('last post deleted');
            }else{
                reject('no posts to delete');
            }
        },1000)
    })
}

// createPost({title:'post three',body:'this is post three'})
// .then(getPosts)
// .catch(err => console.log(err));


//Promise.all
// const promise1=Promise.resolve('Hello  World');
// const promise2=10;
// const promise3=new Promise ((resolve,rejectr)=>
// setTimeout(resolve,2000,'goodbye')
// );

// Promise.all([promise1,promise2,promise3]).then(values=> console.log(values));


createPost({title:'post three',body:'this is post three'})
.then(()=>updateLastUserActivityTime())
.then(()=>deleteLastPost())
.then(()=>{
    console.log('post after deleting the last one:');
    getPosts();
    console.log('User Last Activity Time:', userLastActivityTime);
})
.catch((err)=> console.log(err)); 

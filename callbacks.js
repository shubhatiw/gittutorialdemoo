const posts=[
    {title:'post one', body:'This is post One'},
    {title:'post two', body:'This is post two'}
];

function getPosts(){
    setTimeout(()=>{
    let output='';
    posts.forEach((post,index)=>{
        output+=`<li>${post.title}</li>`;
        });
        document.body.innerHTML=output;
    },1000);
}

function createPost(post,callbvack){
    setTimeout(()=>{
        posts.push(post);
    callbvack()
    },2000);
} 
getPosts();


createPost({title:'post three',body:'this is post three'}, getPosts);
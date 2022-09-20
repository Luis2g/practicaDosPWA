self.addEventListener('install', event => {

    console.log('SW: install');

});


self.addEventListener('fetch', event => {
    // if(event.request.url.includes('.css')){
    //     console.log(event.request.url);

    //     const repo = new Response(
    //         `body{
    //             color: red;
    //             background-color: black;
    //         }`,
    //         {
    //             headers:{
    //                 'Content-type': 'text/css'
    //             }
    //         }
    //     );

    //     event.respondWith(repo);

       
    // }   
    
    if(event.request.url.includes('.webp')){
        event.respondWith(
            fetch('./images/patricio.jpg')
        );
    }

});
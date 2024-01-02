const Contact = () =>{
    // {
    //     console.info("basically here promiseApis have different types - 1=>Promise.all - all if no reject and if reject then first rejected error  2=> Promise.allSettled -  all settled result array , 3=> Prmise.race first settled , 4 => .any - first success "
    //     );
    //     const p1 = new Promise((resolve , reject) =>{
    //         setTimeout(()=>resolve("p1 success"),4000);
    //     });

    //     const p2 = new Promise((resolve , reject )=>{
    //         // setTimeout(()=>resolve("p2 success"),2000);
    //         setTimeout(()=>reject("p2 fail ho gaya"),2000);
    //     });

    //     const p3 = new Promise((resolve , reject)=>{
    //         // setTimeout(()=>resolve("p3 success"),1000);
    //         setTimeout(()=>reject("p3 bhi fail ho hi gya") , 4000);
    //     });
    //     Promise.race([p1 , p2 , p3]).then((res)=>{
    //         console.log(res);
    //     }).catch((err)=>{
    //         console.error(err);
    //     });



    //     // CallBack Hell
    //     // inveraion of control - we give our code's control to somebody else 
    //     const Cart= ["kurta " , "pajama" , "Shirt"];

    //     crerateOrder(cart, function(orderInfo){

    //         ProceedToPayment(orderInfo, function(paymentInfo){

    //             showOrderSummary(paymentInfo, function ()
    //             {
    //                 updateWallet();
    //             });
    //         });
    //     });


    // }
    // {
    //     // Now we'll read closures 
    //     function x()
    //     {
    //         var a= 10;
    //         function y()
    //         {
    //             var b=34;
    //             function z()
    //             {
    //                 console.log(a,b);
    //             }
    //             z();
    //         }
    //         y();
    //     }
    //     //x();

    //     // now one question using closure and setTimeOut

    //     function abc()
    //     {
    //         for(var i=1;i<=5;i++)
    //         {
    //             function close(i){
    //                 setTimeout(function(){
    //                     console.log(i);
    //                 }, i*1000);
    //             }
    //             close(i);
    //         }
    //     }
    //     abc();
        
        
    // }

    // {
    //     // now do some real world stuff
    //     const API_URL = "https://api.github.com/users/GulshanPareek1";

    //     async function handlePromise()
    //     {
    //         try{
    //             const data = await fetch(API_URL);
    //             const jsonValue = await data.json();
    //             console.log(jsonValue);
    //         }
    //         catch(err)
    //         {
    //             console.error(err);
    //         }
            
    //     }
    //     handlePromise();

    //     // how to create new promise 
    //     const p = new Promise((resolve , reject)=>{
    //         setTimeout(()=>{
    //             resolve("Promise resolve ho chuki....!!")
    //         },8000);
    //     });
    //     const p2 = new Promise((resolve , reject)=>{
    //         setTimeout(()=>{
    //             resolve("Dusri Promise bhi resolve ho chuki ....!!")
    //         },4000);
    //     });

    //     async function getData()
    //     {
    //         console.log("Or batao jiiii kya haal!!");
    //         //return "Gulshan Pareek";
    //         const val = await p;
    //         // js engine was waiting for promise to be resolved 
    //         console.log("Ram Ram ji ");
    //         console.log(val);

    //         const val2 = await p2;
    //         console.log("Ram Ram ji saareya ne ");
    //         console.log(val2);
            
    //         //return p;
    //     }
    //     //getData();
    //     function getNoramlData()
    //     {
    //         p.then((res)=>console.log(res));
    //         console.log("Namaste Bhaiya");
    //     }
    // //     //getNoramlData();

    // //     //console.log(getData());
    // //     //getData().then((res)=>(console.log(res)));  // this is how we extract data from promise 
    //  }
    return <h1>Contact us from your heart😊
    </h1>;
};

export default Contact;
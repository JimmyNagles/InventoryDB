 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyATRQ0kr45D0dso7kAVCh6owaNgdvuGzmw",
    authDomain: "inventorydb-eef90.firebaseapp.com",
    databaseURL: "https://inventorydb-eef90.firebaseio.com",
    projectId: "inventorydb-eef90",
    storageBucket: "inventorydb-eef90.appspot.com",
    messagingSenderId: "1016117915966",
    appId: "1:1016117915966:web:f015f314bbda3776ac3c6f",
    measurementId: "G-XPVGY0D7JB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();





//when button click stores all data
$("#enter").on("click", function (event) {

    //prevents page from rloading
    event.preventDefault();

    //creates variables for each inpu
    const brandName=$("#Producto").val().trim()
    const quantity=$("#Cantidad").val()
    const buyingPrice=$("#Compra").val()
    const sellingPrice=$("#Venta").val()
    const difference= sellingPrice-buyingPrice

    //clo the input values
    console.log( brandName,quantity,buyingPrice,sellingPrice,difference)

    //creates obj
    const item={
    brandName,
    quantity,
    buyingPrice,
    sellingPrice,
    difference,
    }

    //sends obj of item to firebase database
      database.ref().push({
            item,
        })

    //clears input values 

    clearInfo()



    database.ref().on("child_added",function(data){   
        
        

    

const information = data.val().item


const name= information.brandName

const amount = information.quantity

const price =information.buyingPrice


const sell = information.sellingPrice

const diffe= information.difference





console.log('name,amount, price,sell,diffe', name,amount, price,sell,diffe)



const adding = `   <tr>
<td>`+name+`</td>
<td>`+amount+`</td>
<td>`+price+`</td>
<td>`+sell+`</td>
<td>`+diffe+`</td>
</tr>
`



$("#here").append(adding)


   
        })         

})



const information= [ ]




//clears all the information in the input values 
const clearInfo=()=>{

    $("#Producto").val("")
    $("#Cantidad").val("")
    $("#Compra").val("")
    $("#Venta").val("")
    $("#enter").val("")
    }



const renderInformation=(userId, name, email, imageUrl)=>{


        firebase.database().ref('brandName/' + userId).set({
          username: name,
          email: email,
          profile_picture : imageUrl
        });
      }





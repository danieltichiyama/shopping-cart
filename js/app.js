// var newPara = document.createElement ('p');

// newPara.innerHTML = 'Hello to you, too.'

// document.body.appendChild (newPara);

var items = [
    {
    product: "Finger Toothbrush", 
    description: "A helping hand to a nicer smile.",
    price: 1.11,
    imgUrl:'assets/fingerToothbrush.jpg'
    }, {
    product: "Barry Manilow's Greatest Hits Collection Vol 1",
    description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.",
    price: 39.57,
    imgUrl: 'assets/barryManilo.jpg'
    }, {
    product: "Ramen Oreos",
    description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.",
    price: 8.88,
    imgUrl: 'assets/ramenOreos.jpg'
    }, {
    product: "Woof Washer 360",
    description: "Wash your dirty stinky mutt in minutes! Water and dog not included." ,
    price: 9.29,
    imgUrl:'assets/woofWasher.jpg'
    }, {
    product: "Sauna Pants",
    description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.",
    price: 2.33,
    imgUrl:'assets/saunaPants.jpg'
    }, {
    product: "Hug Me Pillow",
    description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.",
    price: 599.99,
    imgUrl:'assets/hugMePillow.jpg'
    }
];


for (i=0;i<items.length;i++){
    var newItem = document.createElement ('li');
    newItem.className = 'itemInCart';
    newItem.style.cssText = "display: flex; flex-direction:row;border-top: 2px solid rgba(0,0,0,.2); ;min-height:10vh;width:75vw;list-style:none;padding:1vh 1vw;"
    cartList.appendChild (newItem);
    
    var productImg = document.createElement ('img');
    productImg.className = "productImg";
    productImg.style.cssText = 'width: 75px;height:75px;';

    for (key in items[i]){
        if (key==='imgUrl'){
            productImg.src = items[i][key];
        }
    }
    newItem.appendChild (productImg);

    var productName = document.createElement('h3');
    productName.className = 'productName';
    productName.style.cssText = "display:inline;margin-left: 1vw;"

    var productDescription = document.createElement ('p');
    productDescription.className = 'productDescription';
    productDescription.style.cssText = "font-size:12px;font-weight:normal; color: rgba(0,0,0,.4);margin-right: 40px;"
    var price = document.createElement ('div');
    price.className = 'price';
    price.style.cssText = "margin-left:auto;text-align:right;align-self:center;font-size:18px;"

    for (key in items[i]){
        if (key==='product'){
            productName.innerHTML = items[i][key];
        }else if (key ==='description'){
            productDescription.innerHTML = items[i][key];
        }else if (key ==='price'){
            price.innerHTML = '$'+items[i][key];
        }
    }
    newItem.appendChild (productName);
    productName.appendChild (productDescription);
    newItem.appendChild (price);

    


}

cartList.style.cssText = "display: flex;flex-direction:column;margin: 10vh auto;"


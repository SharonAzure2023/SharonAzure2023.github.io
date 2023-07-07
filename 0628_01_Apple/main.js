//DOM
const url =  "./Apple_spec.json";
let iPadPage = document.querySelector('#iPad-page');
let iPhonePage = document.querySelector('#iPhone-page');
let MacPage = document.querySelector('#Mac-page');
let jumbotron = document.querySelector('.jumbotron jumbotron-fluid');
let H1 = document.querySelector('H1');
let p = document.querySelector('p');



// let gray = document.querySelector('#gray');
// console.log(gray)
// let blue = document.querySelector('#blue');
// let pink = document.querySelector('#pink');
// let purple = document.querySelector('#purple');
// let GB64 = document.querySelector('#GB-64');
// let GB256 = document.querySelector('#GB-256');
// let wifi = document.querySelector('#Wi-Fi');
// let cellular = document.querySelector('#Cellular');
let pic = document.querySelector('.main-pic');
let colorArea = document.querySelector('#color');
let spec1Area = document.querySelector('#spec-1');
let spec2Area = document.querySelector('#spec-2');
let price = document.querySelector('#price');
let products

//declare

    fetch(url)
        .then(response => response.json())
        .then(data => {
            products = data
            console.log(products);
            // fetchMerchandise(data[0].dataUrl)
            //     .then(shop => {
            //         shopData = shop
            //         renderingShop(shopData)
            //     })
        })
        .catch((e) => {
            console.warn(e)
        })

//initialization
function initialize(product) {
    console.log(product);

    // pic.innerHTML=''
    // spec1Area.innerHTML=''
    // spec2Area.innerHTML=''
    // productImg.setAttribute('src', Product[product].Detail.baseImgUrl);
    pic.src = (products[product].product.baseImgUrl) //引入的json[引入的"iPad"].product.baseImgUrl
    jumbotron, H1.innerText = `購買${product}`

    let lowestPrice = products[product].Spec1[0].price
    console.log(lowestPrice)
    jumbotron,p.innerText =`NT$${lowestPrice}起`

    renderSelectArea(product)
    changePic(product)


}

// //color area
// <H3>外觀。挑選喜愛的顏色。</H3>
// <button class="col-5 btn border border-2 rounded text-center " id="gray">
//   <img src="./pic/iPad/ipad-air-finish-spacegray.png" alt="" class="w-50 p-3"><br>太空灰色</button>
function renderSelectArea(product) {
    colorArea.innerHTML=''
    spec1Area.innerHTML=''
    spec2Area.innerHTML=''

    //color area
    let title = document.createElement('H3')
    title.innerHTML = `顏色<br>`
    colorArea.append(title)

    products[product].outWard.forEach( item =>{
        colorArea.innerHTML+= `
        <button class="col-5 btn border border-2 rounded text-center color-card" id=${item.color}>
        <img src="./pic/${product}/dot-${item.color}.jpg" alt="" class="w-50 p-3"><br>${item.color}</button>`    
      })

    //Spec-1 area
    if (product == 'iPad'){
    let title2 = document.createElement('H3')
    title2.innerHTML = `Storage<br>`
    spec1Area.append(title2)
    products[product].Spec1.forEach( item =>{
        spec1Area.innerHTML+= `
          <button class="col-5 btn border border-2 rounded text-center" id=${item.storage}>
            <H4>${item.storage}</H4><br>
            <p>NT$${item.price}起</p>`    
      })
    }
    if (product == 'iPhone' ){
    let title2 = document.createElement('H3')
    title2.innerHTML = `Storage<br>`
    spec1Area.append(title2)
    products[product].Spec1.forEach( item =>{
        spec1Area.innerHTML+= `
          <button class="col-5 btn border border-2 rounded text-center" id=${item.storage}>
            <H4>${item.storage}</H4><br>
            <p>NT$${item.price}起</p>`    
      })
    }
    if (product == 'Mac'){
    let title2 = document.createElement('H3')
    title2.innerHTML = `StorageRAM<br>`
    spec1Area.append(title2)
    products[product].Spec1.forEach( item =>{
        spec1Area.innerHTML+= `
          <button class="col-5 btn border border-2 rounded text-center" id=${item.storageRAM}>
            <H4>${item.storageRAM}</H4><br>
            <p>NT$${item.price}起</p>`    
      })
    }

    //Spec-2 area
    if (product == 'iPad'){
    let title3 = document.createElement('H3')
    title3.innerHTML = `Network<br>`
    spec2Area.append(title3)
    products[product].Spec2.forEach( item =>{
        spec2Area.innerHTML+= `
          <button class="col-5 btn border border-2 rounded text-center" id=${item.network}>
            <H4>${item.network}</H4><br>
            <p>NT$+${item.price}</p>`    
      })
    }
    if (product == 'Mac'){
    let title3 = document.createElement('H3')
    title3.innerHTML = `StorageSSD<br>`
    spec2Area.append(title3)
    products[product].Spec2.forEach( item =>{
        spec2Area.innerHTML+= `
          <button class="col-5 btn border border-2 rounded text-center" id=${item.storageSSD}>
            <H4>${item.storageSSD}</H4><br>
            <p>NT$+${item.price}</p>`    
      })
    }

}


gray.addEventListener('click', color)

function color() {
    pic.src = ('./pic/iPad/iPad-spacegray.jpg')
}

function changePic (product){
  let selectColor = document.querySelectorAll("#color .color-card");
  selectColor.forEach(x=> {
    x.addEventListener('click', function(){
      let picColor =this.getAttribute('id')
      pic.src = (`pic/${product}/${product}-${picColor}.jpg`)
      console.log(pic.src)
    })
  })

}

function attachEventListeners() {
    //點選顏色後更改外觀圖片
    let color = document.querySelectorAll(".exterior .card");
    color.forEach(x => {
        x.addEventListener('click', function () {
            let img = this.getAttribute('id');
            document.querySelector('#main-pic').src = img;
        })
    })

    //點選後取得容量價格,並計算總價
    let storage = document.querySelectorAll(".storage .card");
    storage.forEach(x => {
        x.addEventListener('click', function () {
            storagePrice = parseInt(this.getAttribute('id'));
            calTotalPrice();
        })
    })

    //點選後取得wifi價格,並計算總價
    let wifi = document.querySelectorAll('.wifi .card')
    wifi.forEach(x => {
        x.addEventListener('click', function () {
            wifiPrice = parseInt(this.getAttribute('id'));
            calTotalPrice();
        })
    })
}

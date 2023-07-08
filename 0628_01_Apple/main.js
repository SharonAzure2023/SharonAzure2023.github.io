//DOM
const url = "./Apple_spec.json";
let iPadPage = document.querySelector('#iPad-page');
let iPhonePage = document.querySelector('#iPhone-page');
let MacPage = document.querySelector('#Mac-page');
let jumbotron = document.querySelector('.jumbotron jumbotron-fluid');
let H1 = document.querySelector('H1');
let p = document.querySelector('p');
let pic = document.querySelector('.main-pic');
let colorArea = document.querySelector('#color');
let spec1Area = document.querySelector('#spec-1');
let spec2Area = document.querySelector('#spec-2');
let priceArea = document.querySelector('#price');
let click = false
let lowestPrice

//取得Apple products JSON
fetch(url)
  .then(response => response.json())
  .then(data => {
    products = data
    console.log(products);
  })
  .catch((e) => {
    console.warn(e)
  })

//initialization html內onclick事件
function initialize(product) {
  console.log(product);
  pic.src = (products[product].product.baseImgUrl) //引入的json[引入的"iPad"].product.baseImgUrl
  jumbotron, H1.innerText = `購買${product}`

  let lowestPrice = products[product].Spec1[0].price
  console.log(lowestPrice)
  jumbotron, p.innerText = `NT$${lowestPrice}起`

  renderSelectArea(product)
  changePic(product)
  getSelectPrice(product)
  // getTotalPrice(product)
}

// Render Select Area
function renderSelectArea(product) {
  colorArea.innerHTML = ''
  spec1Area.innerHTML = ''
  spec2Area.innerHTML = ''
  priceArea.innerHTML = ''

  //color area
  let title = document.createElement('H3')
  title.innerHTML = '外觀。挑選喜愛的顏色。'
  colorArea.append(title, document.createElement('br'))

  products[product].outWard.forEach(item => {
    colorArea.innerHTML += `
        <button class="col-5 btn border border-2 rounded text-center color-card" id=${item.color}>
        <img src="./pic/${product}/dot-${item.color}.jpg" alt="" class="w-50 p-3"><br>${item.color}</button>`
  })

  //Spec-1 area
  if (product == 'iPad') {
    let title2 = document.createElement('H3')
    title2.innerHTML = `儲存裝置。 選擇需要的儲存空間大小。<br>`
    spec1Area.append(title2)
    products[product].Spec1.forEach(item => {
      spec1Area.innerHTML += `
          <button class="col-5 btn border border-2 rounded text-center spec-card" id=${item.storage}>
            <H4>${item.storage}</H4><br>
            <p>NT$${item.price}起</p>`
    })
  }
  if (product == 'iPhone') {
    let title2 = document.createElement('H3')
    title2.innerHTML = `儲存裝置。 選擇需要的儲存空間大小。<br>`
    spec1Area.append(title2)
    products[product].Spec1.forEach(item => {
      spec1Area.innerHTML += `
          <button class="col-5 btn border border-2 rounded text-center spec-card" id=${item.storage}>
            <H4>${item.storage}</H4><br>
            <p>NT$${item.price}</p>`
    })
    // iPhone Price area
    priceArea.innerHTML += `
                <div id="price" class="mb-5">
                        <H2>NT$</H2>
                      </div>`
  }
  if (product == 'Mac') {
    let title2 = document.createElement('H3')
    title2.innerHTML = `記憶體。你需要多少記憶體<br>`
    spec1Area.append(title2)
    products[product].Spec1.forEach(item => {
      spec1Area.innerHTML += `
          <button class="col-5 btn border border-2 rounded text-center spec-card" id=${item.storageRAM}>
            <H4>${item.storageRAM}</H4><br>
            <p>NT$${item.price}</p>`
    })
  }

  //Spec-2 area
  if (product == 'iPad') {
    let title3 = document.createElement('H3')
    title3.innerHTML = `連線能力。 選擇連線方式。<br>`
    spec2Area.append(title3)
    products[product].Spec2.forEach(item => {
      spec2Area.innerHTML += `
          <button class="col-5 btn border border-2 rounded text-center spec-card" id=${item.network}>
            <H4>${item.network}</H4><br>
            <p>NT$+${item.price}</p>`
    })
    priceArea.innerHTML += `
    <div id="price" class="mb-5">
            <H2>NT$</H2>
          </div>`
  }
  if (product == 'Mac') {
    let title3 = document.createElement('H3')
    title3.innerHTML = `儲存裝置。 選擇需要的儲存空間大小。<br>`
    spec2Area.append(title3)
    products[product].Spec2.forEach(item => {
      spec2Area.innerHTML += `
          <button class="col-5 btn border border-2 rounded text-center spec-card" id=${item.storageSSD}>
            <H4>${item.storageSSD}</H4><br>
            <p>NT$+${item.price}</p>`
    })
    //Price area
    priceArea.innerHTML += `
        <div id="price" class="mb-5">
                <H2>NT$</H2>
              </div>`
  }

}

//點選顏色更換圖片
function changePic(product) {
  let selectColor = document.querySelectorAll("#color .color-card");
  selectColor.forEach(x => {
    x.addEventListener('click', function () {
      let picColor = this.getAttribute('id')
      pic.src = (`pic/${product}/${product}-${picColor}.jpg`)
      console.log(pic.src)
    })
  })
}
function getSelectPrice(product) {
  let price1
  let price2
  let selectSpec1 = document.querySelectorAll('#spec-1 .spec-card')
  selectSpec1.forEach(x => {
    x.addEventListener('click', function () {
      let selectedItem = this.getAttribute('id')
      console.log(selectedItem)
      if (product === 'iPad') {
        price1 = products[product].Spec1.find(item => item.storage === selectedItem).price
        console.log(price1)
      }
      if (product === 'iPhone') {
        price1 = products[product].Spec1.find(item => item.storage === selectedItem).price
        console.log(price1)
        getiPhonePrice(price1)
      }
      if (product === 'Mac') {
        price1 = products[product].Spec1.find(item => item.storageRAM === selectedItem).price
        console.log(price1)
      }
    })
  })
  let selectSpec2 = document.querySelectorAll('#spec-2 .spec-card')
  selectSpec2.forEach(x => {
    x.addEventListener('click', function () {
      let selectedItem = this.getAttribute('id')
      console.log(selectedItem)
      if (product === 'iPad') {
        price2 = products[product].Spec2.find(item => item.network === selectedItem).price
      }
      if (product === 'Mac') {
        price2 = products[product].Spec2.find(item => item.storageSSD === selectedItem).price
      }
      console.log(price2)
      getTotalPrice( price1, price2)
    })
  })
}


function getTotalPrice(price1, price2) {
  if (price1 != null && price2 != null) {
    priceArea.innerHTML = ''
    let totalPrice = price1 + price2
    priceArea.innerHTML += `<H2>NT$  ${totalPrice}</H2>`
  }
  else return
}

function getiPhonePrice(price1) {
  priceArea.innerHTML = ''
  priceArea.innerHTML += `<H2>NT$  ${price1}</H2>`
}


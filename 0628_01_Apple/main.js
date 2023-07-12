const url = "./Apple_spec.json";

//DOM
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

//declare
let click = false
let lowestPrice
let price1
let price2


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
  let picArea = document.querySelector('.pic-area')
  picArea.classList.remove('col-12')
  picArea.classList.add('col-12', 'col-sm-8')
  pic.classList.remove('w-50')
  pic.classList.add('w-100')
  //匯入產品主圖
  pic.src = (products[product].product.baseImgUrl) //引入的json[引入的"iPad"].product.baseImgUrl
  //產品名稱&最低價格
  jumbotron, H1.innerText = `購買${product}`
  lowestPrice = products[product].Spec1[0].price
  console.log(lowestPrice)
  jumbotron, p.innerText = `NT$${lowestPrice}起`
  //其他需要引入參數的functions
  renderSelectArea(product)
  changePic(product)
  getSelectPrice(product)
  return lowestPrice
}

// Render Select Area
function renderSelectArea(product) {
  colorArea.innerHTML = ''
  spec1Area.innerHTML = ''
  spec2Area.innerHTML = ''
  priceArea.innerHTML = ''
  click = false
  price1 = null
  price2 = null

  //color area
  let title = document.createElement('H3')
  title.innerHTML = '外觀。挑選喜愛的顏色。'
  colorArea.append(title, document.createElement('br'))
  products[product].outWard.forEach(item => {
    colorArea.innerHTML += `
        <button class="col-12 col-sm-4 btn border border-2 rounded text-center color-card" id=${item.color}>
        <img src="./pic/${product}/dot-${item.color}.jpg" alt="" class="w-50 p-3"><br>${item.color}</button>`
  })
  //Spec-1 area
  if (product == 'iPad') {
    let title2 = document.createElement('H3')
    title2.innerHTML = `儲存裝置。 選擇需要的儲存空間大小。<br>`
    spec1Area.append(title2)
    products[product].Spec1.forEach(item => {
      spec1Area.innerHTML += `
          <button class="col-12 col-sm-4 btn border border-2 rounded text-center spec-card disabled" id=${item.storage}>
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
          <button class="col-12 col-sm-4 btn border border-2 rounded text-center spec-card disabled" id=${item.storage}>
            <H4>${item.storage}</H4><br>
            <p>NT$${item.price}</p>`
    })
    // iPhone Price area
    priceArea.innerHTML += `
                <div id="price" class="mb-5">
                <H2>NT${lowestPrice}起</H2>
                      </div>`
  }
  if (product == 'Mac') {
    let title2 = document.createElement('H3')
    title2.innerHTML = `記憶體。你需要多少記憶體<br>`
    spec1Area.append(title2)
    products[product].Spec1.forEach(item => {
      spec1Area.innerHTML += `
          <button class="col-5 btn border border-2 rounded text-center spec-card disabled" id=${item.storageRAM}>
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
          <button class="col-5 btn border border-2 rounded text-center spec-card disabled" id=${item.network}>
            <H4>${item.network}</H4><br>
            <p>NT$+${item.price}</p>`
    })
    priceArea.innerHTML += `
    <div id="price" class="mb-5">
    <H2>NT${lowestPrice}起</H2>
          </div>`
  }
  if (product == 'Mac') {
    let title3 = document.createElement('H3')
    title3.innerHTML = `儲存裝置。 選擇需要的儲存空間大小。<br>`
    spec2Area.append(title3)
    products[product].Spec2.forEach(item => {
      spec2Area.innerHTML += `
          <button class="col-5 btn border border-2 rounded text-center spec-card disabled" id=${item.storageSSD}>
            <H4>${item.storageSSD}</H4><br>
            <p>NT$+${item.price}</p>`
    })
    //Price area
    priceArea.innerHTML += `
        <div id="price" class="mb-5">
                <H2>NT${lowestPrice}起</H2>
              </div>`
  }

}

//點選顏色更換主圖片
function changePic(product) {
  let selectColor = document.querySelectorAll("#color .color-card");
  selectColor.forEach(x => {
    x.addEventListener('click', function () {
      //每次點選，所有卡片外框變回預設顏色
      let CardBorder = document.querySelectorAll("#color .color-card")
      CardBorder.forEach(x => x.classList.remove('border-primary'))
      //更換主圖片
      let picColor = this.getAttribute('id')
      console.log(picColor)
      pic.src = (`pic/${product}/${product}-${picColor}.jpg`)
      console.log(pic.src)
      //點選卡片外框提示變色
      let button = document.getElementById(picColor)
      button.classList.add('border-primary')
      click = true
      //選取顏色後才可選下一個規格
      let spec1card = document.querySelectorAll("#spec-1 .spec-card")
      spec1card.forEach(x => x.classList.remove('disabled'))
    })
    return click
  })
}

//選取規格與取得該規格價錢
function getSelectPrice(product) {
  //第一個規格
  let selectSpec1 = document.querySelectorAll('#spec-1 .spec-card')
  selectSpec1.forEach(x => {
    x.addEventListener('click', function () {
      //每次點選，所有卡片外框變回預設顏色
      let CardBorder = document.querySelectorAll("#spec-1 .spec-card")
      CardBorder.forEach(x => x.classList.remove('border-primary'))
      //點選卡片外框提示變色
      let selectedItem = this.getAttribute('id')
      let button = document.getElementById(selectedItem)
      button.classList.add('border-primary')
      //取得選項價錢
      console.log(selectedItem)
      if (product === 'iPad') {
        price1 = products[product].Spec1.find(item => item.storage === selectedItem).price
        console.log(price1)
        getTotalPrice(click, price1, price2)
      }
      if (product === 'iPhone') {
        price1 = products[product].Spec1.find(item => item.storage === selectedItem).price
        console.log(price1)
        getiPhonePrice(click, price1)
      }
      if (product === 'Mac') {
        price1 = products[product].Spec1.find(item => item.storageRAM === selectedItem).price
        console.log(price1)
        getTotalPrice(click, price1, price2)
      }
      //選取第一個規格後才可選下一個規格
      let spec1card = document.querySelectorAll("#spec-2 .spec-card")
      spec1card.forEach(x => x.classList.remove('disabled'))
      return price1
    })
  })
  //第二個規格 (只只有iPad & Mac)
  let selectSpec2 = document.querySelectorAll('#spec-2 .spec-card')
  selectSpec2.forEach(x => {
    x.addEventListener('click', function () {
      //每次點選，所有卡片外框變回預設顏色
      let CardBorder = document.querySelectorAll("#spec-2 .spec-card")
      CardBorder.forEach(x => x.classList.remove('border-primary'))
      //點選卡片外框提示變色
      let selectedItem = this.getAttribute('id')
      let button = document.getElementById(selectedItem)
      button.classList.add('border-primary')
      console.log(selectedItem)
      //取得選項價錢
      if (product === 'iPad') {
        price2 = products[product].Spec2.find(item => item.network === selectedItem).price
      }
      if (product === 'Mac') {
        price2 = products[product].Spec2.find(item => item.storageSSD === selectedItem).price
      }
      console.log(price2)
      getTotalPrice(click, price1, price2)
      return price2
    })
  })
}

//iPad & Mac 總價
function getTotalPrice(click, price1, price2) {
  if (click === true && price1 != null && price2 != null) {
    priceArea.innerHTML = ''
    let totalPrice = price1 + price2
    priceArea.innerHTML += `<H2>NT$  ${totalPrice}</H2>`
    console.log(totalPrice)
  }
  else return
}

//iPhone 總價
function getiPhonePrice(click, price1) {
  if (click === true && price1 != null) {
    priceArea.innerHTML = ''
    priceArea.innerHTML += `<H2>NT$  ${price1}</H2>`
  }
  else return
}

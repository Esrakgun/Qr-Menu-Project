// Oluştrduğum htmli nerede listelicem menulistte bu sebeple elişmek istedim:
const elements = {
    menuList: document.querySelector("#menu-list"),
    inputs: document.querySelectorAll("#buttons input"),
    detailContainer: document.querySelector("#outlet"),
};
//  console.log(elements);


// Menü Elemanlarını Render Eden Fonskiyon:
// Ara yüzü dinamik şekilde  Render Etmek için ui açtım : 
const renderCards = (data) => {
    // !Data dizisine map ile dönüp ve her bir eleman için html oluşturduk:
    const cardsHtml = data
        .map(
            (item) =>
                `
            <a href='../detail.html?id=${item.id}'
            class="d-flex flex-column text-decoration-none flex-md-row text-dark gap-3" id="card">
            <img class="rounded img-fluid shadow"
            src="${item.img}" >

            <div>
                <div class="d-flex justify-content-between">
                    <h5>${item.title}</h5>
                    <p class="text-success fw-bold">${item.price}₺</p>
                </div>
                <p class="lead">
                   ${item.desc} 
                </p>
            </div>
            </a>
            `
        )
        .join("");

    // console.log(cardsHtml);
    //! Oluşturulan Htmli menuList içerisine atamak için :
    elements.menuList.innerHTML = cardsHtml;

};
// Detay Sayfasını Render Eden Fonksiyon:
const renderDetailPage = (product, outlet) => {
    // Bu fonksiyona verilen outlet parametresinin içeriğini belirlemek için yaptık:
    console.log(product);
    outlet.innerHTML=
        `<div class="d-flex justify-content-between fs-6">
            <a href="./index.html">
                <img width="35px" src="home.png" alt="">
            </a>
            <p>AnaSayfa//${product.category}//${product.title}</p>
        </div>
        <!-- CONTENT -->
        <h1 class="text-center my-4">${product.title}</h1>

        <img style="max-height:1200px "
        class="rounded object-fit-cover shadow"
        src="${product.img}" alt="">

        <h4 class="mt-4">
            Ürünün Kategorisi: <span class="text-success">${product.category}</span>
        </h4>

        <h4 class="mt-4">
            Ürünün Fiyatı:<span class="text-success">${product.price}₺</span>
        </h4>

        <p class="lead">
          ${product.desc}
        </p>`;
};

// Ürün bulunamadığında renderlama yapacak fonksiyon
const renderNotFound = (outlet) => {
  outlet.innerHTML = `
<div class="main_wrapper">
  <div class="main">
    <div class="antenna">
      <div class="antenna_shadow"></div>
      <div class="a1"></div>
      <div class="a1d"></div>
      <div class="a2"></div>
      <div class="a2d"></div>
      <div class="a_base"></div>
    </div>
    <div class="tv">
      <div class="cruve">
        <svg
          class="curve_svg"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 189.929 189.929"
          xml:space="preserve"
        >
          <path
            d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
          ></path>
        </svg>
      </div>
      <div class="display_div">
        <div class="screen_out">
          <div class="screen_out1">
            <div class="screen">
              <span class="notfound_text"> NOT FOUND</span>
            </div>
            <div class="screenM">
              <span class="notfound_text"> NOT FOUND</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lines">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="buttons_div">
        <div class="b1"><div></div></div>
        <div class="b2"></div>
        <div class="speakers">
          <div class="g1">
            <div class="g11"></div>
            <div class="g12"></div>
            <div class="g13"></div>
          </div>
          <div class="g"></div>
          <div class="g"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="base1"></div>
      <div class="base2"></div>
      <div class="base3"></div>
    </div>
      <a href='/' class='not-founded-link'>Ana Sayfaya Git</a>
  </div>
  <div class="text_404">
    <div class="text_4041">4</div>
    <div class="text_4042">0</div>
    <div class="text_4043">4</div>
  </div>

</div>  

  `;
};

export { renderCards, elements, renderDetailPage, renderNotFound };









//Not:
// !olması gereken gercek işlem ${(product.price*30).toFixed(2)} ben db.jos da kolaylıklı kurdugumdan böyle kullanmadım ama orjınal kullanı bu kırmızı yazıdır.!
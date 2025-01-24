// çok sayfalı projelerde eğer pek çok eleman için bir sayfayı Render ediceksek bu noktada sayfa içeriğini dinamik şelilde Render ederiz.Bunu yaparken her bir eleman için URL 'e bır parametre geçilir devamın bu paraöetreye sahıp ürün verileriyle sayfa render edilir.
import fetchMenu from "./api.js";
import { elements, renderDetailPage, renderNotFound } from "./ui.js";

// function write(){
//     console.log(window);
//     console.log(window.location);
// }

// export{write};
// ! Js içindeki URLSearchParams classı parametreleri alıp kullanma noktasında bize kolaylık sağlar.
// const params = new URLSearchParams();
const params = new URLSearchParams(window.location.search);
// console.log(params);
// console.log(params.get("id"));
// !URL 'dan gelen id parametresini numbere çevirmece için:+ kullandım.
 const id =+params.get("id");
// console.log(window.location.search);

document.addEventListener("DOMContentLoaded", async () => {
  // Sayfa yüklendiğinde Api'a istek at ve verileri elde etme:
  const data = await fetchMenu("../db.json");

  // Url'den alınan id'ye sahip ürünü bulma:
  const product = data.find((item) => item.id === id);
   // console.log(product);
    if (!product) {
    // Ürün bulunamadıysa Not Founded içeriğini render et
    renderNotFound(elements.detailContainer);
  } else {
    // Detay verisi bilinen ürün ile arayüzü renderlamak için:
    renderDetailPage(product, elements.detailContainer);
  }
});


// fetchMenu bana getir dedim:

import fetchMenu from "./api.js";
// import { write } from "./detail.js";
import { elements, renderCards } from "./ui.js";

// fetchMenu(); Benim bu fonsksiyona ne zaman ihtiyacım var sayfa yeniden yüklendiğinde :

document.addEventListener("DOMContentLoaded", async () => {
    // Sayfa yüklendiğinpinde api isteği at ve gelen veriyi daya'ya aktar.
    const data = await fetchMenu();

    //  console.log(data);
    // Card elemanlarını render ettik:
    renderCards(data);
    //  console.log(elements);
    // Element içindeki inputları dönüyoruz: 
    elements.inputs.forEach((input) => {
        input.addEventListener('change', () => {
            //   console.log(`İnput Değişti..`);
            // console.log(input);
            const selected = input.id;
            console.log(selected);
            // !Eğer Seçili kategori all ise tüm ürünleri Render et,Başka bir kategori şeçili ise seçili kategorinin ürünlerini Render et:
            if (selected === 'all') { 
                 renderCards(data);
            }
            else {
                const filtered = data.filter((item) => item.category == selected);
                // console.log(filtered);
                renderCards(filtered);
            }
        });

    });
});

// write();
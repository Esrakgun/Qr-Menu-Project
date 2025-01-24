
// !Api2ye-(db.json)'a istek atmak için :
// db.json'a istek attık.
const fetchMenu = async () => {
    const res = await fetch("../db.json");
    // console.log(res);
    // db.json'dan gelen verileri js nesnesine çevir.
    const data = await res.json();
    // console.log(data);
    // Datayı return Et bu sayede data içerisindeki menu dizisini de return etmiş olduk:
    return data.menu;
};


// !fetchMenu fonksiyonunu dışarıda kullanabilmek için export ettik.
export default fetchMenu;
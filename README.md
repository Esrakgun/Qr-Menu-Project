# Qr-Menu-Project: 🍽️🎉
Menü Uygulaması, dinamik içerik render etme, filtreleme ve ürün detaylarına ulaşma özellikleriyle kullanıcı dostu bir deneyim sunar. API'den gelen verilerle içerik oluşturulur ve her bir ürünün detaylarına tıklanarak daha fazla bilgi edinilebilir!

# 📋 Proje Özeti
Dinamik menü render etme 🍴
Ürün filtreleme 🏷️
Ürün detayları sayfası 📄
API'den veri çekme ve JSON işleme 🔄

# ✨ Özellikler
Dinamik İçerik: API'den gelen verilerle menü elemanları dinamik olarak oluşturulur. 🎨
Filtreleme: Kategorilere göre menü elemanlarını filtreleyerek aradığınızı kolayca bulun! 🔍
Ürün Detayları: Her bir ürünün detaylarına ulaşarak, fiyatı, açıklaması ve kategorisi hakkında bilgi edinin. 💬
Hata Yönetimi: Ürün bulunamadığında kullanıcıya dostane bir "Not Found" mesajı gösterilir. 

# 💻 Kullanılan Teknolojiler
HTML5: Yapı ve içerik düzenleme 🧑‍💻
CSS3: Stil ve düzenleme 🎨
JavaScript: Dinamik veri işleme ve DOM manipülasyonu 📜
Fetch API: API çağrıları ile veri çekme 🔌
JSON: Verilerin iletilmesi ve saklanması 📊

# 🤔 Nasıl Çalışır?
Menü Elemanlarını Render Etme: fetchMenu fonksiyonu ile API'den alınan veri ile menü kartları dinamik olarak oluşturulur. 🖼️

Filtreleme: Kullanıcı, menüdeki kategoriler arasında seçim yaparak, sadece seçili kategoriye ait ürünleri görebilir. 🎯

Ürün Detay Sayfası: Kullanıcı bir ürüne tıkladığında, ürünün detay sayfasına yönlendirilir. Bu sayfada, ürünün açıklaması, fiyatı ve kategorisi gibi bilgiler gösterilir. 📌

Hata Durumu: Eğer kullanıcı, geçerli bir ID ile sayfayı ziyaret etmezse, "Not Found" mesajı gösterilir. 🛑

# 📂 Kod Yapısı
1. api.js 🔗
Verileri almak için kullanılan API çağrıları burada yapılır. fetchMenu fonksiyonu, JSON dosyasını okur ve menü verilerini döndürür.

2. ui.js 🎨
UI elemanlarını render eden fonksiyonlar içerir. renderCards fonksiyonu menü kartlarını dinamik olarak render ederken, renderDetailPage fonksiyonu ürün detaylarını ekrana getirir.

3. db.json 📑
Veri kaynağımız olan JSON dosyasının yapısı burada bulunur. Bu dosya, ürünlerin adları, fiyatları, açıklamaları ve görselleri gibi bilgileri içerir.

4. index.html 📝
Ana sayfa ve menü kartlarının gösterildiği HTML dosyası.

5. detail.html 🔍
Ürün detaylarının görüntülendiği sayfa.

# 💬 İletişim
Projeyle ilgili herhangi bir soru veya öneri için aşağıdaki iletişim bilgilerini kullanabilirsiniz:

E-posta:akgundogduesr@gmail.com 📧

# 📸 Ekran Görüntüleri
İşte uygulamanın bazı ekran görüntüleri:

Ana Sayfa (Menü) ve Ürün Detay Sayfası:

https://github.com/user-attachments/assets/421daf09-3d40-441a-bb7f-779e3dcc186f




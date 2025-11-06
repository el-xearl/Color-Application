İşte bu proje için uygun bir **README.md** dosyası örneği (Türkçe ve detaylı):

---

# 🎨 Arkaplan Rengi Değiştirici

Bu basit web projesi, bir butona tıklandığında sayfanın arka plan rengini **rastgele bir HEX renk kodu** ile değiştirir.
Ayrıca, seçilen renk kodu ekranda görüntülenir.
Proje **HTML**, **CSS** ve **JavaScript** kullanılarak hazırlanmıştır.

---

## 📁 Proje Yapısı

```
/arkaplan-rengi-projesi
│
├─ /css
│  └─ style.css        # Sayfanın stil ayarları
│
├─ /js
│  └─ script.js        # Renk değiştirme fonksiyonları
│
├─ index.html          # Ana HTML dosyası
└─ README.md           # Proje açıklaması
```

---

## 🧩 Kullanılan Teknolojiler

* **HTML5** → Sayfa yapısı oluşturmak için
* **CSS3** → Görsel düzenleme, buton ve metin stilleri
* **JavaScript (Vanilla)** → Rastgele renk üretimi ve etkileşim

---

## ⚙️ Çalışma Mantığı

1. **HTML** tarafında bir `buton` ve renk kodunu göstermek için bir `span` bulunur.
2. **JavaScript**, butona tıklanınca:

   * `getRandomNumber()` fonksiyonu ile 0–15 arasında rastgele bir sayı üretir.
   * Bu sayılar `hex` dizisindeki karakterlerle eşleştirilerek bir HEX renk kodu oluşturulur.
   * `body` etiketinin `backgroundColor` özelliği değiştirilir.
   * Yeni renk kodu ekranda gösterilir.
3. **CSS** ise sayfanın ortalanmasını ve estetik görünümünü sağlar.

---

## 🧠 JavaScript Fonksiyonları

| Fonksiyon             | Açıklama                                                                |
| --------------------- | ----------------------------------------------------------------------- |
| `getRandomNumber()`   | 0 ile 15 arasında rastgele bir sayı döndürür.                           |
| `getRandomHexColor()` | `#` ile başlayan 6 karakterlik bir rastgele HEX renk kodu üretir.       |
| `changeColor()`       | Üretilen HEX kodunu sayfa arka planına uygular ve kodu ekrana yazdırır. |

---

## 🎯 Kullanım

1. Projeyi bilgisayarına klonla veya indir:

   ```bash
   git clone https://github.com/kullaniciadi/arkaplan-rengi-projesi.git
   ```
2. `index.html` dosyasını bir tarayıcıda aç.
3. “**Tıkla!**” butonuna basarak rastgele renkleri dene.

---



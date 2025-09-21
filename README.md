# 👋 Merhaba!

Eğer buraya kadar geldiysen, selam! 👨‍💻  
Ben bu projeyi geliştirirken **yazılımcı kafasıyla**, temiz ve sürdürülebilir bir yapı hedefledim. Hem kullanıcı deneyimi hem de kod okunabilirliği önceliğim oldu. Kodların anlaşılması ve yorumlanılması için özellikle birer birer yorum satırları ile açıklamalar yaptım.

---

## 🚀 Kullanılan Teknolojiler

- ![Next.js](https://img.shields.io/badge/NextJS-000000?style=for-the-badge&logo=next.js&logoColor=white) Next.js
- ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) TypeScript
- ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-0055FF?style=for-the-badge) Framer Motion
- ![Radix UI](https://img.shields.io/badge/Radix%20UI-000000?style=for-the-badge&logo=radix-ui&logoColor=white) Radix UI

---

## 📄 Proje Hakkında

Bu proje **Dinamik ve Etkileşimli Rapkology Sitesi** örneğidir.

### Ana Özellikler:

- **Ana Sayfa ve Blog Detail sayfaları** tam işlevsel.
- Tıklanabilir alanlar, listelenebilir içerikler ve **arama opsiyonları** (Header harici) çalışır.
- **Filtreleme işlevleri** tam entegre, seçilen filtreye göre içerikler güncelleniyor.
- Tüm animasyonlar ve efektler **Framer Motion ile** uygulanmıştır.
- UI dökümantasyonu yetersiz olduğundan bazı tasarım kararlarını geliştirici gözüyle **optimize ettim**.
- SOLID prensiplerine uygun: **her component tek görev, tek işlev mantığında** oluşturuldu.

### Kullanıcı Deneyimi:

- Blog kartları ve trend içerikler interaktif ve animasyonlu.
- Responsive tasarım: mobil ve desktop deneyimleri optimize edildi.
- Filtreleme ve listeleme işlevleri kullanıcıyı yormayacak şekilde tasarlandı.
- Navigasyon ve breadcrumb yapıları ile sayfa hiyerarşisi net.

---

Bu projeyi incelerken, **hem kod yapısına hem de UX tasarımına** odaklandığımı göreceksiniz.  
Her component **tek bir sorumluluk mantığında**, tekrar kullanılabilir şekilde tasarlandı.

---

### TEKNİK

**İlgili Sayfa**
- 2 adet sayfa bulunmakta, Ana sayfa App/page.tsx, Blog Detay sayfası App/blog/[Slug]/page.tsx ile yönlendirilir.

**İlgili Component**
- Her Sectionun kendi componenti veya ortak component bulunur, src/components/(ilgili alan)/ şeklinde componentlerini görebilirsiniz (örn: src/components/header). Ortak Componentler UI içindedir.

**Component veya Sayfa Tasarımları**
- Her Component, Section ve Sayfanın tasarım dosyası ayrıdır, src/styles/(ilgili alan)/ şeklinde tasarım dosyalarını görüntüleyebilirsiniz (örn: src/styles/header). Ortak Componentlerin tasarımları UI içerisindedir, kendi alanı olmayan dosyalar src/styles içindedir.

**Component veya Sayfa Tip Propsları**
- Her Component, Section ve Sayfanın tip dosyası ayrıdır, src/types/ şeklinde tip dosyalarını görüntüleyebilirsiniz.

**Statik Veriler ve Mockdata**
- Sistem içersinde kullanılan sıralama fonksiyonlarıyla statik veriler dinamik oluşturuluyor, bazı veriler mockdatadan anlık çekiliyor, Her Section ve Componentin verisi ayrı dosya olarak src/const/ içerisindedir.

**SEO Metadata**
- 2 Sayfamızın MetaDataları için src/meta üzerinden dinamik veya statik oalrak düzenlenebilir, Blog Detay sayfası metasını dinamik oluşturabilmektedir.

**Ek Paketler**
- Animasyonlar için Framer Motion
- Modal,Button,Input için Radix UI

**Teşekkürler!** 👏

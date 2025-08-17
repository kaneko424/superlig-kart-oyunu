# Süper Lig Kart Oyunu – JSON'dan Veri
Bu sürüm, `teams.json` dosyasını **fetch** ederek takım ve futbolcu kartlarını çeker.
- API anahtarı gerekmez.
- `teams.json` dosyasını repo içinde dilediğin gibi genişletebilirsin.

## Kurulum
1) Bu klasörü repo köküne yükle (`index.html`, `manifest.json`, `sw.js`, `teams.json`).
2) Settings → Pages → Deploy from branch (main / root).
3) Aç: `https://<kullanici>.github.io/<repo>/`

## Geliştirme
- Oyuncu ve takım `rating` alanları demo amaçlıdır; JSON'u istediğin gibi güncelle.
- İleride gerçek API kullanacaksan, GitHub Pages üzerinde anahtar saklayamayacağın için bir **proxy** sunucu gerekebilir.

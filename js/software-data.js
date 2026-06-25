/* =============================================
   PAX SYSTEMIC — Software Data
   ============================================= */

const SOFTWARE_PRODUCTS = [
    {
        id: 'bstreamer',
        category: 'medya',
        catName: 'Medya Araçları',
        title: 'B-Streamer',
        subtitle: 'Gelişmiş Medya İndirme & Dönüştürme Yöneticisi',
        shortDesc: 'Gelişmiş medya indirme ve çoklu format dönüştürme yöneticisi.',
        fullDesc: 'Yüksek performanslı medya yöneticisi. Minimalist arayüzü sayesinde arka planda kaynak tüketmeden çalışır ve kompleks indirme işlemlerini sistemleştirir.',
        icon: '../gorseller/icons/bstreamer.png',
        iconEmoji: '⬇️',
        features: ['Çoklu Format (MP4, MP3) Dönüşüm Desteği', 'Youtube Hızlı Müzik ve Video İndirme', 'Düşük İşlemci ve RAM Kullanımı'],
        images: ['../gorseller/bstreamer/1.png'],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/B-Streamer/B_Streamer_Installer.exe',
        isDev: false,
        changelog: [
            { version: 'v1.2.0', date: 'Mayıs 2026', notes: ['İndirme motoru stabilize edildi.', 'Arayüz hızı artırıldı.'] },
            { version: 'v1.0.0', date: 'Mart 2026',  notes: ['İlk stabil sürüm yayınlandı.'] }
        ]
    },
    {
        id: 'isletme',
        category: 'yonetim',
        catName: 'Yönetim / İşletme',
        title: 'NetKasa Pro',
        subtitle: 'Kurumsal Yönetim & Muhasebe Paneli',
        shortDesc: 'Kurumsal veriler için modern arayüzlü envanter yönetim sistemi.',
        fullDesc: 'İşletmenizin finansal damarlarını tek merkezden yönetin. Pax Systemic ile geliştirilen bu sistem, envanter hareketlerinden cari hesap takibine kadar her süreci dijitalleştirir.',
        icon: '../gorseller/icons/netkasa.png',
        iconEmoji: '🏢',
        features: ['Minimalist Dark Arayüz', 'Anlık Veritabanı Senkronizasyonu', 'Gelişmiş Filtreleme ve Raporlama', 'SQL Tabanlı Güçlü Veri Güvenliği'],
        images: ['../gorseller/isletme.png'],
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=paxsystemic@gmail.com&su=NetKasa%20Pro%20Lisans%20Talebi&body=Merhaba%2C%20NetKasa%20Pro%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
        isDev: false,
        isRequest: true,
        changelog: [
            { version: 'v2.5', date: 'Mayıs 2026', notes: ['UI/UX tamamen modernize edildi.', 'Hız %40 artırıldı.'] }
        ]
    },
    {
        id: 'systemic',
        category: 'sistem',
        catName: 'Sistem Araçları',
        title: 'Systemic Pro',
        subtitle: 'Hepsi Bir Arada Optimizasyon Aracı',
        shortDesc: 'Cihaz temizliği, hız testi ve sistem bilgilerini içeren hepsi bir arada araç.',
        fullDesc: 'Sisteminizi hızlı, temiz ve kontrol altında tutan profesyonel bir araç setidir. Cihaz temizliği, anlık ağ hız testi ve detaylı donanım izleme özelliklerini içerir.',
        icon: '../gorseller/icons/systemic.png',
        iconEmoji: '⚙️',
        features: ['Akıllı Kayıt Defteri Temizleme', 'Anlık Ağ Gecikme Analizi', 'Detaylı Donanım İzleme', 'Tek Tıkla Sistem Hızlandırma'],
        images: ['../gorseller/systemic/1.png','../gorseller/systemic/2.png','../gorseller/systemic/3.png','../gorseller/systemic/4.png','../gorseller/systemic/5.png','../gorseller/systemic/6.png'],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/SystemicPro/SystemicPro_Installer.exe',
        isDev: false,
        changelog: [
            { version: 'v1.1.0', date: 'Mayıs 2026', notes: ['Hız testi algoritması güncellendi.'] }
        ]
    },
    {
        id: 'makroapp',
        category: 'sistem',
        catName: 'Sistem Araçları',
        title: 'MakroApp',
        subtitle: 'Akıllı Klavye & Fare Otomasyonu',
        shortDesc: 'Tekrarlayan işlerinizi saniyeler içinde halledin. Klavye ve fare komutlarınızı otomatize edin.',
        fullDesc: 'MakroApp, kullanıcıların klavye ve fare hareketlerini özelleştirilebilir senaryolarla otomatize etmesini sağlayan profesyonel bir araçtır. Oto-click ve otomatik metin girişi gibi işlemleri yüksek performansla gerçekleştirir.',
        icon: '../gorseller/icons/makroapp.png',
        iconEmoji: '⌨️',
        features: [
            'Klavye ve Fare (Mouse 4/5) Tetikleyici Desteği',
            'Otomatik Metin Yapıştırma ve Tuş Gönderme',
            'Süre ve Adet Bazlı Gelişmiş Oto-Click',
            'Minimalist ve Düşük Kaynak Tüketimli Arayüz',
            'JSON Tabanlı Otomatik Ayar Kaydı'
        ],
        images: ['../gorseller/makroapp/1.png','../gorseller/makroapp/2.png','../gorseller/makroapp/3.png'],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/MakroAPP/MakroAPP_Installer.exe',
        isDev: false,
        changelog: [
            { version: 'v1.0.0', date: 'Mayıs 2026', notes: ['İlk sürüm yayınlandı.', 'Klavye ve mouse kancalama sistemi eklendi.'] }
        ]
    },
    {
        id: 'pomodoropro',
        category: 'medya',
        catName: 'Odaklanma Araçları',
        title: 'Pomodoro Pro',
        subtitle: 'Gelişmiş Odaklanma & Ses Mikseri',
        shortDesc: 'Maksimum odaklanma için tasarlandı. Pomodoro sayacı, ortam sesleri ve YouTube müzik entegrasyonu.',
        fullDesc: 'Pomodoro Pro, derin çalışma (deep work) seanslarınız için geliştirilmiş hepsi bir arada bir asistandır. Arka planda çalışan reklamsız YouTube oynatıcısı ve ekranın köşesinde duran minimalist Mini Modu ile dikkatinizi dağıtmadan verimliliğinizi artırır.',
        icon: '../gorseller/icons/pomodoro.png',
        iconEmoji: '🍅',
        features: [
            'Özelleştirilebilir Pomodoro ve Mola Zamanlayıcısı',
            'Minimalist "Mini Mod" ile Ekranda Yer Kaplamayan Tasarım',
            'Yağmur, Şömine, Kafe vb. Çoklu Ortam Sesi Mikseri',
            'Gizli Pencerede Arka Plan YouTube Müzik Çalar',
            'Zamanlayıcı Bitiminde Otomatik Bilgisayar Kapatma',
            'Rahatlatıcı 4-7-8 Nefes Egzersizi Modülü'
        ],
        images: ['../gorseller/PomodoroPro/1.png','../gorseller/PomodoroPro/2.png','../gorseller/PomodoroPro/3.png','../gorseller/PomodoroPro/4.png','../gorseller/PomodoroPro/5.png'],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/Pomodoro/PomodoroPRO_Installer.exe',
        isDev: false,
        changelog: [
            { version: 'v1.0.0', date: 'Haziran 2026', notes: ['İlk sürüm yayınlandı.', 'Crossfade özellikli kesintisiz ses motoru eklendi.', 'YouTube arka plan oynatıcısı entegre edildi.'] }
        ]
    },
    {
        id: 'audiopro',
        category: 'medya',
        catName: 'Ses & Medya Araçları',
        title: 'Audio Editor',
        subtitle: 'Gelişmiş Ses Düzenleme & Optimizasyon',
        shortDesc: 'Gerçek zamanlı EQ, spektral gürültü giderme ve akıllı döngü (Smart Loop) ile profesyonel ses düzenleyici.',
        fullDesc: 'AudioPro, karmaşık stüdyo yazılımlarına gerek kalmadan ses dosyalarınızı optimize etmenizi sağlar. Gerçek zamanlı 7-bant EQ ile frekansları anında ayarlayabilir, spektral gürültü giderme ile dip sesleri temizleyebilirsiniz.',
        icon: '../gorseller/icons/audio.png',
        iconEmoji: '🎛️',
        features: [
            'Gerçek Zamanlı 7-Bant Parametrik EQ',
            'Spektral Gürültü Giderme (Noise Reduction)',
            'Akıllı Döngü (Kusursuz Loop) Analiz Motoru',
            'İnteraktif ve Yakınlaştırılabilir Dalga Formu',
            'Fade in/out ve Crossfade Destekli Dışa Aktarma',
            'WAV, MP3 ve M4A Formatlarında Kayıt'
        ],
        images: ['../gorseller/AudioEditor/1.png','../gorseller/AudioEditor/2.png','../gorseller/AudioEditor/3.png','../gorseller/AudioEditor/4.png'],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/AudioEditor/AudioEditor_Installer.exe',
        isDev: false,
        changelog: [
            { version: 'v1.0.0', date: 'Temmuz 2026', notes: ['İlk stabil sürüm yayınlandı.', 'Gerçek zamanlı EQ motoru eklendi.', 'Smart Loop algoritması optimize edildi.'] }
        ]
    },
    {
        id: 'paxvault',
        category: 'yonetim',
        catName: 'Güvenlik & Yönetim',
        title: 'Password Vault',
        subtitle: 'Ultra Güvenli Yerel Şifre Kasası',
        shortDesc: 'Şifrelerinizi yerel diskinizde AES-GCM ile şifreleyin. 2FA, ekran kaydı koruması ve otomatik kilit.',
        fullDesc: 'Password Vault, bulut tabanlı şifre yöneticilerinin aksine verilerinizi cihazınızın dışına asla çıkarmaz. 15 Saniyelik otomatik pano temizleyicisi ve Google Authenticator (2FA) desteği ile dijital kimliklerinizi askeri düzeyde korur.',
        icon: '../gorseller/icons/vault.png',
        iconEmoji: '🔐',
        features: [
            'AES-GCM 256-bit ve PBKDF2 Şifreleme Altyapısı',
            'Google Authenticator / TOTP (2FA) Desteği',
            '15 Saniyelik Otomatik Pano (Clipboard) Temizleme',
            'Hareketsizlik Algılayıcı ve Otomatik Kilit',
            'Kurtarma Anahtarı ve Nükleer Sıfırlama'
        ],
        images: ['../gorseller/PasswordVault/1.png','../gorseller/PasswordVault/2.png','../gorseller/PasswordVault/3.png','../gorseller/PasswordVault/4.png'],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/PasswordVault/PasswordVault_Installer.exe',
        isDev: false,
        changelog: [
            { version: 'v2.0.0', date: 'Eylül 2026', notes: ['İlk sürüm yayınlandı.', 'Windows DPAPI ile güvenli yedekleme eklendi.', 'Ekran okuyucu koruması aktif edildi.'] }
        ]
    },
    {
        id: 'paxdownloader',
        category: 'medya',
        catName: 'Medya & İndirme Araçları',
        title: 'PAX Downloader',
        subtitle: 'Yeni Nesil Multi-Thread Evrensel İndirme Yöneticisi',
        shortDesc: 'Gelişmiş multi-thread indirme mimarisi, tarayıcı uzantısı entegrasyonu ve akıllı mini ilerleme paneli.',
        fullDesc: 'PAX Downloader, en yüksek veri aktarım hızlarına ulaşmak için optimize edilmiş HttpClient çekirdeği, aria2c entegrasyonu ve multi-thread paralel bağlantı mimarisini temel alan modern bir indirme yöneticisidir. Proje aktif geliştirme aşamasındadır.',
        icon: '../gorseller/icons/downloader.png',
        iconEmoji: '📡',
        features: [
            'Evrensel İndirmeler İçin Ultra Hızlı Çekirdek (32 Paralel Bağlantı)',
            'Sosyal Medya Videoları İçin aria2c Entegrasyonu',
            'Tarayıcı Uzantısından Gelen Medya Akışlarını Anlık Yakalama',
            'Akıllı Mini Panel ile Masaüstü İndirme Takibi'
        ],
        images: [],
        link: '#',
        isDev: true,
        changelog: [
            { version: 'dev', date: '2026', notes: ['Geliştirme aşamasında.'] }
        ]
    }
];

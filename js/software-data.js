/* =============================================
   PAX SYSTEMIC — Software Product Data
   Resimler: GitHub raw URL (Cloudflare'de de çalışır)
   ============================================= */

const BASE = 'https://raw.githubusercontent.com/barisys1999/pax-systemic/main/gorseller/';

const SOFTWARE_PRODUCTS = [
    {
        id: 'bstreamer',
        category: 'medya',
        catName: 'Medya Araçları',
        title: 'B-Streamer',
        subtitle: 'Gelişmiş Medya İndirme & Dönüştürme Yöneticisi',
        shortDesc: 'Gelişmiş medya indirme ve çoklu format dönüştürme yöneticisi.',
        fullDesc: 'Yüksek performanslı medya yöneticisi. Minimalist arayüzü sayesinde arka planda kaynak tüketmeden çalışır ve kompleks indirme işlemlerini sistemleştirir.',
        icon: null,
        iconEmoji: '⬇️',
        features: [
            'Çoklu Format (MP4, MP3) Dönüşüm Desteği',
            'Youtube Hızlı Müzik ve Video İndirme',
            'Düşük İşlemci ve RAM Kullanımı'
        ],
        images: [BASE + 'bstreamer/1.png'],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/B-Streamer/B_Streamer_Installer.exe',
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
        icon: BASE + 'netkasa/netkasaprologo.png',
        iconEmoji: '🏢',
        features: [
            'Minimalist Dark Arayüz',
            'Anlık Veritabanı Senkronizasyonu',
            'Gelişmiş Filtreleme ve Raporlama',
            'SQL Tabanlı Güçlü Veri Güvenliği'
        ],
        images: [BASE + 'netkasa/1.png'],
        link: 'https://mail.google.com/mail/?view=cm&fs=1&to=paxsystemic@gmail.com&su=NetKasa%20Pro%20Lisans%20Talebi&body=Merhaba%2C%20NetKasa%20Pro%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
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
        icon: BASE + 'systemic/systemicprologo.png',
        iconEmoji: '⚙️',
        features: [
            'Akıllı Kayıt Defteri Temizleme',
            'Anlık Ağ Gecikme Analizi',
            'Detaylı Donanım İzleme',
            'Tek Tıkla Sistem Hızlandırma'
        ],
        images: [
            BASE + 'systemic/1.png',
            BASE + 'systemic/2.png',
            BASE + 'systemic/3.png',
            BASE + 'systemic/4.png',
            BASE + 'systemic/5.png',
            BASE + 'systemic/6.png'
        ],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/SystemicPro/SystemicPro_Installer.exe',
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
        fullDesc: 'MakroApp, kullanıcıların klavye ve fare hareketlerini özelleştirilebilir senaryolarla otomatize etmesini sağlayan profesyonel bir araçtır.',
        icon: BASE + 'makroapp/MakroApplogo.png',
        iconEmoji: '⌨️',
        features: [
            'Klavye ve Fare (Mouse 4/5) Tetikleyici Desteği',
            'Otomatik Metin Yapıştırma ve Tuş Gönderme',
            'Süre ve Adet Bazlı Gelişmiş Oto-Click',
            'Minimalist ve Düşük Kaynak Tüketimli Arayüz',
            'JSON Tabanlı Otomatik Ayar Kaydı'
        ],
        images: [
            BASE + 'makroapp/1.png',
            BASE + 'makroapp/2.png',
            BASE + 'makroapp/3.png'
        ],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/MakroAPP/MakroAPP_Installer.exe',
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
        fullDesc: 'Pomodoro Pro, derin çalışma seanslarınız için geliştirilmiş hepsi bir arada bir asistandır. Arka planda çalışan reklamsız YouTube oynatıcısı ve minimalist Mini Modu ile dikkatinizi dağıtmadan verimliliğinizi artırır.',
        icon: BASE + 'PomodoroPro/Pomodorologo.png',
        iconEmoji: '🍅',
        features: [
            'Özelleştirilebilir Pomodoro ve Mola Zamanlayıcısı',
            'Minimalist "Mini Mod" ile Ekranda Yer Kaplamayan Tasarım',
            'Yağmur, Şömine, Kafe vb. Çoklu Ortam Sesi Mikseri',
            'Gizli Pencerede Arka Plan YouTube Müzik Çalar',
            'Zamanlayıcı Bitiminde Otomatik Bilgisayar Kapatma',
            'Rahatlatıcı 4-7-8 Nefes Egzersizi Modülü'
        ],
        images: [
            BASE + 'PomodoroPro/1.png',
            BASE + 'PomodoroPro/2.png',
            BASE + 'PomodoroPro/3.png',
            BASE + 'PomodoroPro/4.png',
            BASE + 'PomodoroPro/5.png'
        ],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/PomodoroPro/PomodoroPro_Installer.exe',
        changelog: [
            { version: 'v2.1.0', date: 'Mayıs 2026', notes: ['Mini mod eklendi.', 'YouTube entegrasyonu güçlendirildi.'] }
        ]
    },
    {
        id: 'audiopro',
        category: 'medya',
        catName: 'Medya Araçları',
        title: 'Audio Editor',
        subtitle: 'Profesyonel Ses Düzenleme & Miksaj Aracı',
        shortDesc: 'Ses kaydetme, düzenleme ve format dönüştürme için profesyonel masaüstü aracı.',
        fullDesc: 'Audio Editor, Windows için tasarlanmış hafif ve güçlü bir ses düzenleme yazılımıdır. Dalga formu görüntüleme, çok parçalı düzenleme ve gelişmiş efekt zinciriyle profesyonel sonuçlar elde edin.',
        icon: BASE + 'AudioEditor/AudioForgelogo.png',
        iconEmoji: '🎛️',
        features: [
            'Çok Parçalı (Multi-Track) Ses Düzenleme',
            'Gerçek Zamanlı Dalga Formu Görüntüleme',
            'MP3, WAV, FLAC, OGG Format Desteği',
            'Gürültü Azaltma ve EQ Filtreleri',
            'Toplu Dosya İşleme (Batch Processing)'
        ],
        images: [
            BASE + 'AudioEditor/1.png',
            BASE + 'AudioEditor/2.png',
            BASE + 'AudioEditor/3.png',
            BASE + 'AudioEditor/4.png'
        ],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/AudioEditor/AudioEditor_Installer.exe',
        changelog: [
            { version: 'v1.3.0', date: 'Mayıs 2026', notes: ['EQ filtresi güncellendi.', 'Batch processing eklendi.'] }
        ]
    },
    {
        id: 'paxvault',
        category: 'yonetim',
        catName: 'Güvenlik Araçları',
        title: 'Password Vault',
        subtitle: 'Şifreleriniz İçin Yerel & Güvenli Kasa',
        shortDesc: 'Tüm şifrelerinizi şifreli veritabanında saklayan, bulut gerektirmeyen güvenlik kasası.',
        fullDesc: 'Password Vault, AES-256 şifreleme ile tüm parolalarınızı cihazınızda yerel olarak saklar. Bulut bağlantısı gerektirmez, internet olmadan da çalışır. Güçlü şifre üreticisi ve kategori yönetimi ile tüm dijital kimliklerinizi güvende tutun.',
        icon: BASE + 'PasswordVault/PasswordVault1logo.png',
        iconEmoji: '🔐',
        features: [
            'AES-256 Askeri Düzey Şifreleme',
            'Bulut Bağlantısı Gerektirmez — %100 Yerel',
            'Güçlü Şifre Üreticisi (Özelleştirilebilir)',
            'Kategori ve Etiket Tabanlı Organizasyon',
            'Tek Tıkla Kopyalama ve Otomatik Temizleme'
        ],
        images: [
            BASE + 'PasswordVault/1.png',
            BASE + 'PasswordVault/2.png',
            BASE + 'PasswordVault/3.png',
            BASE + 'PasswordVault/4.png'
        ],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/PasswordVault/PasswordVault_Installer.exe',
        changelog: [
            { version: 'v1.2.0', date: 'Mayıs 2026', notes: ['Şifre güçlük göstergesi eklendi.'] }
        ]
    },
    {
        id: 'paxdownloader',
        category: 'medya',
        catName: 'Medya Araçları',
        title: 'PAX Downloader',
        subtitle: 'Akıllı Dosya & İçerik İndirici',
        shortDesc: 'Çoklu kaynak destekli, hız yönetimli gelişmiş dosya indirme yöneticisi.',
        fullDesc: 'PAX Downloader, indirme işlemlerinizi hızlandırmak ve organize etmek için tasarlanmış güçlü bir yöneticidir. Parçalı indirme, bant genişliği kontrolü ve otomatik dosya sınıflandırma özellikleri sunar.',
        icon: BASE + 'paxdownloader/paxdownloader.png',
        iconEmoji: '📥',
        features: [
            'Parçalı İndirme ile Maksimum Hız',
            'Bant Genişliği (Bandwidth) Kontrolü',
            'Otomatik Dosya Türü Sınıflandırması',
            'İndirme Kuyruğu ve Zamanlama',
            'Tarayıcı Eklentisi Entegrasyonu'
        ],
        images: [
            BASE + 'paxdownloader/1.png',
            BASE + 'paxdownloader/2.png',
            BASE + 'paxdownloader/3.png'
        ],
        link: '#',
        isDev: true,
        changelog: [
            { version: 'v0.8.0 (Beta)', date: 'Haziran 2026', notes: ['Parçalı indirme motoru tamamlandı.'] }
        ]
    },
    {
        id: 'paxasistan',
        category: 'sistem',
        catName: 'Yapay Zeka & Sistem',
        title: 'PAX Asistan',
        subtitle: 'Otonom Masaüstü Yapay Zeka Asistanı',
        shortDesc: 'Yerel AI (Ollama), 2 katmanlı ses tanıma (Vosk+Whisper) ve el takibi sunan interaktif robot asistan.',
        fullDesc: 'PAX Asistan; farenizi takip eden dinamik bir robot yüze sahip, tamamen çevrimdışı çalışabilen otonom bir sistem asistanıdır. Gelişmiş algılama mimarisi ile sizi hem duyar, hem görür, hem de anlar.',
        icon: BASE + 'paxasistan/Pax%20Asistanlogo.png',
        iconEmoji: '🤖',
        features: [
            'Vosk (hızlı) ve Whisper (yüksek doğruluk) paralel ses motoru',
            'Ollama LLM: Qwen/Llama modelleriyle doğal dil işleme',
            'MediaPipe üzerinden jest algılama',
            'Fare imlecini takip eden gözler ve otomatik mimikler',
            'Gelişmiş Komut Yöneticisi ve Sabit Dinleme Modu'
        ],
        images: [BASE + 'paxasistan/1.png'],
        link: '#',
        isDev: true,
        changelog: [
            { version: 'v2.5', date: 'Güncel', notes: ['Ollama LLM entegrasyonu tamamlandı.'] },
            { version: 'v1.0', date: 'Başlangıç', notes: ['Vosk ve Whisper ses motorları entegre edildi.'] }
        ]
    },
    {
        id: 'paxlink',
        category: 'sistem',
        catName: 'İletişim & Nöral Ağ',
        title: 'Pax Link',
        subtitle: 'Nöral Bağlantı Tabanlı Sesli İletişim',
        shortDesc: 'WebRTC tabanlı, Opus codec destekli yüksek sadakatli sesli iletişim platformu.',
        fullDesc: 'Pax Link, Pax Systemic ekosisteminin iletişim katmanıdır. Opus codec entegrasyonlu ses işleme (DSP), WebRTC üzerinden gerçek zamanlı sesli veri aktarımı ve socket.io tabanlı otonom çağrı yönetimini içerir.',
        icon: null,
        iconEmoji: '📡',
        features: [
            'WebRTC P2P (ICE/STUN/TURN) Sinyalleşme ve Görüşme Yönetimi',
            'Opus Tabanlı Düşük Gecikmeli Ses İşleme',
            'Socket.io ile Otonom Çağrı Sinyalleşme Motoru',
            'Gelişmiş Gürültü Engelleme, EQ ve Dinamik Gain Kontrolü',
            'Minimalist, Kaynak Dostu Masaüstü İstemcisi'
        ],
        images: [
            BASE + 'paxlink/1.png',
            BASE + 'paxlink/2.png',
            BASE + 'paxlink/3.png',
            BASE + 'paxlink/4.png',
            BASE + 'paxlink/5.png'
        ],
        link: '#',
        isDev: true,
        changelog: [
            { version: 'v0.1.0 (Alfa)', date: 'Mayıs 2026', notes: ['WebRTC sinyalleşme katmanı tamamlandı.'] }
        ]
    }
];

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
        fullDesc: 'MakroApp, kullanıcıların klavye ve fare hareketlerini özelleştirilebilir senaryolarla otomatize etmesini sağlayan profesyonel bir araçtır. Oto-click ve otomatik metin girişi gibi işlemleri yüksek performansla gerçekleştirir.',
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
        fullDesc: 'Pomodoro Pro, derin çalışma (deep work) seanslarınız için geliştirilmiş hepsi bir arada bir asistandır. Arka planda çalışan reklamsız YouTube oynatıcısı ve ekranın köşesinde duran minimalist Mini Modu ile dikkatinizi dağıtmadan verimliliğinizi artırır.',
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
        fullDesc: 'AudioPro, karmaşık stüdyo yazılımlarına gerek kalmadan ses dosyalarınızı optimize etmenizi sağlar. Gerçek zamanlı 7-bant EQ ile frekansları anında ayarlayabilir, spektral gürültü giderme ile dip sesleri temizleyebilir ve Akıllı Döngü Motoru (Smart Loop) ile müzik veya ortam sesleri için kusursuz kesim noktalarını saniyeler içinde bulabilirsiniz.',
        icon: BASE + 'AudioEditor/AudioForgelogo.png',
        iconEmoji: '🎛️',
        features: [
            'Gerçek Zamanlı 7-Bant Parametrik EQ (Ekolayzer)',
            'Spektral Gürültü Giderme (Noise Reduction)',
            'Akıllı Döngü (Kusursuz Loop) Analiz Motoru',
            'İnteraktif ve Yakınlaştırılabilir Dalga Formu (Waveform)',
            'Fade in/out ve Crossfade Destekli Dışa Aktarma',
            'WAV, MP3 ve M4A Formatlarında Kayıt İmkanı'
        ],
        images: [
            BASE + 'AudioEditor/1.png',
            BASE + 'AudioEditor/2.png',
            BASE + 'AudioEditor/3.png',
            BASE + 'AudioEditor/4.png'
        ],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/AudioEditor/AudioEditor_Installer.exe',
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
        shortDesc: 'Şifrelerinizi yerel diskinizde AES-GCM ile şifreleyin. 2FA, ekran kaydı koruması ve otomatik kilit ile tam güvenlik.',
        fullDesc: 'Password Vault, bulut tabanlı şifre yöneticilerinin aksine verilerinizi cihazınızın dışına asla çıkarmaz. 15 Saniyelik otomatik pano (clipboard) temizleyicisi ve Google Authenticator (2FA) desteği ile dijital kimliklerinizi askeri düzeyde korur.',
        icon: BASE + 'PasswordVault/PasswordVault1logo.png',
        iconEmoji: '🔐',
        features: [
            'AES-GCM 256-bit ve PBKDF2 Şifreleme Altyapısı',
            'Google Authenticator / TOTP (2FA) Desteği',
            '15 Saniyelik Otomatik Pano (Clipboard) Temizleme',
            'Hareketsizlik (AFK) Algılayıcı ve Otomatik Kilit',
            'Acil Durumlar İçin Kurtarma Anahtarı ve Nükleer Sıfırlama'
        ],
        images: [
            BASE + 'PasswordVault/1.png',
            BASE + 'PasswordVault/2.png',
            BASE + 'PasswordVault/3.png',
            BASE + 'PasswordVault/4.png'
        ],
        link: 'https://github.com/barisys1999/pax-systemic/releases/download/PasswordVault/PasswordVault_Installer.exe',
        changelog: [
            { version: 'v2.0.0', date: 'Eylül 2026', notes: ['İlk sürüm yayınlandı.', 'Windows DPAPI ile güvenli yedekleme (.pvault) eklendi.', 'Ekran okuyucu koruması (WDA_MONITOR) aktif edildi.'] }
        ]
    },
    {
        id: 'paxdownloader',
        category: 'medya',
        catName: 'Medya & İndirme Araçları',
        title: 'PAX Downloader',
        subtitle: 'Yeni Nesil Multi-Thread Evrensel İndirme Yöneticisi',
        shortDesc: 'Gelişmiş multi-thread indirme mimarisi, tarayıcı uzantısı entegrasyonu ve akıllı mini ilerleme paneli.',
        fullDesc: 'PAX Downloader, en yüksek veri aktarım hızlarına ulaşmak için optimize edilmiş HttpClient çekirdeği, aria2c entegrasyonu ve multi-thread paralel bağlantı mimarisini temel alan modern bir indirme yöneticisidir. Proje şu anda aktif geliştirme aşamasındadır; kararlı indirme çekirdeği, uzantı haberleşme protokolleri ve sağ alt köşeye kenetlenen dinamik kullanıcı arayüzü başarıyla tamamlanmıştır. Yeni özellikler eklenmeye devam etmektedir.',
        icon: BASE + 'paxdownloader/paxdownloader.png',
        iconEmoji: '📥',
        features: [
            'Evrensel İndirmeler İçin Ultra Hızlı Çekirdek (-N 32 Paralel Bağlantı Desteği)',
            'Sosyal Medya Videoları İçin Çift Kanallı aria2c Entegrasyonu (-N 16 Desteği)',
            'Tarayıcı Uzantısından (ExtensionMessage) Gelen Medya Akışlarını Anlık Yakalama',
            'Masaüstü Sağ Alt Köşesine Sabitlenen, Canlı Aşama (Stage) Göstergeli Mini Progress Penceresi',
            'Hız Göstergelerinde %/s Yerine Gerçek Zamanlı MB/s - KB/s Ölçümü ve Akıllı Kalan Süre (ETA) Algoritması',
            'json Tabanlı Otomatik Geçmiş Yönetimi (Waiting, Downloading, Paused, Completed, Error)'
        ],
        images: [
            BASE + 'paxdownloader/1.png',
            BASE + 'paxdownloader/2.png',
            BASE + 'paxdownloader/3.png'
        ],
        link: '#',
        isDev: true,
        changelog: [
            { version: 'v4.4 (Mevcut Aşama)', date: 'Mayıs 2026', notes: ['MainWindow uzantı entegrasyon katmanı ve aksiyon yakalayıcılar tamamlandı.', 'Hız göstergeleri gerçek MB/s ve KB/s değerlerine uyarlandı.', 'Çift mini progress penceresi açılmasını önleyen hata düzeltmeleri (double-close fix) uygulandı.'] },
            { version: 'v4.2 (Arayüz & Kontroller)', date: 'Mayıs 2026', notes: ['Sağ alt köşeye otomatik konumlanan (PositionWindow) akıllı MiniProgressWindow tasarlandı.', 'Pause (Duraklat), Resume (Devam Et) ve Cancel (İptal) tetikleyicileri prototiplendi.'] },
            { version: 'v1.0.0 (Temel Çekirdek)', date: 'Nisan 2026', notes: ['DownloadItem veri modeli ve INotifyPropertyChanged arayüz mimarisi kurgulandı.', 'Durum renk kodlamaları ve dinamik ProgressBar veri bağlamaları eklendi.'] }
        ]
    },
    {
        id: 'paxasistan',
        category: 'sistem',
        catName: 'Yapay Zeka & Sistem',
        title: 'PAX Asistan',
        subtitle: 'Otonom Masaüstü Yapay Zeka Asistanı',
        shortDesc: 'Yerel AI (Ollama), 2 katmanlı ses tanıma (Vosk+Whisper) ve kamera ile el takibi sunan interaktif robot asistan.',
        fullDesc: 'PAX Asistan; farenizi takip eden dinamik bir robot yüze sahip, tamamen çevrimdışı çalışabilen otonom bir sistem asistanıdır. Gelişmiş 3 katmanlı algılama mimarisi ile sizi hem duyar (Vosk & Whisper), hem görür (MediaPipe El Takibi), hem de anlar (Ollama LLM). Proje, anlık donanım entegrasyonları ve komut sistemleriyle aktif geliştirme aşamasındadır.',
        icon: BASE + 'paxasistan/Pax%20Asistanlogo.png',
        iconEmoji: '🤖',
        features: [
            'Katman 1 & 2 Ses Motoru: Vosk (Hızlı anlık tanıma) ve Whisper (Yüksek doğruluk) paralel entegrasyonu',
            'Katman 3 LLM (Ollama): Qwen/Llama modelleriyle JSON tabanlı doğal dil işleme ve sohbet yeteneği',
            'Kameralı Takip: Python/MediaPipe üzerinden UDP soketleriyle 0 gecikmeli jest (el hareketi) algılama',
            'Canlı Robot Arayüzü: Fare imlecini takip eden gözler, otomatik göz kırpma, mutlu/kızgın/şaşkın mimikler ve Idle (bekleme) motoru',
            'Gelişmiş Komut Yöneticisi: Özel klavye/makro kombinasyonları, sistem kontrolü ve "Sabit Dinleme" modu'
        ],
        images: [BASE + 'paxasistan/1.png'],
        link: '#',
        isDev: true,
        changelog: [
            { version: 'v2.5 (Mevcut Aşama)', date: 'Güncel', notes: ['Ollama LLM entegrasyonu tamamlandı ve Tool Calling (JSON ayrıştırma) aktif edildi.', 'Python tabanlı el hareketleri (GestureService) WPF UI ile bağlandı.'] },
            { version: 'v1.5 (Arayüz & Animasyon)', date: 'Önceki Aşama', notes: ['Robot yüz mimikleri (Idle motoru, kafa yaylanması, fare takibi) eklendi.', 'Sistem komutlarını JSON üzerinden yöneten KomutModel altyapısı kuruldu.'] },
            { version: 'v1.0 (Çekirdek)', date: 'Başlangıç', notes: ['Vosk ve Whisper ses motorları sisteme entegre edildi.'] }
        ]
    },
    {
        id: 'paxlink',
        category: 'sistem',
        catName: 'İletişim & Nöral Ağ',
        title: 'Pax Link',
        subtitle: 'Nöral Bağlantı Tabanlı Sesli İletişim',
        shortDesc: 'WebRTC tabanlı, Opus codec destekli yüksek sadakatli sesli iletişim platformu.',
        fullDesc: 'Pax Link, Pax Systemic ekosisteminin mevcut iletişim katmanıdır. Opus codec entegrasyonlu yüksek sadakatli ses işleme (DSP), WebRTC üzerinden gerçek zamanlı sesli veri aktarımı ve socket.io tabanlı otonom çağrı yönetim sistemini içerir. Tamamen yerel (native) WPF mimarisi üzerine kurgulanmıştır.',
        icon: null,
        iconEmoji: '📡',
        features: [
            'WebRTC P2P (ICE/STUN/TURN) Sinyalleşme ve Görüşme Yönetimi',
            'Opus Tabanlı Düşük Gecikmeli Ses İşleme (Jitter Buffer & PLC)',
            'Socket.io ile Otonom Çağrı (Incoming/Outgoing) Sinyalleşme Motoru',
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
            { version: 'v0.1.0 (Alfa)', date: 'Mayıs 2026', notes: ['WebRTC sinyalleşme katmanı (Offer/Answer/Candidate) başarıyla tamamlandı.', 'Socket.io (Auth Token) ile güvenli oda bağlantıları kurgulandı.', 'JitterBufferWaveProvider mimarisi ile ses akış senkronizasyonu sağlandı.'] }
        ]
    }
];

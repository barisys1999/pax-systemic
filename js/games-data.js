/* =============================================
   PAX SYSTEMIC — Games Data
   ============================================= */

const GAMES_PRODUCTS = [
    {
        id: 'karanliktan',
        category: 'korku',
        catName: 'Korku / Gerilim',
        title: 'Karanlıktan Işığa',
        subtitle: 'Atmosferik Keşif ve Hayatta Kalma',
        shortDesc: 'Birinci şahıs atmosferik keşif ve gerilim deneyimi.',
        fullDesc: 'Kitaptan uyarlanan derin bir hikaye. Karanlığın derinliklerinde geçen bu hikaye odaklı birinci şahıs oyununda kendi yolunuzu bulmalı ve sırları çözmelisiniz.',
        icon: '../gorseller/icons/karanliktan.png',
        iconEmoji: '🕯️',
        features: [
            'Sürükleyici karanlık atmosfer',
            'Gelişmiş fizik ve envanter sistemi',
            'Unity altyapısı ile optimize edilmiş çevre etkileşimi'
        ],
        images: [],
        link: '#',
        isDev: false,
        changelog: [
            { version: 'v1.1', date: 'Mayıs 2026',  notes: ['Karakter rigging ve araç fizikleri eklendi.', 'Işıklandırma motoru elden geçirildi.'] },
            { version: 'Konsept', date: 'Ekim 2025', notes: ['Kitap evreni oyun mekaniklerine uyarlandı.'] }
        ]
    },
    {
        id: 'cosmohop',
        category: 'arcade',
        catName: 'Arcade / Mobil',
        title: 'CosmoHop!',
        subtitle: 'Mobil Arcade Zıplama Macerası',
        shortDesc: 'Dinamik fizik dinamiklerine sahip mobil arcade macerası.',
        fullDesc: 'Dinamik fizik dinamiklerine sahip mobil arcade macerası. Reflekslerinizi test edin ve yıldızlar arasında zıplayın.',
        icon: '../gorseller/icons/cosmohop.png',
        iconEmoji: '🚀',
        features: [
            'Google Play entegrasyonu',
            'AdMob reklam entegrasyonu',
            'Minimalist tasarım'
        ],
        images: [],
        link: '#',
        isDev: false,
        changelog: [
            { version: 'v1.2', date: 'Şubat 2026',  notes: ['app-ads.txt doğrulaması yapıldı.', 'Performans iyileştirmeleri.'] },
            { version: 'v1.0', date: 'Ocak 2026',    notes: ['Global lansman yapıldı.'] }
        ]
    },
    {
        id: 'nexus',
        category: 'macera',
        catName: 'Aksiyon / Macera',
        title: 'Project: Nexus',
        subtitle: 'Açık Dünya Aksiyon & Hayatta Kalma',
        shortDesc: 'Açık dünya hayatta kalma ve kaynak yönetimi oyunu.',
        fullDesc: 'Geniş bir açık dünyada hayatta kalmaya çalıştığınız birinci şahıs aksiyon oyunu. Kaynak toplayın, üs kurun, düşmanlarla savaşın.',
        icon: '../gorseller/icons/nexus.png',
        iconEmoji: '⚔️',
        features: [
            'Gelişmiş yapay zeka',
            'Dinamik hava durumu',
            'Kaynak & üs yönetimi'
        ],
        images: [],
        link: '#',
        isDev: true,
        changelog: []
    },
    {
        id: 'sessizev',
        category: 'korku',
        catName: 'Korku / Gerilim',
        title: 'Sessiz Ev',
        subtitle: 'VR Destekli Psikolojik Korku',
        shortDesc: 'VR destekli psikolojik korku deneyimi.',
        fullDesc: 'Sanal gerçeklik için özel tasarlanmış, iliklerinize kadar hissedeceğiniz bir korku oyunu. 3D mekansal ses tasarımı ile eşsiz bir atmosfer.',
        icon: '../gorseller/icons/sessizev.png',
        iconEmoji: '🏚️',
        features: [
            'VR Desteği',
            '3D mekansal ses tasarımı',
            'Prosedürel korku olayları'
        ],
        images: [],
        link: '#',
        isDev: true,
        changelog: []
    }
];

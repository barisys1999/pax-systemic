/* =============================================
   PAX SYSTEMIC — Catalog Engine
   ============================================= */

let currentFilter = 'all';
let currentImages  = [];
let currentImgIdx  = 0;
let catalogData    = [];   // dışarıdan set edilir (SOFTWARE_PRODUCTS vs)

/* ── Init ─────────────────────────────── */
function initCatalog(products) {
    catalogData = products;
    renderGrid(products);
}

/* ── Grid ─────────────────────────────── */
function renderGrid(products) {
    const query   = (document.getElementById('searchInput')?.value || '').toLowerCase().trim();
    const grid    = document.getElementById('catalog-grid');
    const noRes   = document.getElementById('no-results');

    const filtered = products.filter(p => {
        const matchCat  = currentFilter === 'all' || p.category === currentFilter;
        const matchText = !query || p.title.toLowerCase().includes(query) || p.shortDesc.toLowerCase().includes(query);
        return matchCat && matchText;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noRes.style.display = 'block';
        return;
    }
    noRes.style.display = 'none';

    grid.innerHTML = filtered.map(p => `
        <div class="app-card ${p.isDev ? 'is-dev' : ''}" onclick="openProduct('${p.id}')">
            ${p.isDev ? `<span class="badge-dev">Geliştiriliyor</span>` : ''}
            <div class="app-card__top">
                <div class="app-card__icon">
                    <img src="${p.icon}" alt="${p.title} ikonu"
                         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
                    <span class="app-card__icon-placeholder" style="display:none">${p.iconEmoji || '📦'}</span>
                </div>
                <div class="app-card__meta">
                    <span class="app-card__cat">${p.catName}</span>
                    <div class="app-card__name">${p.title}</div>
                </div>
            </div>
            <p class="app-card__desc">${p.shortDesc}</p>
        </div>
    `).join('');
}

/* ── Filter ───────────────────────────── */
function setCategory(cat, btn) {
    currentFilter = cat;
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderGrid(catalogData);
}

function updateGrid() { renderGrid(catalogData); }

/* ── Detail ───────────────────────────── */
function openProduct(id) {
    const p = catalogData.find(x => x.id === id);
    if (!p) return;

    // Header
    const iconEl = document.getElementById('det-icon');
    const placeholderEl = document.getElementById('det-icon-placeholder');
    iconEl.src = p.icon;
    iconEl.onerror = () => { iconEl.style.display = 'none'; placeholderEl.textContent = p.iconEmoji || '📦'; placeholderEl.style.display = 'flex'; };
    iconEl.style.display = '';
    placeholderEl.style.display = 'none';

    document.getElementById('det-title').textContent = p.title;
    document.getElementById('det-sub').textContent   = p.subtitle;
    document.getElementById('det-desc').textContent  = p.fullDesc;

    // Features
    document.getElementById('det-features').innerHTML = p.features.map(f => `<li>${f}</li>`).join('');

    // Changelog
    document.getElementById('det-changelog').innerHTML = p.changelog.map(l => `
        <div class="tl-item">
            <div class="tl-head">
                <span class="tl-version">${l.version}</span>
                <span class="tl-date">${l.date}</span>
            </div>
            <ul class="tl-notes">${l.notes.map(n => `<li>${n}</li>`).join('')}</ul>
        </div>
    `).join('');

    // Download button
    const btn = document.getElementById('det-btn');
    btn.href = p.link;
    btn.className = 'btn-download';
    if (p.isDev) {
        btn.textContent = 'Geliştirilme Aşamasında';
        btn.classList.add('disabled');
    } else if (p.isRequest) {
        btn.textContent = '✉ Talep Et';
        btn.classList.add('request');
    } else {
        btn.textContent = '↓ İndir';
    }

    // Media
    currentImages = p.images?.length > 0 ? p.images : [];
    currentImgIdx = 0;
    updateMediaView();

    // Swap views
    switchTab('overview');
    document.getElementById('main-view').style.display  = 'none';
    document.getElementById('detail-view').style.display = 'block';
    window.scrollTo(0, 0);
}

function closeProduct() {
    document.getElementById('detail-view').style.display = 'none';
    document.getElementById('main-view').style.display   = 'flex';
    switchTab('overview');
}

/* ── Tabs ─────────────────────────────── */
function switchTab(tab, e) {
    if (e) e.preventDefault();
    document.querySelectorAll('.d-tab').forEach(t => t.classList.remove('active'));

    const idx   = tab === 'overview' ? 0 : 1;
    const tabs  = document.querySelectorAll('.d-tab');
    if (tabs[idx]) tabs[idx].classList.add('active');

    document.querySelectorAll('.tab-pane').forEach(p => p.style.display = 'none');
    const pane = document.getElementById('pane-' + tab);
    if (pane) pane.style.display = 'block';
}

/* ── Media Viewer ─────────────────────── */
function updateMediaView() {
    const media = document.getElementById('det-media');
    if (!currentImages.length) {
        media.innerHTML = '<p style="color:var(--text-dim); font-size:0.85rem;">Görsel hazırlanıyor</p>';
        return;
    }

    let html = `<img src="${currentImages[currentImgIdx]}" loading="lazy"
                     onerror="this.style.display='none'">
                <div class="media-overlay" onclick="openLightbox()">GÖRÜNTÜLE</div>`;

    if (currentImages.length > 1) {
        html += `<button class="slider-btn prev" onclick="changeImg(-1, event)">&#10094;</button>
                 <button class="slider-btn next" onclick="changeImg( 1, event)">&#10095;</button>
                 <div class="slider-dots">
                     ${currentImages.map((_, i) => `<span class="dot ${i === currentImgIdx ? 'active' : ''}" onclick="setImg(${i}, event)"></span>`).join('')}
                 </div>`;
    }
    media.innerHTML = html;
}

function changeImg(dir, e) {
    if (e) e.stopPropagation();
    currentImgIdx = (currentImgIdx + dir + currentImages.length) % currentImages.length;
    updateMediaView();
}
function setImg(idx, e) {
    if (e) e.stopPropagation();
    currentImgIdx = idx;
    updateMediaView();
}

/* ── Lightbox ─────────────────────────── */
function openLightbox() {
    if (!currentImages.length) return;
    const lb = document.getElementById('lightbox');
    let html = `<img id="lb-img" src="${currentImages[currentImgIdx]}" loading="lazy" onclick="event.stopPropagation()">`;
    if (currentImages.length > 1) {
        html += `<button class="slider-btn prev" style="position:fixed;left:4%"  onclick="changeLbImg(-1,event)">&#10094;</button>
                 <button class="slider-btn next" style="position:fixed;right:4%" onclick="changeLbImg( 1,event)">&#10095;</button>`;
    }
    lb.innerHTML = html;
    lb.style.display = 'flex';
}

function changeLbImg(dir, e) {
    if (e) e.stopPropagation();
    currentImgIdx = (currentImgIdx + dir + currentImages.length) % currentImages.length;
    const img = document.getElementById('lb-img');
    if (img) img.src = currentImages[currentImgIdx];
    updateMediaView();
}

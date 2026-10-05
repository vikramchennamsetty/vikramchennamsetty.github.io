/**
 * ElevateLivingCo — Ebooks Catalog Engine
 * Dynamically loads books.json, renders CHE's digital bookshelf,
 * handles 3D tilt interactions, and tracks Amazon pre-order clicks.
 */

document.addEventListener('DOMContentLoaded', () => {
    initEbooksCatalog();
    init3DCoverTilt();
});

async function initEbooksCatalog() {
    const catalogContainer = document.getElementById('ebooks-catalog-grid');
    if (!catalogContainer) return;

    try {
        const response = await fetch('/assets/data/books.json');
        if (!response.ok) throw new Error('Failed to load books.json');
        const books = await response.json();
        renderCatalog(books, catalogContainer);
    } catch (err) {
        console.warn('Ebooks catalog fetch notice:', err.message);
        // Container pre-rendered HTML fallback remains intact
    }
}

function renderCatalog(books, container) {
    if (!books || books.length === 0) return;

    container.innerHTML = books.map(book => `
        <article class="eb-glass-card eb-card-body" data-book-id="${book.id}">
            <div class="eb-book-stage">
                <div class="eb-book-3d">
                    <img src="${book.cover}" alt="${book.title} Book Cover" class="eb-book-cover-img" loading="lazy" width="280" height="420" />
                    <div class="eb-book-spine"></div>
                    <div class="eb-book-pages"></div>
                </div>
            </div>
            
            <div style="margin-top: 1.5rem;">
                <span class="eb-badge">${book.genre}</span>
                <h3 class="eb-card-title">${book.title}</h3>
                <p style="font-size: 0.85rem; color: var(--eb-gold); font-weight: 600; margin-bottom: 0.75rem;">
                    BY ${book.author.toUpperCase()} • RELEASE: ${formatReleaseDate(book.releaseDate)}
                </p>
                <p class="eb-card-desc">${book.summary}</p>
                
                <div class="eb-tropes-grid">
                    ${book.tropes.slice(0, 3).map(t => `<span class="eb-trope-pill">${t}</span>`).join('')}
                </div>

                <div style="display: flex; gap: 12px; margin-top: 1.5rem; flex-wrap: wrap;">
                    <a href="${book.amazonUrl}" target="_blank" rel="noopener" class="eb-btn eb-btn-primary" onclick="trackEbookClick('${escapeJsString(book.title)}', '${book.amazonUrl}')">
                        Pre-Order $${book.priceUSD}
                    </a>
                    <a href="/ebooks/${book.slug}/" class="eb-btn eb-btn-secondary">
                        View Details
                    </a>
                </div>
            </div>
        </article>
    `).join('');
}

function formatReleaseDate(dateStr) {
    if (!dateStr) return '';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function init3DCoverTilt() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.innerWidth < 768) return;

    const bookCards = document.querySelectorAll('.eb-book-3d');
    bookCards.forEach(book => {
        const stage = book.closest('.eb-book-stage');
        if (!stage) return;

        stage.addEventListener('mousemove', (e) => {
            const rect = stage.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const rotateY = (x / (rect.width / 2)) * 18;
            const rotateX = -(y / (rect.height / 2)) * 14;

            book.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(-4px)`;
        });

        stage.addEventListener('mouseleave', () => {
            book.style.transform = 'rotateY(-18deg) rotateX(6deg)';
        });
    });
}

function trackEbookClick(title, destination) {
    if (typeof gtag === 'function') {
        gtag('event', 'click_amazon_ebook', {
            'book_title': title,
            'destination': destination
        });
    }
}

function escapeJsString(str) {
    return str.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

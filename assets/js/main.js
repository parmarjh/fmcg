/* ========================================
   FMCGIOUS - Main JavaScript
   ======================================== */

// Theme Management
function getPreferredTheme() {
    const stored = localStorage.getItem('theme');
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || getPreferredTheme();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
}

// Initialize theme on page load
(function() {
    setTheme(getPreferredTheme());
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
})();

// Mobile Menu Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    if (menu) {
        menu.classList.toggle('hidden');
        const isHidden = menu.classList.contains('hidden');
        if (icon) {
            icon.setAttribute('data-lucide', isHidden ? 'menu' : 'x');
        }
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }
}

// Generate Product Card HTML
function generateProductCard(p, linkToContact = 'contact.html') {
    return `
        <div class="rounded-lg overflow-hidden border product-card-hover group flex flex-col h-full shadow-sm hover:shadow-xl transition-all" style="background-color: var(--card-bg); border-color: var(--card-border);">
            <div class="h-56 flex items-center justify-center p-8 relative overflow-hidden" style="background-color: var(--bg-tertiary);">
                <img src="${p.img}" alt="${p.name}" class="max-h-full object-cover group-hover:scale-110 transition duration-500">
                <div class="absolute inset-0 bg-[#fcad03]/90 flex items-center justify-center opacity-0 transition-opacity details-btn">
                     <a href="${linkToContact}" class="text-black font-bold text-xs uppercase tracking-widest bg-black text-white px-6 py-2 rounded">Enquire</a>
                </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
                <div class="flex items-center justify-between mb-2">
                     <span class="text-[#fcad03] font-bold text-[9px] uppercase tracking-widest">${p.brand}</span>
                     <span class="text-[8px] font-bold uppercase tracking-widest" style="color: var(--text-tertiary);">${p.origin} ORIGIN</span>
                </div>
                <h4 class="text-sm font-bold leading-tight mb-4 flex-1" style="color: var(--text-primary);">${p.name}</h4>
                <div class="p-3 rounded space-y-2 mb-4" style="background-color: var(--bg-tertiary);">
                     <div class="flex justify-between text-[10px]">
                         <span class="uppercase font-bold" style="color: var(--text-tertiary);">Packaging:</span>
                         <span class="font-bold" style="color: var(--text-primary);">${p.pack}</span>
                     </div>
                     <div class="flex justify-between text-[10px]">
                         <span class="uppercase font-bold" style="color: var(--text-tertiary);">Availability:</span>
                         <span class="font-bold" style="color: var(--text-primary);">${p.volume}</span>
                     </div>
                </div>
            </div>
        </div>
    `;
}

// Render Product Catalog
function renderCatalog(cat = 'all', gridId = 'catalog-grid', contactLink = 'contact.html') {
    const grid = document.getElementById(gridId);
    if (!grid || typeof products === 'undefined') return;
    
    const data = cat === 'all' ? products : products.filter(p => p.cat === cat);
    grid.innerHTML = data.map(p => generateProductCard(p, contactLink)).join('');
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Filter Products
function filterProducts(cat) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-[#fcad03]', 'text-black');
        btn.style.backgroundColor = 'var(--bg-primary)';
        btn.style.color = 'var(--text-secondary)';
    });
    
    if (event && event.target) {
        event.target.classList.add('active');
        event.target.style.backgroundColor = '#fcad03';
        event.target.style.color = '#000';
    }
    
    renderCatalog(cat);
}

// Render Featured Products
function renderFeaturedProducts(gridId = 'featured-grid', contactLink = 'contact.html') {
    const grid = document.getElementById(gridId);
    if (!grid || typeof products === 'undefined') return;
    
    const featuredProducts = [products[14], products[8], products[27], products[30]];
    grid.innerHTML = featuredProducts.map(p => generateProductCard(p, contactLink)).join('');
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Contact Form Handler
function handleContactForm(event) {
    event.preventDefault();
    alert('Thank you for your enquiry! Our team will get back to you shortly.');
    event.target.reset();
}

// Initialize Page
document.addEventListener('DOMContentLoaded', function() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
});

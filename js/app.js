// Product Data
const products = [
    // ==================== BEVERAGES ====================
    // Carbonated Soft Drinks (PepsiCo)
    { id: 1, name: "Pepsi Regular", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans, Glass & PET Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400" },
    { id: 2, name: "Pepsi Diet & Max", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=400" },
    { id: 3, name: "7UP Regular & Free", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400" },
    { id: 4, name: "7UP Green Apple", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Wholesale Only", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400" },
    { id: 5, name: "Mirinda Orange", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400" },
    { id: 6, name: "Mirinda Citrus & Strawberry", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400" },
    { id: 7, name: "Mountain Dew", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400" },
    { id: 8, name: "Shani Malt Beverage", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans", volume: "Wholesale Only", img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400" },
    
    // Carbonated Soft Drinks (Coca-Cola)
    { id: 9, name: "Coca-Cola Original", brand: "Coca-Cola", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "185ml - 2L Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400" },
    { id: 10, name: "Coca-Cola Zero Sugar", brand: "Coca-Cola", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400" },
    { id: 11, name: "Fanta Orange", brand: "Coca-Cola", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400" },
    { id: 12, name: "Fanta Strawberry", brand: "Coca-Cola", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Wholesale Only", img: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=400" },
    { id: 13, name: "Sprite Regular", brand: "Coca-Cola", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Full Size Range", volume: "Full Container", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400" },
    { id: 14, name: "Sprite Zero", brand: "Coca-Cola", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400" },
    
    // Energy & Malt Drinks
    { id: 15, name: "Red Bull Energy", brand: "Red Bull", cat: "beverages", subcat: "energy", origin: "AUSTRIA", pack: "250ml Cans", volume: "4112cs / 40ft", img: "https://images.unsplash.com/photo-1610632380989-680fe40816c6?w=400" },
    { id: 16, name: "Monster Energy", brand: "Monster", cat: "beverages", subcat: "energy", origin: "USA", pack: "355ml Cans", volume: "Wholesale Only", img: "https://images.unsplash.com/photo-1622543925917-763c34d1a86e?w=400" },
    { id: 17, name: "Barbican Apple", brand: "Barbican", cat: "beverages", subcat: "malt", origin: "UAE", pack: "Glass Bottles & Cans", volume: "Full Container", img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400" },
    { id: 18, name: "Barbican Pomegranate", brand: "Barbican", cat: "beverages", subcat: "malt", origin: "UAE", pack: "Glass Bottles & Cans", volume: "Full Container", img: "https://images.unsplash.com/photo-1553456558-aff63285bdd1?w=400" },
    
    // Fruit Drinks & Cordials
    { id: 19, name: "Vimto Fruit Cordial", brand: "Vimto", cat: "beverages", subcat: "fruit", origin: "UK", pack: "Glass Bottles & Multipacks", volume: "Full Container", img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400" },
    { id: 20, name: "Vimto Fizzy", brand: "Vimto", cat: "beverages", subcat: "fruit", origin: "UK", pack: "Cans", volume: "Wholesale Only", img: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400" },
    
    // Water
    { id: 21, name: "Arwa Water", brand: "Arwa", cat: "beverages", subcat: "water", origin: "UAE", pack: "330ml, 500ml, 1.5L", volume: "Full Container", img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400" },
    
    // ==================== COFFEE & TEA ====================
    // Coffee
    { id: 22, name: "Nescafé Dolce Gusto Espresso", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "Pods - Intensity 5", volume: "Retail Ready", img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400" },
    { id: 23, name: "Nescafé Dolce Gusto Lungo", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "Pods - Intensity 6", volume: "Retail Ready", img: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400" },
    { id: 24, name: "Nescafé Dolce Gusto Cappuccino", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "Pods", volume: "Retail Ready", img: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400" },
    { id: 25, name: "Nescafé Dolce Gusto Café au Lait", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "Pods", volume: "Retail Ready", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400" },
    { id: 26, name: "Nesquik Cocoa Pods", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "Dolce Gusto Pods", volume: "Retail Ready", img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=400" },
    { id: 27, name: "Nescafé Gold Instant", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "Jars - Intensity 7", volume: "1800cs / 40ft", img: "https://images.unsplash.com/photo-1559496417-e7f25cb247f3?w=400" },
    { id: 28, name: "Nescafé 3in1 Classic", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "20g Sachets x 24", volume: "Retail Display Boxes", img: "https://images.unsplash.com/photo-1544433480-e442df212730?w=400" },
    
    // Tea
    { id: 29, name: "Lipton Yellow Label Black Tea", brand: "Lipton", cat: "coffee-tea", subcat: "tea", origin: "THAILAND", pack: "100 Teabags", volume: "36x100 Crates", img: "https://images.unsplash.com/photo-1594631252845-29fc45865157?w=400" },
    { id: 30, name: "Lipton Pure Green Tea", brand: "Lipton", cat: "coffee-tea", subcat: "tea", origin: "THAILAND", pack: "25 Teabags", volume: "24x25 Crates", img: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400" },
    
    // ==================== FOOD & CONFECTIONERY ====================
    // Chocolate Miniatures
    { id: 31, name: "Mars Miniatures", brand: "Mars", cat: "food", subcat: "chocolate", origin: "EU", pack: "150g Pillow Bags", volume: "Expiry Nov 2026", img: "https://images.unsplash.com/photo-1575377427642-087cf684f29d?w=400" },
    { id: 32, name: "Snickers Miniatures", brand: "Mars", cat: "food", subcat: "chocolate", origin: "EU", pack: "150g Pillow Bags", volume: "Expiry Dec 2026", img: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400" },
    { id: 33, name: "Bounty Miniatures", brand: "Mars", cat: "food", subcat: "chocolate", origin: "EU", pack: "150g Pillow Bags", volume: "Expiry Nov 2026", img: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=400" },
    
    // Chewing Gum
    { id: 34, name: "Orbit Watermelon", brand: "Orbit", cat: "food", subcat: "gum", origin: "EU", pack: "Retail Packs", volume: "Full Container", img: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400" },
    { id: 35, name: "Orbit Strawberry-Banana", brand: "Orbit", cat: "food", subcat: "gum", origin: "EU", pack: "Retail Packs", volume: "Full Container", img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400" },
    { id: 36, name: "Orbit White Gentle Mint", brand: "Orbit", cat: "food", subcat: "gum", origin: "EU", pack: "Retail Packs", volume: "Full Container", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400" },
    { id: 37, name: "Wrigley's Extra Peppermint", brand: "Wrigley's", cat: "food", subcat: "gum", origin: "EU", pack: "Sugar-Free", volume: "Full Container", img: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=400" },
    { id: 38, name: "Wrigley's Extra Spearmint", brand: "Wrigley's", cat: "food", subcat: "gum", origin: "EU", pack: "Sugar-Free", volume: "Full Container", img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400" },
    { id: 39, name: "Wrigley's Extra Bubblemint", brand: "Wrigley's", cat: "food", subcat: "gum", origin: "EU", pack: "Sugar-Free", volume: "Wholesale Only", img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400" },
    
    // Biscuits & Cereal
    { id: 40, name: "LU Choco Prince", brand: "LU", cat: "food", subcat: "biscuits", origin: "EU", pack: "28.5g x 40 Box", volume: "Retail Boxes", img: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400" },
    { id: 41, name: "Nesquik Cereal", brand: "Nestlé", cat: "food", subcat: "cereal", origin: "EU", pack: "450g Bags", volume: "Full Container", img: "https://images.unsplash.com/photo-1521483451569-e33803c0330c?w=400" },
    
    // Cooking Essentials
    { id: 42, name: "Maggi Chicken Stock", brand: "Maggi", cat: "food", subcat: "cooking", origin: "EU", pack: "Cubes x 24 Display", volume: "Retail Ready", img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400" },
    
    // ==================== PERSONAL CARE ====================
    // Hair Care
    { id: 43, name: "Dabur Amla Gold Hair Oil", brand: "Dabur", cat: "personal-care", subcat: "hair", origin: "INDIA", pack: "100ml Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400" },
    { id: 44, name: "Vatika Moisture Shampoo", brand: "Vatika", cat: "personal-care", subcat: "hair", origin: "INDIA", pack: "360ml Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?w=400" },
    { id: 45, name: "Vatika Hair Cream", brand: "Vatika", cat: "personal-care", subcat: "hair", origin: "INDIA", pack: "125ml - Almond & Honey", volume: "Full Container", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400" },
    
    // Skin Care & Hygiene
    { id: 46, name: "Vaseline Coconut Restore Oil", brand: "Vaseline", cat: "personal-care", subcat: "skin", origin: "EU", pack: "200ml Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400" },
    { id: 47, name: "Vaseline Cocoa Radiant Oil", brand: "Vaseline", cat: "personal-care", subcat: "skin", origin: "EU", pack: "200ml Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400" },
    { id: 48, name: "Dettol Original Handwash", brand: "Dettol", cat: "personal-care", subcat: "hygiene", origin: "UK", pack: "210ml - BOGO Promo", volume: "Promotional Netting", img: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=400" },
    
    // ==================== HOUSEHOLD ====================
    // Cleaning
    { id: 49, name: "Fairy Power Wipes Lemon", brand: "Fairy", cat: "household", subcat: "cleaning", origin: "TURKEY", pack: "Surface Towels", volume: "Full Container", img: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400" },
    { id: 50, name: "Fairy Power Wipes Lavender", brand: "Fairy", cat: "household", subcat: "cleaning", origin: "TURKEY", pack: "Surface Towels", volume: "Full Container", img: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=400" },
    { id: 51, name: "Fairy Power Wipes White Soap", brand: "Fairy", cat: "household", subcat: "cleaning", origin: "TURKEY", pack: "Surface Towels", volume: "Full Container", img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=400" }
];

// Navigation Function
function navigateTo(pageId) {
    document.querySelectorAll('.page-view').forEach(view => view.classList.remove('active'));
    document.getElementById(`view-${pageId}`).classList.add('active');
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if(link.dataset.page === pageId) link.classList.add('active');
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
    const menu = document.getElementById('mobile-menu');
    if(!menu.classList.contains('hidden')) toggleMobileMenu();
}

// Toggle Mobile Menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    menu.classList.toggle('hidden');
    const isHidden = menu.classList.contains('hidden');
    icon.setAttribute('data-lucide', isHidden ? 'menu' : 'x');
    lucide.createIcons();
}

// Filter Products by Category
function filterProducts(cat) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-blue-700', 'text-white');
        btn.classList.add('bg-white', 'text-slate-600');
    });
    event.target.classList.add('active', 'bg-blue-700', 'text-white');
    event.target.classList.remove('bg-white', 'text-slate-600');
    renderCatalog(cat);
}

// Render Product Catalog
function renderCatalog(cat = 'all') {
    const grid = document.getElementById('catalog-grid');
    const data = cat === 'all' ? products : products.filter(p => p.cat === cat);
    grid.innerHTML = data.map(p => generateProductCard(p)).join('');
    lucide.createIcons();
}

// Generate Product Card HTML
function generateProductCard(p) {
    return `
        <div class="bg-white rounded-lg overflow-hidden border border-slate-200 product-card-hover group flex flex-col h-full shadow-sm hover:shadow-xl transition-all">
            <div class="h-56 bg-slate-100 flex items-center justify-center p-8 relative overflow-hidden">
                <img src="${p.img}" alt="${p.name}" class="max-h-full object-cover group-hover:scale-110 transition duration-500">
                <div class="absolute inset-0 bg-blue-700/80 flex items-center justify-center opacity-0 transition-opacity details-btn">
                     <button onclick="navigateTo('contact')" class="text-white font-bold text-xs uppercase tracking-widest bg-slate-900 px-6 py-2 rounded">Enquire</button>
                </div>
            </div>
            <div class="p-5 flex-1 flex flex-col">
                <div class="flex items-center justify-between mb-2">
                     <span class="text-blue-700 font-bold text-[9px] uppercase tracking-widest">${p.brand}</span>
                     <span class="text-[8px] font-bold text-slate-400 uppercase tracking-widest">${p.origin} ORIGIN</span>
                </div>
                <h4 class="text-sm font-bold text-slate-900 leading-tight mb-4 flex-1">${p.name}</h4>
                <div class="bg-slate-50 p-3 rounded space-y-2 mb-4">
                     <div class="flex justify-between text-[10px]">
                         <span class="text-slate-400 uppercase font-bold">Packaging:</span>
                         <span class="text-slate-900 font-bold">${p.pack}</span>
                     </div>
                     <div class="flex justify-between text-[10px]">
                         <span class="text-slate-400 uppercase font-bold">Availability:</span>
                         <span class="text-slate-900 font-bold">${p.volume}</span>
                     </div>
                </div>
            </div>
        </div>
    `;
}

// Initialize App
window.onload = () => {
    lucide.createIcons();
    
    // Render Home Featured Products (mix of categories)
    const homeFeatured = document.getElementById('featured-grid');
    const featuredProducts = [products[14], products[8], products[27], products[31]]; // Red Bull, Coca-Cola, Nescafe Gold, Mars
    homeFeatured.innerHTML = featuredProducts.map(p => generateProductCard(p)).join('');
    
    // Render Full Catalog
    renderCatalog('all');
};

function sendmail(){
    let parms={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value
        

    }
}

/* ========================================
   FMCGIOUS - Product Data
   ======================================== */

const products = [
    // ==================== BEVERAGES ====================
    // Carbonated Soft Drinks (PepsiCo)
    { id: 1, name: "Pepsi Regular", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans, Glass & PET Bottles", volume: "Full Container", img: "https://shoprite.ng/wp-content/uploads/2023/06/Soft-Drink-Pepsi-500Ml-Regular-199.99.jpg" },
    { id: 2, name: "Pepsi Diet & Max", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://image.cnbcfm.com/api/v1/image/103747166-PepsiCo-Diet-Cola-Portfolio.jpg?v=1529471972" },
    { id: 3, name: "7UP Regular & Free", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://www.farsons.com/en/file.aspx?f=1907" },
    { id: 4, name: "7UP Green Apple", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Wholesale Only", img: "https://eatdrinkandsavemoney.com/wp-content/uploads/2017/02/Get-ready-for-St.-Patricks-Day-with-this-Lucky-7UP-Sour-Apple-Mocktail.jpg" },
    { id: 5, name: "Mirinda Orange", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://springs.com.pk/cdn/shop/files/012000051661.jpg?v=1754667017" },
    { id: 6, name: "Mirinda Citrus & Strawberry", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://www.diaryofadesitck.com/uploads/3/1/6/6/31660139/1319845.jpg?318" },
    { id: 7, name: "Mountain Dew", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://nazarjanssupermarket.com/cdn/shop/files/mountain-dew-can-250ml-nazar-jan-s-supermarket-1.png?v=1715263523" },
    { id: 8, name: "Shani Malt Beverage", brand: "PepsiCo", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans", volume: "Wholesale Only", img: "https://freshbasket.com.pk/cdn/shop/files/shani.jpg?v=1764239280" },
    
    // Carbonated Soft Drinks (Coca-Cola)
    { id: 9, name: "Coca-Cola Original", brand: "Coca-Cola", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "185ml - 2L Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400" },
    { id: 10, name: "Coca-Cola Zero Sugar", brand: "Coca-Cola", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://www.coca-cola.com/content/dam/onexp/us/en/brands/coca-cola-zero/en_coca-cola_prod_zero%20sugar%20_750x750_v1.jpg" },
    { id: 11, name: "Fanta Orange", brand: "Coca-Cola", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400" },
    { id: 12, name: "Fanta Strawberry", brand: "Coca-Cola", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Wholesale Only", img: "https://tajstores.co.uk/wp-content/uploads/2022/09/DSC_0007-scaled.jpg" },
    { id: 13, name: "Sprite Regular", brand: "Coca-Cola", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Full Size Range", volume: "Full Container", img: "https://mygroceryfinder.com/cdn/shop/products/10679_SpriteRegular_580x.jpg?v=1620286998" },
    { id: 14, name: "Sprite Zero", brand: "Coca-Cola", cat: "beverages", subcat: "carbonated", origin: "UAE", pack: "Cans & PET Bottles", volume: "Full Container", img: "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sprite_Zero_Sugar_1.jpg" },
    
    // Energy & Malt Drinks
    { id: 15, name: "Red Bull Energy", brand: "Red Bull", cat: "beverages", subcat: "energy", origin: "AUSTRIA", pack: "250ml Cans", volume: "4112cs / 40ft", img: "https://m.media-amazon.com/images/I/81Kvy57PdAL._AC_UF894,1000_QL80_.jpg" },
    { id: 16, name: "Monster Energy", brand: "Monster", cat: "beverages", subcat: "energy", origin: "USA", pack: "355ml Cans", volume: "Wholesale Only", img: "https://jodiabaazar.com/cdn/shop/files/Monster_Energy_Drink_-_Original_-_500_ML_Pack_of_12.jpg?v=1722076513" },
    { id: 17, name: "Barbican Apple", brand: "Barbican", cat: "beverages", subcat: "malt", origin: "UAE", pack: "Glass Bottles & Cans", volume: "Full Container", img: "https://m.media-amazon.com/images/I/81w6hEx-42L.jpg" },
    { id: 18, name: "Barbican Pomegranate", brand: "Barbican", cat: "beverages", subcat: "malt", origin: "UAE", pack: "Glass Bottles & Cans", volume: "Full Container", img: "https://barbicanworld.com/wp-content/uploads/J02694-Barbican-MD-Website-Images-W591xH557pix-Pomegranate-1.png" },
    
    // Fruit Drinks & Cordials
    { id: 19, name: "Vimto Fruit Cordial", brand: "Vimto", cat: "beverages", subcat: "fruit", origin: "UK", pack: "Glass Bottles & Multipacks", volume: "Full Container", img: "https://foodsofnations.com/cdn/shop/products/vimto-fruit-cordial.jpg?v=1616645145" },
    { id: 20, name: "Vimto Fizzy", brand: "Vimto", cat: "beverages", subcat: "fruit", origin: "UK", pack: "Cans", volume: "Wholesale Only", img: "https://vimto.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/10/02143837/ORG-625x900px.png" },
    
    // Water
    { id: 21, name: "Arwa Water", brand: "Arwa", cat: "beverages", subcat: "water", origin: "UAE", pack: "330ml, 500ml, 1.5L", volume: "Full Container", img: "https://cdn.mafrservices.com/sys-master-root/h07/h18/51573562310686/646081_main.jpg" },
    
    // ==================== COFFEE & TEA ====================
    // Coffee
    { id: 22, name: "Nescafé Dolce Gusto Espresso", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "Pods - Intensity 5", volume: "Retail Ready", img: "https://www.caffeine.pk/cdn/shop/products/MyespressoIntenso_600x.jpg?v=1654512671" },
    { id: 23, name: "Nescafé Dolce Gusto Lungo", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "Pods - Intensity 6", volume: "Retail Ready", img: "https://www.nescafe.com/sites/default/files/2023-04/01_16%20PDP%20NDG%20Banner%20Module%20Lungo%20960x960.png" },
    { id: 24, name: "Nescafé Dolce Gusto Cappuccino", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "Pods", volume: "Retail Ready", img: "https://www.caffeine.pk/cdn/shop/products/SkinnyUnsweetened.jpg?v=1710503685" },
    { id: 25, name: "Nescafé Dolce Gusto Café au Lait", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "Pods", volume: "Retail Ready", img: "https://www.nescafe.com/sites/default/files/2023-04/01_40%20PDP%20NDG%20Banner%20Module%20Cafe%20Au%20Lait%20960x960.png" },
    { id: 26, name: "Nesquik Cocoa Pods", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "Dolce Gusto Pods", volume: "Retail Ready", img: "https://www.dolce-gusto.co.uk/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/b/e/bev0000077-16.png" },
    { id: 27, name: "Nescafé Gold Instant", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "Jars - Intensity 7", volume: "1800cs / 40ft", img: "https://www.nescafe.com/us/sites/g/files/jgfbjl306/files/styles/gdn_hero_pdp_product_image/public/gdn_product/field_product_images/nescafe-xllxm139trmnff9tunj9.jpg.webp?itok=ZbDEjZlC" },
    { id: 28, name: "Nescafé 3in1 Classic", brand: "Nescafé", cat: "coffee-tea", subcat: "coffee", origin: "EU", pack: "20g Sachets x 24", volume: "Retail Display Boxes", img: "https://www.nescafe.com/mena/sites/default/files/2024-05/AE_ae_NES_3.0%20Website_Packshot%20Resizing_IMG-8_240424_1_1714111632029_0.png" },
    
    // Tea
    { id: 29, name: "Lipton Yellow Label Black Tea", brand: "Lipton", cat: "coffee-tea", subcat: "tea", origin: "THAILAND", pack: "100 Teabags", volume: "36x100 Crates", img: "https://turkishplaza.com/cdn/shop/products/03111410-ccf875-1650x1650_1200x.jpg?v=1593691103" },
    { id: 30, name: "Lipton Pure Green Tea", brand: "Lipton", cat: "coffee-tea", subcat: "tea", origin: "THAILAND", pack: "25 Teabags", volume: "24x25 Crates", img: "https://m.media-amazon.com/images/I/515kVkqL5gL._SL500_.jpg" },
    
    // ==================== FOOD & CONFECTIONERY ====================
    // Chocolate Miniatures
    { id: 31, name: "Mars Miniatures", brand: "Mars", cat: "food", subcat: "chocolate", origin: "EU", pack: "150g Pillow Bags", volume: "Expiry Nov 2026", img: "https://jodiabaazar.com/cdn/shop/products/images_26_a88fd664-f372-4490-83ff-a5278c5ae9f2.jpg?v=1665682750" },
    { id: 32, name: "Snickers Miniatures", brand: "Mars", cat: "food", subcat: "chocolate", origin: "EU", pack: "150g Pillow Bags", volume: "Expiry Dec 2026", img: "https://www.snickers.com/mena/sites/g/files/fnmzdf1451/files/migrate-product-files/luxdq1trdghdiu0d0enm.png" },
    { id: 33, name: "Bounty Miniatures", brand: "Mars", cat: "food", subcat: "chocolate", origin: "EU", pack: "150g Pillow Bags", volume: "Expiry Nov 2026", img: "https://m.media-amazon.com/images/I/81CSGgedW8L.jpg" },
    
    // Chewing Gum
    { id: 34, name: "Orbit Watermelon", brand: "Orbit", cat: "food", subcat: "gum", origin: "EU", pack: "Retail Packs", volume: "Full Container", img: "https://i.ebayimg.com/images/g/FosAAOSwsOtn86Z9/s-l1200.png" },
    { id: 35, name: "Orbit Strawberry-Banana", brand: "Orbit", cat: "food", subcat: "gum", origin: "EU", pack: "Retail Packs", volume: "Full Container", img: "https://storage.googleapis.com/download/storage/v1/b/lastmile-ui/o/import%2Fphotos%2Fconverted%2Fproduct%2FCvKfTzV4TN5U8BTMF1Hl_8hnoSlkAlJ6YipwODlId_CvKfTzV4TN5U8BTMF1Hl_webpConverter_1_big.webp?generation=1698232138456115&alt=media" },
    { id: 36, name: "Orbit White Gentle Mint", brand: "Orbit", cat: "food", subcat: "gum", origin: "EU", pack: "Retail Packs", volume: "Full Container", img: "https://www.orbitgum.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf6871/files/migrate-product-files/fv3parqmmp9ck1smx2gb.png" },
    { id: 37, name: "Wrigley's Extra Peppermint", brand: "Wrigley's", cat: "food", subcat: "gum", origin: "EU", pack: "Sugar-Free", volume: "Full Container", img: "https://www.extragum.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf5701/files/migrate-product-files/atjqxjjq5pycvpny9xhs.png" },
    { id: 38, name: "Wrigley's Extra Spearmint", brand: "Wrigley's", cat: "food", subcat: "gum", origin: "EU", pack: "Sugar-Free", volume: "Full Container", img: "https://www.extragum.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf5701/files/migrate-product-files/q7vkgvxy4rvlq9eeud4f.png" },
    { id: 39, name: "Wrigley's Extra Bubblemint", brand: "Wrigley's", cat: "food", subcat: "gum", origin: "EU", pack: "Sugar-Free", volume: "Wholesale Only", img: "https://www.extragum.co.uk/sites/g/files/fnmzdf671/files/migrate-product-files/rzkaedejgu2bvfjjcufv.png" },
    
    // Biscuits & Cereal
    { id: 40, name: "LU Choco Prince", brand: "LU", cat: "food", subcat: "biscuits", origin: "EU", pack: "28.5g x 40 Box", volume: "Retail Boxes", img: "https://springs.com.pk/cdn/shop/files/8961003614019.jpg?v=1754920899" },
    { id: 41, name: "Nesquik Cereal", brand: "Nestlé", cat: "food", subcat: "cereal", origin: "EU", pack: "450g Bags", volume: "Full Container", img: "https://plus.mvrwholesale.com/cdn/shop/files/0006563327934p_e95bb81e-69e9-4ec0-9359-32acd645de42.jpg?v=1752145725" },
    
    // Cooking Essentials
    { id: 42, name: "Maggi Chicken Stock", brand: "Maggi", cat: "food", subcat: "cooking", origin: "EU", pack: "Cubes x 24 Display", volume: "Retail Ready", img: "https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2FProducts%2F1753768825918.jpg&w=3840&q=75" },
    
    // ==================== PERSONAL CARE ====================
    // Hair Care
    { id: 43, name: "Dabur Amla Gold Hair Oil", brand: "Dabur", cat: "personal-care", subcat: "hair", origin: "INDIA", pack: "100ml Bottles", volume: "Full Container", img: "https://api.daburinternational.com/wp-content/uploads/2023/08/5022496001298-Hair-Oil-Main.jpg" },
    { id: 44, name: "Vatika Moisture Shampoo", brand: "Vatika", cat: "personal-care", subcat: "hair", origin: "INDIA", pack: "360ml Bottles", volume: "Full Container", img: "https://finalchoice.com.pk/cdn/shop/files/Untitled-1_3b153e78-f11b-48f1-95e6-522a160be406_1024x1024.jpg?v=1742384457" },
    { id: 45, name: "Vatika Hair Cream", brand: "Vatika", cat: "personal-care", subcat: "hair", origin: "INDIA", pack: "125ml - Almond & Honey", volume: "Full Container", img: "https://api.daburinternational.com/wp-content/uploads/2023/09/6291069710878-Hair-Cream-Main.jpg" },
    
    // Skin Care & Hygiene
    { id: 46, name: "Vaseline Coconut Restore Oil", brand: "Vaseline", cat: "personal-care", subcat: "skin", origin: "EU", pack: "200ml Bottles", volume: "Full Container", img: "https://media.myaster.com/images/products/1068879/vaseline-coconut-restore-replenishing-body-oil-200ml/1068879-4.jpg" },
    { id: 47, name: "Vaseline Cocoa Radiant Oil", brand: "Vaseline", cat: "personal-care", subcat: "skin", origin: "EU", pack: "200ml Bottles", volume: "Full Container", img: "https://images-cdn.ubuy.co.mz/669a5401f5588850395ddda0-vaseline-intensive-care-cocoa-radiant.jpg" },
    { id: 48, name: "Dettol Original Handwash", brand: "Dettol", cat: "personal-care", subcat: "hygiene", origin: "UK", pack: "210ml - BOGO Promo", volume: "Promotional Netting", img: "https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12626620-0-M.jpg" },
    
    // ==================== HOUSEHOLD ====================
    // Cleaning
    { id: 49, name: "Fairy Power Wipes Lemon", brand: "Fairy", cat: "household", subcat: "cleaning", origin: "TURKEY", pack: "Surface Towels", volume: "Full Container", img: "https://m.media-amazon.com/images/I/91zT6n7WakL._AC_UF1000,1000_QL80_.jpg" },
    { id: 50, name: "Fairy Power Wipes Lavender", brand: "Fairy", cat: "household", subcat: "cleaning", origin: "TURKEY", pack: "Surface Towels", volume: "Full Container", img: "https://www.wholesale-supplier.uk/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/t/u/tumbnail_da114ec1-dcd7-49f6-917f-92467ef1935a.jpg" },
    { id: 51, name: "Fairy Power Wipes White Soap", brand: "Fairy", cat: "household", subcat: "cleaning", origin: "TURKEY", pack: "Surface Towels", volume: "Full Container", img: "https://www.anthap.co.uk/cdn/shop/files/productsAnthap_14.png?v=1758016710" }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = products;
}

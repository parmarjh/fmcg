#!/bin/bash

# Create directories
mkdir -p images/brands
mkdir -p images/categories
mkdir -p images/products

echo "Downloading brand logos..."
# Download Brand Logos
curl -sL -o "images/brands/unilever.svg" "https://cdn.worldvectorlogo.com/logos/unilever-2.svg"
curl -sL -o "images/brands/nestle.svg" "https://cdn.worldvectorlogo.com/logos/nestle-2.svg"
curl -sL -o "images/brands/pepsi.png" "https://www.pepsi.com/sites/brand-pepsi-com/themes/custom/pepsizero_fe/logo.png"
curl -sL -o "images/brands/kelloggs.svg" "https://cdn.worldvectorlogo.com/logos/kellogg-s.svg"
curl -sL -o "images/brands/pg.svg" "https://cdn.worldvectorlogo.com/logos/procter-gamble-2.svg"
curl -sL -o "images/brands/redbull.svg" "https://www.redbull.com/v3/resources/images/client/header/redbullcom-logo_double-with-text.svg"
curl -sL -o "images/brands/nivea.svg" "https://cdn.worldvectorlogo.com/logos/nivea-2.svg"
curl -sL -o "images/brands/cocacola.svg" "https://cdn.worldvectorlogo.com/logos/coca-cola-4.svg"

echo "Downloading category images..."
# Download Category Images
curl -sL -o "images/categories/distribution.jpg" "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000"
curl -sL -o "images/categories/fmcg.jpeg" "https://www.treasureislands.ae/images/fmcg.jpeg"
curl -sL -o "images/categories/beverages.jpg" "https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?auto=format&fit=crop&q=80&w=800"
curl -sL -o "images/categories/confectionery.jpg" "https://www.chocoliz.com/cdn/shop/files/IMG_20220322_000317_959_1200x1200.jpg?v=1650035544"
curl -sL -o "images/categories/groceries.jpg" "https://www.mbaskool.com/2018_images/top_brands/fmcg_world/fmcg01.jpg"
curl -sL -o "images/categories/beauty.jpg" "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800"
curl -sL -o "images/categories/household.jpg" "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800"
curl -sL -o "images/categories/coffee.jpg" "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800"

echo "Downloading product images..."
# Download Product Images - Beverages
curl -sL -o "images/products/pepsi-regular.jpg" "https://shoprite.ng/wp-content/uploads/2023/06/Soft-Drink-Pepsi-500Ml-Regular-199.99.jpg"
curl -sL -o "images/products/pepsi-diet.jpg" "https://image.cnbcfm.com/api/v1/image/103747166-PepsiCo-Diet-Cola-Portfolio.jpg?v=1529471972"
curl -sL -o "images/products/7up.jpg" "https://www.farsons.com/en/file.aspx?f=1907"
curl -sL -o "images/products/7up-apple.jpg" "https://eatdrinkandsavemoney.com/wp-content/uploads/2017/02/Get-ready-for-St.-Patricks-Day-with-this-Lucky-7UP-Sour-Apple-Mocktail.jpg"
curl -sL -o "images/products/mirinda-orange.jpg" "https://springs.com.pk/cdn/shop/files/012000051661.jpg?v=1754667017"
curl -sL -o "images/products/mirinda-citrus.jpg" "https://www.diaryofadesitck.com/uploads/3/1/6/6/31660139/1319845.jpg?318"
curl -sL -o "images/products/mountain-dew.png" "https://nazarjanssupermarket.com/cdn/shop/files/mountain-dew-can-250ml-nazar-jan-s-supermarket-1.png?v=1715263523"
curl -sL -o "images/products/shani.jpg" "https://freshbasket.com.pk/cdn/shop/files/shani.jpg?v=1764239280"
curl -sL -o "images/products/coca-cola.jpg" "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400"
curl -sL -o "images/products/coca-cola-zero.jpg" "https://www.coca-cola.com/content/dam/onexp/us/en/brands/coca-cola-zero/en_coca-cola_prod_zero%20sugar%20_750x750_v1.jpg"
curl -sL -o "images/products/fanta-orange.jpg" "https://images.unsplash.com/photo-1624517452488-04869289c4ca?w=400"
curl -sL -o "images/products/fanta-strawberry.jpg" "https://tajstores.co.uk/wp-content/uploads/2022/09/DSC_0007-scaled.jpg"
curl -sL -o "images/products/sprite.jpg" "https://mygroceryfinder.com/cdn/shop/products/10679_SpriteRegular_580x.jpg?v=1620286998"
curl -sL -o "images/products/sprite-zero.jpg" "https://upload.wikimedia.org/wikipedia/commons/e/e1/Sprite_Zero_Sugar_1.jpg"
curl -sL -o "images/products/redbull.jpg" "https://m.media-amazon.com/images/I/81Kvy57PdAL._AC_UF894,1000_QL80_.jpg"
curl -sL -o "images/products/monster.jpg" "https://jodiabaazar.com/cdn/shop/files/Monster_Energy_Drink_-_Original_-_500_ML_Pack_of_12.jpg?v=1722076513"
curl -sL -o "images/products/barbican-apple.jpg" "https://m.media-amazon.com/images/I/81w6hEx-42L.jpg"
curl -sL -o "images/products/barbican-pomegranate.png" "https://barbicanworld.com/wp-content/uploads/J02694-Barbican-MD-Website-Images-W591xH557pix-Pomegranate-1.png"
curl -sL -o "images/products/vimto-cordial.jpg" "https://foodsofnations.com/cdn/shop/products/vimto-fruit-cordial.jpg?v=1616645145"
curl -sL -o "images/products/vimto-fizzy.png" "https://vimto.s3.eu-west-1.amazonaws.com/wp-content/uploads/2022/10/02143837/ORG-625x900px.png"
curl -sL -o "images/products/arwa.jpg" "https://cdn.mafrservices.com/sys-master-root/h07/h18/51573562310686/646081_main.jpg"

# Download Product Images - Coffee & Tea
curl -sL -o "images/products/nescafe-espresso.jpg" "https://www.caffeine.pk/cdn/shop/products/MyespressoIntenso_600x.jpg?v=1654512671"
curl -sL -o "images/products/nescafe-lungo.png" "https://www.nescafe.com/sites/default/files/2023-04/01_16%20PDP%20NDG%20Banner%20Module%20Lungo%20960x960.png"
curl -sL -o "images/products/nescafe-cappuccino.jpg" "https://www.caffeine.pk/cdn/shop/products/SkinnyUnsweetened.jpg?v=1710503685"
curl -sL -o "images/products/nescafe-cafe-au-lait.png" "https://www.nescafe.com/sites/default/files/2023-04/01_40%20PDP%20NDG%20Banner%20Module%20Cafe%20Au%20Lait%20960x960.png"
curl -sL -o "images/products/nesquik-pods.png" "https://www.dolce-gusto.co.uk/media/catalog/product/cache/d22af66f75f51f60e100631e2c10a99a/b/e/bev0000077-16.png"
curl -sL -o "images/products/nescafe-gold.webp" "https://www.nescafe.com/us/sites/g/files/jgfbjl306/files/styles/gdn_hero_pdp_product_image/public/gdn_product/field_product_images/nescafe-xllxm139trmnff9tunj9.jpg.webp?itok=ZbDEjZlC"
curl -sL -o "images/products/nescafe-3in1.png" "https://www.nescafe.com/mena/sites/default/files/2024-05/AE_ae_NES_3.0%20Website_Packshot%20Resizing_IMG-8_240424_1_1714111632029_0.png"
curl -sL -o "images/products/lipton-black.jpg" "https://turkishplaza.com/cdn/shop/products/03111410-ccf875-1650x1650_1200x.jpg?v=1593691103"
curl -sL -o "images/products/lipton-green.jpg" "https://m.media-amazon.com/images/I/515kVkqL5gL._SL500_.jpg"

# Download Product Images - Food & Confectionery
curl -sL -o "images/products/mars.jpg" "https://jodiabaazar.com/cdn/shop/products/images_26_a88fd664-f372-4490-83ff-a5278c5ae9f2.jpg?v=1665682750"
curl -sL -o "images/products/snickers.png" "https://www.snickers.com/mena/sites/g/files/fnmzdf1451/files/migrate-product-files/luxdq1trdghdiu0d0enm.png"
curl -sL -o "images/products/bounty.jpg" "https://m.media-amazon.com/images/I/81CSGgedW8L.jpg"
curl -sL -o "images/products/orbit-watermelon.png" "https://i.ebayimg.com/images/g/FosAAOSwsOtn86Z9/s-l1200.png"
curl -sL -o "images/products/orbit-strawberry.webp" "https://storage.googleapis.com/download/storage/v1/b/lastmile-ui/o/import%2Fphotos%2Fconverted%2Fproduct%2FCvKfTzV4TN5U8BTMF1Hl_8hnoSlkAlJ6YipwODlId_CvKfTzV4TN5U8BTMF1Hl_webpConverter_1_big.webp?generation=1698232138456115&alt=media"
curl -sL -o "images/products/orbit-white.png" "https://www.orbitgum.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf6871/files/migrate-product-files/fv3parqmmp9ck1smx2gb.png"
curl -sL -o "images/products/extra-peppermint.png" "https://www.extragum.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf5701/files/migrate-product-files/atjqxjjq5pycvpny9xhs.png"
curl -sL -o "images/products/extra-spearmint.png" "https://www.extragum.com/cdn-cgi/image/width=600,height=600,f=auto,quality=90/sites/g/files/fnmzdf5701/files/migrate-product-files/q7vkgvxy4rvlq9eeud4f.png"
curl -sL -o "images/products/extra-bubblemint.png" "https://www.extragum.co.uk/sites/g/files/fnmzdf671/files/migrate-product-files/rzkaedejgu2bvfjjcufv.png"
curl -sL -o "images/products/lu-choco-prince.jpg" "https://springs.com.pk/cdn/shop/files/8961003614019.jpg?v=1754920899"
curl -sL -o "images/products/nesquik-cereal.jpg" "https://plus.mvrwholesale.com/cdn/shop/files/0006563327934p_e95bb81e-69e9-4ec0-9359-32acd645de42.jpg?v=1752145725"
curl -sL -o "images/products/maggi-stock.jpg" "https://www.metro-online.pk/_next/image?url=https%3A%2F%2Fmetro-b2c.s3.ap-southeast-1.amazonaws.com%2FProducts%2F1753768825918.jpg&w=3840&q=75"

# Download Product Images - Personal Care
curl -sL -o "images/products/dabur-amla.jpg" "https://api.daburinternational.com/wp-content/uploads/2023/08/5022496001298-Hair-Oil-Main.jpg"
curl -sL -o "images/products/vatika-shampoo.jpg" "https://finalchoice.com.pk/cdn/shop/files/Untitled-1_3b153e78-f11b-48f1-95e6-522a160be406_1024x1024.jpg?v=1742384457"
curl -sL -o "images/products/vatika-cream.jpg" "https://api.daburinternational.com/wp-content/uploads/2023/09/6291069710878-Hair-Cream-Main.jpg"
curl -sL -o "images/products/vaseline-coconut.jpg" "https://media.myaster.com/images/products/1068879/vaseline-coconut-restore-replenishing-body-oil-200ml/1068879-4.jpg"
curl -sL -o "images/products/vaseline-cocoa.jpg" "https://images-cdn.ubuy.co.mz/669a5401f5588850395ddda0-vaseline-intensive-care-cocoa-radiant.jpg"
curl -sL -o "images/products/dettol.jpg" "https://metro-b2c.s3.ap-southeast-1.amazonaws.com/products_images_new/12626620-0-M.jpg"

# Download Product Images - Household
curl -sL -o "images/products/fairy-lemon.jpg" "https://m.media-amazon.com/images/I/91zT6n7WakL._AC_UF1000,1000_QL80_.jpg"
curl -sL -o "images/products/fairy-lavender.jpg" "https://www.wholesale-supplier.uk/media/catalog/product/cache/207e23213cf636ccdef205098cf3c8a3/t/u/tumbnail_da114ec1-dcd7-49f6-917f-92467ef1935a.jpg"
curl -sL -o "images/products/fairy-soap.png" "https://www.anthap.co.uk/cdn/shop/files/productsAnthap_14.png?v=1758016710"

echo ""
echo "✅ All images downloaded!"
echo ""
echo "Downloaded to:"
echo "  - images/brands/ (8 files)"
echo "  - images/categories/ (8 files)"
echo "  - images/products/ (51 files)"

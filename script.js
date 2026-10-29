// ==========================================
// 1. YOUR STICKER DATA GOES HERE
// ==========================================
const stickers = [
    // Anime section starts
        { name: "Stay Safe Darling", code: "Anime-001", price: 10, category: "Anime", image: "./images/Anime/imgi_11_stay-safe-darling-sticker-2059679.jpg" },
        { name: "Goku No Pain No Gain", code: "Anime-002", price: 10, category: "Anime", image: "./images/Anime/imgi_12_goku-no-pain-no-gain-sticker-1171127.jpg" },
        { name: "Actionkamen Shinchan", code: "Anime-003", price: 10, category: "Anime", image: "./images/Anime/imgi_13_actionkamen-shinchan-sticker-5420875.jpg" },
        { name: "Saitama Peace", code: "Anime-004", price: 10, category: "Anime", image: "./images/Anime/imgi_14_saitama-peace-sticker-1593716.jpg" },
        { name: "Uchiha Logo", code: "Anime-005", price: 10, category: "Anime", image: "./images/Anime/imgi_15_uchiha-logo-sticker-8212694.jpg" },
        { name: "Shy Shinchan", code: "Anime-006", price: 10, category: "Anime", image: "./images/Anime/imgi_16_shy-shinchan-sticker-3662403.jpg" },
        { name: "One Piece", code: "Anime-007", price: 10, category: "Anime", image: "./images/Anime/imgi_17_one-piece-sticker-2959543.jpg" },
        { name: "Scouting Legion", code: "Anime-008", price: 10, category: "Anime", image: "./images/Anime/imgi_18_scouting-legion-sticker-4300373.jpg" },
        { name: "Perfection", code: "Anime-009", price: 10, category: "Anime", image: "./images/Anime/imgi_19_perfection-sticker-5779642.jpg" },
        { name: "Nezuko Demon Slayer", code: "Anime-010", price: 10, category: "Anime", image: "./images/Anime/imgi_20_nezuko-demon-slayer-sticker-8409467.jpg" },
        { name: "Zoro", code: "Anime-011", price: 10, category: "Anime", image: "./images/Anime/imgi_21_zoro-sticker-8425345.jpg" },
        { name: "Baka", code: "Anime-012", price: 10, category: "Anime", image: "./images/Anime/imgi_22_baka-sticker-7950593.jpg" },
        { name: "Anti Hentai Hentai Club", code: "Anime-013", price: 10, category: "Anime", image: "./images/Anime/imgi_23_anti-hentai-hentai-club-sticker-1203083.jpg" },
        { name: "Luffy One Piece", code: "Anime-014", price: 10, category: "Anime", image: "./images/Anime/imgi_24_luffy-one-piece-sticker-9489661.jpg" },
        { name: "Kakashi Hatake", code: "Anime-015", price: 10, category: "Anime", image: "./images/Anime/imgi_25_kakashi-hatake-sticker-7254115.jpg" },
        { name: "Demon Slayer", code: "Anime-016", price: 10, category: "Anime", image: "./images/Anime/imgi_26_demon-slayer-sticker-5743755.jpg" },
        { name: "Boa Hancock", code: "Anime-017", price: 10, category: "Anime", image: "./images/Anime/imgi_27_boa-hancock-sticker-7910949.jpg" },
        { name: "Waifu Material 01", code: "Anime-018", price: 10, category: "Anime", image: "./images/Anime/imgi_28_waifu-material-01-sticker-2316441.jpg" },
        { name: "Neon Akatsuki", code: "Anime-019", price: 10, category: "Anime", image: "./images/Anime/imgi_29_neon-akatsuki-sticker-1388011.jpg" },
        { name: "Going Merry", code: "Anime-020", price: 10, category: "Anime", image: "./images/Anime/imgi_30_going-merry-sticker-7028583.jpg" },
        { name: "Shinchan With Sunflower", code: "Anime-021", price: 10, category: "Anime", image: "./images/Anime/imgi_31_shinchan-with-sunflower-sticker-8587125.jpg" },
        { name: "Kakashi In Blade", code: "Anime-022", price: 10, category: "Anime", image: "./images/Anime/imgi_32_kakashi-in-blade-sticker-1893700.jpg" },
        { name: "Baki Back", code: "Anime-023", price: 10, category: "Anime", image: "./images/Anime/imgi_33_baki-back-sticker-4010865.jpg" },
        { name: "Sharingan Activated", code: "Anime-024", price: 10, category: "Anime", image: "./images/Anime/imgi_34_sharingan-activated-sticker-7385654.jpg" },
        { name: "One Peice Holographic Stickers", code: "Anime-025", price: 10, category: "Anime", image: "./images/Anime/imgi_35_one-peice-holographic-stickers-6525325.jpg" },
        { name: "One Peice Zoro Wanted Poster", code: "Anime-026", price: 10, category: "Anime", image: "./images/Anime/imgi_36_one-peice-zoro-wanted-poster-sticker-8277632.jpg" },
        { name: "Anime Girl Long Hair Holographic Stickers", code: "Anime-027", price: 10, category: "Anime", image: "./images/Anime/imgi_37_anime-girl-long-hair-holographic-stickers-6685090.jpg" },
        { name: "Naruto", code: "Anime-028", price: 10, category: "Anime", image: "./images/Anime/imgi_38_naruto-sticker-6078098.jpg" },
        { name: "Samurai Group Art", code: "Anime-029", price: 10, category: "Anime", image: "./images/Anime/imgi_39_samurai-group-art-sticker-7605926.jpg" },
        { name: "Nah Id Win Gojo Holographic", code: "Anime-030", price: 10, category: "Anime", image: "./images/Anime/imgi_40_nah-id-win-gojo-holographic-sticker-5749450.jpg" },
        { name: "Yoko Littner", code: "Anime-031", price: 10, category: "Anime", image: "./images/Anime/imgi_41_yoko-littner-sticker-5215535.jpg" },
        { name: "Baki", code: "Anime-032", price: 10, category: "Anime", image: "./images/Anime/imgi_42_baki-sticker-3469459.jpg" },
        { name: "Tanjiro Water Breathing Forms", code: "Anime-033", price: 10, category: "Anime", image: "./images/Anime/imgi_43_tanjiro-water-breathing-forms-sticker-1071505.jpg" },
        { name: "Son Goku Sparking Zero", code: "Anime-034", price: 10, category: "Anime", image: "./images/Anime/imgi_44_son-goku-sparking-zero-sticker-3897247.jpg" },
        { name: "Zoro Holographic", code: "Anime-035", price: 10, category: "Anime", image: "./images/Anime/imgi_45_zoro-holographic-sticker-8138197.jpg" },
        { name: "Initial D", code: "Anime-036", price: 10, category: "Anime", image: "./images/Anime/imgi_46_initial-d-sticker-1979322.jpg" },
        { name: "Thunder Hashira", code: "Anime-037", price: 10, category: "Anime", image: "./images/Anime/imgi_47_thunder-hashira-sticker-4954785.jpg" },
        { name: "Kurama Scratch", code: "Anime-038", price: 10, category: "Anime", image: "./images/Anime/imgi_48_kurama-scratch-sticker-2845221.jpg" },
        { name: "Luffy Devil Fruit", code: "Anime-039", price: 10, category: "Anime", image: "./images/Anime/imgi_49_luffy-devil-fruit-sticker-9845417.jpg" },
        { name: "Goku Logo", code: "Anime-040", price: 10, category: "Anime", image: "./images/Anime/imgi_50_goku-logo-sticker-7990900.jpg" },
        { name: "Eren", code: "Anime-041", price: 10, category: "Anime", image: "./images/Anime/imgi_51_eren-sticker-8904185.jpg" },
        { name: "Itachi Uchiha Sharingan 20", code: "Anime-042", price: 10, category: "Anime", image: "./images/Anime/imgi_52_itachi-uchiha-sharingan-20-sticker-9210761.jpg" },
        { name: "Doremon", code: "Anime-043", price: 10, category: "Anime", image: "./images/Anime/imgi_53_doremon-sticker-9601350.jpg" },
        { name: "Berserk 10", code: "Anime-044", price: 10, category: "Anime", image: "./images/Anime/imgi_54_berserk-10-sticker-1928397.jpg" },
        { name: "Monkey D Luffy", code: "Anime-045", price: 10, category: "Anime", image: "./images/Anime/imgi_55_monkey-d-luffy-sticker-5157552.jpg" },
        { name: "Nezuko Chan", code: "Anime-046", price: 10, category: "Anime", image: "./images/Anime/imgi_56_nezuko-chan-sticker-7333876.jpg" },
        { name: "Inosuke", code: "Anime-047", price: 10, category: "Anime", image: "./images/Anime/imgi_57_inosuke-sticker-2242767.jpg" },
        { name: "The Honored One", code: "Anime-048", price: 10, category: "Anime", image: "./images/Anime/imgi_58_the-honored-one-sticker-6892708.jpg" },
        { name: "Anime Collab", code: "Anime-049", price: 10, category: "Anime", image: "./images/Anime/imgi_59_anime-collab-sticker-5027132.jpg" },
        { name: "Rangiku Matsumoto", code: "Anime-050", price: 10, category: "Anime", image: "./images/Anime/imgi_60_rangiku-matsumoto-sticker-1263465.jpg" },
        { name: "Hokage For President", code: "Anime-051", price: 10, category: "Anime", image: "./images/Anime/imgi_61_hokage-for-president-sticker-6013212.jpg" },
        { name: "Naruto Family", code: "Anime-052", price: 10, category: "Anime", image: "./images/Anime/imgi_62_naruto-family-sticker-9442927.jpg" },
        { name: "High Voltage Zenitsu", code: "Anime-053", price: 10, category: "Anime", image: "./images/Anime/imgi_63_high-voltage-zenitsu-sticker-6878187.jpg" },
        { name: "Shoyo Hinata Haikyuu", code: "Anime-054", price: 10, category: "Anime", image: "./images/Anime/imgi_64_shoyo-hinata-haikyuu-sticker-5173457.jpg" },
        { name: "Purple Eyes Anime", code: "Anime-055", price: 10, category: "Anime", image: "./images/Anime/imgi_65_purple-eyes-anime-sticker-2439640.jpg" },
        { name: "Gojo Geto Strongest Duo", code: "Anime-056", price: 10, category: "Anime", image: "./images/Anime/imgi_66_gojo-geto-strongest-duo-sticker-7501844.jpg" },
        { name: "Yuji", code: "Anime-057", price: 10, category: "Anime", image: "./images/Anime/imgi_67_yuji-sticker-7384163.jpg" },
        { name: "Nohara", code: "Anime-058", price: 10, category: "Anime", image: "./images/Anime/imgi_68_nohara-sticker-5901798.jpg" },
        { name: "Faye Valentine", code: "Anime-059", price: 10, category: "Anime", image: "./images/Anime/imgi_69_faye-valentine-sticker-8328748.jpg" },
        { name: "Anime Girl Lineart 01 Holographic Stickers", code: "Anime-060", price: 10, category: "Anime", image: "./images/Anime/imgi_70_anime-girl-lineart-01-holographic-stickers-5226877.jpg" },
        { name: "Angry Goku Glitter", code: "Anime-061", price: 10, category: "Anime", image: "./images/Anime/imgi_71_angry-goku-glitter-sticker-2193740.jpg" },
        { name: "Ghost Of The Uchiha", code: "Anime-062", price: 10, category: "Anime", image: "./images/Anime/imgi_72_ghost-of-the-uchiha-sticker-3282470.jpg" },
        { name: "Kurosaki Ichigo", code: "Anime-063", price: 10, category: "Anime", image: "./images/Anime/imgi_73_kurosaki-ichigo-sticker-2133316.jpg" },
        { name: "Anime Collection", code: "Anime-064", price: 10, category: "Anime", image: "./images/Anime/imgi_74_anime-collection-sticker-6679935.jpg" },
        { name: "Haikyuu Fly High", code: "Anime-065", price: 10, category: "Anime", image: "./images/Anime/imgi_75_haikyuu-fly-high-sticker-9560635.jpg" },
        { name: "Nel Tu", code: "Anime-066", price: 10, category: "Anime", image: "./images/Anime/imgi_76_nel-tu-sticker-2677723.jpg" },
        { name: "Solo Leveling Arise", code: "Anime-067", price: 10, category: "Anime", image: "./images/Anime/imgi_77_solo-leveling-arise-sticker-7800612.jpg" },
        { name: "Akira", code: "Anime-068", price: 10, category: "Anime", image: "./images/Anime/imgi_78_akira-sticker-7859170.jpg" },
        { name: "Toji Back Holographic", code: "Anime-069", price: 10, category: "Anime", image: "./images/Anime/imgi_79_toji-back-holographic-sticker-9050588.jpg" },
        { name: "Itachi Uchiha Sharingan", code: "Anime-070", price: 10, category: "Anime", image: "./images/Anime/imgi_80_itachi-uchiha-sharingan-sticker-1234965.jpg" },
        { name: "Naruto Sage Of Six Paths", code: "Anime-071", price: 10, category: "Anime", image: "./images/Anime/imgi_81_naruto-sage-of-six-paths-sticker-7718370.jpg" },
        { name: "Chainsaw Man", code: "Anime-072", price: 10, category: "Anime", image: "./images/Anime/imgi_82_chainsaw-man-sticker-9563531.jpg" },
        { name: "D Gear 5", code: "Anime-073", price: 10, category: "Anime", image: "./images/Anime/imgi_83_d-gear-5-sticker-9212089.jpg" },
        { name: "Anime Girl Red 02 Holographic Stickers", code: "Anime-074", price: 10, category: "Anime", image: "./images/Anime/imgi_84_anime-girl-red-02-holographic-stickers-1009675.jpg" },
        { name: "Ryomen Sukuna Holographic", code: "Anime-075", price: 10, category: "Anime", image: "./images/Anime/imgi_85_ryomen-sukuna-holographic-sticker-4156368.jpg" },
        { name: "Goku Ultra", code: "Anime-076", price: 10, category: "Anime", image: "./images/Anime/imgi_86_goku-ultra-sticker-8123447.jpg" },
        { name: "Muscular Anya", code: "Anime-077", price: 10, category: "Anime", image: "./images/Anime/imgi_87_muscular-anya-sticker-2077283.jpg" },
        { name: "Naruto", code: "Anime-078", price: 10, category: "Anime", image: "./images/Anime/imgi_88_naruto-sticker-4939092.jpg" },
        { name: "Luffy Awakening Holographic", code: "Anime-079", price: 10, category: "Anime", image: "./images/Anime/imgi_89_luffy-awakening-holographic-sticker-4036048.jpg" },
        { name: "Kageyama X Hinata Chibi", code: "Anime-080", price: 10, category: "Anime", image: "./images/Anime/imgi_90_kageyama-x-hinata-chibi-sticker-9024125.jpg" },
        { name: "Cute Girl 04 Glitter", code: "Anime-081", price: 10, category: "Anime", image: "./images/Anime/imgi_91_cute-girl-04-glitter-sticker-8383334.jpg" },
        { name: "Kuromi", code: "Anime-082", price: 10, category: "Anime", image: "./images/Anime/imgi_92_kuromi-sticker-5863876.jpg" },
        { name: "Sakamoto 20", code: "Anime-083", price: 10, category: "Anime", image: "./images/Anime/imgi_93_sakamoto-20-sticker-1671726.jpg" },
        { name: "Pika Shinchan", code: "Anime-084", price: 10, category: "Anime", image: "./images/Anime/imgi_94_pika-shinchan-sticker-7189871.jpg" },
        { name: "L", code: "Anime-085", price: 10, category: "Anime", image: "./images/Anime/imgi_95_l-sticker-1401497.jpg" },
        { name: "Flame Haired Warrior Glitter", code: "Anime-086", price: 10, category: "Anime", image: "./images/Anime/imgi_96_flame-haired-warrior-glitter-sticker-4994412.jpg" },
        { name: "Dark Dress Anime Beauty Glitter", code: "Anime-087", price: 10, category: "Anime", image: "./images/Anime/imgi_97_dark-dress-anime-beauty-glitter-sticker-4166670.jpg" },
        { name: "Anime Orange Hair Fight Holographic Stickers", code: "Anime-088", price: 10, category: "Anime", image: "./images/Anime/imgi_98_anime-orange-hair-fight-holographic-stickers-3154547.jpg" },
        { name: "The Slayers", code: "Anime-089", price: 10, category: "Anime", image: "./images/Anime/imgi_99_the-slayers-sticker-1916926.jpg" },
        { name: "Gojo Cat Glitter", code: "Anime-090", price: 10, category: "Anime", image: "./images/Anime/imgi_100_gojo-cat-glitter-sticker-7603346.jpg" },
        { name: "Komi San Chibi", code: "Anime-091", price: 10, category: "Anime", image: "./images/Anime/imgi_101_komi-san-chibi-sticker-4930352.jpg" },
        { name: "Anime Girl Pose Holographic Stickers", code: "Anime-092", price: 10, category: "Anime", image: "./images/Anime/imgi_102_anime-girl-pose-holographic-stickers-5016614.jpg" },
        { name: "Wukong", code: "Anime-093", price: 10, category: "Anime", image: "./images/Anime/imgi_103_wukong-sticker-3051720.jpg" },
        { name: "Luffy Gear 5 Boxing", code: "Anime-094", price: 10, category: "Anime", image: "./images/Anime/imgi_104_luffy-gear-5-boxing-sticker-5544120.jpg" },
        { name: "Evangelion", code: "Anime-095", price: 10, category: "Anime", image: "./images/Anime/imgi_105_evangelion-sticker-3955367.jpg" },
        { name: "Anime Girl Blonde Holographic Stickers", code: "Anime-096", price: 10, category: "Anime", image: "./images/Anime/imgi_106_anime-girl-blonde-holographic-stickers-7593390.jpg" },
        { name: "Naruto Ramen", code: "Anime-097", price: 10, category: "Anime", image: "./images/Anime/imgi_107_naruto-ramen-sticker-1449093.jpg" },
        { name: "Dattebayo", code: "Anime-098", price: 10, category: "Anime", image: "./images/Anime/imgi_108_dattebayo-sticker-6910361.jpg" },
        { name: "Daijin Cat", code: "Anime-099", price: 10, category: "Anime", image: "./images/Anime/imgi_109_daijin-cat-sticker-8411926.jpg" },
        { name: "Anya Spyxfamily", code: "Anime-100", price: 10, category: "Anime", image: "./images/Anime/imgi_110_anya-spyxfamily-sticker-6257143.jpg" },
             
        
];

const INSTAGRAM_USERNAME = "YOUR_INSTA_USERNAME";
const MINIMUM_CART_ITEMS = 5;

// ==========================================
// 2. CUSTOM ALERT LOGIC
// ==========================================
function showCustomAlert(message) {
  const alertModal = document.getElementById("customAlert");
  const alertMsg = document.getElementById("alertMessage");

  alertMsg.textContent = message;
  alertModal.classList.remove("hidden");

  // Trigger animation
  setTimeout(() => {
    alertModal.classList.remove("opacity-0");
  }, 10);
}

function closeAlert() {
  const alertModal = document.getElementById("customAlert");
  alertModal.classList.add("opacity-0");
  setTimeout(() => {
    alertModal.classList.add("hidden");
  }, 300);
}

// ==========================================
// 3. SCROLL REVEAL & NAVBAR EFFECTS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".glass-nav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  const reveals = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  reveals.forEach((reveal) => revealObserver.observe(reveal));
});

// ==========================================
// 4. CART STATE MANAGEMENT
// ==========================================
let cart = JSON.parse(localStorage.getItem("stickerCart")) || [];

function saveCart() {
  localStorage.setItem("stickerCart", JSON.stringify(cart));
  updateCartUI();
}

function addToCart(code, cardElement) {
  const existingItem = cart.find((item) => item.code === code);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ code: code, quantity: 1 });
  }
  saveCart();

  showToast();
  triggerCartAnimations();

  if (cardElement) {
    cardElement.classList.add("animate-card-pulse");
    setTimeout(() => cardElement.classList.remove("animate-card-pulse"), 600);
  }

  // Re-render to update the button to green "Added"
  renderStickers();
}

function updateQuantity(code, change) {
  const item = cart.find((item) => item.code === code);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      cart = cart.filter((i) => i.code !== code);
    }
    saveCart();
  }
}

function removeItem(code) {
  cart = cart.filter((item) => item.code !== code);
  saveCart();
  renderStickers(); // Update button state back to black
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.remove("translate-x-[150%]");
  setTimeout(() => {
    toast.classList.add("translate-x-[150%]");
  }, 2500);
}

function triggerCartAnimations() {
  const icons = document.querySelectorAll(
    ".nav-cart-icon, .floating-cart-icon",
  );
  const counts = document.querySelectorAll(
    ".nav-cart-count, .floating-cart-count",
  );

  icons.forEach((icon) => {
    icon.classList.remove("animate-shake");
    void icon.offsetWidth;
    icon.classList.add("animate-shake");
  });

  counts.forEach((badge) => {
    badge.classList.remove("animate-badge");
    badge.classList.add("scale-100");
    void badge.offsetWidth;
    badge.classList.add("animate-badge");
  });
}

function updateCartUI() {
  const counts = document.querySelectorAll(
    ".nav-cart-count, .floating-cart-count",
  );
  const cartItemsList = document.getElementById("cartItemsList");
  const cartTotalEl = document.getElementById("cartTotal");

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  counts.forEach((el) => {
    el.textContent = totalItems;
    if (totalItems === 0) {
      el.classList.remove("scale-100");
      el.classList.add("scale-0");
    } else {
      el.classList.remove("scale-0");
      el.classList.add("scale-100");
    }
  });

  cartItemsList.innerHTML = "";
  let totalPrice = 0;

  if (cart.length === 0) {
    cartItemsList.innerHTML =
      '<div class="text-center mt-10"><p class="text-gray-400 font-medium">Your cart is empty.</p></div>';
  } else {
    cart.forEach((cartItem) => {
      const stickerData = stickers.find((s) => s.code === cartItem.code);
      if (stickerData) {
        const itemTotal = stickerData.price * cartItem.quantity;
        totalPrice += itemTotal;

        const itemHTML = `
                    <div class="flex items-center gap-4 bg-white p-3 rounded-2xl border border-gray-100 shadow-sm transition-all hover:shadow-md">
                        <div class="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center p-1">
                            <img src="${stickerData.image}" class="max-w-full max-h-full object-contain" onerror="this.src='https://placehold.co/100x100?text=Err'">
                        </div>
                        <div class="flex-grow">
                            <h4 class="font-bold text-sm text-gray-900 leading-tight">${stickerData.name}</h4>
                            <p class="text-xs text-gray-400 font-semibold mb-1">${stickerData.code}</p>
                            <p class="text-sm font-bold text-gray-900">₹${stickerData.price}</p>
                        </div>
                        <div class="flex flex-col items-center gap-2">
                            <div class="flex items-center bg-gray-50 border border-gray-200 rounded-lg overflow-hidden">
                                <button onclick="updateQuantity('${stickerData.code}', -1)" class="px-2.5 py-1 text-gray-600 hover:bg-gray-200 transition-colors">-</button>
                                <span class="px-2 text-sm font-bold w-6 text-center">${cartItem.quantity}</span>
                                <button onclick="updateQuantity('${stickerData.code}', 1)" class="px-2.5 py-1 text-gray-600 hover:bg-gray-200 transition-colors">+</button>
                            </div>
                            <button onclick="removeItem('${stickerData.code}')" class="text-[11px] text-red-500 font-semibold hover:underline">Remove</button>
                        </div>
                    </div>
                `;
        cartItemsList.innerHTML += itemHTML;
      }
    });
  }

  cartTotalEl.textContent = `₹${totalPrice}`;
}

// ==========================================
// 5. RENDER STICKERS & SEARCH
// ==========================================
const grid = document.getElementById("stickerGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const noResults = document.getElementById("noResults");

function renderStickers() {
  grid.innerHTML = "";

  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = stickers.filter((sticker) => {
    const matchesSearch =
      sticker.name.toLowerCase().includes(searchTerm) ||
      sticker.code.toLowerCase().includes(searchTerm);
    const matchesCategory =
      selectedCategory === "All" || sticker.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    noResults.classList.remove("hidden");
    return;
  } else {
    noResults.classList.add("hidden");
  }

  filtered.forEach((sticker) => {
    const inCart = cart.find((item) => item.code === sticker.code);

    const btnClass = inCart
      ? "bg-green-50 text-green-600 border border-green-200 hover:bg-green-100"
      : "bg-gray-900 text-white hover:bg-black shadow-md hover:shadow-xl";
    const btnText = inCart ? "Added" : "Add to Cart";
    const btnIcon = inCart
      ? `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>`
      : `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4v16m8-8H4"></path></svg>`;

    const card = `
            <div id="card-${sticker.code}" class="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col relative transform hover:-translate-y-2">
                <div class="aspect-square w-full overflow-hidden bg-[#f8f9fa] flex items-center justify-center p-6 relative">
                    <img src="${sticker.image}" alt="${sticker.name}" 
                         class="max-h-full max-w-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110" 
                         loading="lazy"
                         onerror="this.onerror=null; this.src='https://placehold.co/400x400/f3f4f6/a1a1aa?text=Image+Missing';">
                    <span class="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-gray-600 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full shadow-sm">
                        ${sticker.category}
                    </span>
                </div>
                <div class="p-5 flex-grow flex flex-col">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-lg font-extrabold text-gray-900 leading-tight pr-2">${sticker.name}</h3>
                        <div class="text-xl font-black text-gray-900">₹${sticker.price}</div>
                    </div>
                    <p class="text-xs text-gray-400 font-semibold mb-5">CODE: ${sticker.code}</p>
                    <button onclick="addToCart('${sticker.code}', document.getElementById('card-${sticker.code}'))" 
                            class="mt-auto w-full ${btnClass} font-bold text-sm py-3 rounded-xl transition-all duration-300 flex justify-center items-center gap-2">
                        ${btnIcon}
                        ${btnText}
                    </button>
                </div>
            </div>
        `;
    grid.innerHTML += card;
  });
}

// ==========================================
// 6. UI EVENT LISTENERS (Cart & Search)
// ==========================================
searchInput.addEventListener("input", renderStickers);

const cartModal = document.getElementById("cartModal");
const cartPanel = document.getElementById("cartPanel");

function openCart() {
  cartModal.classList.remove("hidden");
  setTimeout(() => {
    cartModal.classList.remove("opacity-0");
    cartPanel.classList.remove("translate-x-full");
  }, 10);
  document.body.classList.add("cart-open");
  renderStickers();
}

function closeCart() {
  cartModal.classList.add("opacity-0");
  cartPanel.classList.add("translate-x-full");
  setTimeout(() => {
    cartModal.classList.add("hidden");
    document.body.classList.remove("cart-open");
  }, 300);
}

document.querySelectorAll(".cart-trigger").forEach((btn) => {
  btn.addEventListener("click", openCart);
});

document.getElementById("closeCartBtn").addEventListener("click", closeCart);

cartModal.addEventListener("click", (e) => {
  if (e.target === cartModal) closeCart();
});

// ==========================================
// 7. CUSTOM DROPDOWN LOGIC (Missing before!)
// ==========================================
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownIcon = document.getElementById("dropdownIcon");
const dropdownLabel = document.getElementById("dropdownLabel");
const categoryFilterInput = document.getElementById("categoryFilter");

function toggleDropdown() {
  dropdownMenu.classList.toggle("active");
  dropdownIcon.classList.toggle("active");
}

function selectCategory(value, label) {
  // 1. Update Hidden Input (Triggers filter logic)
  categoryFilterInput.value = value;

  // 2. Update Label Text
  dropdownLabel.textContent = label;

  // 3. Close Dropdown
  dropdownMenu.classList.remove("active");
  dropdownIcon.classList.remove("active");

  // 4. Highlight Active Option
  document.querySelectorAll(".dropdown-option").forEach((opt) => {
    opt.classList.remove("active-option");
    if (opt.getAttribute("data-value") === value) {
      opt.classList.add("active-option");
    }
  });

  // 5. Trigger the search filter function
  renderStickers();
}

// Close dropdown if clicked outside
document.addEventListener("click", (e) => {
  const dropdown = document.getElementById("customDropdown");
  if (dropdown && !dropdown.contains(e.target)) {
    dropdownMenu.classList.remove("active");
    dropdownIcon.classList.remove("active");
  }
});

// Initialize the "All" option as active on load
document
  .querySelector('.dropdown-option[data-value="All"]')
  .classList.add("active-option");

// ==========================================
// 8. INSTAGRAM CHECKOUT & ALERT TRIGGER
// ==========================================
document.getElementById("checkoutBtn").addEventListener("click", () => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Trigger the beautiful custom alert instead of the browser alert
  if (totalItems < MINIMUM_CART_ITEMS) {
    showCustomAlert(
      `You need to add at least ${MINIMUM_CART_ITEMS} stickers in total to place an order. Currently you have ${totalItems}.`,
    );
    return;
  }

  let message = `Hi! I want to order the following stickers:\n\n`;
  let totalPrice = 0;

  cart.forEach((cartItem) => {
    const stickerData = stickers.find((s) => s.code === cartItem.code);
    if (stickerData) {
      const itemTotal = stickerData.price * cartItem.quantity;
      totalPrice += itemTotal;
      message += `• ${stickerData.name} (${stickerData.code}) x${cartItem.quantity} = ₹${itemTotal}\n`;
    }
  });

  message += `\nTotal Price: ₹${totalPrice}`;
  message += `\n\nPlease let me know how to proceed with payment!`;

  const instaLink = `https://ig.me/m/${INSTAGRAM_USERNAME}`;

  navigator.clipboard
    .writeText(message)
    .then(() => {
      showCustomAlert("Order details copied! Opening Instagram DM...");
      setTimeout(() => {
        window.open(instaLink, "_blank");
        closeAlert();
      }, 1500);
    })
    .catch((err) => {
      window.open(instaLink, "_blank");
    });
});

// Initial Setup
renderStickers();
updateCartUI();

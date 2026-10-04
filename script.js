let currentLang = 'en';

const translations = {
    en: {
        menu: {
            cpu: "Processor (CPU)",
            gpu: "Graphics Card (GPU)",
            ram: "Memory (RAM)",
            storage: "Storage (NVMe SSD)",
            motherboard: "Motherboard",
            psu: "Power Supply (PSU)",
            builder: "Build My PC",
            quiz: "Quiz Zone"
        },
        overviewTitle: "Overview & Architecture",
        subFeaturesTitle: "Deep-Dive Technical Features & Sub-Parts",
        tipsTitle: "Expert Assembly & Maintenance Pro-Tips",
        videoTitle: "Step-by-Step Installation Video Guide",
        builderTitle: "Build My PC - Custom Builder",
        builderDesc: "Select your custom components below. Choosing an Intel or AMD processor will automatically filter compatible motherboards!",
        totalPriceTitle: "Calculated Total Price",
        saveBtn: "Save Custom Build",
        savedMsg: "Your custom PC build has been successfully saved!"
    },
    si: {
        menu: {
            cpu: "ප්‍රොෙසෙසරය (CPU)",
            gpu: "ග්‍රැෆික් කාඩ්පත (GPU)",
            ram: "මතකය (RAM)",
            storage: "ගබඩාව (NVMe SSD)",
            motherboard: "මදර්බෝඩ් (Motherboard)",
            psu: "විදුලි ඒකකය (PSU)",
            builder: "මගේ PC එක හදමු",
            quiz: "ප්‍රශ්න විචාරාත්මක අංශය (Quiz)"
        },
        overviewTitle: "දළ විශ්ලේෂණය සහ ව්‍යුහය (Overview)",
        subFeaturesTitle: "විශේෂිත තාක්ෂණික අංග සහ කොටස් (Sub Features)",
        tipsTitle: "වැදගත් උපදෙස් සහ ආරක්ෂාව",
        videoTitle: "ස්ථාපනය කිරීමේ වීඩියෝ මාර්ගෝපදේශය",
        builderTitle: "මගේ PC එක හදමු - Custom Builder",
        builderDesc: "ඔබට අවශ්‍ය උපාංග පහතින් තෝරන්න. Intel හෝ AMD ප්‍රොෙසෙසරයක් තේරූ විට, අදාළ මදර්බෝඩ් පමණක් ස්වයංක්‍රීයව පෙන්නුම් කරයි!",
        totalPriceTitle: "ගණනය කළ මුළු මුදල",
        saveBtn: "Build එක Save කරන්න",
        savedMsg: "ඔබගේ Custom PC Build එක සාර්ථකව Save විය!"
    }
};

const hardwareData = {
    cpu: {
        nameKey: "cpu",
        icon: "fa-microchip",
        image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop&q=80",
        description: {
            en: "The CPU (Central Processing Unit) acts as the primary computational brain of the computer, orchestrating all system operations, executing software instructions, and processing multi-threaded workloads.",
            si: "ප්‍රොෙසෙසරය (CPU) යනු පරිගණකයේ ප්‍රධාන ගණන ක්‍රියාකාරී මොළයයි. මෙයින් සියලුම මෘදුකාංග විධාන ක්‍රියාත්මක කිරීම සහ බහු-නූල් කාර්යයන් පාලනය කරයි."
        },
        subSections: [
            {
                title: { en: "Hybrid Core Design (P-Cores & E-Cores)", si: "මුහුන් කෝර් ව්‍යුහය (P-Cores සහ E-Cores)" },
                image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?w=600&auto=format&fit=crop&q=80",
                text: {
                    en: "Modern CPUs utilize Performance-cores for heavy gaming and rendering, coupled with Efficient-cores for background tasks to drastically improve power efficiency.",
                    si: "නවීන ප්‍රොෙසෙසර බරපතල ක්‍රීඩා සඳහා P-Cores ද, පසුබිම් කාර්යයන් සඳහා E-Cores ද භාවිත කරමින් කාර්යක්ෂමතාව වැඩි කරයි."
                }
            },
            {
                title: { en: "Turbo Boost Clock Frequency", si: "ටර්බෝ බූස්ට් ක්ලොක් වේගය" },
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
                text: {
                    en: "Turbo Boost dynamically increases frequency under heavy computational loads, ensuring peak performance during intense gaming or compiling sessions.",
                    si: "බරපතල වැඩවලදී ටර්බෝ බූස්ට් මඟින් ස්වයංක්‍රීයව ප්‍රොෙසෙසරයේ වේගය වැඩි කරයි."
                }
            }
        ],
        tips: {
            en: ["Apply a pea-sized amount of high-grade thermal paste.", "Verify LGA/AM5 socket pin integrity before installation."],
            si: ["ප්‍රමිතියෙන් යුත් ටර්මල් පේස්ට් නිසි පරිදි යොදන්න.", "ස්ථාපනය කිරීමට පෙර සොකට් පින් ආරක්ෂිතදැයි පරීක්ෂා කරන්න."]
        }
    },
    gpu: {
        nameKey: "gpu",
        icon: "fa-vr-cardboard",
        image: "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: {
            en: "The Graphics Processing Unit (GPU) is a specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer.",
            si: "ග්‍රැෆික් කාඩ්පත (GPU) යනු උසස් තත්ත්වයේ 3D ග්‍රැෆික්ස්, දෘශ්‍ය ප්‍රයෝග සහ ක්‍රීඩා රාමු අතිශයින් වේගයෙන් සකස් කිරීම සඳහා නිර්මාණය කර ඇති විශේෂිත දෘඩාංගයකි."
        },
        subSections: [
            {
                title: { en: "Parallel Processing Cores (CUDA/Stream)", si: "සමාන්තර සැකසුම් කෝර් (CUDA / Stream Cores)" },
                image: "https://plus.unsplash.com/premium_photo-1714618946021-8fbd6394d1a8?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: {
                    en: "GPUs feature thousands of smaller cores working in parallel to calculate complex 3D rendering, lighting, ray tracing, and physics simulations simultaneously.",
                    si: "ග්‍රැෆික් කාඩ්පත් තුළ කුඩා කෝර් දහස් ගණනක් එකවර ක්‍රියාත්මක වෙමින් සංකීර්ණ 3D ජ්‍යාමිතිය සහ රේ ට්‍රේසිං ගණනය කරයි."
                }
            },
            {
                title: { en: "High-Speed VRAM Memory", si: "අධිවේගී වීඩියෝ මතකය (VRAM)" },
                image: "https://plus.unsplash.com/premium_photo-1726869681528-75a146b1e197?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: {
                    en: "VRAM stores high-resolution textures and frame buffers locally for stutter-free gaming experiences at 1440p and 4K resolutions.",
                    si: "VRAM මඟින් ක්‍රීඩා සඳහා අවශ්‍ය විශාල වයර් ස්ට්‍රක්චර් සහ ටෙක්ස්චර් ගබඩා කර තබා ගනී."
                }
            }
        ],
        tips: {
            en: ["Check physical clearance inside your PC case.", "Ensure your PSU has dedicated PCIe power cables."],
            si: ["කේස් එක තුළ ග්‍රැෆික් කාඩ්පතට ප්‍රමාණවත් ඉඩක් ඇත්දැයි බලන්න.", "ඔබේ PSU එකේ ප්‍රමාණවත් වොට් බලයක් ඇති බව තහවුරු කරගන්න."]
        }
    },
    ram: {
        nameKey: "ram",
        icon: "fa-memory",
        image: "https://images.unsplash.com/photo-1714071803594-de887dd5b9af?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: {
            en: "Random Access Memory (RAM) serves as the fast volatile workspace for the CPU, holding active application code and data currently in use.",
            si: "RAM මතකය යනු ප්‍රොෙසෙසරයට ක්ෂණිකව දත්ත ලබා ගැනීමට ඇති අධිවේගී තාවකාලික වැඩබිමයි."
        },
        subSections: [
            {
                title: { en: "DDR5 High Frequencies & Bandwidth", si: "DDR5 ඉහළ සංඛ්‍යාත සහ කලාප පළල" },
                image: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: {
                    en: "DDR5 doubles the bandwidth of DDR4, operating at higher baseline speeds with on-die ECC for enhanced data integrity during extreme multitasking.",
                    si: "DDR5 මඟින් DDR4 මෙන් දෙගුණයක කලාප පළලක් ලබා දෙන අතර, බරපතල වැඩවලදී දත්ත ආරක්ෂාව තවත් වැඩි කරයි."
                }
            }
        ],
        tips: {
            en: ["Install RAM sticks in slots 2 and 4 for optimal dual-channel performance."],
            si: ["ප්‍රශස්ත කාර්යසාධනය සඳහා RAM ස්ටික්ස් 2 සහ 4 ස්ලොට් වල සවි කරන්න."]
        }
    },
    storage: {
        nameKey: "storage",
        icon: "fa-hard-drive",
        image: "https://images.unsplash.com/photo-1597138804456-e7dca7f59d54?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: {
            en: "Solid State Drives (SSDs utilizing NVMe PCIe architecture) offer high-speed non-volatile persistent storage for operating systems, apps, and games.",
            si: "NVMe SSD මඟින් මෙහෙයුම් පද්ධතිය සහ ක්‍රීඩා අතිශයින් වේගයෙන් ආරම්භ කිරීමට අවශ්‍ය ස්ථිර දත්ත ගබඩාවක් සපයයි."
        },
        subSections: [
            {
                title: { en: "PCIe Gen4 / Gen5 NVMe Lanes", si: "PCIe Gen4 / Gen5 NVMe ලේන්" },
                image: "https://images.unsplash.com/photo-1756836857559-4c8161fe07f3?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                text: {
                    en: "NVMe M.2 drives communicate directly with the processor lanes, slashing boot times and loading games in seconds.",
                    si: "NVMe M.2 ඩ්‍රයිව් අකුණු වේගයෙන් දත්ත හුවමාරු කරමින් පරිගණකය ඉක්මනින් on වීමට උදව් වේ."
                }
            }
        ],
        tips: {
            en: ["Use motherboard heatsinks to prevent thermal throttling."],
            si: ["වේගවත් NVMe ඩ්‍රයිව් සඳහා මදර්බෝඩ් හීට්සිංක් (Heatsink) භාවිත කරන්න."]
        }
    },
    motherboard: {
        nameKey: "motherboard",
        icon: "fa-chess-board",
        image: "https://plus.unsplash.com/premium_photo-1683121713210-97667d2e83c8?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: {
            en: "The Motherboard acts as the central backbone connecting the CPU, GPU, RAM, storage drives, and peripherals.",
            si: "මදර්බෝඩ් යනු ප්‍රොෙසෙසරය, ග්‍රැෆික් කාඩ්පත, RAM සහ අනෙකුත් සියලුම උපාංග එකිනෙකට සම්බන්ධ කරන ප්‍රධාන පදනමයි."
        },
        subSections: [
            {
                title: { en: "VRM Power Delivery & Chipset", si: "VRM විදුලි සැපයුම් පද්ධතිය සහ චිප්සෙට්" },
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80",
                text: {
                    en: "High-quality VRMs ensure clean, stable electrical current reaches the CPU, preventing voltage droop and maintaining stability.",
                    si: "ඉහළ මට්ටමේ VRM මඟින් ප්‍රොෙසෙසරයට අවශ්‍ය පිරිසිදු සහ ස්ථාවර විදුලි ධාරාවක් ලබා දීමෙන් පද්ධතියේ ස්ථාවරත්වය තහවුරු කරයි."
                }
            }
        ],
        tips: {
            en: ["Update BIOS to the latest stable version for hardware compatibility."],
            si: ["නවීන දෘඩාංග ගැළපීම සඳහා BIOS යාවත්කාලීන කර තබා ගන්න."]
        }
    },
    psu: {
        nameKey: "psu",
        icon: "fa-plug",
        image: "https://images.unsplash.com/photo-1716062890647-60feae0609d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: {
            en: "The Power Supply Unit (PSU) converts household AC power into regulated DC rails supplying stable energy to every component.",
            si: "විදුලි ඒකකය (PSU) මඟින් බිතු සාකට් එකෙන් එන විදුලිය පරිගණක උපාංගවලට අවශ්‍ය ස්ථාවර විදුලිය බවට පරිවර්තනය කරයි."
        },
        subSections: [
            {
                title: { en: "80 Plus Gold Efficiency Certification", si: "80 Plus ගෝල්ඩ් කාර්යක්ෂමතා සහතිකය" },
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80",
                text: {
                    en: "Certified power supplies guarantee energy efficiency above 90%, reducing thermal waste and protecting delicate components.",
                    si: "සහතික කරන ලද PSU මඟින් 90% කට වැඩි විදුලි කාර්යක්ෂමතාවක් ලබා දී උපාංග ආරක්ෂා කරයි."
                }
            }
        ],
        tips: {
            en: ["Calculate total system power draw and add a 30% overhead headroom."],
            si: ["පද්ධතියේ මුළු විදුලි අවශ්‍යතාවයට වඩා 30% ක වැඩි ඉඩක් ඇති PSU එකක් තෝරන්න."]
        }
    }
};

const builderOptions = {
    cpu: [
        { name: "Intel Core i5-13400F (Intel)", price: 210, platform: "intel" },
        { name: "AMD Ryzen 5 7600X (AMD)", price: 225, platform: "amd" }
    ],
    motherboard: [
        { name: "MSI PRO B760M-A WIFI", price: 160, platform: "intel" },
        { name: "Gigabyte B650 Eagle AX", price: 159, platform: "amd" }
    ],
    ram: [
        { name: "Corsair Vengeance 16GB DDR5 5600MHz", price: 65, platform: "all" }
    ],
    storage: [
        { name: "Samsung 980 PRO 1TB NVMe SSD", price: 90, platform: "all" }
    ],
    gpu: [
        { name: "NVIDIA GeForce RTX 4060 8GB", price: 299, platform: "all" }
    ],
    psu: [
        { name: "Corsair RM750x 80 Plus Gold", price: 119, platform: "all" }
    ]
};

const quizData = [
    {
        question: "Which component acts as the primary computational brain of the computer?",
        options: ["Graphics Card", "Processor (CPU)", "Power Supply", "RAM"],
        correct: 1
    },
    {
        question: "What does NVMe M.2 SSD connect through for ultra-fast speeds?",
        options: ["PCI Express lanes", "Audio Jack", "USB Port", "SATA Cable"],
        correct: 0
    },
    {
        question: "Which memory type is volatile and clears data when the PC is turned off?",
        options: ["NVMe SSD", "Hard Disk Drive", "RAM", "CMOS ROM"],
        correct: 2
    },
    {
        question: "What certification ensures high energy efficiency (above 90%) in a Power Supply Unit (PSU)?",
        options: ["80 Plus Gold", "Bluetooth 5.0", "HDMI 2.1", "DirectX 12"],
        correct: 0
    }
];

const menuList = document.getElementById('componentMenu');
const contentDisplay = document.getElementById('contentDisplay');
let activeSection = 'cpu';

function initApp() {
    renderMenu();
    loadComponent('cpu');
    setupUserProfile();
    setupLanguageToggle();
    setupAIChat();
}

function setupUserProfile() {
    const profileImgInput = document.getElementById('profileImgInput');
    const userAvatar = document.getElementById('userAvatar');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const editNameBtn = document.getElementById('editNameBtn');
    
    if(localStorage.getItem('userProfilePic')) userAvatar.src = localStorage.getItem('userProfilePic');
    if(localStorage.getItem('userProfileName')) userNameDisplay.textContent = localStorage.getItem('userProfileName');

    if (profileImgInput) {
        profileImgInput.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    userAvatar.src = event.target.result;
                    localStorage.setItem('userProfilePic', event.target.result);
                };
                reader.readAsDataURL(file);
            }
        });
    }

    if (editNameBtn) {
        editNameBtn.addEventListener('click', () => {
            const newName = prompt("Enter your profile name:", userNameDisplay.textContent);
            if (newName && newName.trim() !== "") {
                userNameDisplay.textContent = newName.trim();
                localStorage.setItem('userProfileName', newName.trim());
            }
        });
    }

    if(localStorage.getItem('goldenBadgeUnlocked') === 'true') {
        document.getElementById('goldenBadge')?.classList.remove('hidden');
    }
}

function setupLanguageToggle() {
    const btnEn = document.getElementById('langEn');
    const btnSi = document.getElementById('langSi');

    if (btnEn && btnSi) {
        btnEn.addEventListener('click', () => {
            currentLang = 'en';
            btnEn.classList.add('active');
            btnSi.classList.remove('active');
            refreshCurrentView();
        });

        btnSi.addEventListener('click', () => {
            currentLang = 'si';
            btnSi.classList.add('active');
            btnEn.classList.remove('active');
            refreshCurrentView();
        });
    }
}

function refreshCurrentView() {
    if (activeSection === 'builder') loadBuilderPage();
    else if (activeSection === 'quiz') loadQuizPage();
    else loadComponent(activeSection);
    renderMenu();
}

function renderMenu() {
    if (!menuList) return;
    menuList.innerHTML = '';
    const t = translations[currentLang].menu;
    
    for (const key in hardwareData) {
        const item = hardwareData[key];
        const button = document.createElement('button');
        button.className = `menu-btn ${activeSection === key ? 'active' : ''}`;
        button.innerHTML = `<i class="fa-solid ${item.icon}"></i> <span>${t[key]}</span>`;
        button.addEventListener('click', () => loadComponent(key));
        menuList.appendChild(button);
    }

    const builderBtn = document.createElement('button');
    builderBtn.className = `menu-btn builder-tab ${activeSection === 'builder' ? 'active' : ''}`;
    builderBtn.innerHTML = `<i class="fa-solid fa-hammer"></i> <span>${t.builder}</span>`;
    builderBtn.addEventListener('click', loadBuilderPage);
    menuList.appendChild(builderBtn);

    const quizBtn = document.createElement('button');
    quizBtn.className = `menu-btn quiz-tab ${activeSection === 'quiz' ? 'active' : ''}`;
    quizBtn.innerHTML = `<i class="fa-solid fa-question-circle"></i> <span>${t.quiz}</span>`;
    quizBtn.addEventListener('click', loadQuizPage);
    menuList.appendChild(quizBtn);
}

function loadComponent(key) {
    activeSection = key;
    const data = hardwareData[key];
    if (!data) return;
    const t = translations[currentLang];

    let subSectionsHTML = '';
    data.subSections.forEach((sub, index) => {
        const isReverse = index % 2 === 1 ? 'reverse-layout' : '';
        subSectionsHTML += `
            <div class="sub-section-card ${isReverse}">
                <div class="sub-img-container">
                    <img src="${sub.image}" alt="Sub Detail Image" class="sub-part-img">
                </div>
                <div class="sub-text-container">
                    <h4>${sub.title[currentLang] || sub.title['en']}</h4>
                    <p>${sub.text[currentLang] || sub.text['en']}</p>
                </div>
            </div>
        `;
    });

    let tipsHTML = '';
    (data.tips[currentLang] || data.tips['en']).forEach(tip => { tipsHTML += `<li>${tip}</li>`; });

    contentDisplay.innerHTML = `
        <div class="bg-blur-container"><img src="${data.image}" class="bg-blur-image" alt="Blur"></div>
        <div class="content-wrapper">
            <!-- 1. Top Large Part Image (As per your design sketch) -->
            <div class="card-header"><i class="fa-solid ${data.icon}"></i><h1>${t.menu[key]}</h1></div>
            <div class="main-image-container">
                <img src="${data.image}" alt="${key}" class="main-part-img">
            </div>

            <!-- 2. Details Section (Overview) -->
            <div class="details-section-box">
                <h3>${t.overviewTitle}</h3>
                <p class="card-description">${data.description[currentLang] || data.description['en']}</p>
            </div>

            <!-- 3. Sub-images and Sub-details sections -->
            <div class="sub-sections-wrapper">
                <h3>${t.subFeaturesTitle}</h3>
                <div class="sub-cards-grid">${subSectionsHTML}</div>
            </div>

            <!-- Tips Section -->
            <div class="tips-container" style="margin-top:35px;">
                <h3>${t.tipsTitle}</h3>
                <ul style="margin-left: 20px; color: #94a3b8; line-height: 1.6;">${tipsHTML}</ul>
            </div>
        </div>
    `;
}

function loadBuilderPage() {
    activeSection = 'builder';
    const t = translations[currentLang];
    let rowsHTML = '';
    for (const catKey in builderOptions) {
        rowsHTML += `
            <div class="builder-row" data-category="${catKey}">
                <h4>${catKey.toUpperCase()}</h4>
                <select class="builder-select" id="select_${catKey}"></select>
                <div class="builder-part-price" id="price_${catKey}">$0</div>
            </div>
        `;
    }

    contentDisplay.innerHTML = `
        <div class="content-wrapper">
            <div class="card-header"><i class="fa-solid fa-hammer"></i><h1>${t.builderTitle}</h1></div>
            <p class="card-description">${t.builderDesc}</p>
            <div class="builder-container">
                ${rowsHTML}
                <div class="build-summary-box">
                    <div><h3>${t.totalPriceTitle}</h3><div class="total-price" id="grandTotalPrice">$0</div></div>
                    <button class="print-build-btn" onclick="alert('${t.savedMsg}')">${t.saveBtn}</button>
                </div>
            </div>
            <div class="video-container" style="margin-top:30px;">
                <h3>${t.videoTitle}</h3>
                <div style="margin-top:10px; border-radius:10px; overflow:hidden; border:1px solid rgba(255,255,255,0.1);">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/Mho0M1Ns0Rw" frameborder="0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    `;

    updateFilteredDropdowns();
    for (const catKey in builderOptions) {
        document.getElementById(`select_${catKey}`).addEventListener('change', () => {
            if (catKey === 'cpu') updateFilteredDropdowns();
            else updateBuilderTotal();
        });
    }
}

function updateFilteredDropdowns() {
    const cpuSelect = document.getElementById('select_cpu');
    let selectedPlatform = cpuSelect ? builderOptions.cpu[cpuSelect.value || 0].platform : 'intel';

    for (const catKey in builderOptions) {
        const selectElem = document.getElementById(`select_${catKey}`);
        if (!selectElem) continue;
        const currentVal = selectElem.value;
        selectElem.innerHTML = '';
        let validOpts = builderOptions[catKey].filter(opt => catKey === 'motherboard' ? opt.platform === selectedPlatform : true);
        if (validOpts.length === 0) validOpts = builderOptions[catKey];

        validOpts.forEach(opt => {
            const origIdx = builderOptions[catKey].indexOf(opt);
            const optElem = document.createElement('option');
            optElem.value = origIdx;
            optElem.textContent = `$${opt.price} - ${opt.name}`;
            selectElem.appendChild(optElem);
        });
        if (Array.from(selectElem.options).some(o => o.value == currentVal)) selectElem.value = currentVal;
    }
    updateBuilderTotal();
}

function updateBuilderTotal() {
    let total = 0;
    for (const catKey in builderOptions) {
        const selectElem = document.getElementById(`select_${catKey}`);
        const priceElem = document.getElementById(`price_${catKey}`);
        if (selectElem && priceElem) {
            const part = builderOptions[catKey][selectElem.value];
            if (part) { priceElem.textContent = `$${part.price}`; total += part.price; }
        }
    }
    const grandTotal = document.getElementById('grandTotalPrice');
    if (grandTotal) grandTotal.textContent = `$${total}`;
}

function loadQuizPage() {
    activeSection = 'quiz';
    let quizHTML = `
        <div class="content-wrapper">
            <div class="card-header"><i class="fa-solid fa-question-circle"></i><h1>PC Hardware Quiz Zone</h1></div>
            <p class="card-description">Answer all questions correctly to unlock the exclusive Golden Badge!</p>
            <div id="quizContainer">
    `;
    quizData.forEach((q, index) => {
        quizHTML += `<div class="quiz-question-box"><p><b>Q${index + 1}: ${q.question}</b></p><div class="options-list">`;
        q.options.forEach((opt, optIndex) => {
            quizHTML += `<label><input type="radio" name="q${index}" value="${optIndex}"> ${opt}</label>`;
        });
        quizHTML += `</div></div>`;
    });
    quizHTML += `<button class="print-build-btn" onclick="checkQuizAnswers()">Submit Answers</button><p id="quizResultMsg" style="margin-top: 15px; font-weight: bold;"></p></div></div>`;
    contentDisplay.innerHTML = quizHTML;
}

function checkQuizAnswers() {
    let score = 0;
    quizData.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) score++;
    });
    const resultMsg = document.getElementById('quizResultMsg');
    const goldenBadge = document.getElementById('goldenBadge');

    if (score === quizData.length) {
        resultMsg.style.color = "#00ffcc";
        resultMsg.textContent = "Congratulations! You unlocked the Golden Badge!";
        goldenBadge?.classList.remove('hidden');
        localStorage.setItem('goldenBadgeUnlocked', 'true');
    } else {
        resultMsg.style.color = "#ff4d4d";
        resultMsg.textContent = `You got ${score} correct out of ${quizData.length}. Try again!`;
    }
}

// AI Assistant Bot with Image display support
function setupAIChat() {
    const aiToggleBtn = document.getElementById('aiToggleBtn');
    const aiChatModal = document.getElementById('aiChatModal');
    const aiCloseBtn = document.getElementById('aiCloseBtn');
    const aiSendBtn = document.getElementById('aiSendBtn');
    const aiUserInput = document.getElementById('aiUserInput');
    const aiChatBody = document.getElementById('aiChatBody');

    if (aiToggleBtn && aiChatModal) {
        aiToggleBtn.addEventListener('click', () => aiChatModal.classList.toggle('hidden'));
        aiCloseBtn.addEventListener('click', () => aiChatModal.classList.add('hidden'));
        aiSendBtn.addEventListener('click', handleAIResponse);
        aiUserInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') handleAIResponse(); });
    }

    async function handleAIResponse() {
        const text = aiUserInput.value.trim();
        if (!text) return;
        appendMessage(text, 'user');
        aiUserInput.value = '';

        setTimeout(() => {
            let replyText = "";
            let imageUrl = null;
            const lowerText = text.toLowerCase();

            if (lowerText.includes("ram") || lowerText.includes("memory")) {
                replyText = "Here is an image of high-speed DDR5 RAM modules:";
                imageUrl = hardwareData.ram.image;
            } else if (lowerText.includes("cpu") || lowerText.includes("processor")) {
                replyText = "Here is a processor (CPU) unit image:";
                imageUrl = hardwareData.cpu.image;
            } else if (lowerText.includes("gpu") || lowerText.includes("graphics")) {
                replyText = "Here is an advanced gaming Graphics Card (GPU) visual:";
                imageUrl = hardwareData.gpu.image;
            } else if (lowerText.includes("ssd") || lowerText.includes("storage")) {
                replyText = "Here is an NVMe M.2 SSD storage unit:";
                imageUrl = hardwareData.storage.image;
            } else {
                replyText = `I analyzed your query about "${text}". Feel free to ask about CPU, GPU, or use our PC Builder!`;
            }

            appendMessage(replyText, 'bot', imageUrl);
        }, 500);
    }

    function appendMessage(text, sender, imgUrl = null) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `ai-message ${sender}`;
        let content = `<p>${text}</p>`;
        if (imgUrl) content += `<img src="${imgUrl}" alt="Hardware Image" class="ai-chat-img">`;
        msgDiv.innerHTML = content;
        aiChatBody.appendChild(msgDiv);
        aiChatBody.scrollTop = aiChatBody.scrollHeight;
    }
}

window.addEventListener('DOMContentLoaded', initApp);
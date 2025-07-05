// Video and model data
const videoData = [
    {id:589212,img:"IMGss/1.jpg"},
    // ... [rest of your video data array] ...
];

const modelData = [
    {name:"Abby Rose",slug:"abby-rose",img:"https://images5.naughtycdn.com/cms/nacmscontent/v1/performers/6900/6864/verticaltngf/760x1060c.webp"},
    // ... [rest of your model data array] ...
];

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Insert all ads
    insertAllAds();

    // Generate video cards
    renderVideoCards();

    // Generate model cards
    renderModelCards();

    // Setup smooth scrolling
    setupSmoothScrolling();

    // Setup lazy loading and animations
    setupLazyLoading();

    // Setup video optimization
    setupVideoOptimization();
});

// AD INTEGRATION FUNCTIONS
function insertAllAds() {
    // 1. Top banner ad (above header)
    insertAd({
        id: '1095571',
        width: 616,
        height: 298,
        zone: 1095571,
        position: 'before',
        relativeTo: 'header',
        className: 'top-banner-ad'
    });

    // 2. Nav bottom ad (below header)
    insertAd({
        id: '1095549',
        width: 300,
        height: 100,
        zone: 1095549,
        position: 'after',
        relativeTo: 'header',
        className: 'nav-bottom-ad'
    });

    // 3. Pre-videos ad
    insertAd({
        id: '1095571',
        width: 616,
        height: 298,
        zone: 1095571,
        position: 'before',
        relativeTo: '.video-section',
        className: 'pre-videos-ad'
    });

    // 4. Post-videos ad
    insertAd({
        id: '1095571',
        width: 616,
        height: 298,
        zone: 1095571,
        position: 'after',
        relativeTo: '.video-section',
        className: 'post-videos-ad'
    });

    // 5. Native ad after models
    insertNativeAd({
        zone: 1095573,
        position: 'after',
        relativeTo: '.model-section',
        className: 'native-ad'
    });

    // 6. Bottom ad before footer
    insertAd({
        id: '1095549',
        width: 300,
        height: 100,
        zone: 1095549,
        position: 'before',
        relativeTo: 'footer',
        className: 'bottom-ad'
    });

    // Refresh ads after a short delay
    setTimeout(refreshAds, 1500);
}

function insertAd(config) {
    const container = document.createElement('div');
    container.className = `ad-container ${config.className}`;
    Object.assign(container.style, {
        width: '100%',
        margin: '20px 0',
        textAlign: 'center',
        minHeight: `${config.height}px`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px',
        overflow: 'hidden'
    });

    container.innerHTML = `
        <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
        <ins id="${config.id}" data-width="${config.width}" data-height="${config.height}"></ins>
        <script type="text/javascript" data-cfasync="false" async>
            (adsbyjuicy = window.adsbyjuicy || []).push({'adzone':${config.zone}});
        </script>
    `;

    const referenceElement = document.querySelector(config.relativeTo);
    if (referenceElement) {
        if (config.position === 'before') {
            referenceElement.parentNode.insertBefore(container, referenceElement);
        } else {
            referenceElement.parentNode.insertBefore(container, referenceElement.nextSibling);
        }
    }
}

function insertNativeAd(config) {
    const container = document.createElement('div');
    container.className = `ad-container ${config.className}`;
    Object.assign(container.style, {
        width: '100%',
        margin: '20px 0',
        textAlign: 'center',
        minHeight: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: '4px'
    });

    container.innerHTML = `
        <script type="text/javascript" data-id="juicyads-native-ads" 
                data-ad-zone="${config.zone}" data-targets="a" 
                src="https://js.juicyads.com/juicyads.native-ads.min.js">
        </script>
    `;

    const referenceElement = document.querySelector(config.relativeTo);
    if (referenceElement) {
        if (config.position === 'before') {
            referenceElement.parentNode.insertBefore(container, referenceElement);
        } else {
            referenceElement.parentNode.insertBefore(container, referenceElement.nextSibling);
        }
    }
}

function refreshAds() {
    if (typeof adsbyjuicy !== 'undefined') {
        adsbyjuicy.push({});
    }
}

// CONTENT RENDERING FUNCTIONS
function renderVideoCards() {
    const videoGrid = document.querySelector('.video-grid');
    videoData.forEach((video, index) => {
        const delayClass = `delay-${(index % 3) + 1}`;
        videoGrid.innerHTML += `
            <a href="https://okxxx1.com/video/${video.id}/" class="video-thumbnail-card animate ${delayClass}">
                <img src="${video.img}" alt="Video ${index + 1}" class="video-thumbnail" loading="lazy">
                <div class="video-thumbnail-play">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M5 3l14 9-14 9V3z"/>
                    </svg>
                </div>
            </a>
        `;
    });
}

function renderModelCards() {
    const modelGrid = document.querySelector('.model-grid');
    modelData.forEach((model, index) => {
        const delayClass = `delay-${(index % 4) + 1}`;
        modelGrid.innerHTML += `
            <a href="https://ok.xxx/models/${model.slug}/" class="model-card animate ${delayClass}">
                <img src="${model.img}" alt="${model.name}" class="model-thumbnail" loading="lazy">
                <span class="model-name">${model.name}</span>
            </a>
        `;
    });
}

// UTILITY FUNCTIONS
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '#login' || href === '#join') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                history.pushState(null, null, href);
            }
        });
    });
}

function setupLazyLoading() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                const img = entry.target.querySelector('img[loading="lazy"]');
                if (img && img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.video-thumbnail-card, .model-card').forEach(card => {
        observer.observe(card);
        
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
            this.style.borderColor = 'rgba(255, 64, 129, 0.3)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
            this.style.borderColor = '';
        });
    });
}

function setupVideoOptimization() {
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.setAttribute('preload', 'auto');
        heroVideo.play().catch(e => console.log('Autoplay prevented:', e));
    }
}


// Video and model data (could be moved to an API endpoint for better scalability)
const videoData = [
    {id:589212,img:"IMGss/1.jpg"},
    {id:602495,img:"IMGss/2.jpg"},
    {id:602102,img:"IMGss/3.jpg"},
    {id:600952,img:"IMGss/4.jpg"},
    {id:598941,img:"IMGss/5.jpg"},
    {id:598262,img:"IMGss/6.jpg"},
    {id:598261,img:"IMGss/7.jpg"},
    {id:598043,img:"IMGss/8.jpg"},
    {id:496339,img:"IMGss/9.jpg"},
    {id:601959,img:"IMGss/10.jpg"},
    {id:602874,img:"IMGss/11.jpg"},
    {id:35957,img:"IMGss/12.jpg"},
    {id:42926,img:"IMGss/13.jpg"},
    {id:26821,img:"IMGss/14.jpg"},
    {id:244686,img:"IMGss/15.jpg"},
    {id:129462,img:"IMGss/16.jpg"},
    {id:83279,img:"IMGss/17.jpg"},
    {id:13513,img:"IMGss/18.jpg"},
    {id:64310,img:"IMGss/19.jpg"},
    {id:46236,img:"IMGss/20.jpg"},
    {id:497129,img:"IMGss/21.jpg"},
    {id:486989,img:"IMGss/22.jpg"},
    {id:496728,img:"IMGss/23.jpg"},
    {id:499086,img:"IMGss/24.jpg"},
    {id:499483,img:"IMGss/25.jpg"},
    {id:499195,img:"IMGss/26.jpg"},
    {id:499382,img:"IMGss/27.jpg"},
    {id:493776,img:"IMGss/28.jpg"},
    {id:598090,img:"IMGss/29.jpg"},
    {id:597871,img:"IMGss/30.jpg"},
    {id:593867,img:"IMGss/31.jpg"},
    {id:598208,img:"IMGss/32.jpg"},
    {id:599980,img:"IMGss/33.jpg"},
    {id:597976,img:"IMGss/34.jpg"},
    {id:599291,img:"IMGss/35.jpg"},
    {id:599374,img:"IMGss/36.jpg"},
    {id:599534,img:"IMGss/37.jpg"},
    {id:603133,img:"IMGss/38.jpg"},
    {id:588577,img:"IMGss/39.jpg"}
];

const modelData = [
    {name:"Abby Rose",slug:"abby-rose",img:"https://images5.naughtycdn.com/cms/nacmscontent/v1/performers/6900/6864/verticaltngf/760x1060c.webp"},
    {name:"Angela White",slug:"angela-white",img:"https://images5.naughtycdn.com/cms/nacmscontent/v1/performers/5600/5597/verticaltngf/760x1060c.webp"},
    {name:"Ashley Sinclair",slug:"ashley-sinclair",img:"https://images4.naughtycdn.com/cms/nacmscontent/v1/performers/4700/4719/verticaltngf/760x1060c.webp"},
    {name:"Avery Black",slug:"avery-black",img:"https://images5.naughtycdn.com/cms/nacmscontent/v1/performers/6300/6307/verticaltngf/760x1060c.webp"},
    {name:"Blaire Johnson",slug:"blaire-johnson",img:"https://images2.naughtycdn.com/cms/nacmscontent/v1/performers/6800/6819/verticaltngf/760x1060c.webp"},
    {name:"Capri Cavanni",slug:"capri-cavanni",img:"https://images3.naughtycdn.com/cms/nacmscontent/v1/performers/1400/1379/verticaltngf/760x1060c.webp"},
    {name:"Cassidy Klein",slug:"cassidy-klein",img:"https://images5.naughtycdn.com/cms/nacmscontent/v1/performers/4500/4547/verticaltngf/760x1060c.webp"},
    {name:"Catalina Ossa",slug:"catalina-ossa",img:"https://images5.naughtycdn.com/cms/nacmscontent/v1/performers/6400/6418/verticaltngf/760x1060c.webp"},
    {name:"Ebony Mystique",slug:"ebony-mystique",img:"https://images3.naughtycdn.com/cms/nacmscontent/v1/performers/6800/6805/verticaltngf/760x1060c.webp"},
    {name:"Ella Reese",slug:"ella-reese",img:"https://images3.naughtycdn.com/cms/nacmscontent/v1/performers/6400/6360/verticaltngf/760x1060c.webp"},
    {name:"Ember Snow",slug:"ember-snow",img:"https://images5.naughtycdn.com/cms/nacmscontent/v1/performers/6000/5957/verticaltngf/760x1060c.webp"},
    {name:"Eva Lovia",slug:"eva-lovia",img:"https://images2.naughtycdn.com/cms/nacmscontent/v1/performers/4800/4769/verticaltngf/760x1060c.webp"},
    {name:"Gal Ritchie",slug:"gal-ritchie",img:"https://images5.naughtycdn.com/cms/nacmscontent/v1/performers/6800/6763/verticaltngf/760x1060c.webp"},
    {name:"Gianna Dior",slug:"gianna-dior",img:"https://images1.naughtycdn.com/cms/nacmscontent/v1/performers/6100/6079/verticaltngf/760x1060c.webp"},
    {name:"Gracie Glam",slug:"gracie-glam",img:"https://images2.naughtycdn.com/cms/nacmscontent/v1/performers/1800/1795/verticaltngf/760x1060c.webp"},
    {name:"Harley Jade",slug:"harley-jade",img:"https://images2.naughtycdn.com/cms/nacmscontent/v1/performers/5300/5319/verticaltngf/760x1060c.webp"},
    {name:"Ivy LeBelle",slug:"ivy-lebelle",img:"https://images4.naughtycdn.com/cms/nacmscontent/v1/performers/6300/6280/verticaltngf/760x1060c.webp"},
    {name:"Jada Stevens",slug:"jada-stevens",img:"https://images3.naughtycdn.com/cms/nacmscontent/v1/performers/3300/3323/verticaltngf/760x1060c.webp"},
    {name:"Jamie Jett",slug:"jamie-jett",img:"https://images5.naughtycdn.com/cms/nacmscontent/v1/performers/6400/6400/verticaltngf/760x1060c.webp"},
    {name:"Jamie Mitchelle",slug:"jamie-mitchelle",img:"https://images3.naughtycdn.com/cms/nacmscontent/v1/performers/6400/6444/verticaltngf/760x1060c.webp"},
    {name:"Jane Wilde",slug:"jane-wilde",img:"https://images1.naughtycdn.com/cms/nacmscontent/v1/performers/6200/6175/verticaltngf/760x1060c.webp"},
    {name:"Keira Croft",slug:"keira-croft",img:"https://images5.naughtycdn.com/cms/nacmscontent/v1/performers/6400/6414/verticaltngf/760x1060c.webp"},
    {name:"Kimmy Kimm",slug:"kimmy-kimm",img:"https://images4.naughtycdn.com/cms/nacmscontent/v1/performers/6700/6714/verticaltngf/760x1060c.webp"},
    {name:"Kimora Quin",slug:"kimora-quin",img:"https://images2.naughtycdn.com/cms/nacmscontent/v1/performers/6800/6754/verticaltngf/760x1060c.webp"},
    {name:"Kleio Valentien",slug:"kleio-valentien",img:"https://images2.naughtycdn.com/cms/nacmscontent/v1/performers/4300/4283/verticaltngf/760x1060c.webp"},
    {name:"Lucky Anne",slug:"lucky-anne",img:"https://images1.naughtycdn.com/cms/nacmscontent/v1/performers/6800/6807/verticaltngf/760x1060c.webp"},
    {name:"Melissa Stratton",slug:"melissa-stratton",img:"https://images2.naughtycdn.com/cms/nacmscontent/v1/performers/6600/6647/verticaltngf/760x1060c.webp"},
    {name:"Payton Preslee",slug:"payton-preslee",img:"https://images3.naughtycdn.com/cms/nacmscontent/v1/performers/6400/6362/verticaltngf/760x1060c.webp"},
    {name:"Penelope Kay",slug:"penelope-kay",img:"https://images2.naughtycdn.com/cms/nacmscontent/v1/performers/6500/6477/verticaltngf/760x1060c.webp"},
    {name:"Penelope Woods",slug:"penelope-woods",img:"https://images2.naughtycdn.com/cms/nacmscontent/v1/performers/6500/6470/verticaltngf/760x1060c.webp"},
    {name:"Sheena Ryder",slug:"sheena-ryder",img:"https://images1.naughtycdn.com/cms/nacmscontent/v1/performers/6100/6059/verticaltngf/760x1060c.webp"},
    {name:"Sophia Leone",slug:"sophia-leone",img:"https://images1.naughtycdn.com/cms/nacmscontent/v1/performers/5000/5039/verticaltngf/760x1060c.webp"},
    {name:"Spencer Bradley",slug:"spencer-bradley",img:"https://images4.naughtycdn.com/cms/nacmscontent/v1/performers/6400/6401/verticaltngf/760x1060c.webp"},
    {name:"Valentina Nappi",slug:"valentina-nappi",img:"https://images3.naughtycdn.com/cms/nacmscontent/v1/performers/4500/4493/verticaltngf/760x1060c.webp"},
    {name:"Whitney OC",slug:"whitney-oc",img:"https://images3.naughtycdn.com/cms/nacmscontent/v1/performers/6700/6720/verticaltngf/760x1060c.webp"},
    {name:"Xwife Karen",slug:"xwife-karen",img:"https://images3.naughtycdn.com/cms/nacmscontent/v1/performers/6800/6816/verticaltngf/760x1060c.webp"}
];

document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Generate video cards
    const videoGrid = document.querySelector('.video-grid');
    videoData.forEach((video, index) => {
        const delayClass = `delay-${(index % 3) + 1}`;
        videoGrid.innerHTML += `
            <a href="https://okxxx1.com/video/${video.id}/" class="video-thumbnail-card animate ${delayClass}" loading="lazy">
                <img src="${video.img}" alt="Video ${index + 1}" class="video-thumbnail" loading="lazy">
                <div class="video-thumbnail-play">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M5 3l14 9-14 9V3z"/>
                    </svg>
                </div>
            </a>
        `;
    });

    // Generate model cards
    const modelGrid = document.querySelector('.model-grid');
    modelData.forEach((model, index) => {
        const delayClass = `delay-${(index % 4) + 1}`;
        modelGrid.innerHTML += `
            <a href="https://ok.xxx/models/${model.slug}/" class="model-card animate ${delayClass}" loading="lazy">
                <img src="${model.img}" alt="${model.name}" class="model-thumbnail" loading="lazy">
                <span class="model-name">${model.name}</span>
            </a>
        `;
    });

    // Smooth scrolling for all anchor links
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

                // Update URL without jump
                history.pushState(null, null, href);
            }
        });
    });

    // Intersection Observer for lazy loading and animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                // Lazy load images when they come into view
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
   <link rel="stylesheet" href="//cdn.tsyndicate.com/sdk/v1/interstitial.ts.css" />
<script src="//cdn.tsyndicate.com/sdk/v1/interstitial.ts.js"></script>
<script>
   InterstitialTsAd({
        spot: "1c52b5d8e0e848f4917ad18de044112f",
        extid: "{extid}",
   });
</script>

    // Optimize video background loading
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.setAttribute('preload', 'auto');
        heroVideo.play().catch(e => console.log('Autoplay prevented:', e));
    }


});

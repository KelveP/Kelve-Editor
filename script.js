// Portfolio data - replace with your actual videos
const portfolioVideos = [
    {
        id: '1',
        title: 'Anúncio Comercial - Produto Tech',
        description: 'Vídeo promocional para lançamento de produto tecnológico com foco em conversão e engagement.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoType: 'youtube',
        orientation: 'horizontal',
        tags: ['Comercial', 'Tech', 'Produto']
    },
    {
        id: '2',
        title: 'VSL - Curso Online',
        description: 'Video Sales Letter para curso de marketing digital com storytelling envolvente.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoType: 'youtube',
        orientation: 'vertical',
        tags: ['VSL', 'Educação', 'Marketing']
    },
    {
        id: '3',
        title: 'Institucional Empresarial',
        description: 'Vídeo institucional para empresa multinacional apresentando valores e missão.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoType: 'youtube',
        orientation: 'horizontal',
        tags: ['Institucional', 'Empresa', 'Branding']
    },
    {
        id: '4',
        title: 'Motion Graphics - Apresentação',
        description: 'Animação em motion graphics para apresentação corporativa com elementos visuais modernos.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoType: 'youtube',
        orientation: 'square',
        tags: ['Motion Graphics', 'Animação', 'Corporativo']
    },
    {
        id: '5',
        title: 'Anúncio Social Media',
        description: 'Conteúdo otimizado para redes sociais com alta capacidade de viralização.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoType: 'youtube',
        orientation: 'vertical',
        tags: ['Social Media', 'Viral', 'Instagram']
    },
    {
        id: '6',
        title: 'Documentário Curto',
        description: 'Mini documentário sobre inovação tecnológica com narrativa envolvente.',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoType: 'youtube',
        orientation: 'horizontal',
        tags: ['Documentário', 'Tecnologia', 'Narrativa']
    }
];

// Global variables
let currentTheme = localStorage.getItem('portfolio-theme') || 'theme1';
let isAdminLoggedIn = false;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Set initial theme
    document.body.className = document.body.className.replace(/theme\d+/g, '') + ' ' + currentTheme;
    
    // Load portfolio videos
    loadPortfolioVideos();
    
    // Set up event listeners
    setupEventListeners();
    
    // Initialize scroll animations
    initScrollAnimations();
});

// Event Listeners Setup
function setupEventListeners() {
    // Theme toggle
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    // Admin button
    document.getElementById('admin-btn').addEventListener('click', showAdminModal);
    
    // Admin modal events
    document.getElementById('admin-submit').addEventListener('click', handleAdminLogin);
    document.getElementById('admin-cancel').addEventListener('click', hideAdminModal);
    document.getElementById('admin-code').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleAdminLogin();
        }
    });
    
    // Close modal on backdrop click
    document.getElementById('admin-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            hideAdminModal();
        }
    });
    
    // Smooth scroll for navigation
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            scrollToSection(targetId);
        }
    });
}

// Theme Toggle Function
function toggleTheme() {
    currentTheme = currentTheme === 'theme1' ? 'theme2' : 'theme1';
    document.body.className = document.body.className.replace(/theme\d+/g, '') + ' ' + currentTheme;
    localStorage.setItem('portfolio-theme', currentTheme);
    
    // Update CSS custom properties
    updateThemeProperties();
}

// Update CSS Custom Properties
function updateThemeProperties() {
    const root = document.documentElement;
    if (currentTheme === 'theme2') {
        root.style.setProperty('--theme-accent', 'hsl(328, 100%, 54%)');
    } else {
        root.style.setProperty('--theme-accent', 'hsl(51, 100%, 50%)');
    }
}

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offset = 80; // Account for fixed navbar
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
        });
    }
}

// Admin Modal Functions
function showAdminModal() {
    const modal = document.getElementById('admin-modal');
    modal.classList.remove('hidden');
    modal.querySelector('.bg-theme1-secondary').classList.add('modal-enter');
    document.getElementById('admin-code').focus();
}

function hideAdminModal() {
    const modal = document.getElementById('admin-modal');
    const modalContent = modal.querySelector('.bg-theme1-secondary');
    modalContent.classList.add('modal-exit');
    setTimeout(() => {
        modal.classList.add('hidden');
        modalContent.classList.remove('modal-enter', 'modal-exit');
        document.getElementById('admin-code').value = '';
    }, 300);
}

function handleAdminLogin() {
    const code = document.getElementById('admin-code').value.trim();
    const correctCode = '1235800'; // Admin code from the original app
    
    if (code === correctCode) {
        isAdminLoggedIn = true;
        hideAdminModal();
        showToast('Acesso autorizado!', 'success');
        updateAdminButton();
    } else {
        showToast('Código inválido', 'error');
        document.getElementById('admin-code').value = '';
        document.getElementById('admin-code').focus();
    }
}

function updateAdminButton() {
    const adminBtn = document.getElementById('admin-btn');
    if (isAdminLoggedIn) {
        adminBtn.innerHTML = `
            <i data-lucide="settings" style="width: 16px; height: 16px;" class="mr-2"></i>
            Admin
        `;
        adminBtn.title = 'Painel administrativo';
        lucide.createIcons();
    }
}

// Toast Notification Function
function showToast(message, type = 'info') {
    // Remove existing toasts
    const existingToasts = document.querySelectorAll('.toast');
    existingToasts.forEach(toast => toast.remove());
    
    const toast = document.createElement('div');
    toast.className = `toast fixed top-4 right-4 z-50 px-6 py-3 rounded-lg text-white font-medium transition-all duration-300 transform translate-x-full`;
    
    if (type === 'success') {
        toast.classList.add('bg-green-600');
    } else if (type === 'error') {
        toast.classList.add('bg-red-600');
    } else {
        toast.classList.add('bg-blue-600');
    }
    
    toast.textContent = message;
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-x-full');
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        toast.classList.add('translate-x-full');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Video Embed URL Generation
function getEmbedUrl(url, type) {
    if (type === 'youtube') {
        const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1];
        return videoId ? `https://www.youtube.com/embed/${videoId}?enablejsapi=1` : url;
    } else if (type === 'googledrive') {
        const fileId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
        return fileId ? `https://drive.google.com/file/d/${fileId}/preview` : url;
    }
    return url;
}

// Get Video Container Class
function getVideoContainerClass(orientation) {
    switch (orientation) {
        case 'vertical':
            return 'aspect-9-16 xl:h-64';
        case 'square':
            return 'aspect-square xl:h-56';
        case 'horizontal':
        default:
            return 'aspect-video xl:h-48';
    }
}

// Create Video Card
function createVideoCard(video, index) {
    const card = document.createElement('div');
    card.className = `video-card group w-full opacity-0 translate-y-5`;
    
    // Add orientation class for grid
    if (video.orientation === 'horizontal') {
        card.classList.add('video-horizontal');
    } else if (video.orientation === 'vertical') {
        card.classList.add('video-vertical');
    } else {
        card.classList.add('video-square');
    }
    
    card.innerHTML = `
        <div class="relative bg-theme1-secondary rounded-xl overflow-hidden border border-theme1-accent/20 hover:border-theme1-accent/50 transition-all duration-300 h-full flex flex-col">
            <div class="relative ${getVideoContainerClass(video.orientation)} flex-shrink-0">
                <iframe
                    src="${getEmbedUrl(video.videoUrl, video.videoType)}"
                    title="${video.title}"
                    class="w-full h-full rounded-t-xl object-cover"
                    allowfullscreen
                    allow="autoplay; encrypted-media"
                    loading="lazy">
                </iframe>
            </div>
            <div class="p-4 flex-grow flex flex-col">
                <h3 class="font-semibold mb-2 text-white text-base xl:text-sm">${video.title}</h3>
                <p class="text-theme1-muted text-sm xl:text-xs mb-3 leading-relaxed flex-grow">${video.description}</p>
                <div class="flex gap-1 flex-wrap">
                    ${video.tags.map(tag => `
                        <span class="px-2 py-1 bg-theme1-accent/20 text-theme1-accent text-xs rounded-full font-medium">
                            ${tag}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    // Animate in with delay
    setTimeout(() => {
        card.classList.remove('opacity-0', 'translate-y-5');
    }, index * 100);
    
    return card;
}

// Load Portfolio Videos
function loadPortfolioVideos() {
    const portfolioContainer = document.getElementById('video-portfolio');
    
    if (!portfolioVideos || portfolioVideos.length === 0) {
        portfolioContainer.innerHTML = `
            <div class="text-center py-12">
                <i data-lucide="play" class="mx-auto mb-4 text-theme1-accent/50" style="width: 64px; height: 64px;"></i>
                <h3 class="text-xl font-semibold text-theme1-muted mb-2">
                    Nenhum vídeo encontrado
                </h3>
                <p class="text-theme1-muted">
                    Os vídeos do portfólio aparecerão aqui quando adicionados.
                </p>
            </div>
        `;
        lucide.createIcons();
        return;
    }
    
    // Create responsive grid
    portfolioContainer.innerHTML = `
        <!-- Mobile and tablet layout -->
        <div class="block xl:hidden">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="mobile-grid">
            </div>
        </div>
        
        <!-- Desktop layout -->
        <div class="hidden xl:block">
            <div class="video-grid desktop" id="desktop-grid">
            </div>
        </div>
    `;
    
    const mobileGrid = document.getElementById('mobile-grid');
    const desktopGrid = document.getElementById('desktop-grid');
    
    // Add videos to both grids
    portfolioVideos.forEach((video, index) => {
        // Mobile grid - responsive columns based on orientation
        const mobileWrapper = document.createElement('div');
        if (video.orientation === 'horizontal') {
            mobileWrapper.className = 'lg:col-span-2';
        } else {
            mobileWrapper.className = 'lg:col-span-1';
        }
        mobileWrapper.appendChild(createVideoCard(video, index));
        mobileGrid.appendChild(mobileWrapper);
        
        // Desktop grid - unified layout
        desktopGrid.appendChild(createVideoCard(video, index));
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all elements with section-animate class
    document.querySelectorAll('.section-animate').forEach(el => {
        observer.observe(el);
    });
}

// Keyboard Navigation
document.addEventListener('keydown', function(e) {
    // ESC to close modal
    if (e.key === 'Escape') {
        if (!document.getElementById('admin-modal').classList.contains('hidden')) {
            hideAdminModal();
        }
    }
    
    // Ctrl/Cmd + K for quick admin access
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        showAdminModal();
    }
});

// Page Visibility API for performance
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause any animations or videos if needed
    } else {
        // Resume animations
        lucide.createIcons();
    }
});

// Resize handler for responsive adjustments
window.addEventListener('resize', function() {
    // Debounce resize events
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
        // Re-initialize icons after resize
        lucide.createIcons();
    }, 250);
});

// Print styles prevention
window.addEventListener('beforeprint', function(e) {
    e.preventDefault();
    showToast('Esta página não pode ser impressa', 'info');
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData.loadEventEnd > 3000) {
                console.warn('Page load time is over 3 seconds');
            }
        }, 0);
    });
}

// Progressive Enhancement
if ('serviceWorker' in navigator) {
    // Service worker registration would go here for offline support
}

// Accessibility improvements
document.addEventListener('keydown', function(e) {
    // Add visible focus indicators for keyboard navigation
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-nav');
});

// Add CSS for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-nav button:focus,
    .keyboard-nav a:focus {
        outline: 2px solid var(--theme-accent) !important;
        outline-offset: 2px !important;
    }
`;
document.head.appendChild(style);
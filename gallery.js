// Gallery page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const galleryContainer = document.getElementById('gallery-container');
    
    // Gallery data
    const galleryItems = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1559561737-9f2a6f8f5c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Lalibela Rock Churches",
            description: "The magnificent rock-hewn churches of Lalibela, a UNESCO World Heritage site.",
            category: "historical",
            location: "Lalibela, Amhara Region"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Simien Mountains",
            description: "Spectacular view of the Simien Mountains, often called the 'Roof of Africa'.",
            category: "landscape",
            location: "Simien Mountains National Park"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1565919166694-9d0e4d495a6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Danakil Depression",
            description: "The otherworldly landscape of the Danakil Depression, one of the hottest places on Earth.",
            category: "landscape",
            location: "Afar Region"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1589561454227-68d8c2d2e6c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Ancient Obelisks of Axum",
            description: "The ancient obelisks of Axum, remnants of the great Aksumite Empire.",
            category: "historical",
            location: "Axum, Tigray Region"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Omo Valley Tribes",
            description: "A member of the Mursi tribe with traditional lip plate in the Omo Valley.",
            category: "people",
            location: "Omo Valley, Southern Ethiopia"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1593023532852-0a5d862abf2f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Ethiopian Highlands",
            description: "The breathtaking landscapes of the Ethiopian Highlands.",
            category: "landscape",
            location: "Ethiopian Highlands"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1598894597310-a9d42e6c5ae2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Gondar Castle",
            description: "The Royal Enclosure in Gondar, known as the 'Camelot of Africa'.",
            category: "historical",
            location: "Gondar, Amhara Region"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Gelada Baboons",
            description: "Gelada baboons in their natural habitat in the Simien Mountains.",
            category: "wildlife",
            location: "Simien Mountains National Park"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Blue Nile Falls",
            description: "The majestic Blue Nile Falls, known locally as 'Tis Issat' (smoking water).",
            category: "landscape",
            location: "Near Bahir Dar, Amhara Region"
        },
        {
            id: 10,
            image: "https://images.unsplash.com/photo-1542641953-a445277eb7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Ethiopian Coffee Ceremony",
            description: "Traditional Ethiopian coffee ceremony, an important social ritual.",
            category: "culture",
            location: "Throughout Ethiopia"
        },
        {
            id: 11,
            image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Harar Hyena Man",
            description: "The famous Hyena Man feeding wild hyenas in Harar.",
            category: "culture",
            location: "Harar, Eastern Ethiopia"
        },
        {
            id: 12,
            image: "https://images.unsplash.com/photo-1578662990688-d4f5c7e2c7ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Ethiopian Orthodox Priest",
            description: "An Ethiopian Orthodox priest with traditional cross and prayer book.",
            category: "people",
            location: "Throughout Ethiopia"
        },
        {
            id: 13,
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Erta Ale Volcano",
            description: "The permanent lava lake of Erta Ale volcano in the Danakil Depression.",
            category: "landscape",
            location: "Danakil Depression, Afar Region"
        },
        {
            id: 14,
            image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Timkat Festival",
            description: "The Timkat (Epiphany) festival celebration in Gondar.",
            category: "culture",
            location: "Gondar, Amhara Region"
        },
        {
            id: 15,
            image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            title: "Ethiopian Wolf",
            description: "The endangered Ethiopian wolf in the Bale Mountains.",
            category: "wildlife",
            location: "Bale Mountains National Park"
        }
    ];
    
    // Generate gallery items
    galleryItems.forEach(item => {
        const galleryHTML = `
            <div class="col-lg-4 col-md-6" data-category="${item.category}">
                <div class="gallery-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="gallery-overlay">
                        <div class="gallery-category">${item.category.toUpperCase()}</div>
                        <h5 class="gallery-title">${item.title}</h5>
                        <p class="small mb-0">${item.location}</p>
                    </div>
                </div>
            </div>
        `;
        
        galleryContainer.insertAdjacentHTML('beforeend', galleryHTML);
    });
    
    // Add event listeners to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterGallery(filter);
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Add event listeners to gallery items
    const galleryItemsElements = document.querySelectorAll('.gallery-item');
    galleryItemsElements.forEach(item => {
        item.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const galleryItem = galleryItems.find(g => g.id === id);
            if (galleryItem) {
                showImageModal(galleryItem);
            }
        });
    });
    
    // Initialize gallery with all items showing
    filterGallery('all');
});

// Filter gallery items
function filterGallery(category) {
    const galleryItems = document.querySelectorAll('[data-category]');
    
    galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
            }, 100);
        } else {
            item.style.opacity = '0';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// Show image modal
function showImageModal(item) {
    const modalHTML = `
        <div class="modal fade" id="imageModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-body p-0">
                        <img src="${item.image}" alt="${item.title}" class="modal-img">
                        <div class="modal-caption">
                            <h5>${item.title}</h5>
                            <p class="mb-1">${item.description}</p>
                            <p class="small mb-0"><i class="fas fa-map-marker-alt me-1"></i> ${item.location}</p>
                            <p class="small mb-0"><i class="fas fa-tag me-1"></i> ${item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href="destinations.html" class="btn btn-primary">Visit This Place</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
    
    // Remove modal from DOM after it's hidden
    document.getElementById('imageModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

// Add keyboard navigation for gallery
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('imageModal');
    if (modal && modal.classList.contains('show')) {
        if (e.key === 'Escape') {
            bootstrap.Modal.getInstance(modal).hide();
        }
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            // For future enhancement: navigate between images
            console.log('Keyboard navigation for gallery could be implemented here');
        }
    }
});
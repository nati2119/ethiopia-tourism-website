// Destinations page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    const destinationsContainer = document.getElementById('destinations-container');
    
    // Destination data
    const destinations = [
        {
            id: 1,
            name: "Lalibela",
            image: "https://images.unsplash.com/photo-1559561737-9f2a6f8f5c5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "The 12th-century rock-hewn churches of Lalibela are one of the world's most astounding architectural achievements.",
            category: "historical",
            bestTime: "October to March",
            highlights: ["Rock-hewn churches", "Religious festivals", "UNESCO World Heritage Site"]
        },
        {
            id: 2,
            name: "Simien Mountains",
            image: "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Often called the 'Roof of Africa,' these mountains offer spectacular trekking and unique wildlife like the Gelada baboon.",
            category: "nature",
            bestTime: "October to April",
            highlights: ["Gelada baboons", "Spectacular viewpoints", "Hiking trails"]
        },
        {
            id: 3,
            name: "Danakil Depression",
            image: "https://images.unsplash.com/photo-1565919166694-9d0e4d495a6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "One of the hottest places on Earth, this surreal landscape features colorful sulfur springs, salt flats, and active volcanoes.",
            category: "nature",
            bestTime: "November to February",
            highlights: ["Erta Ale volcano", "Dallol sulfur springs", "Salt flats"]
        },
        {
            id: 4,
            name: "Axum",
            image: "https://images.unsplash.com/photo-1589561454227-68d8c2d2e6c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "The ancient capital of the Aksumite Empire, home to giant obelisks, royal tombs, and the Chapel of the Tablet.",
            category: "historical",
            bestTime: "October to March",
            highlights: ["Ancient obelisks", "Queen of Sheba's Palace", "Ark of the Covenant"]
        },
        {
            id: 5,
            name: "Omo Valley",
            image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Home to diverse ethnic groups with unique cultures and traditions that have remained largely unchanged for centuries.",
            category: "cultural",
            bestTime: "July to September",
            highlights: ["Tribal communities", "Traditional ceremonies", "Body painting"]
        },
        {
            id: 6,
            name: "Gondar",
            image: "https://images.unsplash.com/photo-1598894597310-a9d42e6c5ae2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            description: "Known as the 'Camelot of Africa,' Gondar features medieval castles and palaces from the 17th and 18th centuries.",
            category: "historical",
            bestTime: "October to March",
            highlights: ["Royal Enclosure", "Fasil Ghebbi", "Debre Berhan Selassie"]
        }
    ];
    
    // Create filter buttons
    const filterHTML = `
        <div class="col-12 mb-5">
            <div class="text-center">
                <button class="btn btn-outline-primary filter-btn active" data-filter="all">All</button>
                <button class="btn btn-outline-primary filter-btn" data-filter="historical">Historical</button>
                <button class="btn btn-outline-primary filter-btn" data-filter="nature">Nature</button>
                <button class="btn btn-outline-primary filter-btn" data-filter="cultural">Cultural</button>
            </div>
        </div>
    `;
    
    destinationsContainer.innerHTML = filterHTML;
    
    // Generate destination cards
    destinations.forEach(destination => {
        const destinationHTML = `
            <div class="col-md-4" data-category="${destination.category}">
                <div class="destination-card">
                    <img src="${destination.image}" alt="${destination.name}">
                    <div class="card-body">
                        <h4 class="card-title">${destination.name}</h4>
                        <p class="card-text">${destination.description}</p>
                        <div class="mb-3">
                            <strong>Best Time to Visit:</strong> ${destination.bestTime}
                        </div>
                        <div class="mb-3">
                            <strong>Highlights:</strong>
                            <ul class="mb-0">
                                ${destination.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                            </ul>
                        </div>
                        <button class="btn btn-outline-primary btn-sm view-details" data-id="${destination.id}">View Details</button>
                    </div>
                </div>
            </div>
        `;
        
        destinationsContainer.insertAdjacentHTML('beforeend', destinationHTML);
    });
    
    // Add event listeners to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterDestinations(filter);
        });
    });
    
    // Add event listeners to view details buttons
    const viewDetailsButtons = document.querySelectorAll('.view-details');
    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const destination = destinations.find(d => d.id === id);
            if (destination) {
                showDestinationModal(destination);
            }
        });
    });
});

// Show destination details in modal
function showDestinationModal(destination) {
    const modalHTML = `
        <div class="modal fade" id="destinationModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${destination.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${destination.image}" alt="${destination.name}" class="img-fluid rounded mb-3">
                            </div>
                            <div class="col-md-6">
                                <p>${destination.description}</p>
                                <p><strong>Category:</strong> ${destination.category.charAt(0).toUpperCase() + destination.category.slice(1)}</p>
                                <p><strong>Best Time to Visit:</strong> ${destination.bestTime}</p>
                                <p><strong>Highlights:</strong></p>
                                <ul>
                                    ${destination.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <a href="contact.html" class="btn btn-primary">Plan Your Visit</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('destinationModal'));
    modal.show();
    
    // Remove modal from DOM after it's hidden
    document.getElementById('destinationModal').addEventListener('hidden.bs.modal', function() {
        this.remove();
    });
}

// Filter destinations function
function filterDestinations(category) {
    const destinationCards = document.querySelectorAll('[data-category]');
    
    destinationCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
    
    // Update active filter button
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './StorePage.css';

// Import images
import imgPromoBanner from '../assets/store_promo_banner_1786534816826.jpg';
import imgBraceletMetal from '../assets/product_bracelet_metal_1786534832638.jpg';
import imgBraceletDhan from '../assets/product_bracelet_dhan_1786534843567.jpg';
import imgRakhi from '../assets/product_rakhi_om_1786535099269.jpg';
import imgZodiac from '../assets/product_bracelet_zodiac_1786535113687.jpg';

export default function StorePage() {
  const products = [
    {
      id: 1,
      image: imgBraceletMetal,
      tag: '₹500 CASHBACK',
      title: 'Metal Dhan Yog Bracelet for Women',
      rating: 5,
      reviews: '1654 reviews',
      price: 899,
      originalPrice: '1,400'
    },
    {
      id: 2,
      image: imgBraceletDhan,
      tag: '100% QUALITY',
      title: 'Dhan Yog Bracelet (Lab Certified)',
      rating: 5,
      reviews: '1623 reviews',
      price: 699,
      originalPrice: '1,999'
    },
    {
      id: 3,
      image: imgRakhi,
      tag: null,
      title: 'OM Rudraksha Rakhi',
      rating: 5,
      reviews: '100 reviews',
      price: 299,
      originalPrice: '700'
    },
    {
      id: 4,
      image: imgZodiac,
      tag: '₹500 CASHBACK',
      title: 'Gemini (मिथुन) Zodiac Green Aventurine & Milky Quartz',
      rating: 5,
      reviews: '1991 reviews',
      price: 899,
      originalPrice: '2,000'
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setOrderSuccess(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate API call to admin panel
    setTimeout(() => {
      setOrderSuccess(true);
    }, 500);
  };

  return (
    <>
      <Header />
      <main className="store-page">
        {/* Promotional Banner Area */}
        <section className="store-promo-section">
          <div className="container">
            <div className="store-banner-wrapper">
              <img src={imgPromoBanner} alt="Astrology Store Offers" className="store-banner-img" />
            </div>
          </div>
        </section>

        {/* Best Sellers Grid */}
        <section className="store-products-section">
          <div className="container">
            <h2 className="store-section-title">All Products</h2>
            
            <div className="products-grid">
              {products.map((product) => (
                <div className="product-card" key={product.id}>
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.title} className="product-image" />
                  </div>
                  
                  <div className="product-info">
                    <h3 className="product-title">{product.title}</h3>
                    
                    <div className="product-rating">
                      <span className="stars">
                        {'★'.repeat(product.rating)}
                        {'☆'.repeat(5 - product.rating)}
                      </span>
                      <span className="reviews-text">{product.reviews}</span>
                    </div>
                    
                    <div className="product-price-row">
                      <div className="price-block">
                        <span className="current-price">₹{product.price}</span>
                        <span className="original-price">₹{product.originalPrice}</span>
                      </div>
                      
                      <button className="btn-add-cart" onClick={() => handleBuyClick(product)}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '4px'}}>
                          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                          <line x1="3" y1="6" x2="21" y2="6"></line>
                          <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Checkout Modal */}
      {isModalOpen && (
        <div className="store-modal-overlay">
          <div className="store-modal">
            <button className="store-modal-close" onClick={handleCloseModal}>&times;</button>
            
            {orderSuccess ? (
              <div className="store-modal-success">
                <div className="success-icon">✓</div>
                <h3>Order Placed Successfully!</h3>
                <p>Thank you for your purchase. Our team will contact you shortly to confirm the delivery details.</p>
                <button className="btn-primary" onClick={handleCloseModal}>Continue Shopping</button>
              </div>
            ) : (
              <div className="store-modal-content">
                <h3>Checkout</h3>
                
                {selectedProduct && (
                  <div className="checkout-summary">
                    <img src={selectedProduct.image} alt={selectedProduct.title} className="summary-img" />
                    <div className="summary-info">
                      <h4>{selectedProduct.title}</h4>
                      <p className="summary-price">₹{selectedProduct.price}</p>
                    </div>
                  </div>
                )}

                <form className="checkout-form" onSubmit={handlePlaceOrder}>
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" required placeholder="Enter your full name" />
                  </div>
                  
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" required placeholder="10-digit mobile number" />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" required placeholder="your@email.com" />
                  </div>

                  <div className="form-group">
                    <label>Complete Address</label>
                    <textarea required rows="3" placeholder="House/Flat No, Building, Street, Area"></textarea>
                  </div>

                  <div className="form-group">
                    <label>Pincode / ZIP</label>
                    <input type="text" required placeholder="6-digit pincode" />
                  </div>

                  <div className="modal-actions">
                    <button type="button" className="btn-secondary" onClick={handleCloseModal}>Cancel</button>
                    <button type="submit" className="btn-primary">Place Order</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

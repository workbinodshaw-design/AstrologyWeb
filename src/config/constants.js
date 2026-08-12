export const WHATSAPP_NUMBER = '919876543210'; // Configurable WhatsApp Number

export const openWhatsApp = () => {
  const message = encodeURIComponent("Hello Uttam Raj Astrology, I would like to know more about your consultation services.");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
};

export const SITE_STATS = [
  { value: '42,000+', label: 'Happy Customers' },
  { value: '25+', label: 'Years Experience' },
  { value: '500+', label: 'Consultations & Services' },
  { value: '120K+', label: 'Minutes of Consultation' }
];

export const CONTACT_INFO = {
  phone: '+91 12345 67890', // Placeholder
  email: 'info@uttamrajastrology.in', // Placeholder
  address: 'New Delhi, India', // Placeholder
  social: {
    fb: '#fb',
    ig: '#ig',
    yt: '#yt'
  }
};

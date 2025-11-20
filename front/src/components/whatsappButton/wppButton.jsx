import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/+5493493522047" // Reemplaza con tu número
      target="_blank"
      rel="noopener noreferrer"
      arial-label="Contactar por WhatsApp"
      style={{
        position: 'fixed',
        bottom: '50px',
        right: '20px',
        zIndex: 1000,
        backgroundColor: '#25d365c6',
        borderRadius: '50%',
        width: '55px',
        height: '55px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.36)',
      }}
    >
      <WhatsAppIcon style={{ color: 'white', fontSize: 40 }} alt="WhatsApp"/>
    </a>
  );
}
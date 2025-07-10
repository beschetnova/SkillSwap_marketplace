import { useNavigate } from 'react-router-dom';
import FooterUI from '../ui/footer/footer';

export const Footer = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate('/');
  };
  return <FooterUI handleLogoClick={handleLogoClick} />;
};

export default Footer;

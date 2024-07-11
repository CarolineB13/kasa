import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Banner() {
  // État pour déterminer si la page actuelle est la page "About"
  const [aboutPage, setAboutPage] = useState(false);

  // Récupère l'objet location de React Router
  const location = useLocation();

  // Utilise un effet pour vérifier la route actuelle et mettre à jour l'état aboutPage
  useEffect(() => {
    if (location.pathname === '/About') {
      setAboutPage(true);
    } else {
      setAboutPage(false); // Remet à false si ce n'est pas la page about
    }
  }, [location.pathname]); // Dépend de location.pathname pour réagir aux changements de route

  return (
    // Applique des classes dynamiques en fonction de l'état aboutPage
    <section className={`banner-common ${aboutPage ? 'banner_about' : 'banner'}`}>
      {/* Affiche le titre uniquement si ce n'est pas la page about */}
      {!aboutPage && <h2>Chez vous, partout et ailleurs</h2>}
    </section>
  );
}

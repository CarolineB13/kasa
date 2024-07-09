
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Banner() {

	const [aboutPage, setAboutPage] = useState(false);

	const location = useLocation();
	
	useEffect(() => {
        
		if(location.pathname === '/About'){
			setAboutPage(true)
        } else {
            setAboutPage(false); // Remet à false si ce n'est pas la page about
          }
        }, [location.pathname]); // Dépend de location.pathname pour réagir aux changements de route
      
	return (
		<section className={`banner-common ${aboutPage ? 'banner_about' : 'banner'}`}>
            {!aboutPage && <h2>Chez vous, partout et ailleurs</h2>}
        </section>
	);
}

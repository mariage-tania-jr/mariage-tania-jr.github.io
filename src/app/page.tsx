// src/app/page.tsx
import React from 'react';
import Image from 'next/image';

const Home = () => (
  <div className="container" style={{ textAlign: 'center' }}>
    <header className="navbar">
      <nav>
        <ul className="nav-links">
          <li><a href="#programme">Programme</a></li>
          <li><a href="#acces-parking">Accès et Parking</a></li>
          <li><a href="#musique">Musique</a></li>
          <li><a href="#cagnotte">Cagnotte</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section id="main-title" className="title-section">
        <div className="image-container">
          <Image 
            src="/title-img.png" 
            alt="Tatiana & Jean-Romain"
            width={800}
            height={400}
            priority
            className="title-image"
          />
        </div>
      </section>

      <section id="programme">
        <h2>Programme</h2>
        
        <div className="timeline-wrapper">
          <div className="timeline-vertical-line"></div>
          
          <div className="timeline-row">
            <div className="timeline-point">
              <div className="timeline-circle"></div>
            </div>
            <div className="timeline-card">
              <div className="timeline-time">15h00</div>
              <h3 className="timeline-card-title">Cérémonie Civile</h3>
              <p>Rendez-vous à la Mairie d&apos;Obernai</p>
              <p><em>Place du Marché, 67210 Obernai</em></p>
            </div>
          </div>
          
          <div className="timeline-row">
            <div className="timeline-point">
              <div className="timeline-circle"></div>
            </div>
            <div className="timeline-card">
              <div className="timeline-time">À suivre</div>
              <h3 className="timeline-card-title">Cérémonie Laïque</h3>
              <p>Une cérémonie intime dans le jardin</p>
              <p><em>11 Rempart Maréchal Joffre, Obernai</em></p>
            </div>
          </div>
          
          <div className="timeline-row">
            <div className="timeline-point">
              <div className="timeline-circle"></div>
            </div>
            <div className="timeline-card">
              <div className="timeline-time">Ensuite</div>
              <h3 className="timeline-card-title">Vin d&apos;Honneur</h3>
              <p>Cocktails et célébrations</p>
            </div>
          </div>
          
          <div className="timeline-row">
            <div className="timeline-point">
              <div className="timeline-circle"></div>
            </div>
            <div className="timeline-card">
              <div className="timeline-time">Pour finir</div>
              <h3 className="timeline-card-title">Apéritif Dînatoire</h3>
              <p>Repas, musique et festivités</p>
            </div>
          </div>
        </div>
      </section>

      <section id="acces-parking">
        <h2>Accès et Parking</h2>
        <p className="section-intro">La cérémonie et la réception auront lieu à Obernai, Alsace, France.</p>
        
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d2640.5246060672596!2d7.478273515731071!3d48.456519271371434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d48.4622979!2d7.4814933!4m3!3m2!1d48.4504608!2d7.482255399999999!5e0!3m2!1sfr!2sfr!4v1713783929736!5m2!1sfr!2sfr"
            width="100%" 
            height="400"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        
        <div className="venue-details">
          <div className="venue-card">
            <h3>Cérémonie</h3>
            <p>Mairie d&apos;Obernai</p>
            <p>Place du Marché, 67210 Obernai</p>
          </div>
          <div className="venue-card">
            <h3>Réception</h3>
            <p>Chez Tatiana & Jean-Romain</p>
            <p>11 Rempart Maréchal Joffre, 67210 Obernai</p>
          </div>
        </div>
        
        <div className="transport-options">
          <h3 className="transport-title">Comment vous y rendre</h3>
          
          <div className="transport-cards">
            <div className="transport-card">
              <div className="transport-icon">🚂</div>
              <h4>En Train</h4>
              <p>La gare d&apos;Obernai est à seulement 10 minutes à pied du centre-ville.</p>
              <p>Trains réguliers depuis Strasbourg (15-20 minutes de trajet).</p>
              <a href="https://www.sncf-connect.com/" target="_blank" rel="noopener noreferrer" className="transport-link">Horaires SNCF</a>
            </div>
            
            <div className="transport-card">
              <div className="transport-icon">🅿️</div>
              <h4>Parking de la Salle des Fêtes</h4>
              <p>Parking gratuit à proximité immédiate de la réception.</p>
              <p>Accès facile depuis la Route de Boersch.</p>
              <p><strong>Adresse GPS :</strong> Parking de la Salle des Fêtes, 67210 Obernai</p>
            </div>
            
            <div className="transport-card">
              <div className="transport-icon">🅿️</div>
              <h4>Parcus Parking Sainte-Odile</h4>
              <p>Parking payant au centre-ville, proche de la Mairie.</p>
              <p>Idéal pour la cérémonie civile.</p>
              <p><strong>Adresse :</strong> 2 Rempart Freppel, 67210 Obernai</p>
              <p><strong>Tarif :</strong> Environ 1,50€/heure</p>
            </div>
          </div>
        </div>
      </section>

      <section id="musique">
        <h2>Musique</h2>
        <div className="music-content">
          <p>Aidez-nous à créer l&apos;ambiance parfaite pour notre cocktail !</p>
          <p className="music-description">
            Nous souhaitons que chacun puisse contribuer à la playlist de notre mariage. 
            N&apos;hésitez pas à ajouter vos chansons préférées qui vous font danser, qui vous 
            touchent ou qui vous rappellent de bons souvenirs.
          </p>
          
          <div className="music-container">
            <div className="spotify-container">
              <iframe 
                src="https://open.spotify.com/embed/playlist/0vD8z3pgwmhU3wZYGcHq1X?utm_source=generator&theme=0" 
                width="100%" 
                height="380" 
                frameBorder="0" 
                allowFullScreen 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Playlist mariage Tatiana & Jean-Romain"
              ></iframe>
            </div>
            
            <div className="playlist-instructions">
              <h3>Comment ajouter des chansons :</h3>
              <ol>
                <li>Ouvrez la playlist sur Spotify en <a href="https://open.spotify.com/playlist/0vD8z3pgwmhU3wZYGcHq1X" target="_blank" rel="noopener noreferrer">cliquant ici</a></li>
                <li>Connectez-vous à votre compte Spotify</li>
                <li>Cliquez sur les trois points (...) et sélectionnez &quot;Ajouter à cette playlist&quot;</li>
                <li>Recherchez et ajoutez vos chansons préférées</li>
              </ol>
              <p className="music-note">Vos suggestions nous aideront à créer une ambiance inoubliable pour cette journée spéciale !</p>
            </div>
          </div>
        </div>
      </section>

      <section id="cagnotte">
        <h2>Cagnotte</h2>
        <div className="cagnotte-container">
          <div className="cagnotte-content">
            <h3 className="cagnotte-subtitle">Votre présence est notre plus beau cadeau</h3>
            
            <p className="cagnotte-message">
              Chers amis et famille, votre présence à notre mariage est tout ce dont nous avons besoin pour rendre cette journée spéciale.
            </p>
            
            <p className="cagnotte-message">
              Nous n&apos;attendons aucun cadeau, car célébrer ce moment avec vous est déjà le plus beau des présents. Cependant, si vous souhaitez participer à notre bonheur d&apos;une autre façon, nous avons créé une cagnotte qui nous aidera à réaliser nos projets à venir.
            </p>
            
            <div className="cagnotte-button-container">
              <a href="https://www.leetchi.com/" target="_blank" rel="noopener noreferrer" className="cagnotte-button">
                Accéder à la cagnotte
              </a>
            </div>
            
            <p className="cagnotte-note">
              Quel que soit votre choix, sachez que c&apos;est avant tout votre présence qui nous comblera de joie.
            </p>
          </div>
          
          <div className="cagnotte-image">
            <div className="gift-icon">🎁</div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Home;

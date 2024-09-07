import React from "react";

function LocationStore() {
  return (
    <div className="location-store-container">
      <div className="location-store-infos">
        <h2>Vous pouvez nous retrouver via :</h2>
        <div>Notre magasin en ligne dédié au jardinage</div>
        <div>Nos deux boutiques dans le 44, Guérande et Saint-Nazaire</div>
        <div>
          Pour nous contacter, vous pouvez utiliser le formulaire ci-dessous.
        </div>
        <form className="form-contact">
          <div className="form-contact-input">
            <label htmlFor="sender-name">Votre nom: </label>
            <input type="text" name="sender-name" />
          </div>
          <div className="form-contact-input">
            <label htmlFor="sender-email">Votre mail: </label>
            <input type="text" name="sender-email" />
          </div>
          <div className="form-contact-input">
            <label htmlFor="sender-email">Votre message: </label>
            <textarea name="textarea" />
          </div>
          <div className="button-valid-form">Envoyer le message</div>
        </form>
      </div>
      <div className="location-store-whereabout-container">
        <div className="location-store-whereabout">
          <div>
            <div>Adresse: ZAC de Savine, Rue des Aigrettes, 44570 Trignac</div>
            <div>Coordonnes: 0240903095 / www.heroseed.com/trignac</div>
            <div>Horaires:</div>
            <div className="days-container">
              <span className="days">Lundi</span>
              <span className="schedules">10h - 20h</span>
            </div>
            <div className="days-container">
              <span className="days">Mardi</span>
              <span className="schedules">10h - 20h</span>
            </div>
            <div className="days-container">
              <span className="days">Mercredi</span>
              <span className="schedules">9h - 12h</span>
            </div>
            <div className="days-container">
              <span className="days">Jeudi</span>
              <span className="schedules">10h - 20h</span>
            </div>
            <div className="days-container">
              <span className="days">Vendredi</span>
              <span className="schedules">12h - 22h</span>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1327.1410242374766!2d-2.2086391608544784!3d47.297087671930534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480565bd5e3071eb%3A0xf50d0350e1295448!2sJardiland!5e0!3m2!1sfr!2sfr!4v1725728870701!5m2!1sfr!2sfr"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="location-store-whereabout">
          <div>
            <div className="adress">
              Adresse: Rue de Brehany, 44350 Guérande
            </div>
            <div className="contact">
              Coordonnes: 0240112570 / www.heroseed.com/guerande
            </div>
            <div>Horaires:</div>
            <div className="days-container">
              <span className="days">Lundi</span>
              <span className="schedules">10h - 20h</span>
            </div>
            <div className="days-container">
              <span className="days">Mardi</span>
              <span className="schedules">10h - 20h</span>
            </div>
            <div className="days-container">
              <span className="days">Mercredi</span>
              <span className="schedules">9h - 12h</span>
            </div>
            <div className="days-container">
              <span className="days">Jeudi</span>
              <span className="schedules">10h - 20h</span>
            </div>
            <div className="days-container">
              <span className="days">Vendredi</span>
              <span className="schedules">12h - 22h</span>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d541.8514141438831!2d-2.4109805072941186!3d47.32221301162781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48055c7441b11089%3A0x8de2aa9d09673a38!2sJardiland!5e0!3m2!1sfr!2sfr!4v1725729344414!5m2!1sfr!2sfr"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default LocationStore;

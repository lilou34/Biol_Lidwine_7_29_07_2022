import React from "react";
import { NavLink } from "react-router-dom";

import image from "./perif_paris.jpg";
import Logo from "../../components/Logo";

const Signup = () => {
  /*const emailReg =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+[a-zA-Z0-9-]+)/;
  const passwordReg = /^[A-Za-z0-9]\w{8,}$/;
  function emailValidation(email, password) {
    if (!email.match(emailReg)) {
      alert("error : email must be valid !");
      return;
    } else if (!password.match(passwordReg)) {
      alert("error: password must be valid ! ");
      return;
    }
    signup();
  }

  const EmailErr = () => (
    <div className="error-password-div">
      This e-mail address is not available
    </div>
  );*/

  return (
    <div className="container-signup">
      <img
        src={image}
        alt="Périphérique Parisien tombé du jour"
        className="img-signup"
      />
      <div className="box-signup">
        <Logo className="logo" />

        <form id="form-signup" method="post" action="#">
          <h1>Création de Compte</h1>
          <p>Attention un seul compte par utilisateur / adresse</p>
          <div className="form-group">
            <label htmlFor="pseudo">Pseudo</label>
            <input
              className="pseudo form-control"
              type="text"
              placeholder="exemple: Pierrot34"
              required
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">Prénom *</label>
            <input
              className="firstName form-control"
              type="text"
              placeholder="exemple: Pierre"
              required
              autoFocus
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nom *</label>
            <input
              className="name form-control"
              type="text"
              placeholder="exemple: Dupont"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="poste">Poste dans l'entreprise *</label>
            <input
              className="poste form-control"
              type="text"
              placeholder="exemple: Secrétaire"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Adresse email *</label>
            <input
              className="name form-control"
              type="email"
              placeholder="exemple: dupont@gmail.com"
              required
            />
            <span className="infos">Doit comporter @ et . (.com ou .fr ....)</span>
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe *</label>
            <input
              className="password form-control"
              type="text"
              placeholder="exemple: Motdepasse01"
              required
            />
             <span className="infos">Minimum : 1 majuscule, 1 minuscule, 1 chiffre, 8 caractères</span>
          </div>
          <p>* Tous les champs sont obligatoires</p>
          <button className="btn" type="submit">
            <NavLink to="/Newsfeed" className="texte">
              Créer un compte
            </NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

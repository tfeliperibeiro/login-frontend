import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logged = localStorage.getItem('logged');

    if (logged === 'undefined') {
      navigate('/');
    }
  }, [navigate]);

  return (
    <section className="container-home">
      <h1 className="welcome">Olá</h1>
      <Link className="logOff" to={'/'}>
        Sair
      </Link>
    </section>
  );
};

export default Home;

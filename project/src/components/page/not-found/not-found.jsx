import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../ui/header/header';

function NotFound() {
  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main">
        <div className="page__404-container container">
          <section className="404-message">
            <h1>404. Page not found</h1>
            <Link to="/">Вернуться на главную</Link>
          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFound;

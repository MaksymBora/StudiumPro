import { Link } from 'react-router-dom';
import { HeroWrapper } from './Hero.styled';

export function Hero({ title = 'Page', crumbs = [] }) {
  return (
    <HeroWrapper className="page-header">
      <h1 className="text-center display-6 wow fadeInUp" data-wow-delay="0.1s">
        {title}
      </h1>

      <ol className="breadcrumb justify-content-center mb-0 wow fadeInUp" data-wow-delay="0.3s">
        {crumbs.map((c, idx) => {
          const isLast = idx === crumbs.length - 1;

          return (
            <li
              key={idx}
              className={`breadcrumb-item ${isLast ? 'active' : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {/* Последняя → просто текст */}
              {isLast ? (
                c.label
              ) : c.to ? (
                /* Для Home работает линк */
                <Link to={c.to}>{c.label}</Link>
              ) : (
                /* Pages → просто текст, не кликается */
                <span>{c.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </HeroWrapper>
  );
}

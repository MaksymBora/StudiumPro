import styled from 'styled-components';
import bgImage from '../../assets/img/carousel-1.jpg';

export const HeroWrapper = styled.div`
  position: relative;
  padding: 100px 0;

  width: 100vw;
  left: 50%;
  transform: translateX(-50%);

  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage});
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  max-width: 100vw;

  h1 {
    color: #fff !important;
  }

  .breadcrumb-item a {
    color: #f28b00; /* оранжевый */
    transition: color 0.2s ease-in-out;
  }

  .breadcrumb-item a:hover {
    color: rgb(193.6, 111.2, 0); /* чуть темнее */
    text-decoration: underline;
  }

  .breadcrumb-item.active {
    color: #fff !important; /* последняя белая */
  }

  .breadcrumb-item + .breadcrumb-item::before {
    color: #fff; /* разделитель "/" белый */
  }
`;

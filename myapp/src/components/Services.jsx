import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const Services = () => {
  const servicesData = [
    {
      title: "Carpenteria e Saldatura",
      link: "/servizi/carpenteria-saldatura",
      image: "https://i0.wp.com/www.chiarenzagroup.com/wp-content/uploads/2023/05/IMG_0124-scaled.jpg?resize=1280%2C1280&ssl=1",
    },
    {
      title: "Lavorazione Lamiere",
      link: "/servizi/lavorazione-lamiera",
      image: "https://i0.wp.com/www.chiarenzagroup.com/wp-content/uploads/2024/01/Taglio-laser.jpeg?resize=1280%2C1280&ssl=1",
    },
    {
      title: "Manutenzione Industriale",
      link: "/servizi/manutenzione-industriale",
      image: "https://i0.wp.com/www.chiarenzagroup.com/wp-content/uploads/2023/05/IMG_202105291229151.jpg?resize=768%2C1024&ssl=1",
    },
    {
      title: "Piping",
      link: "/servizi/piping",
      image: "https://i0.wp.com/www.chiarenzagroup.com/wp-content/uploads/2023/05/Montaggio-Piping.jpg?resize=1200%2C1280&ssl=1",
    },
    {
      title: "Impiantistica",
      link: "/servizi/impiantistica",
      image: "https://i0.wp.com/www.chiarenzagroup.com/wp-content/uploads/2023/05/IMG_6319-scaled.jpg?resize=1280%2C1280&ssl=1",
    },
    {
      title: "Montaggi",
      link: "/servizi/montaggi",
      image: "https://i0.wp.com/www.chiarenzagroup.com/wp-content/uploads/2023/05/IMG_202305241657207.jpg?resize=1280%2C1200&ssl=1",
    },
  ];

  return (
    <section className="services-section">

      <div className="services-headline-wrapper">
          <h2>I NOSTRI SERVIZI</h2>
          <p className="subheadline">
            Nexustech opera nel settore dell'impiantistica industriale e nasce dall'aspirazione di unire in un
            unico segno distintivo maestranze qualificate che con il loro saper fare si sono posizionate in un
            mercato competitivo che esige sempre più professionalità e servizio.
          </p>
        </div>

        <div className="services-grid-container">
          {servicesData.map((service, index) => (
            <Link
              to={service.link}
              className="service-grid-item"
              key={index}
            >

              <div
                className="overlay"
              ></div>

              <div
                className="background-img"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              <div className="content-wrapper">

                <div className="content-no-hover">
                  <h3>{service.title}</h3>
                </div>

                <div className="content-hover">
                  <h3>{service.title}</h3> 
                </div>
              </div>

              <FaChevronRight className="arrow-icon" />
            </Link>
          ))}
        </div>
    </section>
  );
};

export default Services;
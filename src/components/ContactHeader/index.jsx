import React from 'react';
import { Container } from './styles';

const ContactHeader = () => {
  return (
    <Container>
        <div className="header-contact-container">
          <span>
            CELULAR/WHATSAPP (19) 9xxxx-9xxx5
          </span>
          <span>
            Atendimento de Seg a Sex – 9h00 às 22h00 | Sáb – 8h00 às 14h00
          </span>
        </div>
    </Container>
  );
};

export default ContactHeader;

import React from 'react'

import WhatsLogo from '../../assets/icons8-whatsapp.svg'


import { Container, WhatsLogoImage } from './styles'

function WhatsappButton() {
  return (<Container href='https://api.whatsapp.com/send?phone=5519993807111&text=Ol%C3%A1.%20Quero%20conhecer%20a%20escola!' target='blank'>
    <WhatsLogoImage src={WhatsLogo} alt='icone whatsapp' />
  </Container>)
}

export default WhatsappButton
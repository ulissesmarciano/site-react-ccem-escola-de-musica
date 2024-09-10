import styled from "styled-components";
import { linkStyles } from "../../constants/linkStyles";

export const LinkContainer = styled.a`
    ${({variant}) => linkStyles[variant] || linkStyles.headerStyleLink}
    
`
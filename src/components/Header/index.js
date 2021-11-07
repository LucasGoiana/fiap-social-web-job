import { Container, IconSignOut } from "./styles";
import imgLogo from "../../assets/logo.png";
import imgProfile from "../../assets/profileStandard.png";
import {getUser} from "../../services/security";


function Header() {
    const user = getUser();
    return (
        <Container>
            <div>
                <img src={imgLogo} id="logo" />
                <img src={getUser().image} />
                <p>Fulano</p>
                <a href={'./new-image'}>Alterar Foto de Perfil</a>
            </div>
            <IconSignOut />
        </Container>
    )
}

export default Header;
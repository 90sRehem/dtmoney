import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTRansactionModal: () => void;
}

export function Header({ onOpenNewTRansactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTRansactionModal}>Nova transação</button>
            </Content>


        </Container>
    )
}
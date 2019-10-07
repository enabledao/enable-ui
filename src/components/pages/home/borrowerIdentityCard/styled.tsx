import styled from 'styled-components'

const IdentityBox = styled.div`
    background-color: #fff;
    padding: 24px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.15);
`

const ProfileSocialLink = styled.a`
    + a {
        padding-left: 24px;
    }
    img {
        filter: grayscale();
    }
`
export { ProfileSocialLink, IdentityBox }

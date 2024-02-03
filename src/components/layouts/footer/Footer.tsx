import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

import {
    ContactParty,
    FooterContainer,
    FooterCredit,
    FooterSocialMedia,
    JoinUsTitle,
    SocialMediaAnchor,
} from './Footer.styles';

function Footer() {
    return (
        <FooterContainer>
            <JoinUsTitle>צטרפו אלינו!</JoinUsTitle>
            <FooterSocialMedia>
                <SocialMediaAnchor
                    href='#'
                    target='_blank'
                    style={{ color: `#e1306c` }}
                    title='קישור לעמוד האינסטגרם'
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </SocialMediaAnchor>
                <SocialMediaAnchor
                    href='https://www.facebook.com/profile.php?id=61550713637214'
                    target='_blank'
                    style={{ color: `#4267b2` }}
                    title='קישור לעמוד הפייסבוק'
                >
                    <FontAwesomeIcon icon={faFacebookF} />
                </SocialMediaAnchor>
            </FooterSocialMedia>
            <ContactParty>
                צרו קשר:
                <br />
                050-3288879
            </ContactParty>
            <FooterCredit>Made by Guy Shalev</FooterCredit>
        </FooterContainer>
    );
}

export default Footer;

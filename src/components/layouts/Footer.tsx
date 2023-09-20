import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import {
    FooterContainer,
    FooterCredit,
    FooterSocialMedia,
    SocialMediaAnchor,
} from './styles/Footer.styles';

function Footer() {
    return (
        <FooterContainer>
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
                <SocialMediaAnchor
                    href='#'
                    target='_blank'
                    style={{ color: `#0072b1` }}
                    title='קישור לעמוד הלינקדאין'
                >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </SocialMediaAnchor>
            </FooterSocialMedia>
            <FooterCredit>Made by Guy Shalev</FooterCredit>
        </FooterContainer>
    );
}

export default Footer;

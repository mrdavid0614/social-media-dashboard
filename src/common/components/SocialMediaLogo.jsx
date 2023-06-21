import { SOCIAL_MEDIA_NAMES } from '../constants';

import facebookIcon from '../../assets/images/icon-facebook.svg';
import twitterIcon from '../../assets/images/icon-twitter.svg';
import instagramIcon from '../../assets/images/icon-instagram.svg';
import youtubeIcon from '../../assets/images/icon-youtube.svg';

export default function SocialMediaLogo({ socialMedia }) {

  const socialMediaLogos = {
    [SOCIAL_MEDIA_NAMES.Facebook]: facebookIcon,
    [SOCIAL_MEDIA_NAMES.Twitter]: twitterIcon,
    [SOCIAL_MEDIA_NAMES.Instagram]: instagramIcon,
    [SOCIAL_MEDIA_NAMES.Youtube]: youtubeIcon
  }

  const logo = socialMediaLogos[socialMedia];

  return logo && <img src={logo} alt={`${socialMedia} logo`} className="w-6 h-6" />;
}
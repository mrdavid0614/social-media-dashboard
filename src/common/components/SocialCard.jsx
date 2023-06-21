import SocialMediaLogo from './SocialMediaLogo';
import { SOCIAL_MEDIA_NAMES } from '../constants';
import SocialProgress from './SocialProgress';

export default function SocialCard({
    name,
    user,
    count,
    title,
    todayProgress
}) {
    let socialMediaBorderColors = {
        [SOCIAL_MEDIA_NAMES.Facebook]: 'bg-bleu-de-france',
        [SOCIAL_MEDIA_NAMES.Twitter]: 'bg-button-blue',
        [SOCIAL_MEDIA_NAMES.Instagram]: 'bg-gradient-to-r from-orange-yellow-crayola via-red-500 to-raspberry-pink',
        [SOCIAL_MEDIA_NAMES.Youtube]: 'bg-red-ncs',
    }

    return (
        <div className={`w-full rounded-md pt-1 ${socialMediaBorderColors[name] ?? '' }`} role="presentation">
            <article className={`p-8 w-full h-full top-1 rounded grid gap-8 place-content-center text-center bg-anti-flash-white dark:bg-yankees-blue`}>
                <p className="flex gap-3 text-dark-electric-blue dark:text-ceil font-semibold">
                    <SocialMediaLogo socialMedia={name} />
                    <span className="text-lg text-ellipsis overflow-hidden" title={user} >{user}</span>
                </p>
                <div className="flex flex-col gap-4">
                    <h4 className="text-6xl font-bold">{count}</h4>
                    <p className="tracking-[0.26rem] text-base uppercase text-dark-electric-blue dark:text-ceil">{title}</p>
                </div>
                <SocialProgress progress={todayProgress} suffix="Today" />
            </article>
        </div>
    );
}
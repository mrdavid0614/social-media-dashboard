import Heading from './Heading';
import SocialProgress from "./SocialProgress";
import SocialMediaLogo from './SocialMediaLogo';

export default function SocialOverviewCard ({ title, logo, number, progress }) {
    return (
        <article className="py-6 px-8 bg-anti-flash-white dark:bg-yankees-blue rounded-md grid gap-6">
            <div className="flex justify-between">
                <Heading variant="h2">{title}</Heading>
                <SocialMediaLogo socialMedia={logo} />
                
            </div>
            <div className="flex items-end justify-between">
                <h4 className="text-4xl font-bold">{number}</h4>
                <SocialProgress progress={progress} isPercentage />
            </div>
        </article>
    )
}
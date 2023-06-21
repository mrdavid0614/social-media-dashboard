import iconUp from '../../assets/images/icon-up.svg';
import iconDown from '../../assets/images/icon-down.svg';

export default function SocialProgress ({ progress, isPercentage, suffix }) {
    let progressTextColor = progress === 0 ? 'text-white' : progress > 0 ? 'text-lime-green' : 'text-bright-red';
    let progressText = `${Math.abs(progress)}`;

    if (isPercentage) progressText += "%";

    if (suffix) progressText += ` ${suffix}`;

    return (
        <p className={`flex items-center justify-center gap-2 ${progressTextColor} font-bold`}>
            <img src={progress > 0 ? iconUp : iconDown } className="w-[10px] h-[6px]" role="presentation" />
            <span className="text-sm">{progressText}</span>
        </p>
    );
}
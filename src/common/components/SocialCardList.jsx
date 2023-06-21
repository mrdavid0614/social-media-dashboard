import SocialCard from "./SocialCard";

export default function SocialCardList({ userSocialMedias }) {
    return (
        <section className="grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-7">
            {
                userSocialMedias.map((socialMedia) => (
                    <SocialCard
                        key={socialMedia.user + socialMedia.name + socialMedia.followers}
                        user={socialMedia.user}
                        count={socialMedia.followers}
                        title={socialMedia.followersLabel}
                        todayProgress={socialMedia.todayProgress}
                        name={socialMedia.name}
                    />
                ))
            }
        </section>
    )
}
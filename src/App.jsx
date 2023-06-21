import Heading from './common/components/Heading';
import SocialCardList from './common/components/SocialCardList';
import SocialOverviewCard from './common/components/SocialOverviewCard';
import Toggle from './common/components/Toggle';
import { SOCIAL_MEDIA_NAMES } from './common/constants';

function App() {
  const userSocialMedias = [
    {
      user: '@nathanf',
      followers: '1987',
      todayProgress: 12,
      followersLabel: 'Followers',
      name: 'Facebook',
    },
    {
      user: '@nathanf',
      followers: '1044',
      todayProgress: 99,
      followersLabel: 'Followers',
      name: 'Twitter',
    },
    {
      user: '@realnathanf',
      followers: '11k',
      todayProgress: 1099,
      followersLabel: 'Followers',
      name: 'Instagram',
    },
    {
      user: 'Nathan F.',
      followers: '8239',
      todayProgress: -144,
      followersLabel: 'Subscribers',
      name: 'Youtube',
    },
  ]

  return (
    <div className="m-8 my-10">
      <header className="flex md:justify-between max-md:flex-col">
        <section className="pb-5 mb-5 dark:max-md:border-b-yankees-blue max-md:border-b-2">
          <Heading variant="h1">Social Media Dashboard</Heading>
          <Heading variant="h2">Total Followers: 23,004</Heading>
        </section>

        <section className="mb-10 flex items-center justify-between gap-4">
          <Heading variant="h2">Dark Mode</Heading>
          <Toggle />
        </section>
      </header>

      <main className="grid gap-6">
        <section>
          <SocialCardList userSocialMedias={userSocialMedias} />
        </section>

        <section>
          <Heading variant="h1">Overview - Today</Heading>

          <section className="mt-6 grid grid-cols-4 max-lg:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6">
            <SocialOverviewCard
              title="Page views"
              logo={SOCIAL_MEDIA_NAMES.Facebook}
              number={87}
              progress={3}
            />

            <SocialOverviewCard
              title="Likes"
              logo={SOCIAL_MEDIA_NAMES.Facebook}
              number={52}
              progress={-2}
            />

            <SocialOverviewCard
              title="Likes"
              logo={SOCIAL_MEDIA_NAMES.Instagram}
              number={5462}
              progress={2257}
            />

            <SocialOverviewCard
              title="Profile Views"
              logo={SOCIAL_MEDIA_NAMES.Instagram}
              number="52k"
              progress={1375}
            />

            <SocialOverviewCard
              title="Retweets"
              logo={SOCIAL_MEDIA_NAMES.Twitter}
              number={117}
              progress={303}
            />

            <SocialOverviewCard
              title="Likes"
              logo={SOCIAL_MEDIA_NAMES.Twitter}
              number={507}
              progress={553}
            />

            <SocialOverviewCard
              title="Likes"
              logo={SOCIAL_MEDIA_NAMES.Youtube}
              number={107}
              progress={-19}
            />

            <SocialOverviewCard
              title="Total Views"
              logo={SOCIAL_MEDIA_NAMES.Youtube}
              number={1407}
              progress={-12}
            />
          </section>
        </section>
      </main>
    </div>
  )
}

export default App

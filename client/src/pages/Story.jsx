import ProgressIndicator from '../components/ProgressIndicator/ProgressIndicator'
import StoryHeader from '../components/StoryHeader/StoryHeader'
import DreamsWeBuild from '../sections/DreamsWeBuild'
import FuturePromises from '../sections/FuturePromises'
import HeartReveal from '../sections/HeartReveal'
import ILoveYouSequence from '../sections/ILoveYouSequence'
import LoveLetter from '../sections/LoveLetter'
import MemoryTimeline from '../sections/MemoryTimeline'
import PoetryBook from '../sections/PoetryBook'
import ProposalSection from '../sections/ProposalSection'
import ReasonsIStay from '../sections/ReasonsIStay'
import TheBeginning from '../sections/TheBeginning'
import WhyYouSection from '../sections/WhyYouSection'

export default function Story(){
  return (
    <div>
      <StoryHeader />
      <ProgressIndicator total={10} />
      <TheBeginning id="story" />
      <WhyYouSection id="why-you" />
      <PoetryBook id="poetry" />
      <MemoryTimeline id="memories" />
      <FuturePromises id="promises" />
      <ReasonsIStay id="reasons" />
      <DreamsWeBuild id="dreams" />
      <HeartReveal id="heart" />
      <ILoveYouSequence id="love" />
      <LoveLetter id="letter" />
      <ProposalSection id="proposal" />
    </div>
  )
}

import { useParams } from "react-router-dom";
import styles from './SkillPage.module.css';
import { useAppSelector } from "../../utils/hooks";
import { getUserById } from "../../services/slices/usersSlice";
import UserOfferProfileCardUI from "../../components/ui/UserOfferProfileCard/UserOfferProfileCard";
import UserOfferCardUI from "../../components/ui/UserOfferCard/UserOfferCard";
import SameOffers from "../../components/SameOffers/SameOffers";
import { selectAllSkills } from "../../services/slices/skillsSlice";
import testImage1 from '../../images/skills/drums/drum-1.jpg';
import testImage2 from '../../images/skills/drums/drum-2.jpg';
import testImage3 from '../../images/skills/drums/drum-3.jpg';
import testImage4 from '../../images/skills/drums/drum-4.jpg';
import testImage5 from '../../images/skills/drums/drum-1.jpg';
import { calculateAge, getYearsWord } from "../../utils/date/dateUtils";

const SkillPage = () => {

  const { userId } = useParams();

  if (!userId) return;

  const selectedUser = useAppSelector((state) => getUserById(state, Number(userId)));
  const skills = useAppSelector(selectAllSkills);

  if (!selectedUser) return;

  const items = [testImage1, testImage2, testImage3, testImage4, testImage5];

  const offerHandle = () => {
    console.log('Предложить обмен!');
  }

  const age = calculateAge(selectedUser.birthDate);
  const ageText = `${selectedUser.city}, ${age} ${getYearsWord(age)}`;

  return(
    <div className={styles.component}>
      <div className={styles.userInformation}>
        <UserOfferProfileCardUI
          user={selectedUser}
          categories={skills}
          ageText={ageText}
          bio={selectedUser.bio}
        />
        <UserOfferCardUI
          images={items}
          title='Игра на барабанах'
          category='Творчество и искусство / Музыка и звук'
          description='Привет! Я играю на барабанах уже больше 10 лет — от репетиций в гараже до выступлений на сцене с живыми группами. Научу основам техники (и как не отбить себе пальцы), играть любимые ритмы и разбирать песни, импровизировать и звучать уверенно даже без паритуры'
          onButtonClick={offerHandle}
        />
      </div>
      <div className={styles.sameOffers}>
        <h2>Похожие предложения</h2>
        <SameOffers user={selectedUser} />
      </div>
    </div>
  )
}

export default SkillPage;
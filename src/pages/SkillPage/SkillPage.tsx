import { useParams } from 'react-router-dom';
import styles from './SkillPage.module.css';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { getUserById } from '../../services/slices/usersSlice';
import UserOfferProfileCardUI from '../../components/ui/UserOfferProfileCard/UserOfferProfileCard';
import UserOfferCardUI from '../../components/ui/UserOfferCard/UserOfferCard';
import SameOffers from '../../components/SameOffers/SameOffers';
import { selectAllSkills } from '../../services/slices/skillsSlice';
import testImage1 from '../../images/skills/drums/drum-1.jpg';
import testImage5 from '../../images/skills/drums/drum-1.jpg';
import testImage2 from '../../images/skills/drums/drum-2.jpg';
import testImage3 from '../../images/skills/drums/drum-3.jpg';
import testImage4 from '../../images/skills/drums/drum-4.jpg';
import { calculateAge, getYearsWord } from '../../utils/date/dateUtils';
import { categoryAndSubcategoryTranslate } from '../../utils/skill-category/getSkillCategory';
import UserNotFound from '../../components/ui/UserNotFound/UserNotFound';
import { useState } from 'react';
import { Modal } from '../../components/modal/modal';
import { proposeExchange } from '../../services/slices/exchangeSlice';
import { selectProfileId } from '../../services/slices/profileSlice';

const SkillPage = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();

  const selectedUser = useAppSelector((state) =>
    userId ? getUserById(state, userId) : null
  );
  const skills = useAppSelector(selectAllSkills);
  const isProposed = useAppSelector((state) =>
    userId ? state.exchange.proposed[userId] : false
  );
  const fromUserId = useAppSelector(selectProfileId);

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  if (!userId) return null;
  if (!selectedUser) return <UserNotFound />;

  const items = [testImage1, testImage2, testImage3, testImage4, testImage5];

  const offerHandle = () => {
    if (!fromUserId || !userId) return;

    try {
      dispatch(
        proposeExchange({
          toUserId: userId,
          fromUserId
        })
      );
      setShowSuccessModal(true);
    } catch (err) {
      console.error(err);
    }
  };

  const age = calculateAge(selectedUser.birthDate);
  const ageText = `${selectedUser.city}, ${age} ${getYearsWord(age)}`;

  const { skill, description, categoryId, subcategory } =
    selectedUser.skillsToTeach[0];
  const { category: categoryLabel, subcategory: subcategoryLabel } =
    categoryAndSubcategoryTranslate(categoryId, subcategory, skills);

  return (
    <div className={styles.component}>
      <div className={styles.userInformation}>
        <UserOfferProfileCardUI
          user={selectedUser}
          categories={skills}
          ageText={ageText}
          bio={selectedUser.bio ?? ''}
        />
        <UserOfferCardUI
          userId={userId}
          images={items}
          title={skill}
          category={`${categoryLabel} / ${subcategoryLabel}`}
          description={description ?? ''}
          isProposed={isProposed}
          onButtonClick={offerHandle}
        />
      </div>

      <div className={styles.sameOffers}>
        <h2>Похожие предложения</h2>
        <SameOffers user={selectedUser} />
      </div>

      <Modal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        icon='/notification.svg'
        title='Вы предложили обмен'
        message='Теперь дождитесь подтверждения. Вам придёт уведомление'
      />
    </div>
  );
};

export default SkillPage;

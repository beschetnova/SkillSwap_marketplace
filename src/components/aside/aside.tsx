import { useCallback } from 'react';
import authorsData from '../../data/authors-data.json';
import baseData from '../../data/base-data.json';
import citiesData from '../../data/cities-data.json';
import FilterSection from './FilterSection/filter-section';
import Input from './Input/input';
import skillsData from '../../data/skills-data.json';
import SkillsItem from './SkillsItem/skills-item';
import styles from './aside.module.css';

type Filters = {
  bases: string[];
  setBases: React.Dispatch<React.SetStateAction<string[]>>;
  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>;
  autors: string[];
  setAuthors: React.Dispatch<React.SetStateAction<string[]>>;
  cities: string[];
  setCities: React.Dispatch<React.SetStateAction<string[]>>;
};

const Aside = ({ filters }: { filters: Filters }) => {

  const renderBases = useCallback(
    (base: string) => (
      <li key={base}>
        <Input
          type='radio'
          name='base'
          value={base}
          selected={filters.bases}
          onChange={filters.setBases}
        >
          {base}
        </Input>
      </li>
    ), [filters.bases, filters.setBases]
  );

  const renderSkills = useCallback(
    (skill: Skills) => (
      <li key={skill.title}>
        <SkillsItem
          skill={skill}
          selected={filters.skills}
          onChange={filters.setSkills}
        />
      </li>
    ), [filters.skills, filters.setSkills]
  );

  const renderAuthors = useCallback(
    (author: string) => (
      <li key={author}>
        <Input
          type='radio'
          name='author'
          value={author}
          selected={filters.autors}
          onChange={filters.setAuthors}
        >
          {author}
        </Input>
      </li>
    ), [filters.autors, filters.setAuthors]
  );

  const renderCities = useCallback(
    (city: string) => (
      <li key={city}>
        <Input
          type='checkbox'
          name='city'
          value={city}
          selected={filters.cities}
          onChange={filters.setCities}
        >
          {city}
        </Input>
      </li>
    ), [filters.cities, filters.setCities]
  );

  return (
    <aside
      className={styles.aside}
    >
      <h2
        className={styles.title}
      >
        Фильтры
      </h2>
      <FilterSection
        title=''
        list={baseData}
        renderItem={renderBases}
        extraStyle={styles.section}
      />
      <FilterSection
        title='Навыки'
        list={skillsData}
        renderItem={renderSkills}
        limit={5}
        buttonShow='Все навыки'
        buttonHide='Скрыть'
        extraStyle={styles.section}
      />
      <FilterSection
        title='Пол автора'
        list={authorsData}
        renderItem={renderAuthors}
        extraStyle={styles.section}
      />
      <FilterSection
        title='Город'
        list={citiesData}
        renderItem={renderCities}
        limit={5}
        buttonShow='Все города'
        buttonHide='Скрыть'
        extraStyle={styles.section}
      />
    </aside>
  );
}

export default Aside;
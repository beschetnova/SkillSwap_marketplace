import styles from './CreateForm.module.css';
import Input from '../input/input';
import Button from '../buttons/button';
import { CategorySelect } from '../Selects/CategorySelect/CategorySelect';
import { SubCategorySelect } from '../Selects/SubCategorySelect/SubCategorySelect';
import { useState } from 'react';
import Textarea from '../Textarea/Textarea';
import { ImageDropzone } from '../ImageDropzone/ImageDropzone';
import type { TSkillForm, TCreateFormProps } from './type';


export const CreateFormUI = ({ createSkill }: TCreateFormProps) => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');
  const [skillName, setSkillName] = useState('');
  const [skillDescription, setSkillDescription] = useState('');

  const [images, setImages] = useState<File[]>([]);

  const handleImageDrop = (newFiles: File[]) => {
    setImages((prev) => [...prev, ...newFiles]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (createSkill) {
      const skill: TSkillForm = {
        category,
        subcategory,
        skillName,
        skillDescription,
        images
      }
      createSkill(skill);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputList}>
        <Input
          id='titleInput'
          label='Название навыка'
          type='text'
          placeholder='Введите название вашего навыка'
          value={skillName}
          onChange={(e) => {setSkillName(e.target.value)}}
        ></Input>
        <CategorySelect
          category={category}
          setCategory={setCategory}
        ></CategorySelect>
        <SubCategorySelect
          subcategory={subcategory}
          setSubcategory={setSubcategory}
          category={category}
        ></SubCategorySelect>
        <Textarea
          id='descriptionInput'
          label='Описание'
          placeholder='Коротко опишите, чему можете научить'
          value={skillDescription}
          onChange={(e) => {setSkillDescription(e.target.value)}}
        ></Textarea>
        <ImageDropzone
          images={images}
          onDrop={handleImageDrop}
          onRemove={handleRemoveImage}
        />
      </div>
      <div className={styles.buttonList}>
        <Button type='primary' htmlType='submit' className={styles.button}>
          Создать
        </Button>
      </div>
    </form>
  );
};

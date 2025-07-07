import styles from './RegisterFormStepThree.module.css';
import Input from '../input/input';
import Button from '../buttons/button';
import { CategorySelect } from '../Selects/CategorySelect/CategorySelect';
import { SubCategorySelect } from '../Selects/SubCategorySelect/SubCategorySelect';
import { useState } from 'react';
import Textarea from '../Textarea/Textarea';
import { ImageDropzone } from '../ImageDropzone/ImageDropzone';
import type { RegisterFormType, StepThreeType } from '../../../utils/schemas/registrationSchemas';

type Props = {
  onNext: (data: StepThreeType) => void;
  onPrev: () => void;
  defaultValues: RegisterFormType;
};

export const RegisterFormStepThreeUI = ({ onNext, onPrev, defaultValues }: Props) => {
  const [category, setCategory] = useState('');
  const [subcategory, setSubcategory] = useState('');

  const [images, setImages] = useState<File[]>([]);

  const handleImageDrop = (newFiles: File[]) => {
    setImages((prev) => [...prev, ...newFiles]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Логика для валидации и отправки данных
    // onNext();
  };

  const handleBack = () => {
    onPrev();
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
        ></Textarea>
        <ImageDropzone
          images={images}
          onDrop={handleImageDrop}
          onRemove={handleRemoveImage}
        />
      </div>
      <div className={styles.buttonList}>
        <Button type='secondary' className={styles.button} onClick={handleBack}>
          Назад
        </Button>
        <Button type='primary' htmlType='submit' className={styles.button}>
          Продолжить
        </Button>
      </div>
    </form>
  );
};

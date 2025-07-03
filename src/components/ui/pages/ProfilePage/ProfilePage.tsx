import styles from './ProfilePage.module.css';
import Button from '../../buttons/button';
import Input from '../../input/input';
import DatePicker from '../../../DatePicker/DatePicker.tsx';
import Select from '../../Selects/Select/Select.tsx';
import { CitySelect } from '../../Selects/CitySelect/CitySelect.tsx';
import { useState } from 'react';

const ProfilePageUI = () => {
    const [gender, setGender] = useState('');
    const [city, setCity] = useState('');

    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <div className={styles.profile_sidebar}>
                    <div className={styles.sidebar_list}>
                        <div className={styles.sidebar_item}>
                            <img
                                src='src/images/icons/request.svg'
                                alt='request-icon'
                                className={styles.icon}
                            />
                            <span>Заявки</span>
                        </div>
                        <div className={styles.sidebar_item}>
                            <img
                                src='src/images/icons/message-text.svg'
                                alt='message-text-icon'
                                className={styles.icon}
                            />
                            <span>Мои обмены</span>
                        </div>
                        <div className={styles.sidebar_item}>
                            <img
                                src='src/images/icons/like2.svg'
                                alt='like-icon'
                                className={styles.icon}
                            />
                            <span>Избранное</span>
                        </div>
                        <div className={styles.sidebar_item}>
                            <img
                                src='src/images/icons/idea.svg'
                                alt='idea-icon'
                                className={styles.icon}
                            />
                            <span>Мои навыки</span>
                        </div>
                        <div className={styles.sidebar_item}>
                            <img
                                src='src/images/icons/user.svg'
                                alt='user-icon'
                                className={styles.icon}
                            />
                            <span>Личные данные</span>
                        </div>
                    </div>
                </div>
                <div className={styles.profile_info}>
                    <div className={styles.info_content}>
                        <div className={styles.info_inputs_wrapper}>
                            <div className={styles.email_wrapper}>
                                <Input
                                id='emailInput'
                                label='Почта'
                                type='email'
                                placeholder='Введите вашу почту'
                                required
                                rightIcon={
                                <img
                                    src='src/images/icons/edit.svg'
                                    alt='edit-icon'
                                    className={styles.icon}
                                />
                                }
                                ></Input>
                                <p className={styles.change_password_link}>Изменить пароль</p>
                            </div>
                            <Input
                            id='nameInput'
                            label='Имя'
                            type='text'
                            placeholder='Введите ваше имя'
                            required
                            rightIcon={
                                <img
                                    src='src/images/icons/edit.svg'
                                    alt='edit-icon'
                                    className={styles.icon}
                                />
                                }
                            ></Input>
                            <div className={styles.date_wrapper}>
                            <DatePicker />
                            <Select
                                id='genderInput'
                                label='Пол'
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                options={[
                                { value: '', label: 'Не указан' },
                                { value: 'male', label: 'Мужской' },
                                { value: 'female', label: 'Женский' },
                                { value: 'other', label: 'Другое' }
                                ]}
                                rightIcon={
                                <img
                                    src='src/images/icons/chevron-down.svg'
                                    alt='chevron-down'
                                    className={styles.arrow}
                                />
                                }
                            ></Select>
                            </div>
                            <CitySelect city={city} setCity={setCity}></CitySelect>
                            <div className={styles.description}>
                                <label>О себе</label>
                                <div className={styles.description_input_container}>
                                    <textarea
                                        id='description_input'
                                        placeholder='Расскажите о себе'
                                        required
                                        rows={4}
                                        className={styles.description_input}
                                    ></textarea>
                                    <span className={styles.right_icon}>
                                        <img 
                                        src='src/images/icons/edit.svg' 
                                        alt='edit-icon' />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <Button type='primary' htmlType='submit'>Сохранить</Button>
                    </div>


                    <div className={styles.info_photo_container}>
                        <img
                            src='src/images/skills/drums/drum-1.jpg'
                            alt='profile-photo'
                            className={styles.profile_photo}
                        />
                        <Button type='primary' className={styles.photo_edit_button}>
                            <img
                            src='src/images/icons/gallery-edit.svg'
                            alt='gallery-edit'
                            className={styles.icon}
                        />
                        </Button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProfilePageUI;